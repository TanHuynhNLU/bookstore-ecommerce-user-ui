import Footer from './Footer';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content mt-[--header-height]">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
