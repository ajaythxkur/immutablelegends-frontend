"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { audiohref } from "@/lib/static";
import 'swiper/css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

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
  const [backgroundImage, setBackgroundImage] = useState("/without-light.jpg");


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

  const meetSection = [
    {
      icon: "/img/immu_female.webp"
    },
    {
      icon: "/img/immu_male1.webp"
    },
    {
      icon: "/img/immu_male2.webp"
    },
    {
      icon: "/img/immu_male3.webp"
    }
  ]
  const [randomIcon, setRandomIcon] = useState(1)
  const onRandomIconClick = () => {
    let rndInt;
    do {
      rndInt = Math.floor(Math.random() * meetSection.length);
    } while (rndInt == randomIcon);
    setRandomIcon(rndInt);
  }

  const teamSection = [
    {
      icon: "/img/captain.webp",
      name: "Captain",
      link: "#"
    },
    {
      icon: "/img/jayjay.webp",
      name: "Jayjay",
      link: "https://twitter.com/jayjaynft4"
    },
    {
      icon: "/img/strong.webp",
      name: "Strong",
      link: "https://twitter.com/web3strong"
    },
    {
      icon: "/img/sandeep.webp",
      name: "Sandeep",
      link: "https://twitter.com/Captainonchain"
    },
    {
      icon:  "/img/bruce.webp",
      name: "Bruce",
      link: "https://twitter.com/bruce_solana"
    },
    {
      icon: "/img/manu.webp",
      name: "Manu",
      link: "https://twitter.com/ManuAlba_art"
    },
    {
      icon: "/img/supex.webp",
      name: "Supeeex",
      link: "https://twitter.com/supeeex"
    },
    {
      icon: "/img/max.webp",
      name: "Max",
      link: "https://twitter.com/max4pf1"
    }
  ];
  const [bannerImage, setBannerImage] = useState("1");
  const changeBackground = () => {
    setBannerImage((prev)=> {
      return prev == "1" ? "2" : "1"
    });
  };
  const url = ["Vnq4E5JVIQ","ReTuKV6wXv","dFFlTYT52e","iGBu9EbcvX"];
  const [random, setRandom] = useState(3);
  useEffect(()=>{
    const rand = Math.floor(Math.random() * url.length);
    setRandom(rand)
  },[url]);
  const tweetIntent = {
    url: `pic.twitter.com/${url.at(random)}`,
    hashtags: "ImmutableLegends,NFT,Solana",
    text: "🚀 Getting ready! @ImmuLegends are about to be unleashed into @solana. Don't miss out on the chance to own a legend. Secure your whitelist now!",
    via: "",
    related: "immutable_labs ImmuLegends",
    in_reply_to: "",
  }
  
  return (
    <React.Fragment>
      <audio id="background-music" ref={audioRef} src={audiohref} loop />

      <button id="play-pause-button" onClick={togglePlay}>
        {isPlaying ? (
          <Image alt="not-found" src="/img/pause.png" height="35" width="35" />
        ) : (
          <Image alt="not-found" src="/img/play.png" height="35" width="35" />
        )}
      </button>
      <section className="banner-home" >
        <img className="banner-img" src={`/img/immu_banner${bannerImage}.webp`} alt="" style={{cursor:"pointer"}} onClick={changeBackground} />
      </section>


        <h2 className="meet text-center mb-0">Meet the team</h2>
      <section className="meet-the-team">
        <ul className="c-accordion">
          {
            teamSection.map((v,i)=>(
              <li  className="c-accordion__item" style={{ backgroundImage: `url(${v.icon})` }} key={i}>
              <div className="c-accordion__action">
                <div className="c-accordion__aside">
                  <a href={v.link} target="_blank" className="c-accordion__title c-accordion__title--hover-hide">{v.name}</a>
                </div>
              </div>
            </li>
            ))
          }
         
          
        </ul>

      </section>



      <section className="nft-meet block padding">


        <div className="Wrapper block">
          <div className="RankContainer container block">
            <div className="left-side">

              <h2>Meet Legends</h2>
              <h6>Explore a universe where art meets legends</h6>
              <a target="_blank" href={`https://twitter.com/intent/tweet?text=${tweetIntent.text}&via=${tweetIntent.via}&related=${tweetIntent.related}&in_reply_to=${tweetIntent.in_reply_to}&hashtags=${tweetIntent.hashtags}&url=${tweetIntent.url}`}>
              <button className="twitter-btn">
                <span className="icon"><svg height="45" viewBox="0 0 60 60" width="45" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m30 60c16.5685433 0 30-13.4314567 30-30s-13.4314567-30-30-30-30 13.4314567-30 30 13.4314567 30 30 30z" fill="#00acee"></path><path d="m41.0521385 18.4366943c-1.2089539-1.3744928-2.9316-2.2502302-4.838077-2.2819633-3.6604615-.0609279-6.6284077 3.0321924-6.6284077 6.908385 0 .5501252.0586385 1.0865774.1717154 1.6015572-5.5087846-.3573206-10.3929-3.2259026-13.6619538-7.5499514-.5705539 1.0361399-.8975077 2.2471609-.8975077 3.5444286 0 2.455838 1.1701846 4.6353768 2.9487231 5.922267-1.0865077-.0479675-2.1085616-.3768796-3.0021923-.9164654-.0006462.029493-.0006462.0589929-.0006462.0890105 0 3.4295872 2.2848 6.3067451 5.3170385 6.9769758-.556177.1575997-1.1417539.240078-1.7462308.2360697-.4271077-.0028322-.8424231-.0501962-1.2470769-.13524.8433923 2.8126097 3.2911846 4.8649983 6.1917692 4.93286-2.2684846 1.8830683-5.1264231 3.0045653-8.232 2.998159-.5350154-.0011037-1.0626-.035675-1.5811385-.1021874 2.933377 2.0127143 6.4174385 3.1845715 10.1606077 3.1855535 12.1917923.0031987 18.8589693-10.6066422 18.8589693-19.8093844 0-.3019324-.0066231-.6022496-.0192231-.9011167 1.2950538-.9649855 2.4187154-2.1748628 3.3073385-3.556433-1.1886.5357972-2.4662077.8916496-3.8068154 1.0409189 1.3683923-.8421727 2.419523-2.1900418 2.9143154-3.8063795-1.2808385.7767339-2.6993077 1.3337545-4.2092077 1.6229359z" fill="#fff"></path></g></svg></span>
                <span className="text1">Tweet</span>
                <span className="text2">LFG</span>
              </button>
              </a>
              <h5>...for a surprise</h5>
            </div>
            <div className="right-side">
              <button className="Button rounded border truncate" onClick={onRandomIconClick}>
                <div className="ImgContainer block">
                  <img src={meetSection?.at(randomIcon)?.icon} alt="Halloween Celebration" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    
      <section className="footer">
        <div className="container">
          <h3>Copyright 2024 © Immutable labs All rights reserved.</h3>
        </div>
      </section>
    </React.Fragment>
  );
}