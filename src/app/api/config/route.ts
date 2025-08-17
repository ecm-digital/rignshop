'use server';

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const raw = process.env.NEXT_PUBLIC_SHOPIFY_PRODUCT_URL?.trim();
    const domainRaw = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN?.trim();

    const buildUrl = (candidate?: string | null, storeDomain?: string | null) => {
      if (!candidate) return null;
      try {
        const u = new URL(candidate);
        return u.toString();
      } catch {}
      if (!storeDomain) return null;
      const domain = storeDomain.replace(/^https?:\/\//, '').replace(/\/$/, '');
      const path = candidate.startsWith('/')
        ? candidate
        : candidate.startsWith('products/')
          ? `/${candidate}`
          : `/products/${candidate}`;
      return `https://${domain}${path}`;
    };

    const ctaUrl = buildUrl(raw || null, domainRaw || null);
    return NextResponse.json({ ctaUrl });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    return new NextResponse(`Config error: ${message}`, { status: 500 });
  }
}


