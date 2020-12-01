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
                        <Link href="https://www.gohfm.com/sv/fa/">
                            <a
                                className="text-red-500 text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                                href="#pablo"
                            >
                                <img
                                    src={require('assets/img/hotforex_logo.png')}
                                ></img>
                            </a>
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
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
                        <ul className="flex flex-col list-none lg:ml-auto">
                            <a
                                href="https://t.me/hotforexFinance"
                                target="_blank"
                            >
                                <button
                                    className="bg-black text-white active:bg-green-500 uppercase text-base px-12 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    <span>ارتباط با بخش مالی هات فارکس</span>
                                    <i className="fas fa-paper-plane ml-2 bg-blue-600 rounded-full h-8 w-8 py-2 pr-3"></i>
                                </button>
                            </a>
                            <a href="https://t.me/hotforexiran" target="_blank">
                                <button
                                    className="bg-black text-white active:bg-green-500 uppercase text-base px-12 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    <span>ارتباط با بخش فنی هات فارکس</span>
                                    <i className="fas fa-paper-plane ml-2 bg-blue-600 rounded-full h-8 w-8 py-2 pr-3"></i>
                                </button>
                            </a>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
