import {
    Bars3Icon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    UserCircleIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import ProductImage from '~/assets/imgs/nha-gia-kim.jpg';
import Logo from '~/assets/imgs/logo.png';
import { CartContext } from '~/context/CartContext';
import * as utils from '~/utils/utils';
import { UserContext } from '~/context/UserContext';

function Header() {
    const { currUser, handleLogout } = useContext(UserContext);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const { cartItems, getCartTotal } = useContext(CartContext);

    return (
        <header className="fixed top-0 z-10 flex h-[--header-height] w-full items-center justify-center border-b-[2px] border-solid border-[--main-color] bg-white text-[--text-color]">
            <div className="flex h-full w-full max-w-7xl flex-row items-center justify-between px-3">
                <div className="flex h-full w-[80px] items-center lg:hidden">
                    <div className="h-[40px] w-[40px] p-1" onClick={() => setShowMobileMenu(true)}>
                        <Bars3Icon className="inline-block h-[36px] w-[36px] text-[--main-color]" />
                    </div>
                </div>
                <div className="h-full w-[130px] px-2">
                    <Link to="/" className="flex h-full w-full items-center justify-center lg:justify-start">
                        <img src={Logo} alt="logo" className="inline-block h-[72px] w-[72px]" />
                    </Link>
                </div>
                <ul className="hidden h-full lg:flex">
                    <li className="h-full px-4 hover:text-[--main-color]">
                        <Link to="/" className=" inline-flex h-full items-center justify-center font-bold">
                            Trang Chủ
                        </Link>
                    </li>
                    <li className="h-full px-4 hover:text-[--main-color]">
                        <a className=" inline-flex h-full items-center justify-center font-bold" href="#">
                            Tin Sách
                        </a>
                    </li>
                    <li className="group/products relative h-full px-4">
                        <Link
                            to="/products/genre/tat-ca"
                            className=" inline-flex h-full items-center justify-center font-bold hover:text-[--main-color]"
                        >
                            Sản Phẩm
                            <span className="ml-1 inline-flex items-center justify-center transition-transform duration-300 group-hover/products:rotate-180">
                                <ChevronDownIcon className="inline-block h-4 w-4" />
                            </span>
                        </Link>
                        <ul className="absolute left-0 top-full hidden min-w-[200px] rounded-md bg-white shadow-nav-popup before:absolute before:-top-3 before:left-8 before:block before:h-6 before:w-6 before:rotate-45 before:bg-white group-hover/products:inline-block">
                            <Link
                                to="/products/genre/ky-nang-song"
                                className="block cursor-pointer px-4 py-2 hover:text-[--main-color]"
                            >
                                <span className="inline-block h-full w-full">Kỹ Năng Sống</span>
                            </Link>
                            <Link
                                to="/products/genre/kinh-te"
                                className="block cursor-pointer px-4 py-2 hover:text-[--main-color]"
                            >
                                <span className="inline-block h-full w-full">Kinh Tế</span>
                            </Link>
                            <Link
                                to="/products/genre/kinh-dien"
                                className="block cursor-pointer px-4 py-2 hover:text-[--main-color]"
                            >
                                <span className="inline-block h-full w-full">Kinh Điển</span>
                            </Link>
                            <Link
                                to="/products/genre/tieu-thuyet"
                                className="block cursor-pointer px-4 py-2 hover:text-[--main-color]"
                            >
                                <span className="inline-block h-full w-full">Tiểu Thuyết</span>
                            </Link>
                            <Link
                                to="/products/genre/manga"
                                className="block cursor-pointer px-4 py-2 hover:text-[--main-color]"
                            >
                                <span className="inline-block h-full w-full">Manga</span>
                            </Link>
                        </ul>
                    </li>
                    <li className="h-full px-4 hover:text-[--main-color]">
                        <Link to="/contact" className=" inline-flex h-full items-center justify-center font-bold">
                            Liên Hệ
                        </Link>
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
                        {currUser ? (
                            <ul className="absolute left-0 top-full hidden min-w-[150px] rounded-md bg-white shadow-nav-popup before:absolute before:-top-3 before:left-8 before:block before:h-6 before:w-6 before:rotate-45 before:bg-white group-hover/account:inline-block">
                                <Link
                                    to="/account/profile"
                                    className="block cursor-pointer px-4 py-2 hover:text-[--main-color]"
                                >
                                    <span className="inline-block h-full w-full">Tài khoản</span>
                                </Link>
                                <span
                                    onClick={handleLogout}
                                    to="/account/register"
                                    className="block cursor-pointer px-4 py-2 hover:text-[--main-color]"
                                >
                                    <span className="inline-block h-full w-full">Đăng xuất</span>
                                </span>
                            </ul>
                        ) : (
                            <ul className="absolute left-0 top-full hidden min-w-[150px] rounded-md bg-white shadow-nav-popup before:absolute before:-top-3 before:left-8 before:block before:h-6 before:w-6 before:rotate-45 before:bg-white group-hover/account:inline-block">
                                <Link
                                    to="/account/login"
                                    className="block cursor-pointer px-4 py-2 hover:text-[--main-color]"
                                >
                                    <span className="inline-block h-full w-full">Đăng nhập</span>
                                </Link>
                                <Link
                                    to="/account/register"
                                    className="block cursor-pointer px-4 py-2 hover:text-[--main-color]"
                                >
                                    <span className="inline-block h-full w-full">Đăng ký</span>
                                </Link>
                            </ul>
                        )}
                    </div>
                    <div className="group/cart relative flex h-full items-center justify-center">
                        <div className="inline-flex cursor-pointer flex-col items-center p-2 lg:hidden">
                            <MagnifyingGlassIcon className="inline-block h-6 w-6" />
                        </div>
                        <Link to="/cart" className="inline-flex cursor-pointer flex-col items-center p-2">
                            <ShoppingCartIcon className="inline-block h-6 w-6" />
                            <span className="hidden font-bold lg:inline-block">Giỏ hàng</span>
                        </Link>
                        {cartItems.length !== 0 && (
                            <span className="absolute bottom-6 right-1 inline-flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-full bg-[--main-color] p-[2px] text-center text-[12px] leading-3 text-white lg:right-4 lg:top-4">
                                {cartItems.length}
                            </span>
                        )}
                        {cartItems.length !== 0 && (
                            <div className="absolute right-0 top-full hidden max-h-[50vh] min-w-[360px] rounded-md bg-white shadow-nav-popup before:absolute before:-top-3 before:right-[32px] before:block before:h-6 before:w-6 before:rotate-45 before:bg-white lg:group-hover/cart:inline-block 2xl:-left-[138px] 2xl:right-auto 2xl:before:left-[170px]">
                                <div className="flex items-center border-b border-solid border-gray-200 p-4">
                                    <ShoppingCartIcon className="inline-block h-4 w-4" />
                                    <span className="ml-2 text-base font-bold">Giỏ hàng {`(${cartItems.length})`}</span>
                                </div>
                                <ul className="flex max-h-items-cart-header w-full flex-1 flex-col overflow-y-scroll">
                                    {cartItems.map((cartItem) => (
                                        <li
                                            key={cartItem.id}
                                            className="cursor-pointer px-4 py-3 hover:text-[--main-color]"
                                        >
                                            <span className="flex">
                                                <img
                                                    className="inline-block w-[68px]"
                                                    src={cartItem.image || ProductImage}
                                                    alt={cartItem.name}
                                                />
                                                <div className="flex flex-col">
                                                    <h5 className="text-base">{cartItem.name}</h5>
                                                    <span className="font-bold">
                                                        {utils.formatNumber(cartItem.price)}đ x{cartItem.quantity}
                                                    </span>
                                                </div>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-between border-t border-solid border-gray-200 p-4">
                                    <div className="flex flex-col">
                                        <span>Tổng cộng</span>
                                        <span className="font-bold text-[--main-color]">
                                            {utils.formatNumber(getCartTotal())}đ
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="flex w-[186px] shrink-0 items-center justify-center rounded-md bg-[--main-color] px-6 py-3 font-bold text-white"
                                    >
                                        Xem giỏ hàng
                                    </Link>
                                </div>
                            </div>
                        )}
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
                    <Link to="/" className="block w-full hover:text-[--main-color]">
                        <span className="inline-block w-full p-2 font-bold">Trang Chủ</span>
                    </Link>
                    <li className="w-full hover:text-[--main-color]">
                        <a className="inline-block w-full p-2 font-bold" href="#">
                            Tin Sách
                        </a>
                    </li>
                    <li>
                        <span className="inline-flex w-full flex-col px-2 font-bold" href="#">
                            <Link
                                to="/products/genre/tat-ca"
                                className="flex justify-between py-2 hover:text-[--main-color]"
                            >
                                <span>Sản Phẩm</span>
                                <span
                                    className={`ml-1 inline-flex items-center justify-center transition-transform duration-300 ${productsCollapse ? '' : 'rotate-180'}`}
                                    onClick={() => setProductsCollapse(!productsCollapse)}
                                >
                                    <ChevronDownIcon className="inline-block h-4 w-4" />
                                </span>
                            </Link>
                            <ul className={`flex-col ${productsCollapse ? 'hidden' : 'flex'}`}>
                                <Link
                                    to="/products/genre/ky-nang-song"
                                    className="block w-full hover:text-[--main-color]"
                                >
                                    <span className="inline-block w-full p-2 font-bold">Kỹ Năng Sống</span>
                                </Link>
                                <Link to="/products/genre/kinh-te" className="block w-full hover:text-[--main-color]">
                                    <span className="inline-block w-full p-2 font-bold">Kinh Tế</span>
                                </Link>
                                <Link to="/products/genre/kinh-dien" className="block w-full hover:text-[--main-color]">
                                    <span className="inline-block w-full p-2 font-bold">Kinh Điển</span>
                                </Link>
                                <Link
                                    to="/products/genre/tieu-thuyet"
                                    className="block w-full hover:text-[--main-color]"
                                >
                                    <span className="inline-block w-full p-2 font-bold">Tiểu Thuyết</span>
                                </Link>
                                <Link to="/products/genre/manga" className="block w-full hover:text-[--main-color]">
                                    <span className="inline-block w-full p-2 font-bold">Manga</span>
                                </Link>
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
