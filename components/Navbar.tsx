"use client"
import React from "react";
import '@splidejs/react-splide/css';
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {


    // Control Navigation Animation
    function navAnimation(navItems: any[], val1: string, val2: string) {
        navItems.forEach((nav, i) => {
            nav!.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
        });
    }

    function toggleNav() {
        const hamburgerMenu = document.querySelector("#hamburger-menu");
        const overlay = document.querySelector("#overlay");
        const nav1 = document.querySelector("#nav-1");
        const nav2 = document.querySelector("#nav-2");
        const nav3 = document.querySelector("#nav-3");
        const nav4 = document.querySelector("#nav-4");
        const nav5 = document.querySelector("#nav-5");
        const navItems = [nav1, nav2, nav3, nav4, nav5];
        // Toggle: Hamburger Open/Close
        hamburgerMenu!.classList.toggle("active");

        //   Toggle: Menu Active
        overlay!.classList.toggle("overlay-active");

        if (overlay!.classList.contains("overlay-active")) {
            // Animate In - Overlay
            overlay!.classList.replace("overlay-slide-left", "overlay-slide-right");

            // Animate In - Nav Items
            navAnimation(navItems, "out", "in");
        } else {
            // Animate Out - Overlay
            overlay!.classList.replace("overlay-slide-right", "overlay-slide-left");

            // Animate Out - Nav Items
            navAnimation(navItems, "out", "in");
        }
    }

    return (
        <React.Fragment>
            {/* <div className="overlay overlay-slide-left" id="overlay">
                <nav>
                    <ul>
                        <li id="nav-1" className="slide-out-1 center" onClick={() => toggleNav()}>
                            <a href="#home" className="center">Home</a>
                        </li>
                        <li id="nav-2" className="slide-out-2 center" onClick={() => toggleNav()}>
                            <a href="#about" className="center">About</a>
                        </li>
                        <li id="nav-3" className="slide-out-3 center" onClick={() => toggleNav()}>
                            <a href="#skills" className="center">Skills</a>
                        </li>
                        <li id="nav-4" className="slide-out-4 center" onClick={() => toggleNav()}>
                            <a href="#projects" className="center">Projects</a>
                        </li>
                        <li id="nav-5" className="slide-out-5 center" onClick={() => toggleNav()}>
                            <a href="#contact" className="center">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div> */}


            <nav id="main-nav" className="navbar-expand-xl ">
                <div className="navbar container-fluid">
                    <div className="container ">
                        {/* <div className="hamburger-menu" id="hamburger-menu" onClick={() => toggleNav()}>
                            <div className="menu-bar1"></div>
                            <div className="menu-bar2"></div>
                            <div className="menu-bar3"></div>
                        </div> */}
                        <Link className="navbar-brand" href="/">
                            <Image src="/logo.jpeg" className="logo"  height={"64"} width={"64"} alt="logo" />
                        </Link>

                        <div className="bottom-bar">
                            <div className="common">
                                <div className="card1">
                                    <a className="social-link2">
                                        <svg viewBox="0 0 16 16" className="bi bi-twitter" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{ color: "white" }}> <path fill="white" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </a>
                                    <a className="social-link3">
                                        <svg viewBox="0 0 16 16" className="bi bi-discord" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{ color: "white" }}> <path fill="white" d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path> </svg>
                                    </a>
                                </div>

                            </div>
                            <div className="common">

                                <br />
                            </div>
                        </div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <a className="nav-link" href="">
                                    <button className="btn" type="button">
                                        <span>
                                            <svg width="23" height="24" viewBox="0 0 23 26" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.156 10.5441H9.15584C8.81649 10.5442 8.49105 10.679 8.25111 10.9189C8.01116 11.1589 7.87637 11.4844 7.87638 11.8237C7.87639 12.1631 8.0112 12.4885 8.25116 12.7285C8.49112 12.9684 8.81657 13.1032 9.15592 13.1032C9.49527 13.1032 9.82072 12.9684 10.0607 12.7285C10.3006 12.4885 10.4355 12.1631 10.4355 11.8237C10.4355 11.4844 10.3007 11.1589 10.0607 10.9189C9.82079 10.679 9.49535 10.5442 9.156 10.5441ZM13.7185 10.5441C13.4391 10.5205 13.159 10.5817 12.915 10.7198C12.6709 10.858 12.4743 11.0666 12.3508 11.3183C12.2272 11.5701 12.1826 11.8533 12.2227 12.1308C12.2629 12.4084 12.3858 12.6673 12.5756 12.8738C12.7653 13.0803 13.013 13.2247 13.2861 13.2881C13.5593 13.3515 13.8453 13.3309 14.1065 13.2291C14.3678 13.1273 14.5923 12.9489 14.7505 12.7174C14.9088 12.4859 14.9934 12.212 14.9934 11.9316C15.0009 11.7567 14.9738 11.5821 14.9138 11.4178C14.8537 11.2534 14.7619 11.1025 14.6435 10.9736C14.5251 10.8448 14.3824 10.7405 14.2237 10.6668C14.065 10.5931 13.8933 10.5514 13.7185 10.5441ZM19.7934 0.0566406H3.04355C2.7062 0.0574376 2.37232 0.124677 2.06096 0.25452C1.7496 0.384362 1.46687 0.574264 1.22891 0.813382C0.990944 1.0525 0.802414 1.33615 0.674081 1.64813C0.545749 1.96012 0.480128 2.29432 0.480965 2.63167V19.5317C0.480142 19.869 0.545774 20.2032 0.674112 20.5152C0.802451 20.8272 0.990982 21.1108 1.22894 21.3499C1.4669 21.589 1.74963 21.7789 2.06098 21.9088C2.37233 22.0386 2.70621 22.1058 3.04355 22.1066H17.2185L16.556 19.7941L18.1559 21.2816L19.6685 22.6816L22.356 25.0566V2.63167C22.3568 2.29432 22.2912 1.96012 22.1629 1.64813C22.0345 1.33615 21.846 1.0525 21.608 0.813382C21.3701 0.574264 21.0873 0.384362 20.776 0.25452C20.4646 0.124677 20.1307 0.0574376 19.7934 0.0566406ZM14.9685 16.3816V16.3817C14.9685 16.3817 14.5184 15.8441 14.1434 15.3691C15.0495 15.1558 15.8509 14.6289 16.406 13.8816C15.9562 14.181 15.474 14.4284 14.9685 14.6191C14.387 14.8673 13.7788 15.0477 13.1559 15.1566C12.0854 15.3537 10.9875 15.3495 9.91852 15.1442C9.2909 15.0213 8.67581 14.8414 8.08091 14.6067C7.76737 14.4861 7.46249 14.3441 7.16841 14.1817C7.13087 14.1566 7.09349 14.1441 7.05596 14.1191C7.03716 14.1098 7.02021 14.0971 7.00597 14.0817C6.78107 13.9567 6.65586 13.8692 6.65586 13.8692C7.19088 14.6007 7.96463 15.1224 8.84342 15.3441C8.46854 15.8192 8.006 16.3816 8.006 16.3816C7.26348 16.4016 6.52743 16.2388 5.86262 15.9075C5.19782 15.5762 4.62465 15.0865 4.19356 14.4816C4.23414 11.9475 4.84959 9.45571 5.99347 7.19411C7.00016 6.40348 8.22746 5.94487 9.50594 5.88161L9.63085 6.03167C8.42805 6.32929 7.30563 6.88837 6.34347 7.66912C6.34347 7.66912 6.61851 7.51915 7.08093 7.30663C7.97948 6.89645 8.93716 6.63069 9.9186 6.51919C9.98859 6.50463 10.0597 6.49624 10.1312 6.49412C10.9688 6.385 11.8165 6.37664 12.6561 6.46919C13.9765 6.61996 15.2547 7.02759 16.4186 7.66912C15.5052 6.92563 14.4444 6.38453 13.3063 6.08163L13.4812 5.88173C14.7597 5.94494 15.987 6.40355 16.9936 7.19423C18.1376 9.45578 18.7531 11.9476 18.7937 14.4817C18.3591 15.086 17.7834 15.575 17.1168 15.9061C16.4501 16.2372 15.7126 16.4005 14.9685 16.3816Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        <strong>Discord</strong>
                                            </span>
                                        <div id="container-stars">
                                            <div id="stars"></div>
                                        </div>

                                        <div id="glow">
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                        </div>
                                    </button>

                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="">
                                    <button className="btn" type="button">
                                        <span><svg width="25" height="21" viewBox="0 0 25 21" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M24.9241 2.95278C24.0008 3.35335 23.0243 3.61816 22.0251 3.73896C23.0793 3.10918 23.8693 2.11842 24.2485 0.950469C23.2579 1.54018 22.1734 1.95567 21.0424 2.17888C20.2863 1.359 19.2796 0.813251 18.1799 0.627215C17.0803 0.441179 15.95 0.625381 14.9664 1.15093C13.9827 1.67648 13.2013 2.51366 12.7448 3.53115C12.2882 4.54865 12.1822 5.68892 12.4435 6.77313C10.4405 6.67181 8.48119 6.15027 6.69289 5.24236C4.90459 4.33445 3.32729 3.0605 2.06345 1.50325C1.62016 2.27736 1.38723 3.15402 1.38782 4.04606C1.38625 4.87448 1.58955 5.69043 1.97961 6.42127C2.36968 7.15211 2.93441 7.77515 3.62352 8.23493C2.82257 8.21314 2.03874 7.99822 1.33868 7.60844V7.66987C1.34469 8.83058 1.75142 9.95359 2.49009 10.8489C3.22876 11.7443 4.25401 12.357 5.39243 12.5835C4.95421 12.7169 4.49923 12.7872 4.04118 12.7923C3.72412 12.7886 3.40784 12.7599 3.09531 12.7063C3.4195 13.7048 4.04686 14.5774 4.89011 15.2027C5.73335 15.8279 6.75053 16.1748 7.80011 16.195C6.02777 17.5896 3.83958 18.3507 1.58437 18.357C1.17375 18.3584 0.763464 18.3338 0.355957 18.2833C2.65852 19.77 5.34184 20.5592 8.08265 20.5559C9.97402 20.5755 11.8503 20.2181 13.602 19.5045C15.3537 18.7908 16.9456 17.7353 18.2848 16.3995C19.624 15.0638 20.6836 13.4746 21.4017 11.7247C22.1199 9.97488 22.4821 8.09947 22.4673 6.20806C22.4673 5.99923 22.4673 5.77812 22.4673 5.557C23.4312 4.83815 24.2626 3.95691 24.9241 2.95278Z"
                                                fill="currentColor"></path>
                                        </svg>
                                        <strong>Twitter</strong>
                                        </span>
                                        <div id="container-stars">
                                            <div id="stars"></div>
                                        </div>

                                        <div id="glow">
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                        </div>
                                    </button>

                                </a>
                            </li>
                            {/* <li className="nav-item ">
                                <a className="nav-link" href="">
                                    <button className="btn" type="button">
                                        <span><svg width="21" height="24" viewBox="0 0 21 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.34616 17.0529L13.1004 13.2989L3.23193 3.43039L5.54358 0.520996L18.4506 13.2389C18.3146 13.4042 18.1944 13.576 18.0489 13.722C16.998 14.7802 15.9441 15.8355 14.8871 16.8879C14.8548 16.9202 14.8238 16.954 14.7823 16.9975L20.4432 22.4252C20.1696 22.4453 19.9268 22.4644 19.684 22.4809C18.6404 22.5521 17.5965 22.623 16.5524 22.6937C16.1003 22.7247 15.6485 22.7609 15.196 22.7863C15.1275 22.7874 15.0611 22.7628 15.0099 22.7174C13.1432 20.8566 11.2786 18.9938 9.41634 17.1289C9.39295 17.1061 9.37159 17.0806 9.34616 17.0529Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M10.5045 23.4795H10.3679C9.07973 23.4795 7.79152 23.4795 6.50332 23.4795C5.64039 23.4795 4.81102 23.3016 4.03302 22.9357C2.18842 22.0662 0.99802 20.6418 0.581557 18.6388C0.17984 16.7065 0.659357 14.9741 1.92909 13.462C1.9835 13.3975 2.04146 13.3349 2.10223 13.2673C0.999795 12.0517 0.432561 10.6282 0.449596 8.98163C0.462054 7.87767 0.763346 6.85532 1.31914 5.92578L8.69242 13.2991L4.54253 17.449L10.5299 23.4361L10.5045 23.4795Z"
                                                fill="currentColor"></path>
                                        </svg>
                                        <strong>Rafflor
                                        </strong>
                                        </span>
                                        <div id="container-stars">
                                            <div id="stars"></div>
                                        </div>

                                        <div id="glow">
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                        </div>
                                    </button>

                                </a>
                            </li> */}





                        </ul>


                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggle-icon">
                                <i className="fa fa-bars"></i>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">

                        </div>
                    </div>
                </div>

            </nav>
        </React.Fragment>
    )
}