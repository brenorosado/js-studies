import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";
import ParticipantsList from ".";

jest.mock("../../state/hooks/useParticipantsList", () => {
    return {
        useParticipantsList: jest.fn()
    };
});

describe("a empty list of participants", () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue([])
    });

    test("must be rendered without elements", () => {
        render(
            <RecoilRoot>
                <ParticipantsList />
            </RecoilRoot>
        );
    
        const itens = screen.queryAllByRole("listitem");
        expect(itens).toHaveLength(0);
    });
});

describe("a completed list of participants must be rendered with elements", () => {
    const participants = [
        "Ana",
        "Catarina"
    ];
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(participants)
    });

    test("a completed list of participants must be rendered without elements", () => {
        render(
            <RecoilRoot>
                <ParticipantsList />
            </RecoilRoot>
        );
    
        const itens = screen.queryAllByRole("listitem");
        expect(itens).toHaveLength(participants.length);
    });
})