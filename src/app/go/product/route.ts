'use server';

import { NextRequest, NextResponse } from 'next/server';

function buildProductUrl(): string | null {
  const raw = process.env.NEXT_PUBLIC_SHOPIFY_PRODUCT_URL?.trim().replace(/^@+/, '');
  const domainRaw = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN?.trim().replace(/^@+/, '');
  if (!raw) return null;
  try {
    const u = new URL(raw);
    return u.toString();
  } catch {}
  if (!domainRaw) return null;
  const domain = domainRaw.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const path = raw.startsWith('/') ? raw : raw.startsWith('products/') ? `/${raw}` : `/products/${raw}`;
  return `https://${domain}${path}`;
}

export async function GET(_req: NextRequest) {
  const url = buildProductUrl();
  if (!url) {
    return new NextResponse('Missing NEXT_PUBLIC_SHOPIFY_PRODUCT_URL', { status: 500 });
  }
  return NextResponse.redirect(url, 302);
}


