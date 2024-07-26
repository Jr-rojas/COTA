import heroAltStyles from './HeroAlt.module.css'


export default function HeroAlt({img, page, children, button, hasGradient}){

    return(
        <section className={heroAltStyles.heroSection} style={{backgroundImage: `url(${img})`,backgroundPosition: "center", backgroundSize: "cover",}}>
            {hasGradient && <div className={heroAltStyles.gradiantOverlay}></div>}
            <div className={heroAltStyles.content}>
                <h1 style={{marginBottom: "0"}}>{page}</h1>
                {children}
                {button}
            </div>
        </section>
    )
}



