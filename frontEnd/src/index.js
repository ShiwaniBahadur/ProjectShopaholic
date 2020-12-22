import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import Error404Screen from './Screens/Error404Screen';
import { hideLoading, parseRequestUrl, showLoading } from './utils';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
import Header from './components/Header';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import DashboardScreen from './Screens/DashboardScreen';
import ProductListScreen from './Screens/ProductListScreen';
import ProductEditScreen from './Screens/ProductEditScreen';
import OrderListScreen from './Screens/OrderListScreen';

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
    '/cart/:id': CartScreen,
    '/cart': CartScreen,
    '/signin': SigninScreen,
    '/register': RegisterScreen,
    '/profile': ProfileScreen,
    '/shipping': ShippingScreen,
    '/payment': PaymentScreen,
    '/placeorder': PlaceOrderScreen,
    '/order/:id': OrderScreen,
    '/dashboard': DashboardScreen,
    '/productlist' : ProductListScreen,
    '/product/:id/edit': ProductEditScreen,
    '/orderlist': OrderListScreen,
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
    if(screen.after_render) await screen.after_render();
    hideLoading();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
