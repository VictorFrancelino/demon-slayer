import styles from "./Banner.module.css"

function Banner() {
    return (
        <section id="home" className={styles.banner}>
            <div className={styles.banner_text}>
                <h1>Demon Slayer</h1>
                <p>Bem-vindo ao universo de Demon Slayer! Explore um mundo onde, após o pôr do sol, o perigo espreita a cada instante.</p>
            </div>
        </section>
    )
}

export default Banner