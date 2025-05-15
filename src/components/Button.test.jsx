//The test file inside the component's directory Keeps your tests close to the code they verify — easier to find and maintain.

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from './Button';
// Import the mocked useTheme so we can control its return value
import { useTheme } from '../contexts/ThemeContext';

// Mock the useTheme hook from your ThemeContext
jest.mock('../contexts/ThemeContext', () => ({
    //it replaces the component with some dummy data to mock it for test
  useTheme: jest.fn(),
}));


test('renders with light theme classes', () => {
    //we are telling that mock function exactly what to return when it is called.
    useTheme.mockReturnValue({ themeMode: 'light' });
  
    // Act: Render the Button with some child text
    render(<Button onClick={() => {}}>Click me</Button>);
  
    // Assert: Check if button has expected light theme classes
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-tertiary');
    expect(button).toHaveClass('text-secondary');
    expect(button).toHaveTextContent('Click me');
  });
  
test('renders with dark theme classes', () => {
    // Arrange: Mock useTheme to return dark mode
    useTheme.mockReturnValue({ themeMode: 'dark' });
  
    // Act: Render the Button
    render(<Button onClick={() => {}}>Dark Mode</Button>);
  
    // Assert: Check if button has expected dark theme classes
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-tertiary');
    expect(button).toHaveClass('text-primary');
    expect(button).toHaveTextContent('Dark Mode');
});

test('calls onClick when clicked', () => {
    // Arrange: mock useTheme to avoid theme logic interfering
    useTheme.mockReturnValue({ themeMode: 'light' });
  
    // Create a mock function for onClick
    const handleClick = jest.fn();
  
    // Act: Render the button with the mock click handler
    render(<Button onClick={handleClick}>Click me</Button>);
  
    // Get the button element
    const button = screen.getByRole('button');
  
    // Simulate a click event
    fireEvent.click(button);
  
    // Assert: handleClick should have been called once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  