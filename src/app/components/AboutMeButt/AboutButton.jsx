"use client"
import Rounded from "../../common/RoundedButton/index";
import styles from "../../components/AboutMeButt/style.module.scss";

const AboutButton = () => {
  return ( 

      <div className="">
      <Rounded className={styles.button}>
        <p>About me</p>
      </Rounded>
      </div>
   );
}
 
export default AboutButton;