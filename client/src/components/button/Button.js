import { Link } from "react-router-dom"

import styles from "./Button.module.css"

export default function Button({title, type, link, onClick, bgColor, hoverColor, disabled, style}){
    const bgClass = bgColor ? styles[`bg-${bgColor}`] : "";
    const hoverClass = hoverColor ? styles[`hover-${hoverColor}`] : "";
    const disabledClass = disabled ? styles.disabled : "";

    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
        } else {
            window.scrollTo({ top: 0, behavior: 'auto' });

            if (onClick) {
                onClick(e);
            }
        }
    };

    const renderButton = () => {
        switch (type){
            case 'link':
                return(
                    <Link 
                        to={disabled ? "#" : link}
                        className={`${styles.button} ${bgClass} ${hoverClass} ${disabledClass}`}
                        onClick={handleClick}
                    >
                        {title}
                    </Link>
                )
            case 'external' :
                return (
                    <a 
                        href={disabled ? "/" : link}
                        className={`${styles.button} ${bgClass} ${hoverClass} ${disabledClass}`} 
                        target="_blank" rel="noopener noreferrer"
                        onClick={handleClick}
                    >
                        {title}
                    </a>
                )
            case 'submit' :
                return (
                    <button 
                        type='submit'
                        className={`${styles.button} ${bgClass} ${hoverClass} ${disabledClass}`} 
                        onClick={handleClick}
                        disabled={disabled}
                        style={style}
                    >
                        {title}
                    </button>
                )
            default:
                return(
                    <button 
                        className={`${styles.button} ${bgClass} ${hoverClass} ${disabledClass}`} 
                        onClick={handleClick}
                        disabled={disabled}
                    >
                        {title}
                    </button>
                )
        }
    }
    return renderButton();
}