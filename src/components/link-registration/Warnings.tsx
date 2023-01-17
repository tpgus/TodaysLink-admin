import { useState, useRef, useEffect } from "react";
import classes from "./Warnings.module.css";

type WarningsType = string[];

const Warnings = () => {
  const [warnings, setWarnings] = useState<WarningsType>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const test = Array.from({ length: warnings.length + 1 }).fill(0);

  useEffect(() => {
    console.log(warnings);
  }, [warnings]);

  const addWarning = () => {
    if (inputRef.current === null) return;
    const newWarning = inputRef.current.value;
    const newWarnings = warnings.slice();
    newWarnings.push(newWarning);
    setWarnings(newWarnings);
  };

  const removeWarning = (targetIdx: number) => {
    const foundIdx = warnings.findIndex((_, idx) => idx === targetIdx);
    const newWarnings = warnings.slice();
    newWarnings.splice(foundIdx, 1);
    setWarnings(newWarnings);
  };

  return (
    <>
      <div className={classes["input-wrap"]}>
        {test.map((_, idx) => (
          <div className={classes["warning__wrap"]}>
            <label className={classes["warning__label"]}>
              주의사항 {idx + 1}
            </label>

            <input
              ref={inputRef}
              className={classes["warning__input"]}
              type="text"
            />
            <button onClick={() => removeWarning(idx)}>삭제</button>
          </div>
        ))}
        <button
          className={classes["warning__btn"]}
          type="button"
          onClick={addWarning}
        >
          추가
        </button>
      </div>
    </>
  );
};

export default Warnings;
