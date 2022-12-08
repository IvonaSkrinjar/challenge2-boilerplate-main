import BaseHttpService from './base-http.service'

const apiClient =  BaseHttpService();

 const getAll = async () => {
    return await apiClient.get(`products`);    
}

const getById = async (id:number) => {
    return await apiClient.get(`products/${id}`);    
}

const getProductsCategories = async () => {
    return await apiClient.get(`products/categories`);    
}

 export const productServices = {
    getAll,
    getById,
    getProductsCategories
}
export default productServices;