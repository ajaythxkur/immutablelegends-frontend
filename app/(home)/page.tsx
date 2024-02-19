"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { audiohref } from "@/lib/static";
import 'swiper/css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
  };
  const [backgroundImage, setBackgroundImage] = useState("banner-home");


  const swiperContent = [
    {
      name: "Dua Lipa",
      description: "Levitating",
      image: "nft2.png",
      content: "Dua Lipa is a famous singer from the United Kingdom. She was born on August 22, 1995, in London, England. Dua's love for music started when she was a kid..."
    },
    {
      name: "Taylor Swift",
      description: "Levitating",
      image: "nft1.png",
      content: "Dua Lipa is a famous singer from the United Kingdom. She was born on August 22, 1995, in London, England. Dua's love for music started when she was a kid..."
    }
  ]

  const changeBackground = () => {
    // Check the current background image and toggle it
    if (backgroundImage === "banner-home") {
      setBackgroundImage("banner-home-bg");
    } else {
      setBackgroundImage("banner-home");
    }
  };

  // useEffect(()=>{
  //   require("@/assets/script.js")
  // },[])

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (
    <React.Fragment>
      <audio id="background-music" ref={audioRef} src={audiohref} loop />

      <button id="play-pause-button" onClick={togglePlay}>
        {isPlaying ? (
          <svg viewBox="0 0 640 512" fill="white" height="1.4em" xmlns="http://www.w3.org/2000/svg">
            <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6a1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"></path>
          </svg>
        ) : (
          <svg viewBox="0 0 512 512" fill="white" height="1.4em" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32-17.7 0-32 14.3-32 32zM464 96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-17.7-14.3-32-32-32z"></path>
          </svg>
        )}
      </button>
      <section className={backgroundImage} onClick={changeBackground}>
      </section>



      <section className="meet-the-team">

        <ul className="c-accordion">
          <li id="cf" className="c-accordion__item" style={{ backgroundImage: 'url(/nft.jpg)' }}>
            <a href="#cf" className="c-accordion__action">
              <div className="c-accordion__content">
                <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">CUSTOMER FACING</h2>
                <p className="c-accordion__description">Click the appropriate job role below if ....</p>
              </div>
              <div className="c-accordion__aside">
                <h2 className="c-accordion__title c-accordion__title--hover-hide">MIKEDEGULIO</h2>
              </div>
            </a>
          </li>
          <li id="corp" className="c-accordion__item" style={{ backgroundImage: 'url(nft1.jpg)' }}>
            <a href="#corp" className="c-accordion__action">
              <div className="c-accordion__content">
                <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">CORPORATE</h2>
                <p className="c-accordion__description">Click on one of the departments below if ...</p>
              </div>
              <div className="c-accordion__aside">
                <h2 className="c-accordion__title c-accordion__title--hover-hide">NOT_CY_</h2>
              </div>
            </a>
          </li>
          <li id="lead" className="c-accordion__item" style={{ backgroundImage: 'url(nft2.jpg' }}>
            <a href="#lead" className="c-accordion__action">
              <div className="c-accordion__content">
                <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">LEADERSHIP</h2>
                <p className="c-accordion__description">Click the appropriate job role below if ....</p>
              </div>
              <div className="c-accordion__aside">
                <h2 className="c-accordion__title c-accordion__title--hover-hide">SHINAKKA</h2>
              </div>
            </a>
          </li>
          <li id="warehouse" className="c-accordion__item" style={{ backgroundImage: 'url(nft3.jpg)' }}>
            <a href="#warehouse" className="c-accordion__action">
              <div className="c-accordion__content">
                <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">OPERATIONS</h2>
                <p className="c-accordion__description">Click on one of the departments below if ....</p>
              </div>
              <div className="c-accordion__aside">
                <h2 className="c-accordion__title c-accordion__title--hover-hide">OXGABI</h2>
              </div>
            </a>
          </li>
          <li id="warehouse" className="c-accordion__item" style={{ backgroundImage: 'url(nft4.jpg)' }}>
            <a href="#warehouse" className="c-accordion__action">
              <div className="c-accordion__content">
                <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">OPERATIONS</h2>
                <p className="c-accordion__description">Click on one of the departments below if ....</p>
              </div>
              <div className="c-accordion__aside">
                <h2 className="c-accordion__title c-accordion__title--hover-hide">BAHGLE_1</h2>
              </div>
            </a>
          </li>
          <li id="warehouse" className="c-accordion__item" style={{ backgroundImage: 'url(nft5.jpg)' }}>
            <a href="#warehouse" className="c-accordion__action">
              <div className="c-accordion__content">
                <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">OPERATIONS</h2>
                <p className="c-accordion__description">Click on one of the departments below if ....</p>
              </div>
              <div className="c-accordion__aside">
                <h2 className="c-accordion__title c-accordion__title--hover-hide">JAKLEY_6</h2>
              </div>
            </a>
          </li>
        </ul>

      </section>



      <section className="nft-meet block padding">


        <div className="Wrapper block">
          <div className="RankContainer container block">
            <div className="left-side">

              <h2>Meet Bricky</h2>
              <h6>Meet Bricky only resident... for now.</h6>
              <button className="twitter-btn">
                <span className="icon"><svg height="45" viewBox="0 0 60 60" width="45" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m30 60c16.5685433 0 30-13.4314567 30-30s-13.4314567-30-30-30-30 13.4314567-30 30 13.4314567 30 30 30z" fill="#00acee"></path><path d="m41.0521385 18.4366943c-1.2089539-1.3744928-2.9316-2.2502302-4.838077-2.2819633-3.6604615-.0609279-6.6284077 3.0321924-6.6284077 6.908385 0 .5501252.0586385 1.0865774.1717154 1.6015572-5.5087846-.3573206-10.3929-3.2259026-13.6619538-7.5499514-.5705539 1.0361399-.8975077 2.2471609-.8975077 3.5444286 0 2.455838 1.1701846 4.6353768 2.9487231 5.922267-1.0865077-.0479675-2.1085616-.3768796-3.0021923-.9164654-.0006462.029493-.0006462.0589929-.0006462.0890105 0 3.4295872 2.2848 6.3067451 5.3170385 6.9769758-.556177.1575997-1.1417539.240078-1.7462308.2360697-.4271077-.0028322-.8424231-.0501962-1.2470769-.13524.8433923 2.8126097 3.2911846 4.8649983 6.1917692 4.93286-2.2684846 1.8830683-5.1264231 3.0045653-8.232 2.998159-.5350154-.0011037-1.0626-.035675-1.5811385-.1021874 2.933377 2.0127143 6.4174385 3.1845715 10.1606077 3.1855535 12.1917923.0031987 18.8589693-10.6066422 18.8589693-19.8093844 0-.3019324-.0066231-.6022496-.0192231-.9011167 1.2950538-.9649855 2.4187154-2.1748628 3.3073385-3.556433-1.1886.5357972-2.4662077.8916496-3.8068154 1.0409189 1.3683923-.8421727 2.419523-2.1900418 2.9143154-3.8063795-1.2808385.7767339-2.6993077 1.3337545-4.2092077 1.6229359z" fill="#fff"></path></g></svg></span>
                <span className="text1">Follow me</span>
                <span className="text2">1,2k</span>
              </button>
              <h5>...for a surprise</h5>
            </div>
            <div className="right-side">
              <button className="Button rounded border truncate">
                <div className="ImgContainer block" id="didr">
                  <img src="/bricky-3.png" alt="Halloween Celebration" />
                  <img src="/nft2.png" alt="Halloween Celebration" />
                  <img src="/nft1.png" alt="Halloween Celebration" />
                </div>
              </button>
              <button className="Button rounded border truncate">
                <div className="ImgContainer block">
                  <img src="/nft2.png" alt="Halloween Celebration" />
                  <img src="/nft1.png" alt="Halloween Celebration" />
                  <img src="/bricky-3.png" alt="Halloween Celebration" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="testimonial text-center">
      <div className="container">
        <div className="heading white-heading">Testimonial</div>
        <Slider {...settings}>
          <div>
            <div className="testimonial4_slide">
              <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="img-circle img-responsive" alt="client1" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h4>Client 1</h4>
            </div>
          </div>
          <div>
            <div className="testimonial4_slide">
              <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="img-circle img-responsive" alt="client2" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h4>Client 2</h4>
            </div>
          </div>
          <div>
            <div className="testimonial4_slide">
              <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="img-circle img-responsive" alt="client3" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h4>Client 3</h4>
            </div>
          </div>
        </Slider>
      </div>
    </div>
      <section className="footer">
        <div className="container">
          <h3>Copyright 2022 © Immutable labs All rights reserved.</h3>
        </div>
      </section>
    </React.Fragment>
  );
}
