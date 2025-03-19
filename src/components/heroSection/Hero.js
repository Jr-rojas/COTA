import Button from '../button/Button'

import styles from './Hero.module.scss'

export default function Hero({ title }) {
    return (
        <div className={styles.section}>
            <div className={styles.hero}>
                <div className='container'>
                    <h1 className="display-1 fw-bold text-light">{title}</h1>
                        <div>
                           {/*  <Button
                                type="link"
                                disabled={true}
                                title="Soy Nuevo"
                                link="/new"
                                bgColor="light"
                                hoverColor="blue"
                            /> */}
                            <Button
                                type="external"
                                title="En Vivo"
                                link="https://www.youtube.com/@ChurchoftheAmericas"
                                bgColor="light"
                                hoverColor="blue"
                            />
                        </div>
                </div>
            </div>
        </div>
    )
}