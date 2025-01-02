import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { ArrowRightCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

import Banner1 from '~/assets/imgs/banner1.jpg';
import Banner2 from '~/assets/imgs/banner2.jpg';
import Banner3 from '~/assets/imgs/banner3.jpg';
import Banner4 from '~/assets/imgs/banner4.jpg';
import * as productService from '~/services/ProductService';
import * as utils from '~/utils/utils';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '~/context/CartContext';
import { toast } from 'react-toastify';

function Home() {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const [bestSellers, setBestSellers] = useState([]);
    const [newBooks, setNewBooks] = useState([]);

    const handleAddToCart = (product) => {
        addToCart({ ...product, quantity: 1 });
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

    const handleCheckout = (product) => {
        addToCart({ ...product, quantity: 1 });
        navigate('/checkout');
    };

    // Fetching best sellers and new books from API
    useEffect(() => {
        const fetchAPI = async () => {
            const bestSellersAPI = await productService.getBooksPagAndSort({ page: 0, size: 10, sort: '-sales' });
            const newBooksAPI = await productService.getBooksPagAndSort({ page: 0, size: 10, sort: '-id' });
            setBestSellers(bestSellersAPI.items);
            setNewBooks(newBooksAPI.items);
        };
        fetchAPI();
    }, []);
    return (
        <div className="z-1 w-full">
            <section className="flex justify-center bg-banner py-8">
                <div className="flex w-full max-w-7xl flex-col xl:flex-row">
                    <div className="w-full px-2 xl:w-8/12">
                        <Swiper
                            className="mySwiper"
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                        >
                            <SwiperSlide>
                                <div className="flex flex-col overflow-hidden rounded-md bg-white shadow-sm">
                                    <img className="inline-block w-full" src={Banner1} alt="banner" />
                                    <div className="px-4 py-3">
                                        <h3 className="mb-2 text-xl font-semibold text-[--main-color]">
                                            Toạ đàm: Lối vào thế giới văn chương của Italo Calvino
                                        </h3>
                                        <span className="text-slate-500">Thứ Tư, 21/08/2024</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col overflow-hidden rounded-md bg-white shadow-sm">
                                    <img className="inline-block w-full" src={Banner2} alt="banner" />
                                    <div className="px-4 py-3">
                                        <h3 className="mb-2 text-xl font-semibold text-[--main-color]">
                                            SÁCH MỚI NỔI BẬT THÁNG 8
                                        </h3>
                                        <span className="text-slate-500">Thứ Tư, 21/08/2024</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col overflow-hidden rounded-md bg-white shadow-sm">
                                    <img className="inline-block w-full" src={Banner3} alt="banner" />
                                    <div className="px-4 py-3">
                                        <h3 className="mb-2 text-xl font-semibold text-[--main-color]">
                                            Toạ đàm: Ngủ ngon mỗi đêm, sống khoẻ mỗi ngày cùng ThS.BS CK2 Phạm Quỳnh Nga
                                        </h3>
                                        <span className="text-slate-500">Thứ Ba, 20/08/2024</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="w-full px-2 xl:w-4/12">
                        <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-col">
                            <div className="w-full border-solid border-[#bbbbbf] py-2 md:w-1/2 md:border-b md:px-2 md:py-6 xl:w-full xl:px-0 xl:first:pt-0 xl:last:pb-0">
                                <div className="flex w-full overflow-hidden rounded-md bg-white shadow-sm">
                                    <img
                                        className="inline-block h-[65px] w-[102px] object-cover min-[400px]:h-[125px] min-[400px]:w-[196px]"
                                        src={Banner4}
                                        alt="banner"
                                    />
                                    <div className="p-3">
                                        <h3 className="mb-2 line-clamp-3 text-sm font-semibold">
                                            KHÔNG CẦN PHẢI LÀ NHÀ KINH TẾ HỌC MỚI ĐỌC ĐƯỢC ECONOMIX
                                        </h3>
                                        <span className="text-slate-500">Thứ Ba, 20/08/2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full border-solid border-[#bbbbbf] py-2 md:w-1/2 md:border-b md:px-2 md:py-6 xl:w-full xl:px-0 xl:first:pt-0 xl:last:pb-0">
                                <div className="flex w-full overflow-hidden rounded-md bg-white shadow-sm">
                                    <img
                                        className="inline-block h-[65px] w-[102px] object-cover min-[400px]:h-[125px] min-[400px]:w-[196px]"
                                        src={Banner4}
                                        alt="banner"
                                    />
                                    <div className="p-3">
                                        <h3 className="mb-2 line-clamp-3 text-sm font-semibold">
                                            KHÔNG CẦN PHẢI LÀ NHÀ KINH TẾ HỌC MỚI ĐỌC ĐƯỢC ECONOMIX
                                        </h3>
                                        <span className="text-slate-500">Thứ Ba, 20/08/2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full border-solid border-[#bbbbbf] py-2 md:w-1/2 md:border-b md:border-none md:px-2 md:py-6 xl:w-full xl:px-0 xl:first:pt-0 xl:last:pb-0">
                                <div className="flex w-full overflow-hidden rounded-md bg-white shadow-sm">
                                    <img
                                        className="inline-block h-[65px] w-[102px] object-cover min-[400px]:h-[125px] min-[400px]:w-[196px]"
                                        src={Banner4}
                                        alt="banner"
                                    />
                                    <div className="p-3">
                                        <h3 className="mb-2 line-clamp-3 text-sm font-semibold">
                                            KHÔNG CẦN PHẢI LÀ NHÀ KINH TẾ HỌC MỚI ĐỌC ĐƯỢC ECONOMIX
                                        </h3>
                                        <span className="text-slate-500">Thứ Ba, 20/08/2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full border-solid border-[#bbbbbf] py-2 md:w-1/2 md:border-b md:border-none md:px-2 md:py-6 xl:w-full xl:px-0 xl:first:pt-0 xl:last:pb-0">
                                <div className="flex w-full overflow-hidden rounded-md bg-white shadow-sm">
                                    <img
                                        className="inline-block h-[65px] w-[102px] object-cover min-[400px]:h-[125px] min-[400px]:w-[196px]"
                                        src={Banner4}
                                        alt="banner"
                                    />
                                    <div className="p-3">
                                        <h3 className="mb-2 line-clamp-3 text-sm font-semibold">
                                            KHÔNG CẦN PHẢI LÀ NHÀ KINH TẾ HỌC MỚI ĐỌC ĐƯỢC ECONOMIX
                                        </h3>
                                        <span className="text-slate-500">Thứ Ba, 20/08/2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center py-6">
                <div className="w-full max-w-7xl px-2">
                    <div className="mb-6 flex items-center justify-between border-t-2 border-solid border-[--main-color] pt-3 ">
                        <h2 className="text-xl font-bold text-[--main-color] md:text-2xl">
                            <Link to="/products/genre/tat-ca">Bán chạy</Link>
                        </h2>
                        <Link
                            to="/products/genre/tat-ca"
                            className="hidden font-bold text-[--main-color] md:inline-block"
                        >
                            Xem thêm <ArrowRightCircleIcon className="inline-block h-8 w-8" />
                        </Link>
                    </div>
                    <Swiper slidesPerView={'auto'} navigation={true} modules={[Navigation]} className="mySwiper">
                        {bestSellers.length !== 0 &&
                            bestSellers.map((book, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="w-item-prod-home-ssm sm:w-item-prod-home-sm lg:w-[252px!important]"
                                >
                                    <div className="z-[1] inline-flex flex-col items-center">
                                        <div className="group/product-image relative inline-block overflow-hidden">
                                            <Link to={`/product-detail/${book.id}`}>
                                                <img src={book.image} alt={book.name} className="inline-block w-full" />
                                            </Link>
                                            <div className="absolute bottom-[-100%] flex w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0">
                                                <button
                                                    onClick={() => handleAddToCart(book)}
                                                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[#f5f5f5] text-[--main-color] hover:bg-[--main-color] hover:text-white"
                                                >
                                                    <ShoppingCartIcon className="h-4 w-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleCheckout(book)}
                                                    className="ml-1 flex h-12 w-full flex-1 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]"
                                                >
                                                    Mua ngay
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex max-w-[160px] flex-col p-2">
                                            <Link
                                                to={`/product-detail/${book.id}`}
                                                className="group/book-name relative inline-block"
                                            >
                                                <h3 className="line-clamp-2 text-center font-bold uppercase">
                                                    {book.name}
                                                </h3>
                                                <span className="absolute bottom-full left-0 z-[2] hidden bg-white p-1 shadow-md group-hover/book-name:block">
                                                    {book.name}
                                                </span>
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
            </section>
            <section className="flex items-center justify-center py-6">
                <div className="w-full max-w-7xl px-2">
                    <div className="mb-6 flex items-center justify-between border-t-2 border-solid border-[--main-color] pt-3 ">
                        <h2 className="text-xl font-bold text-[--main-color] md:text-2xl">
                            <Link to="/products/genre/tat-ca">Sách mới</Link>
                        </h2>
                        <Link
                            to="/products/genre/tat-ca"
                            className="hidden font-bold text-[--main-color] md:inline-block"
                        >
                            Xem thêm <ArrowRightCircleIcon className="inline-block h-8 w-8" />
                        </Link>
                    </div>
                    <Swiper slidesPerView={'auto'} navigation={true} modules={[Navigation]} className="mySwiper">
                        {newBooks.length !== 0 &&
                            newBooks.map((book, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="w-item-prod-home-ssm sm:w-item-prod-home-sm lg:w-[252px!important]"
                                >
                                    <div className="z-[1] inline-flex flex-col items-center">
                                        <div className="group/product-image relative inline-block overflow-hidden">
                                            <Link to={`/product-detail/${book.id}`}>
                                                <img src={book.image} alt={book.name} className="inline-block w-full" />
                                            </Link>
                                            <div className="absolute bottom-[-100%] flex w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0">
                                                <button
                                                    onClick={() => handleAddToCart(book)}
                                                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[#f5f5f5] text-[--main-color] hover:bg-[--main-color] hover:text-white"
                                                >
                                                    <ShoppingCartIcon className="h-4 w-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleCheckout(book)}
                                                    className="ml-1 flex h-12 w-full flex-1 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]"
                                                >
                                                    Mua ngay
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex max-w-[160px] flex-col p-2">
                                            <Link
                                                to={`/product-detail/${book.id}`}
                                                className="group/book-name relative inline-block"
                                            >
                                                <h3 className="line-clamp-2 text-center font-bold uppercase">
                                                    {book.name}
                                                </h3>
                                                <span className="absolute bottom-full left-0 z-[2] hidden bg-white p-1 shadow-md group-hover/book-name:block">
                                                    {book.name}
                                                </span>
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
            </section>
        </div>
    );
}

export default Home;
