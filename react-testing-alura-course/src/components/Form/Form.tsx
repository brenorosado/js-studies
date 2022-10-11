import { useState, useRef } from "react";
import { useAddParticipants } from "../../state/hooks/useAddParticipant";
import { useErrorMessage } from "../../state/hooks/useErrorMessage";

import "./Form.css";

export const Form = () => {
    const [name, setName] = useState<string>("");

    const inputRef = useRef<HTMLInputElement>(null);

    const addParticipantInList = useAddParticipants();

    const errorMessage = useErrorMessage();

    const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addParticipantInList(name);
        setName("");
        inputRef.current?.focus();
    }

    return (
        <form onSubmit={addParticipant}>
            <div className="group-input-btn">
                <input 
                    ref={inputRef}
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                />
                {errorMessage && (
                    <p role="alert">
                        {errorMessage}
                    </p>
                )}
                <button disabled={!name} >Adicionar</button>
            </div>
        </form>
    )
}