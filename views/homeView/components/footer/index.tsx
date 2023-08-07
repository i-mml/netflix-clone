import React from "react";
import s from "./style.module.scss";

const Footer = () => {
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
    {
      id: 7,
      title: "Cancell membership",
      href: "/",
    },
    {
      id: 8,
      title: "media center",
      href: "/",
    },
    {
      id: 9,
      title: "netflix shop",
      href: "/",
    },
    {
      id: 10,
      title: "Ways to watch",
      href: "/",
    },
    {
      id: 11,
      title: "Cookie Preferences",
      href: "/",
    },
    {
      id: 12,
      title: "Speed Test",
      href: "/",
    },
    {
      id: 13,
      title: "Only on Netflix",
      href: "/",
    },
    {
      id: 14,
      title: "Help Center",
      href: "/",
    },
    {
      id: 15,
      title: "Investor Relations",
      href: "/",
    },
    {
      id: 16,
      title: "Redeem Gift Cards",
      href: "/",
    },
    {
      id: 17,
      title: "Terms of Use",
      href: "/",
    },
    {
      id: 18,
      title: "Impressum",
      href: "/",
    },
    {
      id: 19,
      title: "Legal Guarantee",
      href: "/",
    },
  ];
  return (
    <div className={s.footerContainer}>
      {linksList?.map((item) => (
        <a href={item?.href} className={s.link}>
          {item?.title}
        </a>
      ))}
    </div>
  );
};

export default Footer;
