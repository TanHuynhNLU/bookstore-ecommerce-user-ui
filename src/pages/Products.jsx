import { ChevronRightIcon, ShoppingCartIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';
import ReactPaginate from 'react-paginate';

import BookImage from '~/assets/imgs/nha-gia-kim.jpg';

function Products() {
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
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="my-3 flex w-full max-w-7xl flex-col px-2 md:flex-row md:space-x-2">
                    <div className="mb-8 w-full p-2 shadow-md md:mb-0 md:w-1/4">
                        <div className="border-b-2 border-solid border-gray-200 py-2">
                            <h5 className="font-bold">NHÓM SẢN PHẨM</h5>
                            <ul>
                                <li className="py-1 font-bold text-[--main-color] hover:text-[--main-color]">
                                    <a href="#">Tất Cả Sản Phẩm</a>
                                </li>
                                <li className="py-1 hover:text-[--main-color]">
                                    <a href="#">Kỹ Năng Sống</a>
                                </li>
                                <li className="py-1 hover:text-[--main-color]">
                                    <a href="#">Kinh Tế</a>
                                </li>
                                <li className="py-1 hover:text-[--main-color]">
                                    <a href="#">Kinh Điển</a>
                                </li>
                                <li className="py-1 hover:text-[--main-color]">
                                    <a href="#">Tiểu Thuyết</a>
                                </li>
                                <li className="py-1 hover:text-[--main-color]">
                                    <a href="#">Manga</a>
                                </li>
                            </ul>
                        </div>
                        <div className="border-b-2 border-solid border-gray-200 py-2">
                            <h5 className="font-bold">GIÁ</h5>
                            <div className="flex flex-col px-2">
                                <div className="py-1">
                                    <input
                                        id="price1"
                                        name="price"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                    />
                                    <label htmlFor="price1" className="ml-2 cursor-pointer hover:text-[--main-color]">
                                        0đ - 150,000đ
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="price2"
                                        name="price"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                    />
                                    <label htmlFor="price2" className="ml-2 cursor-pointer hover:text-[--main-color]">
                                        150,000đ - 300,000đ
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="price3"
                                        name="price"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                    />
                                    <label htmlFor="price3" className="ml-2 cursor-pointer hover:text-[--main-color]">
                                        300,000đ - 500,000đ
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="price4"
                                        name="price"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                    />
                                    <label htmlFor="price4" className="ml-2 cursor-pointer hover:text-[--main-color]">
                                        500,000đ - Trở lên
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="py-2">
                            <h5 className="font-bold">NHÀ XUẤT BẢN</h5>
                            <div className="flex flex-col px-2">
                                <div className="py-1">
                                    <input
                                        id="publisher1"
                                        name="publisher"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                    />
                                    <label
                                        htmlFor="publisher1"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Hội Nhà Văn
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="publisher2"
                                        name="publisher"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                    />
                                    <label
                                        htmlFor="publisher2"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Dân Trí
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="publisher3"
                                        name="publisher"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                    />
                                    <label
                                        htmlFor="publisher3"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Tổng Hợp TPHCM
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="publisher4"
                                        name="publisher"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                    />
                                    <label
                                        htmlFor="publisher4"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Thế Giới
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="publisher5"
                                        name="publisher"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                    />
                                    <label
                                        htmlFor="publisher5"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Văn Học
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="publisher6"
                                        name="publisher"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                    />
                                    <label
                                        htmlFor="publisher6"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Hồng Đức
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="publisher7"
                                        name="publisher"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                    />
                                    <label
                                        htmlFor="publisher7"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Kim Đồng
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="group/sort relative mb-10 flex items-center bg-[#f5f5f5] p-3 md:justify-end">
                            <div className=" flex">
                                <Square3Stack3DIcon className="inline-block h-6 w-6 text-gray-400" />
                                <span className="ml-2 text-[#2E3A59]">Sắp xếp theo</span>
                                <span className="ml-2 text-[--main-color] md:hidden">Mặc định</span>
                            </div>
                            <div className="hidden md:flex">
                                <button className="ml-2 rounded-md bg-[#7B7B7D] p-2 text-white">Mặc định</button>
                                <button className="ml-2 rounded-md bg-white p-2 text-[#2E3A59] hover:bg-[#7B7B7D] hover:text-white">
                                    Sách mới
                                </button>
                                <button className="ml-2 rounded-md bg-white p-2 text-[#2E3A59] hover:bg-[#7B7B7D] hover:text-white">
                                    Giá thấp - cao
                                </button>
                                <button className="ml-2 rounded-md bg-white p-2 text-[#2E3A59] hover:bg-[#7B7B7D] hover:text-white">
                                    Giá cao - thấp
                                </button>
                            </div>
                            <ul className="absolute top-full z-[1] hidden w-[210px] overflow-hidden rounded-md border border-solid border-gray-200 bg-white shadow-md group-hover/sort:block group-hover/sort:md:hidden">
                                <li className="h-8 cursor-pointer rounded-md px-2 hover:bg-[#7B7B7D] hover:text-white">
                                    Mặc định
                                </li>
                                <li className="h-8 cursor-pointer rounded-md px-2 hover:bg-[#7B7B7D] hover:text-white">
                                    Sách mới
                                </li>
                                <li className="h-8 cursor-pointer rounded-md px-2 hover:bg-[#7B7B7D] hover:text-white">
                                    Giá thấp - cao
                                </li>
                                <li className="h-8 cursor-pointer rounded-md px-2 hover:bg-[#7B7B7D] hover:text-white">
                                    Giá cao - thấp
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="inline-flex w-1/2 flex-col items-center px-2 py-2 hover:shadow-md md:w-1/4">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img
                                        src={BookImage}
                                        alt="image"
                                        className="inline-block w-full scale-100 transform object-cover transition-transform duration-200 ease-in-out group-hover/product-image:scale-110"
                                    />
                                    <div className="absolute bottom-[-100%] flex w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0">
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
                            <div className="inline-flex w-1/2 flex-col items-center px-2 py-2 hover:shadow-md md:w-1/4">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img
                                        src={BookImage}
                                        alt="image"
                                        className="inline-block w-full scale-100 transform object-cover transition-transform duration-200 ease-in-out group-hover/product-image:scale-110"
                                    />
                                    <div className="absolute bottom-[-100%] flex w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0">
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
                            <div className="inline-flex w-1/2 flex-col items-center px-2 py-2 hover:shadow-md md:w-1/4">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img
                                        src={BookImage}
                                        alt="image"
                                        className="inline-block w-full scale-100 transform object-cover transition-transform duration-200 ease-in-out group-hover/product-image:scale-110"
                                    />
                                    <div className="absolute bottom-[-100%] flex w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0">
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
                            <div className="inline-flex w-1/2 flex-col items-center px-2 py-2 hover:shadow-md md:w-1/4">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img
                                        src={BookImage}
                                        alt="image"
                                        className="inline-block w-full scale-100 transform object-cover transition-transform duration-200 ease-in-out group-hover/product-image:scale-110"
                                    />
                                    <div className="absolute bottom-[-100%] flex w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0">
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
                            <div className="inline-flex w-1/2 flex-col items-center px-2 py-2 hover:shadow-md md:w-1/4 ">
                                <a href="#" className="group/product-image relative inline-block overflow-hidden">
                                    <img
                                        src={BookImage}
                                        alt="image"
                                        className="inline-block w-full scale-100 transform object-cover transition-transform duration-200 ease-in-out group-hover/product-image:scale-110"
                                    />
                                    <div className="absolute bottom-[-100%] flex w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0">
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
                        </div>
                        <div className="flex items-center justify-center py-3">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                pageCount={10}
                                previousLabel="<"
                                renderOnZeroPageCount={null}
                                className="flex text-xl"
                                previousLinkClassName="w-6 h-6 mx-2 border border-solid hover:border-[--main-color] hover:text-[--main-color] border-transparent inline-flex justify-center items-center rounded-full"
                                pageLinkClassName="w-6 h-6 mx-2 border border-solid hover:border-[--main-color] hover:text-[--main-color] border-transparent inline-flex justify-center items-center rounded-full"
                                nextLinkClassName="w-6 h-6 mx-2 border border-solid hover:border-[--main-color] hover:text-[--main-color] border-transparent inline-flex justify-center items-center rounded-full"
                                breakLinkClassName="w-6 h-6 mx-2 border border-solid hover:border-[--main-color] hover:text-[--main-color] border-transparent inline-flex justify-center items-center rounded-full"
                                activeLinkClassName="border-[#228b22!important] text-[--main-color]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
