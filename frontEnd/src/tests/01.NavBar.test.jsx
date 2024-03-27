import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NavBar } from "../components/NavBar/NavBar";

describe('VALIDAÇÃO DO COMPONENTE NAVBAR', () => {
    it('Validando funcionamento do teste', () =>{
        expect(1).toBe(1);
    });

    it('Será validado se o componente NavBAr será renderizado', () => {
        render(<NavBar />)
    })


})

    


