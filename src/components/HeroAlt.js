import heroAltStyles from './HeroAlt.module.css'


export default function HeroAlt({img, page}){

    return(
        <section className={heroAltStyles.heroSection} style={{backgroundImage: `url(${img})`,backgroundPosition: "center", backgroundSize: "cover",}}>
            <div>
                <h1>{page}</h1>
            </div>
        </section>
    )
}



