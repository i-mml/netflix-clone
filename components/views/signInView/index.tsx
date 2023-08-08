import Image from "next/image";
import React from "react";
import s from "./style.module.scss";

const SignInView = () => {
  const linksList = [
    {
      id: 1,
      title: "FAQ",
      href: "/",
    },
    {
      id: 2,
      title: "Jobs",
      href: "/",
    },
    {
      id: 3,
      title: "Buy gift cards",
      href: "/",
    },
    {
      id: 4,
      title: "Privacy",
      href: "/",
    },
    {
      id: 5,
      title: "Contact us",
      href: "/",
    },
    {
      id: 6,
      title: "Legal notice",
      href: "/",
    },
  ];
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Image
          src="/Images/Netflix_Logo.png"
          width={200}
          height={80}
          alt="Netflix logo"
        />
      </div>
      <div className={s.bgText}>
        <h1 className={s.title}>Sign In</h1>
        <input type="email" placeholder="Email address" className={s.input} />
        <input type="passsword" placeholder="password" className={s.input} />
        <button className={s.btn}>Sign In</button>
        <div className={s.subTitle}>
          <div className={s.checkBoxContainer}>
            <input
              type="checkbox"
              id="Remember me"
              name="Remember me"
              className={s.checkBox}
            />
            <label className={s.label}>Remember me</label>
          </div>
          <a href="/" className={s.help}>
            Need Help?
          </a>
        </div>
        <div className={s.textBottom}>
          <span className={s.linkTitle}>New to Netflix? </span>
          <a href="/" className={s.signUpLink}>
            Sign up now.
          </a>

          <div className={s.description}>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a href="/" className={s.learnLink}>
              Learn more.
            </a>
          </div>
        </div>
      </div>
      <div className={s.footer}>
        <a href="/" className={s.topLink}>
          Questions? Contact us.
        </a>
        {linksList?.map((item) => (
          <a href={item?.href} className={s.link}>
            {item?.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SignInView;
