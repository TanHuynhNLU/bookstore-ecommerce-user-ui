import Footer from './Footer';
import Header from './Header';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content mt-[--header-height]">{children}</div>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default DefaultLayout;
