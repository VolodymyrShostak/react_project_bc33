import s from "./Sidebar.module.css";
import university from "../../assets/university.png";
import faculty from "../../assets/faculty.png";
import avatar from "../../assets/avatar.png";

const Sidebar = (props) => (
  <aside>
    <div className={s.box}></div>
    <div className={s.item}>
      <a className={s.decoration} href="">
        <img src={university} alt="" />
        <span className={s.link}>університет</span>
      </a>
    </div>
    <div className={s.item}>
      <a className={s.decoration} href="">
        <img src={faculty} alt="" />
        <span className={s.link}>факультети</span>
      </a>
    </div>
    <div className={s.item}>
      <a className={s.decoration} href="">
        <img src={avatar} alt="" />
        <span className={s.link}> Білл Гейтс</span>
      </a>
    </div>
  </aside>
);
export default Sidebar;
