import React from 'react';
import Link from 'next/link';

import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import Footer from 'components/Footers/Footer.js';

export default function Index() {
    return (
        <>
            <IndexNavbar fixed />
            <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg py-16 px-12 relative z-10">
                        <div className="w-full text-center lg:w-8/12">
                            <p className="text-4xl text-center">
                                <span role="img" aria-label="love"></span>
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
                                مجموعه سورین صرفا به عنوان پشتیبانی مالی و فنی
                                کاربران ایرانی می‌باشد. ساعت کاری از ۱۰ صبح الی
                                ۹ شب می‌باشد.
                            </p>
                            <div className="sm:block flex flex-col mt-10">
                                <button
                                    className="text-green-400 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-gray-600 font-bold uppercase px-12 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    نرخ واریز ۳۶۰۰۰ تومان
                                </button>

                                <button
                                    className="text-green-400 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-gray-600 font-bold uppercase px-12 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    نرخ برداشت ۳۵۰۰۰ تومان
                                </button>
                            </div>
                            <div className="text-center mt-4 text-red-500">
                                قیمت‌ها در تاریخ ۱۳۹۹/۰۹/۰۹ به روز‌رسانی شده است
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="block relative z-1 bg-gray-700 mt-12">
                <div className="container mx-auto">
                    <div className="justify-center flex flex-wrap">
                        <div className="w-full lg:w-12/12 px-4  -mt-24">
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-4/12 px-4">
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        مشاهده آنی ارزها و قیمت‌ها
                                    </h5>
                                    <Link href="/">
                                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-12 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src={require('assets/img/analysts_new.jpg')}
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        شرایط فوق العاده و جدید معاملاتی
                                    </h5>
                                    <Link href="/">
                                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-12 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src={require('assets/img/invest_370banner3.jpg')}
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        امکان پیگیری سفارش‌ها
                                    </h5>
                                    <Link href="/">
                                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-12 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src={require('assets/img/analysts_new.jpg')}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
