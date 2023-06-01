import styles from "./style";

import { Navbar } from "./components";

import {
    Start,
    About,
    AboutKostrjanc,
    Help,
    Impressum,
    Contact,
    AgbLegal,
    Formular,
    Drawing,
    Error,
    Beta,
} from "./pages";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Routes,
    BrowserRouter,
    Link,
} from "react-router-dom";
import Share from "./pages/Share";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Beta />,
        },
        {
            path: "/wobraz",
            element: <Drawing />,
        },
        {
            path: "/:type/:id",
            element: <Share />,
            loader: ({ params }) => {
                params.type, params.id;
            },
        },
        {
            path: "*",
            element: <Error />,
        },
    ]);

    return <RouterProvider router={router} />;
};

const App2 = () => {
    return (
        <BrowserRouter>
            <div className="bg-primary w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/stomysmy" element={<About />} />
                    <Route
                        path="/stojekostrjanc"
                        element={<AboutKostrjanc />}
                    />
                    {/* <Route path="/business" element={<Business />} /> */}
                    <Route path="/pomoc" element={<Help />} />

                    <Route path="/pomoc/formular" element={<Formular />} />

                    <Route path="/impresum" element={<Impressum />} />
                    <Route path="/impresum/kontakt" element={<Contact />} />
                    <Route path="/impresum/skitdatow" element={<AgbLegal />} />

                    <Route path="/wobraz" element={<Drawing />} />

                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
