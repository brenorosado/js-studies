import shuffle from "just-shuffle";

export const executeLottery = (participants: string[]) => {
    const numberOfParticipants = participants.length;

    const shuffledParticipants = shuffle(participants);

    const result = new Map<string, string>();

    for(let index = 0; index < numberOfParticipants; index ++) {
        const friendIndex = index === (numberOfParticipants - 1) ? 0 : index + 1;
        result.set(shuffledParticipants[index], shuffledParticipants[friendIndex]);
    }
    
    return result;
};