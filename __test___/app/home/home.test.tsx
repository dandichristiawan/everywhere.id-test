import React from 'react'
import Home from '@/app/home/page';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

jest.mock('@/components/list', () => ({
    List: () => <div data-testid="List Component">List Component</div>,
}));


describe('Home', () => {
    it("Should render List Component", () => {
        render(<Home />);
        expect(screen.getByTestId('List Component')).toBeInTheDocument();
        expect(screen.getByTestId('List Component')).toHaveTextContent('List Component');
    })
});



