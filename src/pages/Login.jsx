import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '~/context/UserContext';

import * as authService from '~/services/AuthenService';

function Login() {
    const { handleLogin } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchAPI = async () => {
            const res = await authService.login(formData.username, formData.password);
            if (res.status === 'OK') {
                handleLogin(res.data.user);
                navigate('/');
            } else {
                toast.error(res.message, {
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
                            <span className="ml-1 font-bold">Đăng nhập</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center px-2">
                <div className="my-[30px] flex w-full max-w-[840px] flex-col-reverse border border-solid border-[--main-color] md:flex-row ">
                    <div className="flex-1 p-[30px]">
                        <h5 className="mb-2 text-xl font-bold text-[--main-color]">Đăng nhập tài khoản</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="username" className="mb-2 font-semibold">
                                    Tài khoản <span className=" text-red-500">*</span>
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    className="rounded-md border border-gray-300 px-4 py-2 outline-none"
                                    placeholder="Tài khoản"
                                    required
                                    onChange={handleOnChange}
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
                                    required
                                    onChange={handleOnChange}
                                />
                            </div>
                            <button className="h-[40px] w-full rounded-md bg-[--main-color] font-bold uppercase text-white">
                                Đăng nhập
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
                            to="/account/register"
                            className="inline-flex h-[40px] items-center justify-center border border-solid px-[40px] font-semibold text-white"
                        >
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
