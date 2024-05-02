import styles from './Hero.module.css'

export default function Hero({ title, btnText, btnText2 }) {
    return (
        <div className={styles.section}>
            <div className={styles.hero}>
                <div className='container'>
                    <h1 className={styles.heroText}>{title}</h1>
                    <div className={styles.buttonGroup}>
                        <div className={styles.btns}>
                            <a href="/">Soy Nuevo</a>
                            <a href="https://www.youtube.com/@ChurchoftheAmericas" target="_blank" rel="noreferrer">En Vivo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}