class Product {
  constructor(
    id,
    categoryIds,
    title,
    brand,
    priceRange,
    imageUrl,
    price,
    specs,
    features,
    isFeatured,
    isBestSeller,
    inStock,
    hasWarranty,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.brand = brand;
    this.imageUrl = imageUrl;
    this.specs = specs;
    this.features = features;
    this.price = price;
    this.priceRange = priceRange;
    this.isFeatured = isFeatured;
    this.isBestSeller = isBestSeller;
    this.inStock = inStock;
    this.hasWarranty = hasWarranty;
  }
}

export default Product;
