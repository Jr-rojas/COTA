import Button from '../button/Button'
import { motion } from 'motion/react'

import styles from './Hero.module.scss'

export default function Hero({ title }) {
    return (
        <div className={styles.section}>
            <div className={styles.hero}>
                <motion.div 
                    className='container'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
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
                </motion.div>
            </div>
        </div>
    )
}