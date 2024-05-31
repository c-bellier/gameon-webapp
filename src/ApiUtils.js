const baseUrl = 'http://127.0.0.1:5000/api';



//////////////////////////
// PRODUCTS API METHODS //
//////////////////////////

/**
 * Fetches all products from the API
 * @returns {Promise<Array>} All products
 */
const getAllProducts = async () => {
  try {
    const response = await fetch(`${baseUrl}/products/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

/**
 * Fetches a product by its reference
 * @param {string} reference The reference of the product
 * @returns {Promise<Object>} The product
 */
const getProductByReference = async (reference) => {
  try {
    const response = await fetch(`${baseUrl}/products/reference/${reference}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

/**
 * Fetches all products from a category
 * @param {string} category The category of the products
 * @returns {Promise<Array>} All products from the category
 */
const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${baseUrl}/products/category/${category}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

/**
 * Adds a product to the API
 * @param {object} product The product to add
 * @returns {Promise<Object>} The response from the API
 */
const createProduct = async (product) => {
  try {
    const response = await fetch(`${baseUrl}/products/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(product)
    });
    return await response.json();
    
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
}

/**
 * Updates a product in the API
 * @param {object} product The product to update
 * @returns {Promise<Object>} The response from the API
 */
const updateProduct = async (product) => {
  try {
    const response = await fetch(`${baseUrl}/products/${product._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(product)
    });
    return await response.json();
  } catch (error) {
    console.error('Error updating product:', error);
    return null;
  }
}

/**
 * Deletes a product from the API
 * @param {string} id The id of the product to delete
 * @returns {Promise<Object>} The response from the API
 */
const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error deleting product:', error);
    return null;
  }
}

//////////////////////////
// RECEIPTS API METHODS //
//////////////////////////

/**
 * Fetches all receipts from the API
 * @returns {Promise<Array>} All receipts
 */
const getAllReceipts = async () => {
    try {
        const response = await fetch(`${baseUrl}/receipts/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching receipts:', error);
        return [];
    }
}

/**
 * Fetches a receipt by its reference
 * @param {string} reference The reference of the receipt
 * @returns {Promise<Object>} The receipt
 */
const getReceiptByReference = async (reference) => {
    try {
        const response = await fetch(`${baseUrl}/receipts/reference/${reference}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching receipt:', error);
        return null;
    }
}

/**
 * Adds a receipt to the API
 * @param {object} receipt The receipt to add
 * @returns {Promise<Object>} The response from the API
 */
const createReceipt = async (receipt) => {
    try {
        console.log('Receipt:', receipt);
        const response = await fetch(`${baseUrl}/receipts/`, {
            method: 'POST',
            body: JSON.stringify(receipt),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return await response.json();
        
    } catch (error) {
        console.error('Error creating receipt:', error);
        return null;
    }
}

/**
 * Updates a receipt in the API
 * @param {object} receipt The receipt to update
 * @returns {Promise<Object>} The response from the API
 */
const updateReceipt = async (receipt) => {
    try {
        const response = await fetch(`${baseUrl}/receipts/${receipt._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(receipt)
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating receipt:', error);
        return null;
    }
}

/**
 * Deletes a receipt from the API
 * @param {string} id The id of the receipt to delete
 * @returns {Promise<Object>} The response from the API
 */
const deleteReceipt = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/receipts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Error deleting receipt:', error);
        return null;
    }
}

export {
  getAllProducts,
  getProductByReference,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllReceipts,
  getReceiptByReference,
  createReceipt,
  updateReceipt,
  deleteReceipt
};