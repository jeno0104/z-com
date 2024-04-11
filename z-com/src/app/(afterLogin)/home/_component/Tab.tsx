"use client";
import { useState } from "react";
import style from "./Tab.module.css";

export default function Tab() {
  const onClickRec = () => {
    setTab("rec");
  };
  const onClickFol = () => {
    setTab("fol");
  };
  const [tab, setTab] = useState("rec");

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}></div>
      <div className={style.homeTab}>
        <div onClick={onClickRec}>
          추천
          <div className={style.tabIndicator} hidden={tab === "fol"}></div>
        </div>
        <div onClick={onClickFol}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === "rec"}></div>
        </div>
      </div>
    </div>
  );
}
