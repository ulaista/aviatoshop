import instanceApi from '../axiosConfig';

export async function getProductIdByProductName(productName) {
  try {
    const response = await instanceApi.get(`/products/search/?q=${encodeURIComponent(productName)}`);
    const product = response.data.find(p => p.title_en === productName);
    if (product) {
      return product.id;
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    throw error;
  }
}
