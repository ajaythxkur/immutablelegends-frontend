"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
            icon: "/twitter.svg",
            href: "",
        },
        {
            icon: "/discord.svg",
            href: "",
        },
    ]

    return (
        <>
            <nav id="main-nav" className="header">
                <div className="logo">
                    <a className="navbar-brand" href="index.html">
                        <Image alt="not-found" src="/logo.jpeg" className="logo" width={64} height={60} />
                    </a>
                </div>

                {/* <nav className="nav">
                    { routes.map((v, i) => (
                            <Link
                                href={v.href}
                                className={pathname == v.href ? "nav-item is-active" : "nav-item active"}
                                active-color="#CEBB73" key={i}>
                                {v.name}
                            </Link>
                        ))
                    }
                    <span className="nav-indicator"></span>
                </nav> */}
                <div className="icon-navs">
                    <ul>
                        {
                            socials.map((v, i) => (
                                <li className="res-none" key={i}>
                                    <a href={v.href}>
                                        <Image src={v.icon} alt="not-found" height={100} width={100} />
                                    </a>
                                </li>
                            ))
                        }

                       

                        <li className="res-none">
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

                        {/* This li is use after login use for profile */}
                        {/* <li>
              <Dropdown>
                <Dropdown.Toggle className='react-header-dropdown' >
                  <svg version="1.1" id="Layer_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" >
                    <g id="user">
                      <g>
                        <path d="M256.167,277.721c-55.4,0-100.471-45.071-100.471-100.471S200.767,76.779,256.167,76.779
			c55.4,0,100.471,45.071,100.471,100.471S311.567,277.721,256.167,277.721z"></path>
                      </g>
                      <g>
                        <path d="M437.19,74.98C388.83,26.63,324.55,0,256.17,0S123.5,26.63,75.15,74.98S0.17,187.62,0.17,256S26.8,388.67,75.15,437.02
			C123.5,485.37,187.79,512,256.17,512s132.66-26.63,181.021-74.98C485.54,388.67,512.17,324.38,512.17,256
			S485.54,123.33,437.19,74.98z M69.31,399.37C38.75,359.63,20.55,309.9,20.55,256c0-129.92,105.7-235.62,235.62-235.62
			S491.78,126.08,491.78,256c0,53.92-18.2,103.67-48.79,143.42c-7.58-25.359-26.88-48-56.183-65.311
			c-35.407-20.92-82.02-32.439-131.24-32.439c-49.16,0-95.57,11.521-130.68,32.46C95.91,351.41,76.82,374.01,69.31,399.37z"></path>
                      </g>
                    </g>
                  </svg>      </Dropdown.Toggle>

                <Dropdown.Menu className='header-dropdown'>
                  <Dropdown.Item className='active' href="#/action-1">Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </li> */}
                        {/* This li is use after login use for profile End*/}
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
             <img onClick={toggleSidebar} src="/close.svg" alt=""/>
              </li>
              {
                        routes.map((v, i) => (
                          <>
                          <li
                          onClick={() => localStorage.setItem("activeClass", "1")}
                          // className={activeClass == "1" ? "active" : ""}
                        >
                        <Link
                                href={v.href}
                                className={pathname == v.href ? "nav-item is-active" : "nav-item active"}
                                active-color="#CEBB73" key={i}>
                                {v.name}
                            </Link>
                        </li>
                        </>
                      
                        ))
                    }
                    <li className="flex-li">
                    {
                            socials.map((v, i) => (
                              <>
                                {/* // <li className="res-none" key={i}> */}
                                    <a href={v.href}>
                                        <Image src={v.icon} alt="not-found" height={100} width={100} />
                                    </a>
                                {/* </li> */}
                                </>
                            ))
                        }
                    </li>
              {/* <li
                onClick={() => localStorage.setItem("activeClass", "1")}
                className={activeClass == "1" ? "active" : ""}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => localStorage.setItem("activeClass", "2")}
                className={activeClass == "2" ? "active" : ""}
              >
                <Link href="/about">About</Link>
              </li> */}
              {/* <li
                onClick={() => localStorage.setItem("activeClass", "3")}
                className={activeClass == "3" ? "active" : ""}
              >
                <Link href="/skills">Skills</Link>
              </li>
              <li
                onClick={() => localStorage.setItem("activeClass", "4")}
                className={activeClass == "4" ? "active" : ""}
              >
                <Link href="/projects"> Projects</Link>
              </li>
              <li
                onClick={() => localStorage.setItem("activeClass", "5")}
                className={activeClass == "5" ? "active" : ""}
              >
                <Link href="/contact">Contact</Link>
              </li> */}
              <li >
                <a>
              <button className="form-btn" onClick={handleLoginOpen}>
                Connect
              </button>
              </a>
            </li>
            </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;
