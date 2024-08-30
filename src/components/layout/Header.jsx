import {
    Bars3Icon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    ShoppingCartIcon,
    UserCircleIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import ProductImage from '~/assets/imgs/nha-gia-kim.jpg';
import Logo from '~/assets/imgs/logo.png';
import { useState } from 'react';

function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header className="fixed top-0 z-10 flex h-[--header-height] w-full items-center justify-center border-b-[2px] border-solid border-[--main-color] bg-white text-[--text-color]">
            <div className="flex h-full w-full max-w-7xl flex-row items-center justify-between px-3">
                <div className="flex h-full w-[80px] items-center lg:hidden">
                    <div className="h-[40px] w-[40px] p-1" onClick={() => setShowMobileMenu(true)}>
                        <Bars3Icon className="inline-block h-[36px] w-[36px] text-[--main-color]" />
                    </div>
                </div>
                <div className="h-full w-[130px] px-2">
                    <a className="flex h-full w-full items-center justify-center lg:justify-start" href="#">
                        <img src={Logo} alt="logo" className="inline-block h-[72px] w-[72px]" />
                    </a>
                </div>
                <ul className="hidden h-full lg:flex">
                    <li className="h-full px-4 hover:text-[--main-color]">
                        <a className="inline-block inline-flex h-full items-center justify-center font-bold" href="#">
                            Trang Chủ
                        </a>
                    </li>
                    <li className="h-full px-4 hover:text-[--main-color]">
                        <a className="inline-block inline-flex h-full items-center justify-center font-bold" href="#">
                            Tin Sách
                        </a>
                    </li>
                    <li className="group/products relative h-full px-4">
                        <a
                            className="inline-block inline-flex h-full items-center justify-center font-bold hover:text-[--main-color]"
                            href="#"
                        >
                            Sản Phẩm
                            <span className="ml-1 inline-flex items-center justify-center transition-transform duration-300 group-hover/products:rotate-180">
                                <ChevronDownIcon className="inline-block h-4 w-4" />
                            </span>
                        </a>
                        <ul className="absolute left-0 top-full hidden min-w-[200px] rounded-md bg-white shadow-nav-popup before:absolute before:-top-3 before:left-8 before:block before:h-6 before:w-6 before:rotate-45 before:bg-white group-hover/products:inline-block">
                            <li className="cursor-pointer px-4 py-2 hover:text-[--main-color]">
                                <a className="h-full w-full" href="#">
                                    Kỹ Năng Sống
                                </a>
                            </li>
                            <li className="cursor-pointer px-4 py-2 hover:text-[--main-color]">
                                <a className="h-full w-full" href="#">
                                    Kinh Tế
                                </a>
                            </li>
                            <li className="cursor-pointer px-4 py-2 hover:text-[--main-color]">
                                <a className="h-full w-full" href="#">
                                    Kinh Điển
                                </a>
                            </li>
                            <li className="cursor-pointer px-4 py-2 hover:text-[--main-color]">
                                <a className="h-full w-full" href="#">
                                    Tiểu Thuyết
                                </a>
                            </li>
                            <li className="cursor-pointer px-4 py-2 hover:text-[--main-color]">
                                <a className="h-full w-full" href="#">
                                    Manga
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="h-full px-4 hover:text-[--main-color]">
                        <a className="inline-block inline-flex h-full items-center justify-center font-bold" href="#">
                            Liên Hệ
                        </a>
                    </li>
                </ul>
                <div className="flex items-center">
                    <div className="hidden h-[40px] w-[240px] items-center overflow-hidden rounded-[30px] border border-solid border-[#BBBBBF] lg:flex">
                        <input
                            className=" inline-block h-full w-[200px] px-4 py-1 outline-none"
                            type="text"
                            placeholder="Tìm kiếm..."
                        />
                        <button className="inline-flex h-[40px] w-[40px] shrink-0 items-center justify-center">
                            <MagnifyingGlassIcon className="inline-block h-6 w-6 font-[900]" />
                        </button>
                    </div>
                    <div className="group/account relative hidden h-full items-center justify-center lg:flex">
                        <div className="inline-flex cursor-pointer flex-col items-center p-2">
                            <UserIcon className="inline-block h-6 w-6" />
                            <span className="font-bold">Tài khoản</span>
                        </div>
                        <ul className="absolute left-0 top-full hidden min-w-[150px] rounded-md bg-white shadow-nav-popup before:absolute before:-top-3 before:left-8 before:block before:h-6 before:w-6 before:rotate-45 before:bg-white group-hover/account:inline-block">
                            <li className="cursor-pointer px-4 py-2 hover:text-[--main-color]">
                                <a className="h-full w-full" href="#">
                                    Đăng nhập
                                </a>
                            </li>
                            <li className="cursor-pointer px-4 py-2 hover:text-[--main-color]">
                                <a className="h-full w-full" href="#">
                                    Đăng ký
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="group/cart relative flex h-full items-center justify-center">
                        <div className="inline-flex cursor-pointer flex-col items-center p-2 lg:hidden">
                            <MagnifyingGlassIcon className="inline-block h-6 w-6" />
                        </div>
                        <div className="inline-flex cursor-pointer flex-col items-center p-2">
                            <ShoppingCartIcon className="inline-block h-6 w-6" />
                            <span className="hidden font-bold lg:inline-block">Giỏ hàng</span>
                        </div>
                        <span className="absolute bottom-6 right-1 inline-flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-full bg-[--main-color] p-[2px] text-center text-[12px] leading-3 text-white lg:right-4 lg:top-4">
                            1
                        </span>
                        <div className="absolute right-0 top-full hidden max-h-[50vh] min-w-[360px] rounded-md bg-white shadow-nav-popup before:absolute before:-top-3 before:right-[32px] before:block before:h-6 before:w-6 before:rotate-45 before:bg-white lg:group-hover/cart:inline-block 2xl:-left-[138px] 2xl:right-auto 2xl:before:left-[170px]">
                            <div className="flex items-center border-b border-solid border-gray-200 p-4">
                                <ShoppingCartIcon className="inline-block h-4 w-4" />
                                <span className="ml-2 text-base font-bold">Giỏ hàng (1)</span>
                            </div>
                            <ul className="flex max-h-items-cart-header w-full flex-1 flex-col overflow-y-scroll">
                                <li className="cursor-pointer px-4 py-3 hover:text-[--main-color]">
                                    <a className="flex" href="#">
                                        <img className="inline-block w-[68px]" src={ProductImage} alt="nha-gia-kim" />
                                        <div className="flex flex-col">
                                            <h5 className="text-base">Nhà Giả Kim</h5>
                                            <span className="font-bold">75.000 đ x1</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="cursor-pointer px-4 py-3 hover:text-[--main-color]">
                                    <a className="flex" href="#">
                                        <img className="inline-block w-[68px]" src={ProductImage} alt="nha-gia-kim" />
                                        <div className="flex flex-col">
                                            <h5 className="text-base">Nhà Giả Kim</h5>
                                            <span className="font-bold">75.000 đ x1</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="cursor-pointer px-4 py-3 hover:text-[--main-color]">
                                    <a className="flex" href="#">
                                        <img className="inline-block w-[68px]" src={ProductImage} alt="nha-gia-kim" />
                                        <div className="flex flex-col">
                                            <h5 className="text-base">Nhà Giả Kim</h5>
                                            <span className="font-bold">75.000 đ x1</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="cursor-pointer px-4 py-3 hover:text-[--main-color]">
                                    <a className="flex" href="#">
                                        <img className="inline-block w-[68px]" src={ProductImage} alt="nha-gia-kim" />
                                        <div className="flex flex-col">
                                            <h5 className="text-base">Nhà Giả Kim</h5>
                                            <span className="font-bold">75.000 đ x1</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="cursor-pointer px-4 py-3 hover:text-[--main-color]">
                                    <a className="flex" href="#">
                                        <img className="inline-block w-[68px]" src={ProductImage} alt="nha-gia-kim" />
                                        <div className="flex flex-col">
                                            <h5 className="text-base">Nhà Giả Kim</h5>
                                            <span className="font-bold">75.000 đ x1</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="cursor-pointer px-4 py-3 hover:text-[--main-color]">
                                    <a className="flex" href="#">
                                        <img className="inline-block w-[68px]" src={ProductImage} alt="nha-gia-kim" />
                                        <div className="flex flex-col">
                                            <h5 className="text-base">Nhà Giả Kim</h5>
                                            <span className="font-bold">75.000 đ x1</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between border-t border-solid border-gray-200 p-4">
                                <div className="flex flex-col">
                                    <span>Tổng cộng</span>
                                    <span className="font-bold text-[--main-color]">75.000đ</span>
                                </div>
                                <button className="w-[186px] shrink-0 rounded-md bg-[--main-color] px-6 py-3 font-bold text-white">
                                    Xem giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu isShow={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
        </header>
    );
}

