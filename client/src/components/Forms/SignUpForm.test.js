import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import SignUpForm from './SignUpForm';


const renderWithRouter = (ui) => {
    return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('SignUpForm', () => {
    test('renders the form fields correctly', () => {
        renderWithRouter(<SignUpForm />);

        expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Create Password/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();
    });

    test('shows error messages when fields are empty and form is submitted', () => {
        renderWithRouter(<SignUpForm />);

        fireEvent.click(screen.getByText(/Submit/i));

        expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/Last name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
        expect(screen.getByText(/This field is required/i)).toBeInTheDocument();
    });

    test('validates password strength and matching passwords', () => {
        renderWithRouter(<SignUpForm />);

        fireEvent.change(screen.getByPlaceholderText(/Create Password/i), {
            target: { value: 'short' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Confirm Password/i), {
            target: { value: 'shor' },
        });
        fireEvent.click(screen.getByText(/Submit/i));
        
        expect(screen.getByText(/Password must be at least 6 characters/i)).toBeInTheDocument();
        expect(screen.getByText(/Password does not match/i)).toBeInTheDocument();

        // Correct the input
        fireEvent.change(screen.getByPlaceholderText(/Create Password/i), {
            target: { value: 'Valid1Password' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Confirm Password/i), {
            target: { value: 'Valid1Password' },
        });
        fireEvent.click(screen.getByText(/Submit/i));

        expect(screen.queryByText(/Password must be at least 6 characters/i)).toBeNull();
        expect(screen.queryByText(/Password does not match/i)).toBeNull();
    });
});
