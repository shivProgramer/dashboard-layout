import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
function RootLayout({ children }) {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          {open && <main className="flex-1 p-4">{children}</main>}
        </div>
      </div>
      <div className="">
        {!open && <main className="flex-1 p-4">{children}</main>}
      </div>
    </>
  );
}

export default RootLayout;
