import styles from "./Sidebar.module.css";
import university from "../../assets/university.png";
import faculty from ".././assets/facultyty.png";
import avatar from ".././assets/avatar.png";

const Sidebar = (props) => (
  <aside>
    <div className={styles.box}></div>
    <div>
      <a href="">
        <img src={university} />
      </a>
    </div>
    <div>
      <a href="">
        <img src={faculty} />
      </a>
    </div>
    <div>
      <a href="">
        <img src={avatar} />
      </a>
    </div>
  </aside>
);
export default Sidebar;
