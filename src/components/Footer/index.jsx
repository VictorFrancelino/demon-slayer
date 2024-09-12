import styles from "./Footer.module.css"

import emailLogo from "../../assets/email.svg";
import LinkedInLogo from "../../assets/linkedin.svg";
import githubLogo from "../../assets/github.svg";

function Footer() {
    return (
        <footer>
            <div className={styles.content_footer_links}>
                <div className={styles.links}>
                    <h4>Links</h4>
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#characters">Personagens</a></li>
                        <li><a href="#hashiras">Hashiras</a></li>
                        <li><a href="#onis">Onis</a></li>
                        <li><a href="#kizuki">Kizuki</a></li>
                        <li><a href="#muzan">Muzan</a></li>
                    </ul>
                </div>
                <div className={styles.contato}>
                    <h4>Contato</h4>
                    <ul>
                        <li><a href="mailto:victor.francelino10@gmail.com"><img src={emailLogo} alt="Email" /></a></li>
                        <li><a href="https://www.linkedin.com/in/victorfrancelino" target="_blank"><img src={LinkedInLogo} alt="LinkedIn" /></a></li>
                        <li><a href="https://github.com/VictorFrancelino" target="_blank"><img src={githubLogo} alt="GitHub" /></a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p>Desenvolvido por Victor Francelino</p>
        </footer>
    )
}

export default Footer