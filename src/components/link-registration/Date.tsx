import React, { useRef } from "react";
import classes from "./Date.module.css";

const Date = () => {
  const timeRef = useRef<HTMLInputElement>(null);

  const handleSelectTime = () => {};

  return (
    <>
      <div className={`${classes["input-wrap"]} ${classes["date-wrap"]}`}>
        <div className={classes["day-wrap"]}>
          <label className={classes["date-label"]} htmlFor="start-day">
            이벤트 시작일
          </label>
          <input id="start-day" type="date" />
        </div>
        <div onClick={handleSelectTime} className={classes["time-wrap"]}>
          <label className={classes["time-label"]} htmlFor="start-time">
            시간
          </label>
          <input
            className={classes["time-input"]}
            id="start-time"
            type="time"
          />
        </div>
      </div>
      <div className={`${classes["input-wrap"]} ${classes["date-wrap"]}`}>
        <div className={classes["day-wrap"]}>
          <label className={classes["date-label"]} htmlFor="end-day">
            이벤트 종료일
          </label>
          <input id="end-day" type="date" />
        </div>
        <div className={classes["time-wrap"]}>
          <label className={classes["time-label"]} htmlFor="end-time">
            시간
          </label>
          <input className={classes["time-input"]} id="end-time" type="time" />
        </div>
      </div>
      <div className={`${classes["input-wrap"]} ${classes["date-wrap"]}`}>
        <div className={classes["day-wrap"]}>
          <label className={classes["date-label"]} htmlFor="announement-day">
            당첨 발표일
          </label>
          <input id="announement-day" type="date" />
        </div>
        <div className={classes["time-wrap"]}>
          <label className={classes["time-label"]} htmlFor="announement-time">
            시간
          </label>
          <input
            className={classes["time-input"]}
            id="announement-time"
            type="time"
          />
        </div>
      </div>
    </>
  );
};

export default Date;
