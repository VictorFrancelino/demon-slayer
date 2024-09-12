import styles from "./Muzan.module.css"

import Muzan1Image from "../../assets/Muzan 1.svg";
import Muzan2Image from "../../assets/Muzan 2.svg";
import Muzan3Image from "../../assets/Muzan 3.svg";

function Muzan() {
    return (
        <section id="muzan" className={styles.muzan_section}>
            <h2>Muzan</h2>
            <div className={styles.muzan}>
                <p>Muzan Kibutsuji é o principal antagonista de Demon Slayer e o demônio mais poderoso e temido de toda a história. Ele é o progenitor de todos os demônios e a fonte do sofrimento de incontáveis humanos e caçadores de demônios ao longo dos séculos. Com uma personalidade fria, calculista e narcisista, Muzan vê a si mesmo como uma entidade suprema, acima de qualquer moralidade ou compaixão, tratando todos ao seu redor como ferramentas descartáveis para seus próprios propósitos. Sua busca incessante por poder e imortalidade é o que impulsiona suas ações e motivações.</p>
                <img src={Muzan1Image} alt="Imagem comum de Muzan Kibutsuji" loading="lazy" />
            </div>
            <div className={styles.muzan}>
                <img src={Muzan2Image} alt="Outra imagem comum de Muzan Kibutsuji" loading="lazy" />
                <p>Muzan tem a habilidade de alterar sua aparência à vontade, e ao longo da série, ele assume várias formas para se esconder e manipular aqueles ao seu redor. Sua forma mais recorrente é a de um homem de aparência refinada e imponente, vestindo um terno elegante e um chapéu, o que destaca seu ar de sofisticação. No entanto, ele também pode se transformar em uma mulher ou até mesmo em uma criança para se misturar com os humanos e evitar suspeitas.</p>
            </div>
            <div className={styles.muzan}>
                <p>Muzan é extremamente arrogante e impiedoso. Ele vê a humanidade como inferior e despreza qualquer sinal de fraqueza, tanto em demônios quanto em humanos. Sua maior fraqueza, no entanto, é o medo de morrer. Desde que foi transformado em um demônio devido a um tratamento médico fracassado na sua juventude, Muzan tornou-se obcecado em alcançar a imortalidade absoluta e livrar-se da única fraqueza que os demônios possuem: a vulnerabilidade ao sol.</p>
                <img src={Muzan3Image} alt="Muzan Kibutsuji em um laboratório" loading="lazy" />
            </div>
        </section>
    )
}

export default Muzan