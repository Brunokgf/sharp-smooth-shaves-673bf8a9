import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, customerName, customerEmail, customerDocument, items } = await req.json();

    const publicKey = Deno.env.get('MEDUSA_PUBLIC_KEY');
    const secretKey = Deno.env.get('MEDUSA_SECRET_KEY');

    if (!publicKey || !secretKey) {
      throw new Error('Medusa API keys not configured');
    }

    // Create Basic Auth header
    const encoder = new TextEncoder();
    const credentials = encoder.encode(`${publicKey}:${secretKey}`);
    const base64Credentials = btoa(String.fromCharCode(...credentials));
    const auth = `Basic ${base64Credentials}`;

    // Convert amount to cents (Medusa expects amount in cents)
    const amountInCents = Math.round(amount * 100);

    const payload = {
      amount: amountInCents,
      paymentMethod: 'pix',
      customer: {
        name: customerName,
        email: customerEmail,
        document: {
          type: customerDocument.replace(/\D/g, '').length === 11 ? 'cpf' : 'cnpj',
          number: customerDocument.replace(/\D/g, ''),
        },
      },
      items: items.map((item: { name: string; quantity: number; price: number }) => ({
        title: item.name,
        quantity: item.quantity,
        unitPrice: Math.round(item.price * 100),
        tangible: true,
      })),
    };

    console.log('Creating PIX payment with Medusa:', JSON.stringify(payload, null, 2));

    const response = await fetch('https://api.ecossistemamedusa.com.br/v1/transactions', {
      method: 'POST',
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log('Medusa response:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error('Medusa API error:', data);
      throw new Error(data.message || 'Failed to create PIX payment');
    }

    return new Response(JSON.stringify({
      success: true,
      transactionId: data.id,
      pixCode: data.pix?.qrCode || data.qrCode,
      pixCopyPaste: data.pix?.copyPaste || data.copyPaste || data.pix?.qrCodeText,
      expiresAt: data.pix?.expiresAt || data.expiresAt,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating PIX:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
