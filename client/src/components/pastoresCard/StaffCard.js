import styles from "./StaffCard.module.scss"

const PastoresCard = ({ pastor }) => {
    const { image, name, position } = pastor

    return (
        <>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img src={image} alt={name}></img>
                </div>
                <div className={styles.text}>
                    <p className={styles.title}>{name} </p>
                    <span className={styles.description}>{position}</span>
                </div>
            </div>
        </>
    )
}

export default PastoresCard