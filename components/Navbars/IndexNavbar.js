import React from 'react';
import Link from 'next/link';
// components

import IndexDropdown from 'components/Dropdowns/IndexDropdown.js';

export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a
                                className="text-red-500 text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                                href="#pablo"
                            >
                                <img
                                    src={require('assets/img/hfmarkets_logo.png')}
                                ></img>
                            </a>
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => {}}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <span className="italic text-s text-white text-right">
                            {`صرفا به عنوان پشتیبانی مالی و فنی کاربران ایرانی می‌باشد SORINXE مجموعه`}
                        </span>
                    </div>
                    <div
                        className={
                            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
                            (navbarOpen ? ' block' : ' hidden')
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <button
                                className="bg-green-400 text-white active:bg-green-500 uppercase text-base px-12 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                <i className="fas fa-credit-card"></i> Sales
                                Support
                            </button>
                            <button
                                className="bg-green-400 text-white active:bg-green-500 uppercase text-base px-12 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                <i className="fas fa-wrench"></i> Tech Support
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
