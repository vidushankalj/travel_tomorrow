import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../Pages/Home";
import Destinationspage from "../Pages/Destinationspage";
import Hotelspage from "../Pages/Hotelspage";
import TravelPlacePage from "../Pages/TravelPlacePage";
import Hotels from "../Pages/Hotels";

export default function Router() {
    
    const Layout = () => {
        return (
            <>
                <Navbar />
                <Outlet />
                <Footer />
            </>
        )
    }

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="destinations" element={<Destinationspage />} />
                        <Route path="hotels" element={<Hotels />} />
                        <Route path="travel" element={<TravelPlacePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRoutes />
    )
}