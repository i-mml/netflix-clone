import React from "react";
import s from "./style.module.scss";
import Image from "next/image";
import PopCornIcon from '../popcornIcon';

const TopBox = () => {
  return (
    <>
      <div className={s.topBox}>
        <div className={s.topBoxHeader}>
          <div className={s.logo}>
            <Image
              src="/Images/Netflix_Logo.png"
              width={200}
              height={80}
              alt="Netflix logo"
              layout="responsive"
            />
          </div>
          <button className={s.signInBtn}>Sign In</button>
        </div>
        <h1 className={s.title}>Unlimited movies, TV shows, and more</h1>
        <div className={s.subTitle}>Watch anywhere. Cancel anytime.</div>
        <div className={s.subTitle}>
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className={s.emailBox}>
          <input
            type="email"
            placeholder="Email address"
            className={s.emailInput}
          />
          <button className={s.emailBtn}>Get Started</button>
        </div>
      </div>
      <div className={s.promotionBox}>
        <PopCornIcon />
        <div className={s.descBox}>
          <div className={s.desc1}>The Netflix you love for just £4.99.</div>
          <div className={s.desc2}>Get the Standard with adverts plan.</div>
          <a className={s.link} href="/">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
};

export default TopBox;
