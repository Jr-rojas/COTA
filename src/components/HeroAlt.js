import heroAltStyles from './HeroAlt.module.css'


export default function HeroAlt({img, page}){

    return(
        <section className={heroAltStyles.heroSection} style={{backgroundImage: `url(${img})`,backgroundPosition: "center", backgroundSize: "cover", filter: "grayscale(100%)",}}>
            <div>
                <h1>{page}</h1>
            </div>
        </section>
    )
}



