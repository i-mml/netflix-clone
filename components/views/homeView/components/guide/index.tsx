import Image from "next/image";
import React from "react";
import s from "./style.module.scss";

const Guide = () => {
  const guidesList = [
    {
      id: 1,
      title: "Enjoy on your TV",
      desctiption:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      href: "/Images/tv.png",
      order: s.order2,
      className: s.f01,
      video: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
      videoContainerClass: s.firstVideoContainer
    },
    {
      id: 2,
      title: "Watch everywhere",
      desctiption:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      href: "/Images/applePc.png",
      order: s.order1,
      className: s.f02,
    },
    {
      id: 3,
      title: "Create profiles for kids",
      desctiption:
        "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      href: "/Images/kids.png",
      order: s.order2,
      className: s.f03,
    },
    {
      id: 4,
      title: "Download your shows to watch offline",
      desctiption: "Only available on ad-free plans.",
      href: "/Images/mobile.jpg",
      order: s.order1,
      className: s.f04,
    },
  ];

  return (
    <div className={s.guideContainer} id="how_to">
      {guidesList?.map((item) => (
        <div className={s.guideItem} key={item?.id}>
          <div className={`${s.contentContainer} ${item?.className} ${item?.order}`}>
            <Image
              alt="guide image"
              src={item.href}
              layout="responsive"
              width={200}
              height={200}
              unoptimized
            />
            {item?.video &&
              <div className={item?.videoContainerClass}>
                <video className={s.video} controls playsInline autoPlay muted loop>
                  <source src={item?.video} type="video/mp4" />
                </video>
              </div>
            }
          </div>
          <div className={s.textBox}>
            <h2 className={s.title}>{item.title}</h2>
            <div className={s.description}>{item.desctiption}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Guide;
