import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-800 p-6 fixed">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Football Fever</span>
      </div>
        <div className="rounded-full bg-teal-700 ">
          <div className="flex">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-transparent p-5">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="w-full max-w-[160px] bg-transparent pl-2 text-base font-semibold outline-0"
              placeholder=""
              id=""
            />
            <input
              type="button"
              value="Search"
              className="bg-blue-500 p-2 rounded-full text-white font-semibold hover:bg-blue-800 transition-colors"
            />
          </div>
        </div>
        <div className="lg">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed right-0 top-0 h-full w-1/5 bg-teal-800 overflow-y-auto p-6"
              >
                <button onClick={closeMenu} className="float-right text-lg">
                  X
                </button>
                <Link href="/">
                  <p className="block mt-4 text-teal-200 hover:text-white" onClick={closeMenu}>
                    Home
                  </p>
                </Link>
                <Link href="/about">
                  <p className="block mt-4 text-teal-200 hover:text-white" onClick={closeMenu}>
                    About
                  </p>
                </Link>
                <Link href="/contact">
                  <p className="block mt-4 text-teal-200 hover:text-white" onClick={closeMenu}>
                    Contact
                  </p>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <circle cx="5" cy="5" r="2" />
              <circle cx="10" cy="5" r="2" />
              <circle cx="15" cy="5" r="2" />
              <circle cx="5" cy="10" r="2" />
              <circle cx="10" cy="10" r="2" />
              <circle cx="15" cy="10" r="2" />
              <circle cx="5" cy="15" r="2" />
              <circle cx="10" cy="15" r="2" />
              <circle cx="15" cy="15" r="2" />
            </svg>
          </button>
        </div>
    </nav>
  );
};

export default Navbar;
