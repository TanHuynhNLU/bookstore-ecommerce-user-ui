import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import AccountSidebar from '~/components/AccountSidebar';

import { UserContext } from '~/context/UserContext';
import * as userService from '~/services/UserService';

function Profile() {
    const { currUser, handleLogin } = useContext(UserContext);
    const [formData, setFormData] = useState(currUser);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchAPI = async () => {
            const res = await userService.updateUser(formData);
            if (res?.status === 'OK') {
                toast.success(res.message, {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                handleLogin(formData);
            }
        };
        fetchAPI();
    };
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
                        <AccountSidebar />
                    </div>
                    <div className="w-full px-4 md:w-3/4">
                        <h5 className="text-xl font-semibold">THÔNG TIN TÀI KHOẢN</h5>
                        <form className="mt-4" onSubmit={handleSubmit}>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="fullName" className="mb-2">
                                    Họ Tên
                                </label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    className="w-full max-w-[400px] rounded-lg border border-solid border-gray-300 p-2.5 focus:border-[--main-color] focus:outline-none"
                                    type="text"
                                    value={formData.fullName}
                                    onChange={handleOnChange}
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
                                    value={formData.phone}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="birthday" className="mb-2">
                                    Ngày sinh
                                </label>
                                <input
                                    id="birthday"
                                    name="birthday"
                                    className="w-full max-w-[400px] rounded-lg border border-solid border-gray-300 p-2.5 focus:border-[--main-color] focus:outline-none"
                                    type="date"
                                    value={formData.birthday || ''}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="address" className="mb-2">
                                    Địa chỉ
                                </label>
                                <input
                                    id="address"
                                    name="address"
                                    className="w-full max-w-[400px] rounded-lg border border-solid border-gray-300 p-2.5 focus:border-[--main-color] focus:outline-none"
                                    type="text"
                                    value={formData.address}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full max-w-[400px] rounded-md bg-[--main-color] px-6 py-3 font-bold text-white hover:opacity-80"
                            >
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
