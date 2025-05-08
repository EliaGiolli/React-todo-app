// Form.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';  
import Form from './Form';  

describe('Form Component', () => {
    //This test ensures the basic UI structure is loaded correctly. 
    //If one of the main fields or the submit button is missing, this test will catch it.
  test('renders form with name, email input and submit button', () => {
    render(<Form />);

    // it verifies that the module has every necessary fields
    const nameInput = screen.getByPlaceholderText(/inserisci il tuo nome/i);
    const emailInput = screen.getByPlaceholderText(/inserisci la tua email/i);
    const submitButton = screen.getByText(/Iscriviti alla newsletter!/i);

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  //This test checks client-side validation. 
  //If the user tries to submit an empty form, they should see errors. 
  //We simulate the click and then use waitFor() to wait for the error messages to appear.
  test('shows error when submitting empty form', async () => {
    render(<Form />);

    const submitButton = screen.getByText(/Iscriviti alla newsletter!/i);

    // it simulates the click without submitting the form
    fireEvent.click(submitButton);

    // it verifies that there are errors
    await waitFor(() => {
      const nameError = screen.getByText(/il campo è obbligatorio/i);
      const emailError = screen.getByText(/email obbligatoria/i);

      expect(nameError).toBeInTheDocument();
      expect(emailError).toBeInTheDocument();
    });
  });
  //This test simulates a full successful flow. It fills in valid data, accepts the privacy policy, and submits the form.
  //The test then waits for the success message to confirm submission.
  test('shows success message when form is submitted successfully', async () => {
    render(<Form />);

    // it fills the form's fields and it verifies the correct behavior
    fireEvent.change(screen.getByPlaceholderText(/inserisci il tuo nome/i), {
      target: { value: 'Mario Rossi' },
    });
    fireEvent.change(screen.getByPlaceholderText(/inserisci la tua email/i), {
      target: { value: 'mariorossi@gmail.com' },
    });
    fireEvent.click(screen.getByLabelText(/Accetta la nostra privacy/i));

    // it simulates the submitting event of the form
    const submitButton = screen.getByText(/Iscriviti alla newsletter!/i);
    fireEvent.click(submitButton);

    // it verifies that the next message will be displayed
    await waitFor(() => {
      const successMessage = screen.getByText(/Newsletter inviata!/i);
      expect(successMessage).toBeInTheDocument();
    });
  });
  //Here we test the side effect — that form data is being stored in localStorage on change.
  //We use Jest to spy on localStorage.setItem and then verify that it was called with the expected data
  test('localStorage is populated with form data', async () => {
    
    const setItemMock = jest.spyOn(Storage.prototype, 'setItem');

    render(<Form />);

    fireEvent.change(screen.getByPlaceholderText(/inserisci il tuo nome/i), {
      target: { value: 'Jane Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText(/inserisci la tua email/i), {
      target: { value: 'jane.doe@example.com' },
    });
    fireEvent.click(screen.getByLabelText(/Accetta la nostra privacy/i));

    fireEvent.click(screen.getByText(/Iscriviti alla newsletter!/i));

    expect(setItemMock).toHaveBeenCalledWith(
      'myFormData', 
      JSON.stringify({
        nome: 'Jane Doe',
        email: 'jane.doe@example.com',
        privacy: true,
      })
    );
  });
});
