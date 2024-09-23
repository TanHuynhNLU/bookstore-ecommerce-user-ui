/* eslint-disable jsx-a11y/iframe-has-title */
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { MapPinIcon, PhoneIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

function Contact() {
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
                            <span className="ml-1 font-bold">Liên hệ</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="my-3 flex w-full max-w-7xl flex-col">
                    <h5 className="mb-2 px-2 text-2xl font-bold text-[--main-color]">Liên hệ</h5>
                    <div className="flex flex-col-reverse lg:flex-col">
                        <div className="mb-8 px-2">
                            <iframe
                                className="h-[450px] w-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5543.303495111024!2d106.72494680827042!3d10.757011851481057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752598399ff491%3A0x6a97013b0cc51cb7!2zQ-G6p3UgdMOgdSBLMTJB!5e0!3m2!1sen!2s!4v1727074210109!5m2!1sen!2s"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col md:flex-row">
                                <div className="flex w-full p-2 text-[--text-color] lg:w-1/3">
                                    <div className="flex w-full items-center rounded-sm bg-[#f7f7f7] p-2">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[--main-color]">
                                            <MapPinIcon className="inline-block h-5 w-5 text-white" />
                                        </div>
                                        <div className="ml-2 flex flex-col">
                                            <span className="font-bold">Địa chỉ:</span>
                                            <span>Số 123, Phường 456, Quận 789, TP.HCM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full p-2 text-[--text-color] lg:w-1/3">
                                    <div className="flex w-full items-center rounded-sm bg-[#f7f7f7] p-2">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[--main-color]">
                                            <QuestionMarkCircleIcon className="inline-block h-5 w-5 text-white" />
                                        </div>
                                        <div className="ml-2 flex flex-col">
                                            <span className="font-bold">Gửi thắc mắc:</span>
                                            <span>info@noname.vn</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full p-2 text-[--text-color] lg:w-1/3">
                                    <div className="flex w-full items-center rounded-sm bg-[#f7f7f7] p-2">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[--main-color]">
                                            <PhoneIcon className="inline-block h-5 w-5 text-white" />
                                        </div>
                                        <div className="ml-2 flex flex-col">
                                            <span className="font-bold">Điện thoại:</span>
                                            <span>0123456789</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <form className="flex w-full flex-col lg:flex-row" action="">
                                    <div className="flex w-full flex-col lg:w-1/3">
                                        <div className="flex flex-col p-2">
                                            <label className="mb-2 font-bold text-[--text-color]" htmlFor="fullName">
                                                Họ và tên <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="fullName"
                                                className="h-10 rounded-md bg-[#f7f7f7] px-3 text-[--text-color] outline-none"
                                                type="text"
                                            />
                                        </div>
                                        <div className="flex flex-col p-2">
                                            <label className="mb-2 font-bold text-[--text-color]" htmlFor="email">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="email"
                                                className="h-10 rounded-md bg-[#f7f7f7] px-3 text-[--text-color] outline-none"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex h-full w-full flex-col lg:w-2/3">
                                        <div className="flex h-full flex-col p-2">
                                            <label className="mb-2 font-bold text-[--text-color]" htmlFor="fullName">
                                                Nội dung <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="fullName"
                                                className="h-[128px] rounded-md bg-[#f7f7f7] p-3 text-[--text-color] outline-none"
                                                type="text"
                                            />
                                        </div>
                                        <div className="p-2">
                                            <button className="flex h-10 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] px-4 py-2 font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]">
                                                Gửi liên hệ
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
