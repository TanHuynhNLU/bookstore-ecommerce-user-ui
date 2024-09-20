import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

import Logo from '~/assets/imgs/logo.png';
import PaymentMethod from '~/assets/imgs/payment-method.jpg';

function Footer() {
    return (
        <footer className="flex items-center justify-center border-t-2 border-solid border-[--main-color] py-3">
            <div className="flex w-full max-w-7xl flex-wrap">
                <div className="w-full px-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <a href="#" className="inline-block">
                            <img className="inline-block h-[64px] w-[64px]" src={Logo} alt="Logo" />
                        </a>
                    </div>
                    <ul>
                        <li className="flex items-center py-1">
                            <span className="mr-2">
                                <MapPinIcon className="inline-block h-6 w-6 text-[--main-color]" />
                            </span>
                            <p>Số 123, Phường 456, Quận 789, TP.HCM</p>
                        </li>
                        <li className="flex items-center py-1">
                            <span className="mr-2">
                                <EnvelopeIcon className="inline-block h-6 w-6 text-[--main-color]" />
                            </span>
                            <a className="hover:text-[--main-color]" href="mailto:text@gmail.com">
                                text@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center py-1">
                            <span className="mr-2">
                                <PhoneIcon className="inline-block h-6 w-6 text-[--main-color]" />
                            </span>
                            <a className="hover:text-[--main-color]" href="tel:text@gmail.com">
                                0123456789
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full px-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div className="mb-2 flex h-[64px] items-end">
                        <h4 className="mt-auto font-bold text-[--main-color]">GIỚI THIỆU</h4>
                    </div>
                    <ul>
                        <li className="flex items-center py-1">
                            <a className="hover:text-[--main-color]" href="#">
                                Về chúng tôi
                            </a>
                        </li>
                        <li className="flex items-center py-1">
                            <a className="hover:text-[--main-color]" href="#">
                                Hệ thống hiệu sách
                            </a>
                        </li>
                        <li className="flex items-center py-1">
                            <a className="hover:text-[--main-color]" href="#">
                                Hệ thống phát hành
                            </a>
                        </li>
                        <li className="flex items-center py-1">
                            <a className="hover:text-[--main-color]" href="#">
                                Tuyển dụng
                            </a>
                        </li>
                        <li className="flex items-center py-1">
                            <a className="hover:text-[--main-color]" href="#">
                                Liên hệ với chúng tôi
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full px-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div className="mb-2 flex h-[64px] items-end">
                        <h4 className="mt-auto font-bold text-[--main-color]">CHÍNH SÁCH</h4>
                    </div>
                    <ul>
                        <li className="flex items-center py-1">
                            <a className="hover:text-[--main-color]" href="#">
                                Chính sách bảo mật
                            </a>
                        </li>
                        <li className="flex items-center py-1">
                            <a className="hover:text-[--main-color]" href="#">
                                Chính sách đổi trả/hoàn tiền
                            </a>
                        </li>
                        <li className="flex items-center py-1">
                            <a className="hover:text-[--main-color]" href="#">
                                Chính sách thanh toán/vận chuyển
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full px-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div className="mb-2 flex h-[64px] items-end">
                        <h4 className="mt-auto font-bold text-[--main-color]">PHƯƠNG THỨC THANH TOÁN</h4>
                    </div>
                    <img src={PaymentMethod} alt="Payment Method" className="inline-block w-full max-w-[350px]" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
