import styles from "./Kizuki.module.css";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import WakurabaImage from "../../assets/Wakuraba.svg";
import RuiImage from "../../assets/Rui.svg";
import EnmuImage from "../../assets/Enmu.svg";
import NakimeImage from "../../assets/Nakime.svg";
import KaigakuImage from "../../assets/Kaigaku.svg";
import GyutaroImage from "../../assets/Gyutaro.svg";
import DakiImage from "../../assets/Daki.svg";
import GyokkoImage from "../../assets/Gyokko.svg";
import HantenguImage from "../../assets/Hantengu.svg";
import AkazaImage from "../../assets/Akaza.svg";
import DoumaImage from "../../assets/Douma.svg";
import KokushiboImage from "../../assets/Kokushibo.svg";

const kizuki = [
    {
        KizukiId: 1,
        name: "Wakuraba",
        kizukiRank: "Lua Inferior 6",
        description: "Wakuraba é um demônio ágil e rápido, com instintos aguçados de sobrevivência. Ele mostrou ser extremamente cauteloso, tentando fugir quando percebeu que Muzan estava eliminando as Lunas Inferiores. No entanto, sua tentativa de escapar falhou, resultando em sua execução por Muzan. Wakuraba não chegou a demonstrar muitas de suas habilidades em combate.",
        image: WakurabaImage
    },
    {
        KizukiId: 2,
        name: "Rui",
        kizukiRank: "Lua Inferior 5",
        description: "Rui era o demônio que formou uma 'família' própria na montanha Natagumo, usando seu poder para manipular e controlar outros demônios. Ele possuía a habilidade de criar fios extremamente afiados a partir de suas próprias mãos, que eram tão fortes quanto aço. Obcecado com a ideia de laços familiares, Rui buscava recriar a sensação de pertencer a uma família, mas sua interpretação distorcida resultava em tortura e controle sobre seus 'familiares'.",
        image: RuiImage
    },
    {
        KizukiId: 3,
        name: "Enmu",
        kizukiRank: "Lua Inferior 4",
        description: "Enmu é o último e mais forte dos demônios das Lunas Inferiores. Sádico e leal a Muzan, ele possui a habilidade de manipular os sonhos de suas vítimas, colocando-as em um estado de sono profundo onde ele pode controlar e torturar suas mentes. Ele encontra prazer no sofrimento humano e usa suas habilidades para criar pesadelos aterrorizantes, quebrando a sanidade de suas presas antes de matá-las. Enmu foi o principal antagonista durante o arco do 'Trem Infinito'.",
        image: EnmuImage
    },
    {
        KizukiId: 4,
        name: "Nakime",
        kizukiRank: "Lua Inferior 3",
        description: "Nakime é uma demônia tranquila e misteriosa, conhecida por sua habilidade única de manipular um castelo infinito tocando seu biwa (um instrumento de cordas tradicional japonês). Ela pode reorganizar os cômodos e salas do castelo ao seu bel-prazer, tornando quase impossível para seus inimigos navegarem ou escapar. Sua presença serena esconde uma lealdade inabalável a Muzan e uma determinação implacável para impedir que os caçadores de demônios cheguem perto do líder.",
        image: NakimeImage
    },
    {
        KizukiId: 5,
        name: "Kaigaku",
        kizukiRank: "Lua Inferior 2",
        description: "Kaigaku foi um ex-caçador de demônios e discípulo do mesmo mestre que treinou Zenitsu. Depois de se render ao medo, ele escolheu se tornar um demônio e foi promovido a Lua Superior 6 após a morte de Daki e Gyutaro. Ele utiliza a Respiração da Trovão, assim como Zenitsu, mas com um toque demoníaco, o que o torna extremamente perigoso. Arrogante e impiedoso, Kaigaku despreza aqueles que ele considera fracos e está disposto a tudo para alcançar mais poder.",
        image: KaigakuImage
    },
    {
        KizukiId: 6,
        name: "Gyutaro",
        kizukiRank: "Lua Inferior 1",
        description: "Gyutaro é o irmão mais velho de Daki e juntos eles compartilham a posição de Lua Superior 6. Ele teve uma infância sofrida nas zonas mais pobres da cidade e cresceu ressentido com a desigualdade e o desprezo que enfrentava. Seu corpo é magro e esquelético, mas ele é um lutador temível, usando foices duplas feitas de sangue demoníaco. Gyutaro é extremamente possessivo e protetor de sua irmã, e juntos eles representam uma ameaça mortal aos Caçadores de Demônios.",
        image: GyutaroImage
    },
    {
        KizukiId: 7,
        name: "Daki",
        kizukiRank: "Lua Superior 6",
        description: "Daki é a irmã de Gyutaro e compartilha a posição de Lua Superior 6 com ele. Embora sua aparência seja atraente e sedutora, Daki é cruel e impiedosa. Ela usa faixas demoníacas como suas principais armas, que podem cortar seus inimigos em pedaços ou prender suas vítimas. Sua personalidade arrogante e vaidosa esconde uma profunda ligação com seu irmão, Gyutaro, a quem ela deve sua força e sobrevivência como demônio.",
        image: DakiImage
    },
    {
        KizukiId: 8,
        name: "Gyokko",
        kizukiRank: "Lua Superior 5",
        description: "Gyokko é um demônio com uma visão distorcida de arte e beleza, obcecado por criar 'obras-primas' horríveis a partir de corpos humanos. Ele tem uma aparência grotesca, com seu corpo emergindo de vasos de cerâmica. Gyokko é capaz de invocar criaturas demoníacas dessas cerâmicas, além de manipular a água em batalha. Seu sadismo é intensificado por sua crença de que a arte deve ser perturbadora e macabra, e ele despreza qualquer um que critique suas criações.",
        image: GyokkoImage
    },
    {
        KizukiId: 9,
        name: "Hantengu",
        kizukiRank: "Lua Superior 4",
        description: "Hantengu é um demônio extremamente covarde, sempre expressando medo e insegurança. Seu verdadeiro poder reside em sua capacidade de se dividir em várias versões de si mesmo, cada uma representando uma emoção diferente, como ódio, alegria e tristeza. Cada uma dessas formas tem suas próprias habilidades únicas, tornando-o um inimigo difícil de derrotar. Sua personalidade fragmentada reflete sua incapacidade de lidar com a realidade e seu medo constante de ser perseguido.",
        image: HantenguImage
    },
    {
        KizukiId: 10,
        name: "Akaza",
        kizukiRank: "Lua Superior 3",
        description: "Akaza é um mestre em artes marciais e valoriza a força física e o combate direto acima de tudo. Ele é ferozmente leal a Muzan e possui uma forte aversão a atacar mulheres ou qualquer um que considere fraco. Akaza é movido por seu desejo de enfrentar oponentes fortes e se recusa a lutar contra aqueles que não julga dignos. Seus ataques são baseados em poderosos golpes de impacto, e ele possui uma profunda admiração por guerreiros de grande habilidade.",
        image: AkazaImage
    },
    {
        KizukiId: 11,
        name: "Douma",
        kizukiRank: "Lua Superior 2",
        description: "Douma é um demônio carismático e líder de um culto que atrai seguidores com sua personalidade encantadora. Apesar de sua aparência amável, Douma é completamente desprovido de emoções humanas, vendo todos ao seu redor como ferramentas descartáveis. Ele usa gelo como arma, congelando e destruindo seus inimigos com facilidade. Sua devoção a Muzan é absoluta, e ele vê o mundo humano como algo sem valor, exceto como fonte de alimento.",
        image: DoumaImage
    },
    {
        KizukiId: 12,
        name: "Kokushibo",
        kizukiRank: "Lua Superior 1",
        description: "Kokushibo é o demônio mais poderoso entre os Doze Kizuki e serve diretamente como o braço direito de Muzan. Antes de se tornar um demônio, ele era o irmão gêmeo de Yoriichi Tsugikuni, o espadachim mais lendário da história. Mesmo após sua transformação, Kokushibo mantém suas habilidades de espadachim e luta com uma espada feita de sua carne e sangue. Sua busca por poder e imortalidade o levou a trair sua humanidade, e ele é movido por uma profunda inveja de seu irmão, cuja habilidade ele nunca conseguiu superar.",
        image: KokushiboImage
    }
]

