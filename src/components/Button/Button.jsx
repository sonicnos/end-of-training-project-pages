import styles from "./page.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
const Button = () => {
  return (
    <>
      <div className={styles.btn}>
        <FaArrowRightLong className={styles.arrowIcon} />
      </div>
    </>
  );
};

export default Button;
