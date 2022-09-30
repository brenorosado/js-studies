import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Form } from "./Form";
import { RecoilRoot } from "recoil";

describe("add participant form testing", () => {
    // Jest
    test("when input is empty, its impossible to add new participants", () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )

        // find input in DOM
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        // find the button
        const button = screen.getByRole("button");
        // verify that the input is in DOM
        expect(input).toBeInTheDocument();
        // verify that the button is disabled
        expect(button).toBeDisabled();
    });

    test("add a participant when name exists", () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )

        // find input in DOM
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        // find the button
        const button = screen.getByRole("button");

        // insert value in input
        fireEvent.change(input, {
            target: {
                value: "Ana Catarina"
            }
        })

        // click on submit button
        fireEvent.click(button);

        // verify that input is focused
        expect(input).toHaveFocus()

        // verify that input doesnt has a value
        expect(input).toHaveValue("")
    })

    test("duplicate names cannot be inserted in list", () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )

        // find input in DOM
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        // find the button
        const button = screen.getByRole("button");

        // insert value in input
        fireEvent.change(input, {
            target: {
                value: "Ana Catarina"
            }
        })

        // click on submit button
        fireEvent.click(button);

        // insert value in input
        fireEvent.change(input, {
            target: {
                value: "Ana Catarina"
            }
        })

        // click on submit button
        fireEvent.click(button);

        const errorMessage = screen.getByRole("alert");

        expect(errorMessage.textContent).toBe("Nomes duplicados não são permitidos!");
    });

    test("check if message error disapear after 3 seconds", () => {
        jest.useFakeTimers();

        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )

        // find input in DOM
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        // find the button
        const button = screen.getByRole("button");

        // insert value in input
        fireEvent.change(input, {
            target: {
                value: "Ana Catarina"
            }
        })

        // click on submit button
        fireEvent.click(button);

        // insert value in input
        fireEvent.change(input, {
            target: {
                value: "Ana Catarina"
            }
        })

        // click on submit button
        fireEvent.click(button);

        let errorMessage = screen.queryByRole("alert");

        expect(errorMessage).toBeInTheDocument();
        
        // using getByRole throws error if element is not find in document,
        // so we use queryByRole if is OK to not find the elment
        

        // required to use act cause jest.runAllTimers() updates the component
        act(() => {
            // await 3 seconds
            jest.runAllTimers(); 
        });

        errorMessage = screen.queryByRole("alert")
        expect(errorMessage).toBeNull();

    })
})