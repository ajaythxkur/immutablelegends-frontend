"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headers } from "next/headers";
const Header: React.FC = () => {
    const pathname = usePathname();

    const [loginModalShow, setLoginModalShow] = useState<boolean>(false);
    const [signUpModalShow, setSignUpModalShow] = useState<boolean>(false);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

    const handleLoginOpen = () => {
        setLoginModalShow(true);
    };

    const handleSignUpOpen = () => {
        setSignUpModalShow(true);
    };

    // const activeClass = localStorage.getItem("activeClass");

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    // useEffect(() => {
    //   if (typeof window !== "undefined" && typeof $ !== "undefined") {
    //     $(window).scroll(function () {
    //       var scroll = $(window).scrollTop() as number; // Type assertion here

    //       if (scroll && scroll >= 100) {
    //         $("#main-nav").addClass("fixedd");
    //       } else {
    //         $("#main-nav").removeClass("fixedd");
    //       }
    //     });
    //   }
    // }, []);
    const routes = [
        {
            name: "Locking",
            href: "/locking"
        }
    ];
    const socials = [
        {
            icon: "/img/x.svg",
            href: "https://twitter.com/Immulegends",
        },
        {
            icon: "/img/discord.svg",
            href: "https://discord.gg/E9bMvv4ygH",
        },
        {
          icon: "/img/lock.svg",
          href: "/locking",
        }
    ]

    return (
        <>
            <nav id="main-nav" className="header">
                <div className="logo">
                    <a className="navbar-brand" href="index.html">
                        <Image alt="not-found" src="/logo.jpeg" className="logo" width={64} height={60} />
                    </a>
                </div>
                <div className="icon-navs">
                    <ul>
                        {
                            socials.map((v, i) => (
                                <li className="res-none" key={i}>
                                    <a href={v.href} target={v.href == "/locking" ? "" : "_blank"}>
                                        <Image className="social-img" src={v.icon} alt="not-found" height={100} width={100} />
                                    </a>
                                </li>
                            ))
                        }
                        <li>
                            <button className="form-btn">
                                Connect
                            </button>
                        </li>
                        <li className="toggle-class">
                            <div className="hamburger" onClick={toggleSidebar}>
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className="side-bar">
                <div className="container">
                    <div
                        className={isCollapsed ? "sidebar collapsed" : "sidebar"}
                        id="sidebar"
                    >
                        <ul className="list">
            <li
                className="sidebar-close-li" 
              >
             <img onClick={toggleSidebar} src="/img/close.svg" alt=""/>
              </li>
              
                    <li className="flex-li">
                    {
                            socials.map((v, i) => (
                              <>
                                 {/* <li className="res-none" key={i}> */}
                                    <a href={v.href} key={i} target={v.href == "/locking" ? "" : "_blank"}>
                                        <Image className="social-img-mobile" src={v.icon} alt="not-found" height={100} width={100} />
                                    </a>
                                {/* </li> */}
                                </>
                            ))
                        }
                    </li>
            
            </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;