function MobileMenu({ isShow, onClose }) {
    const [productsCollapse, setProductsCollapse] = useState(true);
    return (
        <div>
            <div
                className={`fixed bottom-0 left-0 right-0 top-0 h-full w-full ${isShow ? 'visible z-40 bg-[--bg-overlay]' : 'invisible -z-10 bg-none'}`}
                onClick={onClose}
            ></div>
            <div
                className={`fixed left-0 top-0 z-50 h-screen w-[250px] transform bg-white transition-transform duration-500 ease-in-out ${isShow ? 'translate-x-0' : '-translate-x-full'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col items-center bg-[--main-color] p-2 text-white">
                    <UserCircleIcon className="inline-block h-[40px] w-[40px]" />
                    <div className="flex items-center">
                        <a className="p-2" href="#">
                            Đăng nhập
                        </a>
                        <a className="p-2" href="#">
                            Đăng kí
                        </a>
                    </div>
                </div>
                <ul className="h-full w-full">
                    <li className="w-full hover:text-[--main-color]">
                        <a className="inline-block w-full p-2 font-bold" href="#">
                            Trang Chủ
                        </a>
                    </li>

                    <li className="w-full hover:text-[--main-color]">
                        <a className="inline-block w-full p-2 font-bold" href="#">
                            Tin Sách
                        </a>
                    </li>
                    <li>
                        <span className="inline-flex w-full flex-col px-2 font-bold" href="#">
                            <div className="flex justify-between py-2 hover:text-[--main-color]">
                                <span>Sản Phẩm</span>
                                <span
                                    className={`ml-1 inline-flex items-center justify-center transition-transform duration-300 ${productsCollapse ? '' : 'rotate-180'}`}
                                    onClick={() => setProductsCollapse(!productsCollapse)}
                                >
                                    <ChevronDownIcon className="inline-block h-4 w-4" />
                                </span>
                            </div>
                            <ul className={`flex-col ${productsCollapse ? 'hidden' : 'flex'}`}>
                                <li className="w-full hover:text-[--main-color]">
                                    <a className="inline-block w-full p-2 font-bold" href="#">
                                        Kỹ Năng Sống
                                    </a>
                                </li>
                                <li className="w-full hover:text-[--main-color]">
                                    <a className="inline-block w-full p-2 font-bold" href="#">
                                        Kinh Tế
                                    </a>
                                </li>
                                <li className="w-full hover:text-[--main-color]">
                                    <a className="inline-block w-full p-2 font-bold" href="#">
                                        Kinh Điển
                                    </a>
                                </li>
                                <li className="w-full hover:text-[--main-color]">
                                    <a className="inline-block w-full p-2 font-bold" href="#">
                                        Tiểu Thuyết
                                    </a>
                                </li>
                                <li className="w-full hover:text-[--main-color]">
                                    <a className="inline-block w-full p-2 font-bold" href="#">
                                        Manga
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li className="hover:text-[--main-color]">
                        <a className="inline-block w-full p-2 font-bold" href="#">
                            Liên Hệ
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
