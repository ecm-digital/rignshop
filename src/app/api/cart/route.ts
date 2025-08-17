'use server';

import { NextRequest, NextResponse } from 'next/server';
import { shopifyFetch } from '@/lib/shopify';

const CART_CREATE = /* GraphQL */ `
  mutation CreateCart($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart { id checkoutUrl }
      userErrors { field message }
    }
  }
`;

type CartCreateResponse = {
  cartCreate: {
    cart: { id: string; checkoutUrl: string } | null;
    userErrors: { field: string[] | null; message: string }[];
  };
};

export async function POST(req: NextRequest) {
  try {
    const { variantId, quantity } = (await req.json()) as { variantId?: string; quantity?: number };
    if (!variantId) {
      return NextResponse.json({ error: 'Missing variantId' }, { status: 400 });
    }

    const variables = {
      lines: [
        {
          merchandiseId: variantId,
          quantity: typeof quantity === 'number' && quantity > 0 ? quantity : 1,
        },
      ],
    };

    const data = await shopifyFetch<CartCreateResponse>({ query: CART_CREATE, variables });
    const error = data.cartCreate.userErrors?.[0];
    if (error) {
      return NextResponse.json({ error: error.message, field: error.field }, { status: 400 });
    }
    const checkoutUrl = data.cartCreate.cart?.checkoutUrl;
    if (!checkoutUrl) {
      return NextResponse.json({ error: 'No checkoutUrl returned' }, { status: 500 });
    }
    return NextResponse.json({ checkoutUrl });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    return new NextResponse(`Shopify error: ${message}`, { status: 500 });
  }
}


