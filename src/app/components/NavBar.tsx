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
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Football Fever</span>
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
              className="fixed right-0 top-0 h-full w-1/5 bg-teal-500 overflow-y-auto p-6"
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
            className="fill-current h-3 w-3"
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
