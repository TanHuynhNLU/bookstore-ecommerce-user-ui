import { ChevronRightIcon } from '@heroicons/react/24/outline';

import BookImage from '~/assets/imgs/nha-gia-kim.jpg';

function Cart() {
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
                            <span className="ml-1 font-bold">Giỏ hàng</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="my-3 w-full max-w-7xl px-2">
                    <h2 className="text-2xl font-bold text-[--main-color]">Giỏ hàng của bạn</h2>
                    <div className="mt-2 flex flex-col lg:flex-row">
                        <div className="w-full border border-solid border-gray-200 px-2 lg:w-9/12">
                            <div className="hidden border-b-[1px] border-solid border-gray-200 py-2 lg:flex">
                                <div className="flex-1 font-bold text-[--text-color]">Thông tin sản phẩm</div>
                                <div className="w-[130px] font-bold text-[--text-color]">Đơn giá</div>
                                <div className="w-[130px] font-bold text-[--text-color]">Số lượng</div>
                                <div className="w-[130px] font-bold text-[--text-color]">Thành tiền</div>
                            </div>
                            <div className="flex items-center border-b-[1px] border-solid border-gray-200 py-2">
                                <div className="flex flex-1 items-center text-[--text-color]">
                                    <img className="w-[20%] md:w-[150px] lg:w-[110px]" src={BookImage} alt="image" />
                                    <div className="flex flex-1 flex-col lg:flex-row lg:items-center">
                                        <div className="flex flex-1 flex-col">
                                            <a
                                                className="font-bold text-[--text-color] hover:text-[--main-color]"
                                                href="#"
                                            >
                                                Nhà Giả Kim
                                            </a>
                                            <span className="hidden cursor-pointer text-red-500 hover:text-[--main-color] lg:inline-block">
                                                Xóa
                                            </span>
                                        </div>
                                        <div className="flex flex-row-reverse items-center lg:flex-row">
                                            <div className="flex w-1/2 flex-col text-[--main-color] lg:w-[130px]">
                                                <span className="text-right font-bold lg:text-left">74.000₫</span>
                                                <span className="cursor-pointer text-right text-red-500 hover:text-[--main-color] lg:hidden lg:text-left">
                                                    Xóa
                                                </span>
                                            </div>
                                            <div className="flex w-1/2 text-[--text-color] lg:w-[130px]">
                                                <button className="inline-flex h-7 w-7 items-center justify-center border border-solid border-gray-200 font-bold">
                                                    <span className="relative -translate-y-[1px]">-</span>
                                                </button>
                                                <input
                                                    className="h-[28px] w-[35px] border-collapse border-b-[1px] border-t-[1px] border-solid border-gray-200 text-center outline-none"
                                                    type="text"
                                                    value={1}
                                                />
                                                <button className="inline-flex h-7 w-7 items-center justify-center border border-solid border-gray-200 font-bold">
                                                    <span className="relative -translate-y-[1px]">+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden w-[130px] font-bold text-[--main-color] lg:inline-block">
                                    74.000₫
                                </div>
                            </div>
                            <div className="flex py-4">
                                <div className="ml-auto w-full px-2 lg:w-[320px]">
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-[--text-color]">Tổng tiền:</span>
                                        <span className="font-bold text-[--main-color]">200.600₫</span>
                                    </div>
                                    <button className="mt-10 flex h-[54px] w-full items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] px-[6px] py-[12px] font-bold text-white hover:bg-white hover:text-[--main-color]">
                                        Thanh toán
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-[#f8f8f8] p-2 lg:w-3/12">
                            <div className="py-2 font-bold">Thời gian giao hàng</div>
                            <input
                                className="h-[35px] w-[144px] border border-solid border-gray-200 px-2"
                                type="date"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
