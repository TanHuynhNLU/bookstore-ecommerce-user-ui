import { ChevronRightIcon, ShoppingCartIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';
import { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import BookImage from '~/assets/imgs/nha-gia-kim.jpg';
import { CartContext } from '~/context/CartContext';
import * as productService from '~/services/ProductService';
import * as utils from '~/utils/utils';

function Products() {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    let { genre } = useParams();

    const paramsMapping = {
        'tat-ca': '',
        'ky-nang-song': 'Kỹ Năng Sống',
        'kinh-te': 'Kinh Tế',
        'kinh-dien': 'Kinh Điển',
        'tieu-thuyet': 'Tiểu Thuyết',
        manga: 'Manga',
    };

    const sortMapping = {
        '': 'Mặc định',
        '-id': 'Sách mới',
        price: 'Giá thấp - cao',
        '-price': 'Giá cao - thấp',
        '-sales': 'Bán chạy',
    };
    const [filters, setFilters] = useState({
        genres: paramsMapping[genre],
        publishers: [],
        priceRanges: [],
        page: 0,
        size: 8,
        sort: '',
    });

    const [books, setBooks] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const handlePriceRangeChecked = (e) => {
        const { name, checked } = e.target;
        if (!checked) {
            const priceRangesFiltered = filters.priceRanges.filter((priceRange) => priceRange !== name);
            setFilters({ ...filters, priceRanges: priceRangesFiltered });
        } else {
            setFilters({ ...filters, priceRanges: [...filters.priceRanges, name] });
        }
    };
    const handlePublisherChecked = (e) => {
        const { name, checked } = e.target;
        if (!checked) {
            const publishersFiltered = filters.publishers.filter((publisher) => publisher !== name);
            setFilters({ ...filters, publishers: publishersFiltered });
        } else {
            setFilters({ ...filters, publishers: [...filters.publishers, name] });
        }
    };

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        setFilters({ ...filters, page: event.selected });
    };

    const handleAddToCart = (product) => {
        addToCart({ ...product, quantity: 1 });
        toast.success('Thêm vào giỏ hàng thành công', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    const handleCheckout = (product) => {
        addToCart({ ...product, quantity: 1 });
        navigate('/checkout');
    };

    useEffect(() => {
        setFilters({ ...filters, genres: paramsMapping[genre] });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [genre]);

    // Fetching products from API by filter
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await productService.getBooksByFilter(filters);
            setBooks(res.items);
            setTotalPages(res.totalPages);
        };
        fetchAPI();
    }, [filters]);

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
                            <span className="ml-1 font-bold">Sản phẩm</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="my-3 flex w-full max-w-7xl flex-col px-2 md:flex-row md:space-x-2">
                    <div className="mb-8 w-full p-2 shadow-md md:mb-0 md:w-1/4">
                        <div className="border-b-2 border-solid border-gray-200 py-2">
                            <h5 className="font-bold">NHÓM SẢN PHẨM</h5>
                            <ul>
                                <NavLink
                                    to="/products/genre/tat-ca"
                                    className="block cursor-pointer py-1 hover:text-[--main-color]"
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--main-color)' : 'black',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                    })}
                                >
                                    <span>Tất Cả Sản Phẩm</span>
                                </NavLink>
                                <NavLink
                                    to="/products/genre/ky-nang-song"
                                    className="block cursor-pointer py-1 hover:text-[--main-color]"
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--main-color)' : 'black',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                    })}
                                >
                                    <span>Kỹ Năng Sống</span>
                                </NavLink>
                                <NavLink
                                    to="/products/genre/kinh-te"
                                    className="block cursor-pointer py-1 hover:text-[--main-color]"
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--main-color)' : 'black',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                    })}
                                >
                                    <span>Kinh Tế</span>
                                </NavLink>
                                <NavLink
                                    to="/products/genre/kinh-dien"
                                    className="block cursor-pointer py-1 hover:text-[--main-color]"
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--main-color)' : 'black',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                    })}
                                >
                                    <span>Kinh Điển</span>
                                </NavLink>
                                <NavLink
                                    to="/products/genre/tieu-thuyet"
                                    className="block cursor-pointer py-1 hover:text-[--main-color]"
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--main-color)' : 'black',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                    })}
                                >
                                    <span>Tiểu Thuyết</span>
                                </NavLink>
                                <NavLink
                                    to="/products/genre/manga"
                                    className="cursor-pointer py-1 hover:text-[--main-color]"
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--main-color)' : 'black',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                    })}
                                >
                                    <span>Manga</span>
                                </NavLink>
                            </ul>
                        </div>
                        <div className="border-b-2 border-solid border-gray-200 py-2">
                            <h5 className="font-bold">GIÁ</h5>
                            <div className="flex flex-col px-2">
                                <div className="py-1">
                                    <input
                                        id="0-150000"
                                        name="0-150000"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                        onChange={handlePriceRangeChecked}
                                    />
                                    <label htmlFor="0-150000" className="ml-2 cursor-pointer hover:text-[--main-color]">
                                        0đ - 150,000đ
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="150000-300000"
                                        name="150000-300000"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                        onChange={handlePriceRangeChecked}
                                    />
                                    <label
                                        htmlFor="150000-300000"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        150,000đ - 300,000đ
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="300000-500000"
                                        name="300000-500000"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                        onChange={handlePriceRangeChecked}
                                    />
                                    <label
                                        htmlFor="300000-500000"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        300,000đ - 500,000đ
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="500000"
                                        name="500000"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                        onChange={handlePriceRangeChecked}
                                    />
                                    <label htmlFor="500000" className="ml-2 cursor-pointer hover:text-[--main-color]">
                                        500,000đ - Trở lên
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="py-2">
                            <h5 className="font-bold">NHÀ XUẤT BẢN</h5>
                            <div className="flex flex-col px-2">
                                <div className="py-1">
                                    <input
                                        id="publisher1"
                                        name="NXB Hội Nhà Văn"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                        onClick={handlePublisherChecked}
                                    />
                                    <label
                                        htmlFor="publisher1"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Hội Nhà Văn
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="publisher2"
                                        name="NXB Dân Trí"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                        onClick={handlePublisherChecked}
                                    />
                                    <label
                                        htmlFor="publisher2"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Dân Trí
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="publisher3"
                                        name="NXB Tổng Hợp TPHCM"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                        onClick={handlePublisherChecked}
                                    />
                                    <label
                                        htmlFor="publisher3"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Tổng Hợp TPHCM
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="publisher4"
                                        name="NXB Thế Giới"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                        onClick={handlePublisherChecked}
                                    />
                                    <label
                                        htmlFor="publisher4"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Thế Giới
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="publisher5"
                                        name="NXB Văn Học"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                        onClick={handlePublisherChecked}
                                    />
                                    <label
                                        htmlFor="publisher5"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Văn Học
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="publisher6"
                                        name="NXB Hồng Đức"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                        onClick={handlePublisherChecked}
                                    />
                                    <label
                                        htmlFor="publisher6"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Hồng Đức
                                    </label>
                                </div>
                                <div className="py-1">
                                    <input
                                        id="publisher7"
                                        name="NXB Kim Đồng"
                                        type="checkbox"
                                        className="text-[--main-color] accent-current"
                                        onClick={handlePublisherChecked}
                                    />
                                    <label
                                        htmlFor="publisher7"
                                        className="ml-2 cursor-pointer hover:text-[--main-color]"
                                    >
                                        NXB Kim Đồng
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="group/sort relative mb-10 flex items-center bg-[#f5f5f5] p-3 md:justify-end">
                            <div className=" flex">
                                <Square3Stack3DIcon className="inline-block h-6 w-6 text-gray-400" />
                                <span className="ml-2 text-[#2E3A59]">Sắp xếp theo</span>
                                <span className="ml-2 text-[--main-color] md:hidden">{sortMapping[filters.sort]}</span>
                            </div>
                            <div className="hidden md:flex">
                                <button
                                    onClick={(e) => setFilters({ ...filters, sort: '' })}
                                    className={`ml-2 rounded-md ${filters.sort === '' ? 'bg-[#7B7B7D] text-white' : 'bg-white text-[#2E3A59]'} p-2 hover:bg-[#7B7B7D] hover:text-white`}
                                >
                                    Mặc định
                                </button>
                                <button
                                    onClick={(e) => setFilters({ ...filters, sort: '-id' })}
                                    className={`ml-2 rounded-md ${filters.sort === '-id' ? 'bg-[#7B7B7D] text-white' : 'bg-white text-[#2E3A59]'} p-2 hover:bg-[#7B7B7D] hover:text-white`}
                                >
                                    Sách mới
                                </button>
                                <button
                                    onClick={(e) => setFilters({ ...filters, sort: 'price' })}
                                    className={`ml-2 rounded-md ${filters.sort === 'price' ? 'bg-[#7B7B7D] text-white' : 'bg-white text-[#2E3A59]'} p-2 hover:bg-[#7B7B7D] hover:text-white`}
                                >
                                    Giá thấp - cao
                                </button>
                                <button
                                    onClick={(e) => setFilters({ ...filters, sort: '-price' })}
                                    className={`ml-2 rounded-md ${filters.sort === '-price' ? 'bg-[#7B7B7D] text-white' : 'bg-white text-[#2E3A59]'} p-2 hover:bg-[#7B7B7D] hover:text-white`}
                                >
                                    Giá cao - thấp
                                </button>
                                <button
                                    onClick={(e) => setFilters({ ...filters, sort: '-sales' })}
                                    className={`ml-2 rounded-md ${filters.sort === '-sales' ? 'bg-[#7B7B7D] text-white' : 'bg-white text-[#2E3A59]'} p-2 hover:bg-[#7B7B7D] hover:text-white`}
                                >
                                    Bán chạy
                                </button>
                            </div>
                            <ul className="absolute top-full z-[1] hidden w-[210px] overflow-hidden rounded-md border border-solid border-gray-200 bg-white shadow-md group-hover/sort:block group-hover/sort:md:hidden">
                                <li
                                    onClick={(e) => setFilters({ ...filters, sort: '' })}
                                    className={`h-8 cursor-pointer rounded-md px-2 hover:bg-[#7B7B7D] hover:text-white ${filters.sort === '' ? 'bg-[#7B7B7D] text-white' : 'bg-white text-black'}`}
                                >
                                    Mặc định
                                </li>
                                <li
                                    onClick={(e) => setFilters({ ...filters, sort: '-id' })}
                                    className={`h-8 cursor-pointer rounded-md px-2 hover:bg-[#7B7B7D] hover:text-white ${filters.sort === '-id' ? 'bg-[#7B7B7D] text-white' : 'bg-white text-black'}`}
                                >
                                    Sách mới
                                </li>
                                <li
                                    onClick={(e) => setFilters({ ...filters, sort: 'price' })}
                                    className={`h-8 cursor-pointer rounded-md px-2 hover:bg-[#7B7B7D] hover:text-white ${filters.sort === 'price' ? 'bg-[#7B7B7D] text-white' : 'bg-white text-black'}`}
                                >
                                    Giá thấp - cao
                                </li>
                                <li
                                    onClick={(e) => setFilters({ ...filters, sort: '-price' })}
                                    className={`h-8 cursor-pointer rounded-md px-2 hover:bg-[#7B7B7D] hover:text-white ${filters.sort === '-price' ? 'bg-[#7B7B7D] text-white' : 'bg-white text-black'}`}
                                >
                                    Giá cao - thấp
                                </li>
                                <li
                                    onClick={(e) => setFilters({ ...filters, sort: '-sales' })}
                                    className={`h-8 cursor-pointer rounded-md px-2 hover:bg-[#7B7B7D] hover:text-white ${filters.sort === '-sales' ? 'bg-[#7B7B7D] text-white' : 'bg-white text-black'}`}
                                >
                                    Bán chạy
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap">
                            {books.map((book) => (
                                <div className="inline-flex w-1/2 flex-col items-center px-2 py-2 hover:shadow-md md:w-1/4">
                                    <div className="group/product-image relative inline-block overflow-hidden">
                                        <Link to={`/product-detail/${book.id}`}>
                                            <img
                                                src={book.image || BookImage}
                                                alt={book.name}
                                                className="inline-block w-full scale-100 transform object-cover transition-transform duration-200 ease-in-out group-hover/product-image:scale-110"
                                            />
                                        </Link>
                                        <div className="absolute bottom-[-100%] z-[5] flex w-full px-8 transition-all duration-200 group-hover/product-image:bottom-0">
                                            <button
                                                onClick={() => handleAddToCart(book)}
                                                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[#f5f5f5] text-[--main-color] hover:bg-[--main-color] hover:text-white"
                                            >
                                                <ShoppingCartIcon className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleCheckout(book)}
                                                className="ml-1 flex h-12 w-full flex-1 items-center justify-center rounded-md border border-solid border-[--main-color] bg-[--main-color] font-bold text-white hover:bg-[#f5f5f5] hover:text-[--main-color]"
                                            >
                                                Mua ngay
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex max-w-[160px] flex-col p-2">
                                        <Link to={`/product-detail/${book.id}`} className="inline-block">
                                            <h3 className="line-clamp-2 text-center font-bold uppercase">
                                                {book.name}
                                            </h3>
                                        </Link>
                                        <span className="text-center font-bold text-[--main-color]">
                                            {utils.formatNumber(book.price)}đ
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-center py-3">
                            {totalPages > 1 && (
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel=">"
                                    pageRangeDisplayed={3}
                                    marginPagesDisplayed={1}
                                    pageCount={totalPages}
                                    previousLabel="<"
                                    renderOnZeroPageCount={null}
                                    className="flex text-xl"
                                    previousLinkClassName="w-6 h-6 mx-2 border border-solid hover:border-[--main-color] hover:text-[--main-color] border-transparent inline-flex justify-center items-center rounded-full"
                                    pageLinkClassName="w-6 h-6 mx-2 border border-solid hover:border-[--main-color] hover:text-[--main-color] border-transparent inline-flex justify-center items-center rounded-full"
                                    nextLinkClassName="w-6 h-6 mx-2 border border-solid hover:border-[--main-color] hover:text-[--main-color] border-transparent inline-flex justify-center items-center rounded-full"
                                    breakLinkClassName="w-6 h-6 mx-2 border border-solid hover:border-[--main-color] hover:text-[--main-color] border-transparent inline-flex justify-center items-center rounded-full"
                                    activeLinkClassName="border-[#228b22!important] text-[--main-color]"
                                    onPageChange={handlePageClick}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
