import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// Garante que o componente é renderizado com o contador inicial igual a zero
test('renders counter with initial count of zero', () => {
    const { getByText } = render(<Counter />);
    const countElement = getByText(/0/i);
    expect(countElement).toBeInTheDocument();
});

// Garante que o ao clicar no botão + o contador incrementa uma unidade
test('increment button increments count', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('+');
    const countElement = getByText(/0/i);

    fireEvent.click(incrementButton);

    expect(countElement).toHaveTextContent('1');
});

// Garante que o ao clicar no botão - o contador decrementa uma unidade
test('decrement button decrements count', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText('-');
    const countElement = getByText(/0/i);

    fireEvent.click(decrementButton);

    expect(countElement).toHaveTextContent('-1');
});

// Realiza um teste de Snapshot no componente
test('renders counter correctly', () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
});