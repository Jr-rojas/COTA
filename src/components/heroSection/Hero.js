import Button from '../button/Button'

import styles from './Hero.module.css'

export default function Hero({ title }) {
    return (
        <div className={styles.section}>
            <div className={styles.hero}>
                <div className='container'>
                    <h1 className={styles.heroText}>{title}</h1>
                    <div className={styles.buttonGroup}>
                        <div className={styles.btns}>
                            <Button
                                type="link"
                                disabled={true}
                                title="Soy Nuevo"
                                link="/new"
                            />
                            <Button
                                type="external"
                                title="En Vivo"
                                link="https://www.youtube.com/@ChurchoftheAmericas"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}