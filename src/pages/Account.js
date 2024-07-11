import { Link } from "react-router-dom";
import LoginForm from "../components/Forms/loginForm";
import styles from "./Account.module.css";


export default function Account(){
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
                        <h2 style={{color:"black", marginBottom:"24px", fontSize:"24px"}}>Log In</h2>
                    </div>
                    <div style={{backgroundColor: "white"}} className={styles.formContent}>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </>
    )
};