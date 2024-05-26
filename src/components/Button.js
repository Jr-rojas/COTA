import { Link } from "react-router-dom"
import styles from "./Button.module.css"

export default function Button({title, type, link, onClick, bgColor, hoverColor}){
    const bgClass = bgColor ? styles[`bg-${bgColor}`] : "";
    const hoverClass = hoverColor ? styles[`hover-${hoverColor}`] : "";

    const renderButton = () => {
        switch (type){
            case 'link':
                return(
                    <Link to={link} className={`${styles.button} ${bgClass} ${hoverClass}`}>
                        {title}
                    </Link>
                )
            case 'external' :
                return (
                    <a href={link} className={`${styles.button} ${bgClass} ${hoverClass}`} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                )
            case 'submit' :
                return (
                    <button type='submit' className={`${styles.button} ${bgClass} ${hoverClass}`} onClick={onClick}>
                        {title}
                    </button>
                )
            default:
                return(
                    <button className={`${styles.button} ${bgClass} ${hoverClass}`} onClick={onClick}>
                        {title}
                    </button>
                )
        }
    }
    return renderButton();
}