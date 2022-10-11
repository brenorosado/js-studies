import { useRecoilValue } from "recoil"
import { secretFriendResult } from "../atom"

export const useLotteryResult = () => {
    return useRecoilValue(secretFriendResult);
};