import { ArrowLeftIcon, CurrencyDollarIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Select from 'react-select';
import { useEffect, useState } from 'react';

import Logo from '~/assets/imgs/logo.png';
import { cities } from '~/data/AddressVn';
import BookImage from '~/assets/imgs/nha-gia-kim.jpg';
function Checkout() {
    const [city, setCity] = useState();
    const [cityOptions, setCityOptions] = useState([]);
    const [districtOptions, setDistrictOptions] = useState([]);
    const [district, setDistrict] = useState();
    const [wardOptions, setWardOptions] = useState([]);
    const [ward, setWard] = useState();

    const customStyles = {
        menuList: (provided) => ({
            ...provided,
            maxHeight: '200px', // Set the max height for the list
            overflowY: 'auto', // Make the list scrollable when needed
        }),
        control: (provided, state) => ({
            ...provided,
            minHeight: '44px', // Set the custom height
            borderColor: state.isFocused ? '#228b22' : '#d1d5db', // Blue border on focus, gray otherwise
            boxShadow: 'none',
            borderRadius: '0.5rem',
            '&:hover': {
                borderColor: '#228b22', // Optional: Border color on hover
            },
        }),
    };

    useEffect(() => {
        const options = cities.map((city) => ({
            value: city.Id,
            label: city.Name,
        }));
        setCityOptions(options);
    }, []);

    useEffect(() => {
        if (city) {
            const cityFinded = cities.find((data) => data.Id === city.value);

            const options = cityFinded.Districts.map((district) => ({
                value: district.Id,
                label: district.Name,
            }));
            setDistrictOptions(options);
            setDistrict(null);
            setWard(null);
        }
    }, [city]);
    useEffect(() => {
        if (district) {
            const cityFinded = cities.find((data) => data.Id === city.value);
            const districtFinded = cityFinded.Districts.find((data) => data.Id === district.value);

            const options = districtFinded.Wards.map((ward) => ({
                value: ward.Id,
                label: ward.Name,
            }));
            setWardOptions(options);
            setWard(null);
        }
    }, [district]);

    return (
        <div className="flex items-center justify-center">
            <div className="flex w-full max-w-[1330px] flex-col-reverse lg:flex-row">
                <div className="w-full border-solid border-gray-300 p-6 lg:h-screen lg:w-[65%] lg:border-r lg:p-3">
                    <div className="mt-3 hidden px-3 pb-5 lg:block">
                        <a href="#">
                            <img src={Logo} alt="logo" className="inline-block h-[72px] w-[72px]" />
                        </a>
                    </div>
                    <form className="flex justify-center lg:justify-start">
                        <div className="flex w-full max-w-[560px] flex-col items-center lg:max-w-none lg:flex-row lg:items-start">
                            <div className="w-full lg:w-1/2 lg:px-3">
                                <div className="mb-3 flex items-center justify-between">
                                    <h3 className="text-xl font-bold">Thông tin nhận hàng</h3>
                                    <a href="#" className="flex items-center text-[--main-color] hover:opacity-80">
                                        <UserCircleIcon className="inline-block h-6 w-6" />
                                        <span>Đăng nhập</span>
                                    </a>
                                </div>
                                <div className="relative py-[6px]">
                                    <input
                                        type="text"
                                        id="email"
                                        className="peer block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-transparent px-2.5 pb-2.5 pt-3 text-sm text-gray-900 focus:border-[--main-color] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[--main-color]"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-3 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[--main-color] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-[--main-color]"
                                    >
                                        Email
                                    </label>
                                </div>
                                <div className="relative py-[6px]">
                                    <input
                                        type="text"
                                        id="fullname"
                                        className="peer block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-transparent px-2.5 pb-2.5 pt-3 text-sm text-gray-900 focus:border-[--main-color] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[--main-color]"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="fullname"
                                        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-3 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[--main-color] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-[--main-color]"
                                    >
                                        Họ tên (*)
                                    </label>
                                </div>
                                <div className="relative py-[6px]">
                                    <input
                                        type="text"
                                        id="phone"
                                        className="peer block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-transparent px-2.5 pb-2.5 pt-3 text-sm text-gray-900 focus:border-[--main-color] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[--main-color]"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="phone"
                                        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-3 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[--main-color] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-[--main-color]"
                                    >
                                        Số điện thoại (*)
                                    </label>
                                </div>

                                <div className="py-1.5">
                                    <Select
                                        placeholder="Tỉnh thành (*)"
                                        styles={customStyles}
                                        options={cityOptions}
                                        onChange={(option) => setCity(option)}
                                        value={city}
                                    />
                                </div>
                                <div className="py-1.5">
                                    <Select
                                        placeholder="Quận huyện (*)"
                                        styles={customStyles}
                                        options={districtOptions}
                                        onChange={(option) => setDistrict(option)}
                                        value={district}
                                        isDisabled={!city}
                                    />
                                </div>
                                <div className="py-1.5">
                                    <Select
                                        placeholder="Phường xã (*)"
                                        styles={customStyles}
                                        options={wardOptions}
                                        onChange={(option) => setWard(option)}
                                        value={ward}
                                        isDisabled={!district}
                                    />
                                </div>
                                <div className="relative py-[6px]">
                                    <input
                                        type="text"
                                        id="address"
                                        className="peer block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-transparent px-2.5 pb-2.5 pt-3 text-sm text-gray-900 focus:border-[--main-color] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[--main-color]"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="address"
                                        className="absolute start-1 top-2 z-0 origin-[0] -translate-y-3 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[--main-color] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-[--main-color]"
                                    >
                                        Số nhà, ấp
                                    </label>
                                </div>
                                <div className="relative py-[6px]">
                                    <textarea
                                        type="text"
                                        id="note"
                                        className="peer block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-transparent px-2.5 pb-2.5 pt-3 text-sm text-gray-900 focus:border-[--main-color] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[--main-color]"
                                        placeholder=""
                                    />
                                    <label
                                        htmlFor="note"
                                        className="absolute start-1 top-2 z-0 origin-[0] -translate-y-3 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[--main-color] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-[--main-color]"
                                    >
                                        Ghi chú
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 lg:px-3">
                                <div className="mb-3 mt-3 flex items-center justify-between lg:mt-0">
                                    <h3 className="text-xl font-bold">Vận chuyển</h3>
                                </div>
                                <div className="relative py-[6px]">
                                    <div className="flex items-center rounded-lg border border-solid border-gray-300 p-[14px] focus:border-[--main-color] dark:border-gray-600 dark:text-white dark:focus:border-[--main-color]">
                                        <input
                                            id="shippingMethod"
                                            type="radio"
                                            className="mr-3 h-[18px] w-[18px] accent-[--main-color]"
                                            checked
                                        />
                                        <label
                                            className="flex flex-1 items-center justify-between"
                                            htmlFor="shippingMethod"
                                        >
                                            <span>Giao hàng tận nơi</span>
                                            <span>40.000₫</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3 mt-6 flex items-center justify-between">
                                    <h3 className="text-xl font-bold">Thanh toán</h3>
                                </div>
                                <div className="relative py-[6px]">
                                    <div className="flex items-center rounded-lg border border-solid border-gray-300 p-[14px] focus:border-[--main-color] dark:border-gray-600 dark:text-white dark:focus:border-[--main-color]">
                                        <input
                                            id="paymentMethod"
                                            type="radio"
                                            className="mr-3 h-[18px] w-[18px] accent-[--main-color]"
                                            checked
                                        />
                                        <label
                                            className="flex flex-1 items-center justify-between"
                                            htmlFor="paymentMethod"
                                        >
                                            <span>Thanh toán khi giao hàng (COD)</span>
                                            <CurrencyDollarIcon className="inline-block h-6 w-6 text-[--main-color]" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 flex w-full flex-col items-center lg:hidden">
                                <button className="w-full rounded-md bg-[--main-color] px-6 py-3 text-white hover:opacity-80">
                                    ĐẶT HÀNG
                                </button>
                                <a
                                    href="#"
                                    className="mt-3 inline-flex items-center text-[--main-color] hover:opacity-80"
                                >
                                    <ArrowLeftIcon className="h-4 w-4" />
                                    <span className="ml-1">Quay về giỏ hàng</span>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="w-full border-b border-solid border-gray-300 lg:h-screen lg:w-[35%]">
                    <div className="flex justify-center border-b border-solid border-gray-300 p-6 text-xl font-bold lg:justify-start">
                        <div className="w-full max-w-[560px]">Đơn hàng (3 sản phẩm)</div>
                    </div>
                    <div className="flex justify-center p-6 lg:justify-start">
                        <div className="w-full max-w-[560px]">
                            <ul className="border-b border-solid border-gray-300 py-1.5">
                                <li className="flex py-1.5">
                                    <div className="relative h-[50px] w-[50px]">
                                        <img
                                            src={BookImage}
                                            alt="BookImage"
                                            className="inline-block h-full w-full overflow-hidden rounded-sm border border-solid object-cover"
                                        />
                                        <span className="absolute right-0 top-0 inline-flex h-5 w-5 -translate-y-2.5 translate-x-2.5 items-center justify-center rounded-full bg-[--main-color] text-white">
                                            3
                                        </span>
                                    </div>
                                    <div className="flex-1 pl-3">
                                        <span>Nhà giả kim</span>
                                    </div>
                                    <div className="w-[80px] pl-3">300.000₫</div>
                                </li>
                            </ul>
                            <div className="border-b border-solid border-gray-300 py-3">
                                <div className="flex items-center justify-between">
                                    <span>Tạm tính</span>
                                    <span>300.000₫</span>
                                </div>
                                <div className="mt-2 flex items-center justify-between">
                                    <span>Phí vận chuyển</span>
                                    <span>40.000₫</span>
                                </div>
                            </div>
                            <div className="py-3">
                                <div className="mb-3 flex items-center justify-between text-xl font-bold">
                                    <span>Tổng cộng</span>
                                    <span className="text-[--main-color]">340.000₫</span>
                                </div>
                                <div className="hidden items-center justify-between lg:flex">
                                    <a
                                        href="#"
                                        className="inline-flex items-center text-[--main-color] hover:opacity-80"
                                    >
                                        <ArrowLeftIcon className="h-4 w-4" />
                                        <span className="ml-1">Quay về giỏ hàng</span>
                                    </a>
                                    <button className="rounded-md bg-[--main-color] px-6 py-3 text-white hover:opacity-80">
                                        ĐẶT HÀNG
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="flex h-[77px] items-center justify-center border-b border-solid border-gray-300 lg:hidden">
                    <a href="#">
                        <img src={Logo} alt="logo" className="inline-block h-[40px] w-[40px]" />
                    </a>
                </header>
            </div>
        </div>
    );
}

export default Checkout;