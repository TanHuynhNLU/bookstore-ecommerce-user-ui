import { NavLink } from 'react-router-dom';

function AccountSidebar() {
    return (
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
    );
}

export default AccountSidebar;
