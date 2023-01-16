import React from "react";
import classes from "./Registration.module.css";

const Tags = () => {
  return (
    <>
      <div className={classes["input-wrap"]}>
        <label>태그</label>
        <input />
        <select>
          <option>전자기기</option>
          <option>기프티콘</option>
          <option>상품권</option>
          <option>현금</option>
          <option>의류</option>
          <option>식품</option>
          <option>설문 조사</option>
          <option>댓글</option>
          <option>출석 체크</option>
          <option>공유 & 초대</option>
        </select>
      </div>
      <div></div>
    </>
  );
};

export default Tags;