function Kizuki() {
    const [selectedKizukiId, setSelectedKizukiId] = useState(null)

    const selectedKizuki = kizuki.find(kizuki => kizuki.KizukiId === selectedKizukiId);

    return (
        <section id="kizuki" className={styles.kizuki_section}>
            <h2>Kizuki</h2>
            <p>Clique na imagem de algum Kizuki para exibir mais informações</p>
            <div className={styles.kizuki_container}>
                {kizuki.map((kizuki) => (
                    <motion.div
                        className={styles.kizuki}
                        key={kizuki.KizukiId}
                        layoutId={kizuki.KizukiId}
                        onClick={() => setSelectedKizukiId(kizuki.KizukiId)}
                    >
                        <motion.img
                            className={styles.kizuki_img}
                            src={kizuki.image}
                            alt={kizuki.name}
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedKizukiId && (
                    <motion.div
                        className={styles.overlay_kizuki}
                        onClick={() => setSelectedKizukiId(null)}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                        <motion.div
                            className={styles.overlay_content_kizuki}
                        >
                            <motion.img
                                src={selectedKizuki.image}
                                alt={selectedKizuki.name}
                                loading="lazy"
                            />
                            <motion.div className={styles.overlay_text_kizuki}>
                                <motion.h3>
                                    <motion.strong>{selectedKizuki.name}</motion.strong>
                                </motion.h3>
                                <motion.p>
                                    <em>{selectedKizuki.kizukiRank}</em>
                                </motion.p>
                                <motion.p className={styles.overlay_kizuki_description}>
                                    {selectedKizuki.description}
                                </motion.p>
                                <motion.small>
                                    Clique novamente para retornar
                                </motion.small>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Kizuki