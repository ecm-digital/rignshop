export type ShopifyGraphQLError = { message: string; extensions?: Record<string, unknown> };

export async function shopifyFetch<T>(params: { query: string; variables?: Record<string, unknown> }) {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_TOKEN;
  const apiVersion = process.env.SHOPIFY_API_VERSION || '2024-04';

  if (!domain || !token) {
    throw new Error('Missing Shopify env: SHOPIFY_STORE_DOMAIN / SHOPIFY_STOREFRONT_TOKEN');
  }

  const res = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query: params.query, variables: params.variables || {} }),
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Shopify HTTP ${res.status}: ${text}`);
  }

  const json = (await res.json()) as { data?: T; errors?: ShopifyGraphQLError[] };
  if (json.errors?.length) {
    const first = json.errors[0];
    throw new Error(`Shopify GraphQL error: ${first.message}`);
  }
  return json.data as T;
}
