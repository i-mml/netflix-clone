import { useState } from "react";
import s from "./style.module.scss";
import { AccordingType } from "../../../types/faq.type";

export default function Accordion(props: AccordingType) {
  const { content, title } = props;
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={s.container}>
      <button className={s.btn} onClick={toggle}>
        <p>{title}</p>
      </button>
      <div
        className={s.content}
        style={{ display: isShowing ? "block" : "none" }}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
}
