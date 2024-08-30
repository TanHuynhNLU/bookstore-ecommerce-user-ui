import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Banner1 from '~/assets/imgs/banner1.jpg';
import Banner2 from '~/assets/imgs/banner2.jpg';
import Banner3 from '~/assets/imgs/banner3.jpg';
import Banner4 from '~/assets/imgs/banner4.jpg';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {
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
                <div className="w-full max-w-7xl border-t-2 border-solid border-[--main-color] px-2">
                    <h2 className="mt-3 text-3xl font-bold text-[--main-color]">Sách bán chạy</h2>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper h-[250px]"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </div>
    );
}

export default Home;
