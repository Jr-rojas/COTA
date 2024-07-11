import React from "react";
import Navbar from "../Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const MainLayout = ({children}) => (
    <>
        <Navbar/>
        {children}
        <Footer/>
        <ScrollToTopButton/>
    </>
);

export default MainLayout;