import React from "react";
import classes from "./Registration.module.css";
import Tags from "./Tags";
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
          <label htmlFor="link">링크</label>
          <input id="url" type="url" />
        </div>
        <div className={classes["input-wrap"]}>
          <label htmlFor="title">제목</label>
          <input id="title" type="text" />
        </div>
        <div className={classes["input-wrap"]}>
          <label htmlFor="sub-title">부제목</label>
          <input id="sub-title" type="text" />
        </div>
        <div className={`${classes["input-wrap"]} ${classes["date-wrap"]}`}>
          <div className={classes["day-wrap"]}>
            <label className={classes["date-label"]} htmlFor="start-day">
              이벤트 시작일
            </label>
            <input id="start-day" type="date" />
          </div>
          <div className={classes["time-wrap"]}>
            <input className={classes["time-checkbox"]} type="checkbox" />
            <label className={classes["time-label"]} htmlFor="start-time">
              시간
            </label>
            <input
              className={classes["time-input"]}
              id="start-time"
              type="time"
              disabled
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
            <input className={classes["time-checkbox"]} type="checkbox" />
            <label className={classes["time-label"]} htmlFor="end-time">
              시간
            </label>
            <input
              className={classes["time-input"]}
              id="end-time"
              type="time"
              disabled
            />
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
            <input className={classes["time-checkbox"]} type="checkbox" />
            <label className={classes["time-label"]} htmlFor="announement-time">
              시간
            </label>
            <input
              className={classes["time-input"]}
              id="announement-time"
              type="time"
              disabled
            />
          </div>
        </div>
        <div className={classes["input-wrap"]}>
          <label>이미지</label>
          <input />
        </div>
        <div className={classes["input-wrap"]}>
          <label>태그</label>
          <input />
        </div>
        <div className={classes["input-wrap"]}>
          <label>당첨자 수</label>
          <input />
        </div>
        <div className={classes["input-wrap"]}>
          <label>주의사항</label>
          <input type="text" />
          <button type="button" onClick={() => console.log("a")}>
            추가
          </button>
        </div>
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
};

export default Registration;
