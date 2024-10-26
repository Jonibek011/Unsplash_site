import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import Navbar1 from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar1 />
      <main className="w-full h-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
