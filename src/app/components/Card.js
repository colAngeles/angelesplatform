import React from "react";
import styles from "../css/cards.module.css";

export default function Card(){
    return(
        <div className={styles["cards-container"]}>
            <div className={`${styles["item"]} ${styles["image1"]}`} style={{backgroundImage: `url(./media/LAB01.jpg)`}}>
            </div>
            <div className={`${styles["item"]} ${styles["image2"]}`} style={{backgroundImage: `url(./media/LAB02.jpg)`}}>   
            </div>
            <div className={`${styles["item"]} ${styles["image3"]}`} style={{backgroundImage: `url(./media/LAB03.jpg)`}}> 
            </div>
        </div>
    )
}