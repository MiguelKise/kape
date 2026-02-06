/**
 * Image Randomization API
 * Provides utilities to randomize and manage product images
 */

// Pool of available coffee images
const coffeeImages = [
  'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1447933601403-0c6688bcb4c8?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop',
];

// Pool of available bakery images
const bakeryImages = [
  'https://images.unsplash.com/photo-1555939594-58d7cb561ae1?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1585080823868-d1e3dff0d966?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1566119114618-c71b4916b46d?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1599599810694-b3b7a8f4a5c5?w=400&h=400&fit=crop',
];

/**
 * Get a random image from a specified category pool
 * @param {string} category - 'coffee' or 'bakery'
 * @returns {string} Random image URL
 */
export const getRandomImage = (category = 'coffee') => {
  const pool = category === 'bakery' ? bakeryImages : coffeeImages;
  return pool[Math.floor(Math.random() * pool.length)];
};

/**
 * Randomize images for a list of products
 * @param {Array} products - Array of product objects
 * @returns {Array} Products with randomized image URLs
 */
export const randomizeProductImages = (products) => {
  return products.map((product) => ({
    ...product,
    image: getRandomImage(product.category),
  }));
};

/**
 * Get image pool for a specific category
 * @param {string} category - 'coffee' or 'bakery'
 * @returns {Array} Array of image URLs
 */
export const getImagePool = (category = 'coffee') => {
  return category === 'bakery' ? bakeryImages : coffeeImages;
};

/**
 * Randomize images for a single product by category
 * @param {Object} product - Product object
 * @returns {Object} Product with randomized image
 */
export const randomizeProductImage = (product) => ({
  ...product,
  image: getRandomImage(product.category),
});

/**
 * Refresh all images in products array
 * Generates a new random image for each product
 * @param {Array} products - Array of product objects
 * @returns {Array} Products with refreshed random images
 */
export const refreshAllImages = (products) => {
  return randomizeProductImages(products);
};
