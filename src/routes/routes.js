import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import ProductDetail from '~/pages/ProductDetail';
import Products from '~/pages/Products';
import Profile from '~/pages/Profile';
import Register from '~/pages/Register';

export const routes = [
    { path: '/', component: Home },
    { path: '/products/genre/:genre', component: Products },
    { path: '/product-detail/:productId', component: ProductDetail },
    { path: '/contact', component: Contact },
    { path: '/cart', component: Cart },
    { path: '/account/login', component: Login },
    { path: '/account/register', component: Register },
    { path: '/account/profile', component: Profile },
    { path: '/checkout', component: Checkout, layout: null },
];
