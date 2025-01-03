import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AccountSidebar from '~/components/AccountSidebar';
import { UserContext } from '~/context/UserContext';
import * as orderService from '~/services/OrderService';
import * as utils from '~/utils/utils';
import moment from 'moment';

function Orders() {
    const { currUser } = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await orderService.getOrderByEmail(currUser.email);
            setOrders(res.data);
        };
        fetchAPI();
    }, []);
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
                            <span className="ml-1 font-bold">Đơn hàng của bạn</span>
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
                        <h5 className="text-xl font-semibold">ĐƠN HÀNG CỦA BẠN</h5>
                        <div className="w-full overflow-x-auto">
                            <table className="w-full table-fixed border-collapse">
                                <thead>
                                    <tr className="bg-[--main-color] text-left text-white">
                                        <th className="w-[150px] border border-solid border-gray-400 p-1">Đơn hàng</th>
                                        <th className="w-[100px] border border-solid border-gray-400 p-1">Ngày</th>
                                        <th className="w-[300px] border border-solid border-gray-400 p-1">Địa chỉ</th>
                                        <th className="w-[150px] border border-solid border-gray-400 p-1">
                                            Trạng thái
                                        </th>
                                        <th className="w-[150px] border border-solid border-gray-400 p-1">
                                            TT Thanh toán
                                        </th>
                                    </tr>
                                </thead>
                                {orders.length === 0 && <p>Không có đơn hàng.</p>}
                                {orders.length !== 0 &&
                                    orders.map((order) => (
                                        <tbody>
                                            <tr className="text-left">
                                                <td className="border border-solid border-gray-400 p-1">{order.id}</td>
                                                <td className="border border-solid border-gray-400 p-1">
                                                    {moment(order.dateCreatedOrdinal).format('DD-MM-YYYY')}
                                                </td>
                                                <td className="border border-solid border-gray-400 p-1">
                                                    {order.customer.shippingAddress}
                                                </td>
                                                <td className="border border-solid border-gray-400 p-1">
                                                    {order.status}
                                                </td>
                                                <td className="border border-solid border-gray-400 p-1">
                                                    {utils.formatNumber(order.totalPrice)}
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;
