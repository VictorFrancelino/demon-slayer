import styles from "./Hashiras.module.css";

import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

import GiyuImage from "../../assets/Giyu Tomioka.svg";
import GyomeiImage from "../../assets/Gyomei Himejima.svg";
import KyojuroImage from "../../assets/Kyojuro Rengoku.svg";
import MitsuriImage from "../../assets/Mitsuri Kanroji.svg";
import MuichiroImage from "../../assets/Muichiro Tokito.svg";
import ObanaiImage from "../../assets/Obanai Iguro.svg";
import SanemiImage from "../../assets/Sanemi Shinazugawa.svg";
import ShinobuImage from "../../assets/Shinobu Kocho.svg";
import TengenImage from "../../assets/Tengen Uzui.svg";

const hashiras = [
    {
        hashiraId: 1,
        name: "Giyu Tomioka",
        hashiraTitle: "Hashira da Água",
        description: "Giyu é um espadachim calmo e sério, conhecido por sua maestria no Estilo da Respiração da Água. Ele foi quem salvou Tanjiro e Nezuko no início do anime, mostrando compaixão apesar de sua aparência fria. Giyu carrega uma sensação de responsabilidade e dever, especialmente por ter perdido pessoas importantes no passado.",
        image: GiyuImage
    },
    {
        hashiraId: 2,
        name: "Gyomei Himejima",
        hashiraTitle: "Hashira da Pedra",
        description: "Gyomei é o mais forte dos Hashiras, tanto em termos físicos quanto em habilidades de luta. Ele é um homem cego e incrivelmente gentil, mas inabalável quando se trata de exterminar demônios. Seu estilo de luta é o Estilo da Respiração da Pedra, e ele usa uma combinação de machado e corrente como arma.",
        image: GyomeiImage
    },
    {
        hashiraId: 3,
        name: "Kyojuro Rengoku",
        hashiraTitle: "Hashira das Chamas",
        description: "Kyojuro é otimista, confiante e sempre pronto para ajudar os outros com entusiasmo. Como mestre do Estilo da Respiração das Chamas, ele luta com uma intensidade apaixonada. Ele é um líder nato e inspira aqueles ao seu redor, sendo lembrado especialmente por sua bravura e sacrifício.",
        image: KyojuroImage
    },
    {
        hashiraId: 4,
        name: "Mitsuri Kanroji",
        hashiraTitle: "Hashira do Amor",
        description: "Mitsuri é uma mulher carinhosa, gentil e emotiva, sempre expressando afeto por seus amigos. Apesar de sua personalidade suave, ela é incrivelmente forte e ágil, utilizando o Estilo da Respiração do Amor, uma derivação do Estilo da Respiração das Chamas. Ela empunha uma espada flexível e fina como uma fita.",
        image: MitsuriImage
    },
    {
        hashiraId: 5,
        name: "Muichiro Tokito",
        hashiraTitle: "Hashira da Névoa",
        description: "Muichiro, embora jovem, é um prodígio. Seu comportamento é frequentemente distante e disperso, mas ele é um gênio no combate, utilizando o Estilo da Respiração da Névoa. Com uma mente afiada e reflexos rápidos, ele é incrivelmente eficiente no campo de batalha, apesar de sua idade.",
        image: MuichiroImage
    },
    {
        hashiraId: 6,
        name: "Obanai Iguro",
        hashiraTitle: "Hashira da Serpente",
        description: "Obanai é rigoroso, exigente e leal às tradições da Demon Slayer Corps. Ele usa o Estilo da Respiração da Serpente, que reflete sua natureza astuta e seus movimentos fluidos e imprevisíveis. Obanai luta com uma katana ondulada, imitando os movimentos de uma cobra.",
        image: ObanaiImage
    },
    {
        hashiraId: 7,
        name: "Sanemi Shinazugawa",
        hashiraTitle: "Hashira do Vento",
        description: "Sanemi é agressivo, impetuoso e cheio de cicatrizes de batalha, resultado de seu ódio intenso por demônios. Seu poder bruto e sua ferocidade são refletidos no Estilo da Respiração do Vento, que ele domina com força avassaladora. Embora tenha uma personalidade difícil, ele é incrivelmente devoto a proteger a humanidade.",
        image: SanemiImage
    },
    {
        hashiraId: 8,
        name: "Shinobu Kocho",
        hashiraTitle: "Hashira do Inseto",
        description: "Shinobu é alegre e sempre com um sorriso no rosto, mas por trás disso, esconde uma profunda dor. Diferente dos outros Hashiras, ela não tem força física suficiente para decapitar demônios, então utiliza venenos derivados de flores wisteria para matar demônios. Ela usa o Estilo da Respiração do Inseto e luta com uma espada fina como um estilete.",
        image: ShinobuImage
    },
    {
        hashiraId: 9,
        name: "Tengen Uzui",
        hashiraTitle: "Hashira do Som",
        description: "Tengen é extravagante, adora o luxo e possui uma personalidade teatral. Como ex-ninja, ele é altamente ágil e furtivo, utilizando o Estilo da Respiração do Som, que incorpora explosões sônicas e combate explosivo. Ele usa duas enormes espadas unidas por correntes, refletindo seu estilo grandioso e barulhento.",
        image: TengenImage
    }
]

function Hashiras() {
    const [selectedHashiraId, setSelectedHashiraId] = useState(null);

    const selectedHashira = hashiras.find(hashira => hashira.hashiraId === selectedHashiraId);

    return (
        <section id="hashiras" className={styles.hashiras}>
            <h2>Hashiras</h2>
            <p>Clique na imagem de algum Hashira para exibir mais informações</p>
            <div className={styles.hashiras_container}>
                {hashiras.map((hashira) => (
                    <motion.div
                        className={styles.hashira}
                        key={hashira.hashiraId}
                        layoutId={hashira.hashiraId}
                        onClick={() => setSelectedHashiraId(hashira.hashiraId)}
                    >
                        <motion.img
                            className={styles.hashira_img}
                            src={hashira.image}
                            alt={hashira.name}
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedHashiraId && (
                    <motion.div
                        className={styles.overlay}
                        onClick={() => setSelectedHashiraId(null)}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                        <motion.div
                            className={styles.overlay_content}
                            layoutId={selectedHashiraId.toString()}
                        >
                            <motion.img
                                src={selectedHashira.image}
                                alt={selectedHashira.name}
                                loading="lazy"
                            />
                            <motion.div className={styles.overlay_text}>
                                <motion.h3>
                                    <motion.strong>{selectedHashira.name}</motion.strong>
                                </motion.h3>
                                <motion.p>
                                    <em>{selectedHashira.hashiraTitle}</em>
                                </motion.p>
                                <motion.p className={styles.overlay_hashira_description}>
                                    {selectedHashira.description}
                                </motion.p>
                                <motion.small>
                                    Clique novamente para retornar
                                </motion.small>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    )
}

export default Hashiras