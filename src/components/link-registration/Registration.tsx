import React from "react";
import classes from "./Registration.module.css";
import Tags from "./Tags";
import Date from "./Date";
import Warnings from "./Warnings";
// id: string;
// title: string;
// description: string;
// startDate: Date;
// endDate: Date;
// announcementDate: Date;
// image: string;
// tags: string[];
// warnings: string[];
// link: string;
// numOfWinner: string;

const Registration = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={classes["container"]}>
      <form onSubmit={handleSubmit}>
        <div className={classes["input-wrap"]}>
          <label className={classes["link__label"]} htmlFor="link">
            링크
          </label>
          <input id="url" type="url" />
        </div>
        <div className={classes["input-wrap"]}>
          <label className={classes["title__label"]} htmlFor="title">
            제목
          </label>
          <input id="title" type="text" />
        </div>
        <div className={classes["input-wrap"]}>
          <label className={classes["subtitle__label"]} htmlFor="sub-title">
            부제목
          </label>
          <input id="sub-title" type="text" />
        </div>
        <Date />
        <div className={classes["input-wrap"]}>
          <label className={classes["image__label"]}>이미지</label>
          <input />
        </div>
        <Tags />
        <div className={classes["input-wrap"]}>
          <label className={classes["winner__label"]}>당첨자 수</label>
          <input />
        </div>
        <Warnings />
        <button className={classes["registration-btn"]} type="submit">
          등록하기
        </button>
      </form>
    </div>
  );
};

export default Registration;
