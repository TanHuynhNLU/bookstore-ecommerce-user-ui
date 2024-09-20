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

function ProductDetail() {
    return (
        <div>
            <div className="flex items-center justify-center bg-banner">
                <div className="w-full max-w-7xl px-2 py-3">
                    <ul className="flex">
                        <li className="hover:text-[--main-color]">
                            <a href="#">Trang chủ</a>
                        </li>
                        <li className="ml-1 text-[--main-color]">
                            <ChevronRightIcon className="inline-block h-4 w-4" />
                            <span className="ml-1 font-bold">Sản phẩm</span>
                        </li>
                        <li className="ml-1 text-[--main-color]">
                            <ChevronRightIcon className="inline-block h-4 w-4" />
                            <span className="ml-1 font-bold">Nhà Giả Kim</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="my-[30px] flex w-full max-w-7xl flex-col lg:flex-row">
                    <div className="w-full px-2 lg:w-2/5">
                        <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-md border border-solid border-gray-200">
                            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgRotate, lgFullscreen, lgShare]}>
                                <a href="img/img1.jpg">
                                    <img alt="img1" src={BookImage} />
                                </a>
                            </LightGallery>
                        </div>
                    </div>
                    <div className="w-full px-2 lg:w-2/5">
                        <h1 className="mb-3 text-[30px] font-bold">Nhà Giả Kim</h1>
                        <div>
                            <span>Tác giả: </span> <span className="font-semibold">Nhà Giả Kim</span>
                        </div>
                        <span className="my-5 block text-3xl font-bold text-[--main-color]">89.000đ</span>
                        <div className="border-b border-solid border-gray-200"></div>
                        <div className="mt-6 flex items-center">
                            <div className="flex h-[32px] w-[100px] rounded-md border border-solid border-x-gray-200">
                                <button className="flex h-[32px] w-[30px] items-center justify-center">
                                    <MinusIcon className="h-6 w-6" />
                                </button>
                                <input className="h-full w-[40px] text-center outline-none" type="text" value={1} />
                                <button className="flex h-[32px] w-[30px] items-center justify-center">
                                    <PlusIcon className="h-6 w-6" />
                                </button>
                            </div>
                            <span className="ml-3 text-slate-400">Còn lại 99 trong kho </span>
                        </div>
                        <div className="mt-3 flex flex-col md:flex-row">
                            <button className="flex h-[65px] w-full items-center justify-center rounded-md border border-solid border-[--main-color] px-3 py-[6px] text-xl font-bold text-[--main-color] hover:bg-[--main-color] hover:text-white md:w-[224px]">
                                Thêm vào giỏ hàng
                            </button>
                            <button className="mt-3 flex h-[65px] w-full items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] px-3 py-[6px] text-xl font-bold text-white hover:bg-white hover:text-[--main-color] md:ml-3 md:mt-0 md:w-[224px]">
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
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ut eligendi doloremque non
                            minus tempore, facere eaque? Commodi officiis natus unde possimus adipisci ipsa. Error vero
                            voluptates eligendi quasi doloribus.
                        </p>
                    </div>
                    <div className="w-full px-2 lg:w-4/12">
                        <h4 className="mb-5 text-xl font-bold text-[--main-color]">Thông tin chi tiết</h4>
                        <ul className="list-disc rounded-md border border-solid border-gray-200 p-4">
                            <li className="mb-3 flex pl-3 last:mb-0">
                                <span className="w-1/2">Tác giả</span>
                                <span className="w-1/2 font-bold">Paulo Coelho</span>
                            </li>
                            <li className="mb-3 flex pl-3 last:mb-0">
                                <span className="w-1/2">Nhà xuất bản</span>
                                <span className="w-1/2 font-bold">Hội Nhà Văn</span>
                            </li>
                            <li className="mb-3 flex pl-3 last:mb-0">
                                <span className="w-1/2">Số trang</span>
                                <span className="w-1/2 font-bold">222</span>
                            </li>
                            <li className="mb-3 flex pl-3 last:mb-0">
                                <span className="w-1/2">Ngày phát hành</span>
                                <span className="w-1/2 font-bold">2024</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mb-[30px] w-full max-w-7xl px-2">
                    <div className="mb-6 flex items-center justify-between border-t-2 border-solid border-[--main-color] pt-3 ">
                        <h2 className="text-xl font-bold text-[--main-color] md:text-2xl">
                            <a href="#">Có thể bạn cũng thích</a>
                        </h2>
                        <a className="hidden font-bold text-[--main-color] md:inline-block" href="#">
                            Xem thêm <ArrowRightCircleIcon className="inline-block h-8 w-8" />
                        </a>
                    </div>
                    <Swiper slidesPerView={'auto'} navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide className="w-item-prod-home-ssm sm:w-item-prod-home-sm lg:w-[252px!important]">
                            <div className="inline-flex flex-col items-center">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img src={BookImage} alt="image" className="inline-block w-full" />
                                    <div className="absolute bottom-[-100%] hidden w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0 md:flex">
                                        <button className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[#f5f5f5] text-[--main-color] hover:bg-[--main-color] hover:text-white">
                                            <ShoppingCartIcon className="h-4 w-4" />
                                        </button>
                                        <button className="ml-1 flex h-12 w-full flex-1 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]">
                                            Mua ngay
                                        </button>
                                    </div>
                                </a>
                                <div className="flex max-w-[160px] flex-col p-2">
                                    <a href="#" className="inline-block">
                                        <h3 className="line-clamp-2 text-center font-bold uppercase">
                                            Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim
                                        </h3>
                                    </a>
                                    <span className="text-center font-bold text-[--main-color]">89.000đ</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-item-prod-home-ssm sm:w-item-prod-home-sm lg:w-[252px!important]">
                            <div className="inline-flex flex-col items-center">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img src={BookImage} alt="image" className="inline-block w-full" />
                                    <div className="absolute bottom-[-100%] hidden w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0 md:flex">
                                        <button className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[#f5f5f5] text-[--main-color] hover:bg-[--main-color] hover:text-white">
                                            <ShoppingCartIcon className="h-4 w-4" />
                                        </button>
                                        <button className="ml-1 flex h-12 w-full flex-1 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]">
                                            Mua ngay
                                        </button>
                                    </div>
                                </a>
                                <div className="flex max-w-[160px] flex-col p-2">
                                    <a href="#" className="inline-block">
                                        <h3 className="line-clamp-2 text-center font-bold uppercase">
                                            Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim
                                        </h3>
                                    </a>
                                    <span className="text-center font-bold text-[--main-color]">89.000đ</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-item-prod-home-ssm sm:w-item-prod-home-sm lg:w-[252px!important]">
                            <div className="inline-flex flex-col items-center">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img src={BookImage} alt="image" className="inline-block w-full" />
                                    <div className="absolute bottom-[-100%] hidden w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0 md:flex">
                                        <button className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[#f5f5f5] text-[--main-color] hover:bg-[--main-color] hover:text-white">
                                            <ShoppingCartIcon className="h-4 w-4" />
                                        </button>
                                        <button className="ml-1 flex h-12 w-full flex-1 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]">
                                            Mua ngay
                                        </button>
                                    </div>
                                </a>
                                <div className="flex max-w-[160px] flex-col p-2">
                                    <a href="#" className="inline-block">
                                        <h3 className="line-clamp-2 text-center font-bold uppercase">
                                            Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim
                                        </h3>
                                    </a>
                                    <span className="text-center font-bold text-[--main-color]">89.000đ</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-item-prod-home-ssm sm:w-item-prod-home-sm lg:w-[252px!important]">
                            <div className="inline-flex flex-col items-center">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img src={BookImage} alt="image" className="inline-block w-full" />
                                    <div className="absolute bottom-[-100%] hidden w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0 md:flex">
                                        <button className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[#f5f5f5] text-[--main-color] hover:bg-[--main-color] hover:text-white">
                                            <ShoppingCartIcon className="h-4 w-4" />
                                        </button>
                                        <button className="ml-1 flex h-12 w-full flex-1 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]">
                                            Mua ngay
                                        </button>
                                    </div>
                                </a>
                                <div className="flex max-w-[160px] flex-col p-2">
                                    <a href="#" className="inline-block">
                                        <h3 className="line-clamp-2 text-center font-bold uppercase">
                                            Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim
                                        </h3>
                                    </a>
                                    <span className="text-center font-bold text-[--main-color]">89.000đ</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-item-prod-home-ssm sm:w-item-prod-home-sm lg:w-[252px!important]">
                            <div className="inline-flex flex-col items-center">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img src={BookImage} alt="image" className="inline-block w-full" />
                                    <div className="absolute bottom-[-100%] hidden w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0 md:flex">
                                        <button className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[#f5f5f5] text-[--main-color] hover:bg-[--main-color] hover:text-white">
                                            <ShoppingCartIcon className="h-4 w-4" />
                                        </button>
                                        <button className="ml-1 flex h-12 w-full flex-1 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]">
                                            Mua ngay
                                        </button>
                                    </div>
                                </a>
                                <div className="flex max-w-[160px] flex-col p-2">
                                    <a href="#" className="inline-block">
                                        <h3 className="line-clamp-2 text-center font-bold uppercase">
                                            Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim
                                        </h3>
                                    </a>
                                    <span className="text-center font-bold text-[--main-color]">89.000đ</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-item-prod-home-ssm sm:w-item-prod-home-sm lg:w-[252px!important]">
                            <div className="inline-flex flex-col items-center">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img src={BookImage} alt="image" className="inline-block w-full" />
                                    <div className="absolute bottom-[-100%] hidden w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0 md:flex">
                                        <button className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[#f5f5f5] text-[--main-color] hover:bg-[--main-color] hover:text-white">
                                            <ShoppingCartIcon className="h-4 w-4" />
                                        </button>
                                        <button className="ml-1 flex h-12 w-full flex-1 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]">
                                            Mua ngay
                                        </button>
                                    </div>
                                </a>
                                <div className="flex max-w-[160px] flex-col p-2">
                                    <a href="#" className="inline-block">
                                        <h3 className="line-clamp-2 text-center font-bold uppercase">
                                            Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim
                                        </h3>
                                    </a>
                                    <span className="text-center font-bold text-[--main-color]">89.000đ</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-item-prod-home-ssm sm:w-item-prod-home-sm lg:w-[252px!important]">
                            <div className="inline-flex flex-col items-center">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img src={BookImage} alt="image" className="inline-block w-full" />
                                    <div className="absolute bottom-[-100%] hidden w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0 md:flex">
                                        <button className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[#f5f5f5] text-[--main-color] hover:bg-[--main-color] hover:text-white">
                                            <ShoppingCartIcon className="h-4 w-4" />
                                        </button>
                                        <button className="ml-1 flex h-12 w-full flex-1 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]">
                                            Mua ngay
                                        </button>
                                    </div>
                                </a>
                                <div className="flex max-w-[160px] flex-col p-2">
                                    <a href="#" className="inline-block">
                                        <h3 className="line-clamp-2 text-center font-bold uppercase">
                                            Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim
                                        </h3>
                                    </a>
                                    <span className="text-center font-bold text-[--main-color]">89.000đ</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-item-prod-home-ssm sm:w-item-prod-home-sm lg:w-[252px!important]">
                            <div className="inline-flex flex-col items-center">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img src={BookImage} alt="image" className="inline-block w-full" />
                                    <div className="absolute bottom-[-100%] hidden w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0 md:flex">
                                        <button className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[#f5f5f5] text-[--main-color] hover:bg-[--main-color] hover:text-white">
                                            <ShoppingCartIcon className="h-4 w-4" />
                                        </button>
                                        <button className="ml-1 flex h-12 w-full flex-1 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]">
                                            Mua ngay
                                        </button>
                                    </div>
                                </a>
                                <div className="flex max-w-[160px] flex-col p-2">
                                    <a href="#" className="inline-block">
                                        <h3 className="line-clamp-2 text-center font-bold uppercase">
                                            Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim
                                        </h3>
                                    </a>
                                    <span className="text-center font-bold text-[--main-color]">89.000đ</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-item-prod-home-ssm sm:w-item-prod-home-sm lg:w-[252px!important]">
                            <div className="inline-flex flex-col items-center">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img src={BookImage} alt="image" className="inline-block w-full" />
                                    <div className="absolute bottom-[-100%] hidden w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0 md:flex">
                                        <button className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[#f5f5f5] text-[--main-color] hover:bg-[--main-color] hover:text-white">
                                            <ShoppingCartIcon className="h-4 w-4" />
                                        </button>
                                        <button className="ml-1 flex h-12 w-full flex-1 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]">
                                            Mua ngay
                                        </button>
                                    </div>
                                </a>
                                <div className="flex max-w-[160px] flex-col p-2">
                                    <a href="#" className="inline-block">
                                        <h3 className="line-clamp-2 text-center font-bold uppercase">
                                            Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim Nhà Giả Kim
                                        </h3>
                                    </a>
                                    <span className="text-center font-bold text-[--main-color]">89.000đ</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
