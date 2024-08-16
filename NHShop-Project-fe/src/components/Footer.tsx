import React from "react";
import { Logo } from "./icons"; // Ensure the Logo component or path is correctly imported

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <img src={Logo} alt="Logo" className="mb-4 w-60 h-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-lg font-bold mb-4">Liên Kết</h2>
                            <ul>
                                <li className="mb-2">
                                    <a href="/" className="hover:underline">
                                        Trang Chủ
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">
                                        Sản Phẩm
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">
                                        Blog
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">
                                        Liên Hệ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold mb-4">Hỗ Trợ</h2>
                            <ul>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">
                                        Thanh Toán 
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">
                                        Đổi Trả
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">
                                        Bảo Hành
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">
                                        Tuyển Dụng
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-lg font-bold mb-4">Tin Tức</h2>
                        <form className="w-full flex">
                            <input
                                type="email"
                                className="p-2 rounded-l-md w-full focus:outline-none text-black"
                                placeholder="Nhập email của bạn"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-md"
                            >
                                Đăng Kí
                            </button>
                        </form>
                    </div>
                </div>
                <p className="text-center text-gray-500 mt-8">
                    &copy; 2024 Nhóm 2 React, Made by Hoàng Anh.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
