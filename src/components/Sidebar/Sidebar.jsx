import s from "./Sidebar.module.css";
import { nanoid } from "nanoid";
import avatar from "../../assets/avatar.png";
import { menuConfig } from "../../utils/menu";

const Sidebar = (props) => {
  return (
    <aside>
      <div className={s.box}></div>
      <div className={s.item}>
        <div>
          {menuConfig.map((el) => {
            return (
              <a key={nanoid()} className={s.link} href="">
                <img src={el.img} alt="" />
                <span>{el.name}</span>
              </a>
            );
          })}
        </div>
        <div className={s.avatar}>
          <img src={avatar} alt="" />
          <span> Білл Гейтс</span>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
