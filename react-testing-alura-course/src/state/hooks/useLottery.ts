import { useSetRecoilState } from "recoil";
import { useParticipantsList } from "./useParticipantsList"
import { secretFriendResult } from "../atom";
import { executeLottery } from "../helpers/executeLottery";

export const useLottery = () => {
    const participants = useParticipantsList();
    
    const setResult = useSetRecoilState(secretFriendResult);

    return () => {
        const result = executeLottery(participants);

        setResult(result);
    }
}