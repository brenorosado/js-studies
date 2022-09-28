import { render, screen } from "@testing-library/react";
import React from "react";

// Jest
test("when input is empty, its impossible to add new participants", () => {
    render(<Formulario />)

    // find input in DOM
    const input = screen.getByPlaceholderText("Insira os nomes do participante");
    // find the button
    const button = screen.getByRole("button");
    // verify that the input is in DOM
    expect(input).toBeInTheDocument();
    // verify that the button is disabled
    expect(button).toBeDisabled();
});