import { useNavigate } from "react-router-dom";
import { useLottery } from "../../state/hooks/useLottery";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";

import "./Footer.css";

const Footer = () => {

    const participants = useParticipantsList();

    const navigateTo = useNavigate();

    const executeLottery = useLottery();

    const initialize = () => {
        executeLottery();
        navigateTo("/sorteio");
    };

    return (
        <footer className="footer-config">
            <button
                className="button"
                disabled={participants.length < 3}
                onClick={initialize}
            >
                Iniciar brincadeira
            </button>
            <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
        </footer>
    );
};

export default Footer;