import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useLotteryResult } from "../../state/hooks/useLotteryResult";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";
import Lottery from "./Lottery";

jest.mock("../../state/hooks/useParticipantsList", () => {
    return {
        useParticipantsList: jest.fn()
    };
});

jest.mock("../../state/hooks/useLotteryResult", () => {
    return {
        useLotteryResult: jest.fn()
    };
});

describe("lottrey page", () => {
    const participants = [
        "Ana",
        "Catarina",
        "Jorel"
    ];

    const result = new Map([
        ["Ana", "Jorel"],
        ["Catarina", "Ana"],
        ["Jorel", "Catarina"]
    ]);

    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(participants);
        (useLotteryResult as jest.Mock).mockReturnValue(result);
    });

    test("every participoant can show their secret friend", () => {
        render (
            <RecoilRoot>
                <Lottery />
            </RecoilRoot>
        );

        const options = screen.queryAllByRole("option");
        expect(options).toHaveLength(participants.length + 1);
    });

    test("the secret friend is showed when required", () => {
        render(
            <RecoilRoot>
                <Lottery />
            </RecoilRoot>
        );

        const select = screen.getByPlaceholderText("Selecione o seu nome");
        fireEvent.change(select, {
            target: {
                value: participants[0]
            }
        });

        const button = screen.getByRole("button");
        fireEvent.click(button);

        const secretFriend = screen.getByRole("alert");
        expect(secretFriend).toBeInTheDocument();
    });
})