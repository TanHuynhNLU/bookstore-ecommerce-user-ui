import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as authService from '~/services/AuthenService';

function Register() {
    const [formData, setFormData] = useState({});

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchAPI = async () => {
            const res = await authService.register({
                fullName: formData.fullName,
                username: formData.email,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
            });
            if (res?.status === 'CREATED') {
                toast.success('Đăng kí thành công', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            }
        };
        fetchAPI();
    };
    return (
        <div>
            <div className="flex items-center justify-center bg-banner">
                <div className="w-full max-w-7xl px-2 py-3">
                    <ul className="flex">
                        <Link to="/" className="hover:text-[--main-color]">
                            <span>Trang chủ</span>
                        </Link>
                        <li className="ml-1 text-[--main-color]">
                            <ChevronRightIcon className="inline-block h-4 w-4" />
                            <span className="ml-1 font-bold">Đăng ký tài khoản</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center px-2">
                <div className="my-[30px] flex w-full max-w-[840px] flex-col-reverse border border-solid border-[--main-color] md:flex-row ">
                    <div className="flex-1 p-[30px]">
                        <h5 className="mb-2 text-xl font-bold text-[--main-color]">Đăng ký tài khoản</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="fullName" className="mb-2 font-semibold">
                                    Họ tên <span className=" text-red-500">*</span>
                                </label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    className="rounded-md border border-gray-300 px-4 py-2 outline-none"
                                    placeholder="Họ tên"
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="phone" className="mb-2 font-semibold">
                                    Số điện thoại <span className=" text-red-500">*</span>
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    className="rounded-md border border-gray-300 px-4 py-2 outline-none"
                                    placeholder="Số điện thoại"
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="email" className="mb-2 font-semibold">
                                    Email <span className=" text-red-500">*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="rounded-md border border-gray-300 px-4 py-2 outline-none"
                                    placeholder="Email"
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="password" className="mb-2 font-semibold">
                                    Mật khẩu <span className=" text-red-500">*</span>
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="rounded-md border border-gray-300 px-4 py-2 outline-none"
                                    placeholder="Mật khẩu"
                                    min={8}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="h-[40px] w-full rounded-md bg-[--main-color] font-bold uppercase text-white"
                            >
                                Đăng ký
                            </button>
                        </form>
                    </div>
                    <div className="w-full bg-[--main-color] p-[30px] md:w-[290px]">
                        <h5 className="mb-2 text-xl font-bold text-white">Quyền lợi thành viên</h5>
                        <div className="mt-5 text-white">
                            <p className="mb-4 font-semibold">Vận chuyển siêu tốc</p>
                            <p className="mb-4 font-semibold">Sản phẩm đa dạng</p>
                            <p className="mb-4 font-semibold">Đổi trả dễ dàng</p>
                            <p className="mb-4 font-semibold">Tích điểm đổi quà</p>
                        </div>
                        <Link
                            to="/account/login"
                            className="inline-flex h-[40px] items-center justify-center border border-solid px-[40px] font-semibold text-white"
                        >
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
