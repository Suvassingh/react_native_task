import { PRODUCTS } from "./dummy-data";

function buildLargeProducts() {
  return Array.from({ length: 500 }, (_, batch) =>
    PRODUCTS.map((pro) => {
      const title = `${pro.title} #${batch + 1}`;
      return {
        id: `${pro.id}-${batch}`,
        categoryIds: pro.categoryIds,
        title,
        brand: pro.brand,
        priceRange: pro.priceRange,
        imageUrl: pro.imageUrl,
        price: pro.price,
        specs: pro.specs,
        features: pro.features,
        isFeatured: pro.isFeatured,
        isBestSeller: pro.isBestSeller,
        inStock: pro.inStock,
        hasWarranty: pro.hasWarranty,
        _search: `${title} ${pro.brand}`.toLowerCase(),
      };
    }),
  ).flat();
}

let _cache = null;
export function getLargeProducts() {
  if (!_cache) _cache = buildLargeProducts();
  return _cache;
}

export const SEARCH_PRODUCTS = PRODUCTS;
