import { getProduct } from '../api';
import { parseRequestUrl } from '../utils';

const ProductScreen = {
    render: async () => {
        const request = parseRequestUrl();
        const product = await getProduct(request.id);
        if (product.error) {
            return `<div>${product.error}</div>`;
          } 
        return `<div><h1>${product.name}</h1></div>`;
        },
};
export default ProductScreen;
