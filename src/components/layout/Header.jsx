import Logo from '~/assets/imgs/logo.png';

function Header() {
    return (
        <div className="flex h-[90px] w-full justify-center border-b-[2px] border-solid border-[--main-color]">
            <div className="flex h-full w-full max-w-7xl flex-row">
                <div className="h-full w-[215px] px-2">
                    <a className=" flex h-full w-full items-center" href="#">
                        <img src={Logo} alt="logo" className="inline-block h-[72px] w-[72px]" />
                    </a>
                </div>
                <ul className="flex h-full ">
                    <li className="ml-2 h-full px-4">
                        <a className="inline-block inline-flex h-full items-center justify-center font-bold" href="#">
                            Trang Chủ
                        </a>
                    </li>
                    <li className="ml-2 h-full px-4">
                        <a className="inline-block inline-flex h-full items-center justify-center font-bold" href="#">
                            Tin Sách
                        </a>
                    </li>
                    <li className="ml-2 h-full px-4">
                        <a className="inline-block inline-flex h-full items-center justify-center font-bold" href="#">
                            Sản Phẩm
                        </a>
                    </li>
                    <li className="ml-2 h-full px-4">
                        <a className="inline-block inline-flex h-full items-center justify-center font-bold" href="#">
                            Liên Hệ
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
