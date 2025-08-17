'use server';

import { NextResponse } from 'next/server';
import { shopifyFetch } from '@/lib/shopify';

const QUERY = /* GraphQL */ `
  query FirstProduct {
    products(first: 1) {
      edges {
        node {
          id
          handle
          title
          description
          variants(first: 1) { edges { node { id price { amount currencyCode } } } }
          featuredImage { url altText }
        }
      }
    }
  }
`;

type Price = { amount: string; currencyCode: string };
type VariantNode = { id: string; price: Price };
type ProductNode = {
  id: string;
  handle: string;
  title: string;
  description: string;
  variants: { edges: { node: VariantNode }[] };
  featuredImage?: { url: string; altText?: string | null } | null;
};

type ProductsQuery = { products: { edges: { node: ProductNode }[] } };

export async function GET() {
  try {
    const data = await shopifyFetch<ProductsQuery>({ query: QUERY });
    const node = data.products.edges?.[0]?.node;
    if (!node) return NextResponse.json({ product: null });

    const variant = node.variants?.edges?.[0]?.node;
    const domain = process.env.SHOPIFY_STORE_DOMAIN;
    const productUrl = domain ? `https://${domain}/products/${node.handle}` : null;
    return NextResponse.json({
      product: {
        id: node.id,
        handle: node.handle,
        title: node.title,
        description: node.description,
        price: variant?.price?.amount ?? null,
        currency: variant?.price?.currencyCode ?? null,
        image: node.featuredImage?.url ?? null,
        variantId: variant?.id ?? null,
        productUrl,
      }
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    return new NextResponse(`Shopify error: ${message}`, { status: 500 });
  }
}
