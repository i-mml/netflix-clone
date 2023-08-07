import { useState } from "react";
import s from "./style.module.scss";

export default function Accordion(props: any) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={s.container}>
      <button className={s.btn} onClick={toggle} type="button">
        <p>{props.title}</p>
      </button>
      <div
        className={s.content}
        style={{ display: isShowing ? "block" : "none" }}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
}
