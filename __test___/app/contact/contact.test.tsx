import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ContactForm } from '@/components/contact';


describe('Contact', () => {
    it("should render Contact Form Component", () => {
        render(<ContactForm />);
        expect(screen.getByText('Contact Me')).toBeInTheDocument();
        expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
        expect(screen.getByLabelText('E-Mail')).toBeInTheDocument();
        expect(screen.getByLabelText('Message')).toBeInTheDocument();
    });
});



