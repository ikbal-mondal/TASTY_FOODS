import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Components/Home/Banner/Banner';
import Footer from '../Components/Home/Footer/Footer';
import NavbarMenu from '../Components/Home/NavbarMenu/NavbarMenu';

const Main = () => {
    return (
        <div>
            <h2>
               <NavbarMenu></NavbarMenu>
               <Outlet></Outlet>
               <Footer></Footer>
            </h2>
        </div>
    );
};

export default Main;