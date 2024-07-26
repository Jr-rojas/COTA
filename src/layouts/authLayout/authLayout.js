import { Link } from "react-router-dom";

import styles from "./authLayout.module.css";


export default function AuthLayout({children, title}){
    return(
        <>
            <div className={styles.body}>
                <div className={styles.pageContent}>
                    <div className={styles.logoContent}>
                        <Link to="/" className={styles.link}>
                            <div className={styles.logo}>
                                <img src="/cota-logo.png" alt="COTA logo" width="50" height="50" />
                                <span className={styles.churchName}>Church of <br />
                                    the Americas</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <h2 style={{color:"black", marginBottom:"24px", fontSize:"24px"}}>{title}</h2>
                    </div>
                    <div style={{backgroundColor: "white"}} className={styles.formContent}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
};