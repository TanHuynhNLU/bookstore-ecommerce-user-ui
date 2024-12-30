import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '~/context/UserContext';

function Profile() {
    return (
        <div>
            <div className="flex items-center justify-center bg-banner">
                <div className="w-full max-w-7xl px-2 py-3">
                    <ul className="flex">
                        <Link to="/" className="block hover:text-[--main-color]">
                            <span>Trang chủ</span>
                        </Link>
                        <li className="ml-1 text-[--main-color]">
                            <ChevronRightIcon className="inline-block h-4 w-4" />
                            <span className="ml-1 font-bold">Thông tin cá nhân</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="my-3 flex w-full max-w-7xl flex-col px-2 md:flex-row md:items-start md:space-x-2">
                    <div className="mb-8 w-full p-2 shadow-md md:mb-0 md:w-1/4">
                        <div className="py-2">
                            <h5 className="font-bold">TRANG TÀI KHOẢN</h5>
                            <ul>
                                <NavLink
                                    to="/account/profile"
                                    className="block cursor-pointer py-1 hover:text-[--main-color]"
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--main-color)' : 'black',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                    })}
                                >
                                    <span>Thông tin tài khoản</span>
                                </NavLink>
                                <NavLink
                                    to="/account/orders"
                                    className="block cursor-pointer py-1 hover:text-[--main-color]"
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--main-color)' : 'black',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                    })}
                                >
                                    <span>Đơn hàng của bạn</span>
                                </NavLink>
                                <NavLink
                                    to="/account/change-password"
                                    className="block cursor-pointer py-1 hover:text-[--main-color]"
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--main-color)' : 'black',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                    })}
                                >
                                    <span>Đổi mật khẩu</span>
                                </NavLink>
                                <NavLink
                                    to="/account/logout"
                                    className="block cursor-pointer py-1 hover:text-[--main-color]"
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--main-color)' : 'black',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                    })}
                                >
                                    <span>Đăng xuất</span>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-3/4">
                        <h5 className="text-xl font-semibold">THÔNG TIN TÀI KHOẢN</h5>
                        <form className="mt-4" action="">
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="fullName" className="mb-2">
                                    Họ Tên
                                </label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    className="w-full max-w-[400px] rounded-lg border border-solid border-gray-300 p-2.5 focus:border-[--main-color] focus:outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="email" className="mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    className="w-full max-w-[400px] rounded-lg border border-solid border-gray-300 p-2.5 focus:border-[--main-color] focus:outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="phone" className="mb-2">
                                    Số điện thoại
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    className="w-full max-w-[400px] rounded-lg border border-solid border-gray-300 p-2.5 focus:border-[--main-color] focus:outline-none"
                                    type="text"
                                />
                            </div>
                            <button className="w-full max-w-[400px] rounded-md bg-[--main-color] px-6 py-3 font-bold text-white hover:opacity-80">
                                Cập nhật
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
