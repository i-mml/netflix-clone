import React from "react";
import s from "./style.module.scss";
import Accordion from "../../../../common/according";

const Faq = () => {
  const collapseList = [
    {
      id: 1,
      title: "What can I watch on Netflix?",
      content:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 2,
      title: "What is Netflix?",
      content:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      id: 3,
      title: "How much does Netflix cost?",
      content:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from €4,99 to €17,99 a month. No extra costs, no contracts.",
    },
    {
      id: 4,
      title: "Where can I watch?",
      content:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      id: 5,
      title: "How do I cancel?",
      content:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id: 6,
      title: "Is Netflix good for kids?",
      content:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
    },
  ];

  return (
    <div className={s.faqContainer}>
      <h2 className={s.title}>Frequently Asked Questions</h2>
      {collapseList?.map((item) => (
        <Accordion title={item?.title} content={item?.content} />
      ))}
      <div className={s.bottomBox}>
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
    </div>
  );
};

export default Faq;
