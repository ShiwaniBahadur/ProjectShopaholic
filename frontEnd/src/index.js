import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import Error404Screen from './Screens/Error404Screen';
import { hideLoading, parseRequestUrl, showLoading } from './utils';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
import Header from './components/Header';

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
    '/cart/:id': CartScreen,
    '/cart': CartScreen,
    '/signin': SigninScreen,
};
const router = async () => { // used to define the url path when a product is opened
    showLoading();
    const request = parseRequestUrl();
    const parseUrl = 
        (request.resource ? `/${request.resource}` : '/') + 
        (request.id ? '/:id' : '') + 
        (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const header = document.getElementById('header-container');
    header.innerHTML = await Header.render();
    await Header.after_render(); 
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    await screen.after_render();
    hideLoading();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
