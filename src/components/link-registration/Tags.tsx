import classes from "./Tags.module.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const INIT_TAGS = [
  "선택",
  "전자기기",
  "기프티콘",
  "상품권",
  "현금",
  "의류",
  "식품",
  "설문 조사",
  "출석 체크",
  "댓글",
  "공유 & 초대",
];

let remainTagOptions = INIT_TAGS;

const addToTagList = (targetTag: string) => {
  remainTagOptions.push(targetTag);
};

const removeTagFromList = (targetTag: string) => {
  const newRemainTags = remainTagOptions.filter((tag) => tag !== targetTag);
  remainTagOptions = newRemainTags;
};
/* 렌더링과 관련없는 변수, 함수 끝*/
/* Tags 컴포넌트 시작 */
const Tags = () => {
  const [selectedTagList, setSelectedTagList] = useState<string[]>([]);

  const handlSelectTag = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const targetTag = event.target.value;
    const newSelectedTagList = selectedTagList.slice();
    newSelectedTagList.push(targetTag);
    setSelectedTagList(newSelectedTagList);
    removeTagFromList(targetTag);
  };

  const handleCancelTag = (targetTag: string) => {
    const newSelectedTagList = selectedTagList.filter(
      (tag) => tag !== targetTag
    );
    setSelectedTagList(newSelectedTagList);
    addToTagList(targetTag);
  };

  return (
    <>
      <div className={classes["input-wrap"]}>
        <label className={classes["tag__label"]}>태그</label>
        <select className={classes["select"]} onChange={handlSelectTag}>
          {remainTagOptions.map((tag) => (
            <option key={uuidv4()}>{tag}</option>
          ))}
        </select>
        <ul className={classes["tags__ul"]}>
          {selectedTagList.map((tag) => (
            <li
              className={classes["tag"]}
              key={uuidv4()}
              onClick={() => handleCancelTag(tag)}
            >
              {tag}
              <button>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tags;
