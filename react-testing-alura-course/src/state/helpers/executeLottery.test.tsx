import { executeLottery } from "./executeLottery";

describe("execute lottery of secret friend", () => {
    test("each participant dont get its own name", () => {
        const participants = [
            "Ana",
            "Catarina",
            "Juliana",
            "João",
            "Vinícius",
            "Natália"
        ];

        const shuffle = executeLottery(participants);

        participants.forEach(participant => {
            const secretFriend = shuffle.get(participant);
            expect(secretFriend).not.toEqual(participant);
        })
    });
});