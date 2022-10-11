import { useState } from "react";
import { useLotteryResult } from "../../state/hooks/useLotteryResult";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";
import Card from "../../components/Card";

const Lottery = () => {
    const participants = useParticipantsList();
    const [currentParticipant, setCurrentParticipant] = useState<string>("");
    const [secretFriend, setSecretFriend] = useState<string>("");

    const result = useLotteryResult();

    const executeLottery = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(result.has(currentParticipant)) {
            setSecretFriend(result.get(currentParticipant)!);
        }
    };

    return (
        <Card>
            <section className="lottery">
                <h2>Quem vai tirar o papelzinho?</h2>
                <form onSubmit={executeLottery}>
                    <select
                        required
                        name="currentParticipant"
                        id="currentParticipant"
                        value={currentParticipant}
                        placeholder="Selecione o seu nome"
                        onChange={({ target }) => setCurrentParticipant(target.value)}
                    >
                        <option>Selecione o seu nome</option>
                        {participants.map(participant => (
                            <option key={participant} value={participant}>{participant}</option>
                        ))}
                    </select>
                    <button className="lottery-button">Sortear</button>
                </form>
                {secretFriend && <p className="result" role="alert">{secretFriend}</p>}
                <footer className="lottery">
                    <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
                </footer>
            </section>
        </Card>
    )
};

export default Lottery;