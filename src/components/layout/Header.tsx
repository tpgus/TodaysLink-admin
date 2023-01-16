import { v4 as uuidv4 } from "uuid";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const NAV_MENU = [
  {
    name: "대시보드",
    path: "/dashboard",
  },
  {
    name: "이벤트 링크 등록",
    path: "/registration-link",
  },
  {
    name: "문의 관리",
    path: "/managing-qna",
  },
];

const activeStyle = {
  borderBottom: "2px solid #fff",
  paddingBottom: "0.5rem",
};

const Header = () => {
  return (
    <div className={classes["header"]}>
      <nav>
        <ul>
          {NAV_MENU.map((menu) => (
            <li key={uuidv4()}>
              <NavLink
                to={menu.path}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
