import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar/index";
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
      <div className="flex ">
        <div className="sm:fixed w-fit">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full ">
          <div
            className="fixed sm:ml-[16rem] ml-12 sm:m-0 m-2 "
            style={{
              width: open ? "calc(100% - 16rem)" : "calc(100% - 4rem) ",
            }}
          >
            <Navbar />
          </div>
          {open && (
            <main className="flex-1 p-4 mt-10 ml-[16rem] ">{children}</main>
          )}
        </div>
      </div>
      <div className="">
        {!open && <main className="flex-1 p-4 mt-10">{children}</main>}
      </div>
    </>
  );
}

export default RootLayout;
