"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function NavbarComponent() {
    const { data: session } = useSession()
    const [dropdown, setDropdown] = React.useState(false)
    const [toggle, setToggle] = React.useState(false)

    const handleDropdown = () => {
        setDropdown(!dropdown)
    }
    const handleSignOut = async () => {
        await signOut({ redirect: true, callbackUrl: "/" })
    }

    return (
        <div className="container mx-auto py-6 relative" >
            <div className="hidden sm:grid grid-cols-3 items-center">
                <div className="">
                    <img src="/images/logo.png" alt="" width={170} />
                </div>
                <div className="menu hidden justify-center sm:flex">
                    <ul className="flex flex-1 gap-14 justify-center items-center">
                        <li>
                            <Link href="/" >
                                Anasayfa
                            </Link>
                        </li>
                        <li>
                            <Link href='/about' >
                                Hedefimiz
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact' >
                                İletişim
                            </Link>
                        </li>
                    </ul>
                </div>
                {session ? (<div className="button hidden sm:flex justify-end gap-10 items-center">
                    <div className="relative">
                        <button
                            onClick={handleDropdown}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                            type="button"
                        >
                            Profilim
                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>
                        {dropdown && (
                            <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-full left-0 w-full">
                                <ul className="py-2 text-sm text-black" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-white">
                                            Profilim
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/advert" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-white ">
                                            İlanlarım
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/vehicles" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-white ">
                                            Araçlarım
                                        </Link>
                                    </li>
                                    <li>
                                        <a onClick={handleSignOut} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-white ">
                                            Çıkış Yap
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>) : (
                    <div className="button flex justify-end gap-10 items-center">
                        <Link href="/login" >
                            Giriş Yap
                        </Link>
                        <Link href="/register" className="border-2 border-primary font-bold rounded-lg p-2 text-primary hover:bg-secondary px-5 duration-200" >
                            Kayıt Ol
                        </Link>
                    </div>
                )}
            </div>

            <div className="mobil-menu grid grid-cols-2 sm:hidden p-3 items-center relative">
                <div className="logo">
                    <img src="/images/logo.png" alt="" width={150} />
                </div>
                <div className="toggle-button flex justify-end">
                    Mobile
                </div>
            </div>

            {
                toggle && (
                    <>
                        <div className="menu sm:hidden absolute top-0 bg-primary w-full h-[100vh] z-50 text-white flex flex-col justify-around">
                            <div className="title">
                                <h1 className="text-3xl uppercase font-bold text-center mt-20" >
                                    YÜKVERİLİR
                                </h1>
                            </div>
                            <div className="menu text-center">
                                <ul className="flex flex-1 flex-col justify-center gap-5"  >
                                    <li>
                                        Anasayfa
                                    </li>
                                    <li>
                                        Hedefimiz
                                    </li>
                                    <li>
                                        İletişim
                                    </li>
                                </ul>
                            </div>
                            <div className="user-menu text-center">
                                <ul className="flex flex-col gap-5" >
                                    {session ? (<>
                                        <li>
                                            Profilim
                                        </li>
                                        <li>
                                            İlanlarım
                                        </li>
                                        <li>
                                            Araçlarım
                                        </li>
                                        <li>
                                            <button className="bg-secondary p-3 rounded-lg" onClick={handleSignOut} >
                                                Çıkış Yap
                                            </button>
                                        </li>
                                    </>) : (<>
                                        <li>
                                            Kayıt Ol
                                        </li>
                                        <li  >
                                            <button className="bg-secondary p-3 rounded-lg" >
                                                Giriş Yap
                                            </button>
                                        </li>
                                    </>)}
                                </ul>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}