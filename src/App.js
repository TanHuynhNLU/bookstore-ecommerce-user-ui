import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from '~/routes/routes';
import DefaultLayout from '~/components/layout/DefaultLayout';
import { Fragment } from 'react';
import ScrollToTop from './components/ScrollToTop';
function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
