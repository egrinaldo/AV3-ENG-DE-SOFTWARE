import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Form } from "../components/Form/Form";


describe('VERIFICAÇÃO SE O FORMULARIO SERA RENDERIZADO E SEUS COMPONENTES', () => {

    it('Será validado se o componente Form será renderizado', () => {
        render(<Form />)
    });

    it('Será validado se o Input com name escola no Form será renderizado', () => {
        const {getByTestId} = render(<Form />);
        const inputElement = getByTestId('escola');
        expect (inputElement).toBeInTheDocument();
    });
    it('Será validado se o Input com name cnpj no Form será renderizado', () => {
        const {getByTestId} = render(<Form />);
        const inputElement = getByTestId('cnpj');
        expect (inputElement).toBeInTheDocument();
    });
    it('Será validado se o Input com name logradouro no Form será renderizado', () => {
        const {getByTestId} = render(<Form />);
        const inputElement = getByTestId('logradouro');
        expect (inputElement).toBeInTheDocument();
    });
    it('Será validado se o Input com name bairro no Form será renderizado', () => {
        const {getByTestId} = render(<Form />);
        const inputElement = getByTestId('bairro');
        expect (inputElement).toBeInTheDocument();
    });
    it('Será validado se o Input com name cep no Form será renderizado', () => {
        const {getByTestId} = render(<Form />);
        const inputElement = getByTestId('cep');
        expect (inputElement).toBeInTheDocument();
    });
    it('Será validado se o Input com name Tipo da Escola no Form será renderizado', () => {
        const {getByTestId} = render(<Form />);
        const inputElement = getByTestId('tipoEscola');
        expect (inputElement).toBeInTheDocument();
    });
    it('Será validado se o Input com name email no Form será renderizado', () => {
        const {getByTestId} = render(<Form />);
        const inputElement = getByTestId('email');
        expect (inputElement).toBeInTheDocument();
    });
    it('Será validado se o Input com name limpar no Form será renderizado', () => {
        const {getByTestId} = render(<Form />);
        const inputElement = getByTestId('limpar');
        expect (inputElement).toBeInTheDocument();
    });
    it('Será validado se o Input com name salvar no Form será renderizado', () => {
        const {getByTestId} = render(<Form />);
        const inputElement = getByTestId('salvar');
        expect (inputElement).toBeInTheDocument();
    });


})

    


