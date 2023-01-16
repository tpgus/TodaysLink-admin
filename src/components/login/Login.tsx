import classes from "./Login.module.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { idValidator, passwordValidator } from "../../utils/validator";

const Login = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (idRef.current === null || passwordRef.current === null) return;

    if (
      !idValidator(idRef.current.value) ||
      !passwordValidator(passwordRef.current.value)
    ) {
      setIsValid(false);
      return;
    }

    const enteredLoginInfo = {
      id: idRef.current.value,
      password: passwordRef.current.value,
    };
    navigate("/dashboard");
  };

  return (
    <div className={classes["login-container"]}>
      <h2>관리자 로그인</h2>
      <form onSubmit={handleSubmit} className={classes["login__form"]}>
        <div className={classes["input-wrap--id"]}>
          <label className={classes["label--id"]} htmlFor="id">
            아이디
          </label>
          <input
            ref={idRef}
            className={classes["input--id"]}
            id="id"
            type="text"
          />
        </div>
        <div className={classes["input-wrap--password"]}>
          <label className={classes["label--password"]} htmlFor="password">
            패스워드
          </label>
          <input
            ref={passwordRef}
            className={classes["input--password"]}
            id="password"
            type="password"
          />
        </div>
        <button type="submit" className={classes["login__btn"]}>
          로그인
        </button>
      </form>
      <p>{!isValid ? "로그인 실패" : ""}</p>
    </div>
  );
};

export default Login;
