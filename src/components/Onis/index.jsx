import styles from "./Onis.module.css";

import Oni1Image from "../../assets/Oni 1.svg";
import Oni2Image from "../../assets/Oni 2.svg";
import Oni3Image from "../../assets/Oni 3.svg";

function Onis() {
    return (
        <section id="onis" className={styles.onis}>
            <h2>Onis</h2>
            <div className={styles.oni}>
                <p>Os Onis são seres poderosos e imortais, com habilidades regenerativas e força sobre-humana. Criados através do sangue de <span>Muzan Kibutsuji</span>, esses demônios se alimentam de humanos para aumentar sua força e manter sua imortalidade. Cada Oni possui habilidades únicas, muitas vezes relacionadas a sua transformação ou ao seu instinto predador. Eles têm uma fraqueza fatal: a luz do sol, que os destrói instantaneamente, e podem ser decapitados por lâminas especiais forjadas para exterminá-los.</p>
                <img src={Oni1Image} alt="Imagem de um Oni comum" loading="lazy" />
            </div>
            <div className={styles.oni}>
                <img src={Oni2Image} alt="Imagem de um Oni com características de uma aranha" loading="lazy" />
                <p>Entre os muitos Onis, alguns assumem formas monstruosas que combinam características animalescas. Um exemplo disso é o Oni-aranha gigante, que possui traços de uma aranha, com múltiplos membros e a capacidade de tecer teias extremamente resistentes. Essas mutações fazem parte de suas Artimanhas de Sangue, que são poderes únicos manifestados por demônios mais poderosos. Essas formas assustadoras não apenas refletem o instinto caçador do Oni, mas também o tornam mais letal em combate.</p>
            </div>
            <div className={styles.oni}>
                <p>Esses Onis que assumem formas grotescas, como o Oni-aranha, exemplificam como a transformação pode afetar suas aparências e comportamentos. Muitos utilizam suas mutações para dominar territórios ou formar "famílias" de outros Onis mais fracos, como visto no caso das criaturas da Montanha Natagumo.</p>
                <img src={Oni3Image} alt="Imagem de um Oni comum" loading="lazy" />
            </div>
        </section>
    )
}

export default Onis