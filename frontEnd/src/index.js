import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import Error404Screen from './Screens/Error404Screen';
import { parseRequestUrl } from './utils';
import CartScreen from './Screens/CartScreen';

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
    '/cart/:id': CartScreen,
    '/cart': CartScreen,
};
const router = async () => { // used to define the url path when a product is opened
    const request = parseRequestUrl();
    const parseUrl = 
        (request.resource ? `/${request.resource}` : '/') + 
        (request.id ? '/:id' : '') + 
        (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    await screen.after_render();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
