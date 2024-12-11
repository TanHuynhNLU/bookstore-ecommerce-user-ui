import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import ProductDetail from '~/pages/ProductDetail';
import Products from '~/pages/Products';

export const routes = [
    { path: '/', component: Home },
    { path: '/products/genre/:genre', component: Products },
    { path: '/product-detail', component: ProductDetail },
    { path: '/contact', component: Contact },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout, layout: null },
];
