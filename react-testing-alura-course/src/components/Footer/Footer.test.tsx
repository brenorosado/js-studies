import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from ".";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";

jest.mock("../../state/hooks/useParticipantsList", () => {
    return {
        useParticipantsList: jest.fn()
    };
});

const mockNavigation = jest.fn();
const mockLottery = jest.fn();

jest.mock("../../state/hooks/useLottery", () => {
    return {
        useLottery: () => mockLottery
    };
});

jest.mock("react-router-dom", () => {
    return {
        useNavigate: () => mockNavigation
    };
});

describe("when there isn't enough participants", () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue([])
    });

    test("the game cannot initiate", () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );

        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
    })
});

describe("when there is enough participants", () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(["Ana", "Catarina", "Josefina"])
    });

    test("the game can be initialized", () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );

        const button = screen.getByRole("button");
        expect(button).not.toBeDisabled();
    });

    test("the game was initialized", () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(mockNavigation).toHaveBeenCalledTimes(1);
        expect(mockNavigation).toHaveBeenCalledWith("/sorteio");
        expect(mockLottery).toHaveBeenCalledTimes(1);
    });
});