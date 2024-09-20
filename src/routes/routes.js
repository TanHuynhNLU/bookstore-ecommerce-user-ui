import Home from '~/pages/Home';
import ProductDetail from '~/pages/ProductDetail';
import Products from '~/pages/Products';

export const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/product-detail', component: ProductDetail },
];
