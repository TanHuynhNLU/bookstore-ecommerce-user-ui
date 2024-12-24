import {
    ArrowRightCircleIcon,
    ChevronRightIcon,
    MinusIcon,
    PlusIcon,
    ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-rotate.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgRotate from 'lightgallery/plugins/rotate';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';

import BookImage from '~/assets/imgs/nha-gia-kim.jpg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import * as productService from '~/services/ProductService';
import * as utils from '~/utils/utils';
import { CartContext } from '~/context/CartContext';
import { toast } from 'react-toastify';

function ProductDetail() {
    const navigate = useNavigate();
    let { productId } = useParams();
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    const urlMapping = {
        'Kỹ Năng Sống': 'ky-nang-song',
        'Kinh Tế': 'kinh-te',
        'Kinh Điển': 'kinh-dien',
        'Tiểu Thuyết': 'tieu-thuyet',
        Manga: 'manga',
    };

    const handleIncreaseQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
        toast.success('Thêm vào giỏ hàng thành công', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    const handleCheckout = () => {
        addToCart({ ...product, quantity });
        navigate('/checkout');
    };

    // Fetching product by id from API
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await productService.getBook(productId);
            setProduct(res.data);
        };
        fetchAPI();
    }, [productId]);

    // Fetching products of the same genre from the API
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await productService.getBooksByFilter({ genres: [product.genre] });
            const productsTransformed = res.items.filter((book) => book.id !== Number(productId));
            setProducts(productsTransformed);
        };
        if (product.id) fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product]);

    return (
        <div>
            <div className="flex items-center justify-center bg-banner">
                <div className="w-full max-w-7xl px-2 py-3">
                    <ul className="flex">
                        <Link to="/" className="hover:text-[--main-color]">
                            <span>Trang chủ</span>
                        </Link>
                        <Link to="/products/genre/tat-ca" className="ml-1 hover:text-[--main-color]">
                            <ChevronRightIcon className="inline-block h-4 w-4" />
                            <span className="ml-1">Sản phẩm</span>
                        </Link>
                        <Link
                            to={`/products/genre/${urlMapping[product.genre]}`}
                            className="ml-1 hover:text-[--main-color]"
                        >
                            <ChevronRightIcon className="inline-block h-4 w-4" />
                            <span className="ml-1">{product.genre}</span>
                        </Link>
                        <li className="ml-1 text-[--main-color]">
                            <ChevronRightIcon className="inline-block h-4 w-4" />
                            <span className="ml-1 font-bold">{product.name}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="my-[30px] flex w-full max-w-7xl flex-col lg:flex-row">
                    <div className="w-full px-2 lg:w-2/5">
                        <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-md border border-solid border-gray-200">
                            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgRotate, lgFullscreen, lgShare]}>
                                <a href={product.image}>
                                    <img alt={product.name} src={product.image || BookImage} />
                                </a>
                            </LightGallery>
                        </div>
                    </div>
                    <div className="w-full px-2 lg:w-2/5">
                        <h1 className="mb-3 text-[30px] font-bold">{product.name}</h1>
                        <div>
                            <span>Tác giả: </span> <span className="font-semibold">{product.author}</span>
                        </div>
                        <div>
                            <span>Thể loại: </span> <span className="font-semibold">{product.genre}</span>
                        </div>
                        <span className="my-5 block text-3xl font-bold text-[--main-color]">
                            {utils.formatNumber(product.price)}đ
                        </span>
                        <div className="border-b border-solid border-gray-200"></div>
                        <div className="mt-6 flex items-center">
                            <div className="flex h-[32px] w-[100px] rounded-md border border-solid border-x-gray-200">
                                <button
                                    className="flex h-[32px] w-[30px] items-center justify-center"
                                    onClick={handleDecreaseQuantity}
                                >
                                    <MinusIcon className="h-6 w-6" />
                                </button>
                                <input
                                    className="h-full w-[40px] text-center outline-none"
                                    type="text"
                                    value={quantity}
                                />
                                <button
                                    className="flex h-[32px] w-[30px] items-center justify-center"
                                    onClick={handleIncreaseQuantity}
                                >
                                    <PlusIcon className="h-6 w-6" />
                                </button>
                            </div>
                            <span className="ml-3 text-slate-400">
                                Còn lại {utils.formatNumber(product.stock)} trong kho
                            </span>
                        </div>
                        <div className="mt-3 flex flex-col md:flex-row">
                            <button
                                onClick={handleAddToCart}
                                className="flex h-[65px] w-full items-center justify-center rounded-md border border-solid border-[--main-color] px-3 py-[6px] text-xl font-bold text-[--main-color] hover:bg-[--main-color] hover:text-white md:w-[224px]"
                            >
                                Thêm vào giỏ hàng
                            </button>
                            <button
                                onClick={() => handleCheckout()}
                                className="mt-3 flex h-[65px] w-full items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] px-3 py-[6px] text-xl font-bold text-white hover:bg-white hover:text-[--main-color] md:ml-3 md:mt-0 md:w-[224px]"
                            >
                                Mua ngay
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mb-[30px] flex w-full max-w-7xl flex-col-reverse lg:flex-row">
                    <div className="w-full px-2 lg:w-8/12">
                        <h4 className="mb-5 mt-[30px] text-xl font-bold text-[--main-color] lg:mt-0">
                            Giới thiệu sách
                        </h4>
                        <p className="whitespace-pre-line">{product.description}</p>
                    </div>
                    <div className="w-full px-2 lg:w-4/12">
                        <h4 className="mb-5 text-xl font-bold text-[--main-color]">Thông tin chi tiết</h4>
                        <ul className="list-disc rounded-md border border-solid border-gray-200 p-4">
                            <li className="mb-3 flex pl-3 last:mb-0">
                                <span className="w-1/2">Tác giả</span>
                                <span className="w-1/2 font-bold">{product.author}</span>
                            </li>
                            <li className="mb-3 flex pl-3 last:mb-0">
                                <span className="w-1/2">Thể loại</span>
                                <span className="w-1/2 font-bold">{product.genre}</span>
                            </li>
                            <li className="mb-3 flex pl-3 last:mb-0">
                                <span className="w-1/2">Nhà xuất bản</span>
                                <span className="w-1/2 font-bold">{product.publisher}</span>
                            </li>
                            <li className="mb-3 flex pl-3 last:mb-0">
                                <span className="w-1/2">Số trang</span>
                                <span className="w-1/2 font-bold">{product.numberOfPage}</span>
                            </li>
                            <li className="mb-3 flex pl-3 last:mb-0">
                                <span className="w-1/2">Năm phát hành</span>
                                <span className="w-1/2 font-bold">{product.published}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mb-[30px] w-full max-w-7xl px-2">
                    <div className="mb-6 flex items-center justify-between border-t-2 border-solid border-[--main-color] pt-3 ">
                        <h2 className="text-xl font-bold text-[--main-color] md:text-2xl">
                            <Link to="/products/genre/tat-ca">Có thể bạn cũng thích</Link>
                        </h2>
                        <Link
                            to="/products/genre/tat-ca"
                            className="hidden font-bold text-[--main-color] md:inline-block"
                        >
                            Xem thêm <ArrowRightCircleIcon className="inline-block h-8 w-8" />
                        </Link>
                    </div>
                    <Swiper slidesPerView={'auto'} navigation={true} modules={[Navigation]} className="mySwiper">
                        {products.map((book) => (
                            <SwiperSlide className="w-item-prod-home-ssm sm:w-item-prod-home-sm lg:w-[252px!important]">
                                <div className="inline-flex flex-col items-center">
                                    <Link
                                        to={`/product-detail/${book.id}`}
                                        className="group/product-image relative inline-block overflow-hidden"
                                    >
                                        <img
                                            src={book.image || BookImage}
                                            alt={book.name}
                                            className="inline-block w-full"
                                        />
                                        <div className="absolute bottom-[-100%] hidden w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0 md:flex">
                                            <button className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[#f5f5f5] text-[--main-color] hover:bg-[--main-color] hover:text-white">
                                                <ShoppingCartIcon className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleCheckout(book)}
                                                className="ml-1 flex h-12 w-full flex-1 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]"
                                            >
                                                Mua ngay
                                            </button>
                                        </div>
                                    </Link>
                                    <div className="flex max-w-[160px] flex-col p-2">
                                        <Link to={`/product-detail/${book.id}`} className="inline-block">
                                            <h3 className="line-clamp-2 text-center font-bold uppercase">
                                                {book.name}
                                            </h3>
                                        </Link>
                                        <span className="text-center font-bold text-[--main-color]">
                                            {utils.formatNumber(book.price)}đ
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
