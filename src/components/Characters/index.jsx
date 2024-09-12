import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import ButtonDemonSlayer from "../Button";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import TanjiroImage from "../../assets/Tanjiro.svg";
import ZenitsuImage from "../../assets/Zenitsu.svg";
import InosukeImage from "../../assets/Inosuke.svg";
import NezukoImage from "../../assets/Nezuko.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Characters.module.css";

const characters = [
    {
        name: "Tanjiro Kamado",
        description: "Tanjiro Kamado é um jovem bondoso e determinado que se torna um caçador de demônios após sua família ser brutalmente assassinada por demônios e sua irmã Nezuko ser transformada em um demônio. Tanjiro é conhecido por sua personalidade gentil e altruísta. Ele é extremamente compassivo e se preocupa profundamente com os outros, incluindo seus inimigos. Sua determinação inabalável e espírito resoluto são suas maiores forças, e ele está sempre disposto a lutar pela justiça e proteger aqueles que ama.",
        image: TanjiroImage
    },
    {
        name: "Zenitsu Agatsuma",
        description: "Zenitsu Agatsuma é conhecido por seu comportamento covarde e nervoso, muitas vezes entrando em pânico diante de qualquer ameaça ou perigo. No entanto, quando colocado em situações extremas, ele revela sua verdadeira força. Zenitsu é covarde por natureza, frequentemente se desesperando ou entrando em colapso quando está com medo. No entanto, sua bondade e lealdade são evidentes, especialmente em relação aos seus amigos. Ele demonstra um lado muito protetor quando se trata de proteger aqueles que ama, especialmente Nezuko. Quando desmaia ou entra em um estado de transe, ele exibe sua verdadeira habilidade em combate.",
        image: ZenitsuImage
    },
    {
        name: "Inosuke Hashibira",
        description: "Inosuke Hashibira é um dos membros mais únicos do grupo de caçadores de demônios de Demon Slayer. Criado nas montanhas, ele possui uma natureza selvagem e indomável. Sua personalidade impulsiva e comportamento competitivo frequentemente o colocam em confronto com os outros. Inosuke é extremamente agressivo e adora lutar, constantemente buscando desafios para testar sua força. Ele pode parecer rude e arrogante, mas à medida que a história progride, ele demonstra uma natureza leal e protetora. Apesar de seu comportamento selvagem, ele valoriza seus amigos e está disposto a arriscar tudo por eles.",
        image: InosukeImage
    },
    {
        name: "Nezuko Kamado",
        description: "Nezuko Kamado é a irmã mais nova de Tanjiro e, após um ataque demoníaco, é transformada em um demônio. Apesar de sua nova natureza, ela mantém a capacidade de sentir emoções humanas e tem um forte laço com seu irmão. Nezuko, apesar de ser um demônio, retém sua bondade e afeição por Tanjiro e sua vontade de proteger os inocentes. Ela raramente fala devido ao bambu em sua boca, mas demonstra suas emoções por meio de ações. Sua natureza carinhosa é evidente, mas como demônio, ela luta contra seus impulsos, sempre resistindo à vontade de consumir humanos.",
        image: NezukoImage
    }
]

function Characters() {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 884)

    const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 884)
    }

    useEffect(() => {
        checkScreenSize()

        window.addEventListener("resize", checkScreenSize)

        return () => {
            window.removeEventListener("resize", checkScreenSize)
        }
    }, [])

    return (
        <section id="characters" className={styles.characters}>
            <h2>Personagens</h2>

            <Swiper
                style={{
                    "--swiper-pagination-color": "#911714",
                }}
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                navigation={!isMobile ? {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                } : false}
                onBeforeInit={(swiper) => {
                    if (!isMobile) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
            >
                {characters.map((character, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.character}>
                            <img src={character.image} alt={character.name} />
                            <div className={styles.character_text}>
                                <h3><strong>{character.name}</strong></h3>
                                <p>{character.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {!isMobile && (
                <>
                    <ButtonDemonSlayer ref={prevRef} className={styles.button_left} variant="contained">
                        <ArrowBack />
                    </ButtonDemonSlayer>
                    <ButtonDemonSlayer ref={nextRef} className={styles.button_right} variant="contained">
                        <ArrowForward />
                    </ButtonDemonSlayer>
                </>
            )}
        </section >
    )
}

export default Characters