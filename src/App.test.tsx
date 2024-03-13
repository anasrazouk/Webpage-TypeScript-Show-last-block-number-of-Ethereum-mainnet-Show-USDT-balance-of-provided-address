import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';


jest.mock('ethers', () => ({
  ethers: {
    providers: {
      JsonRpcProvider: jest.fn()
    },
    Contract: jest.fn(() => ({
      balanceOf: jest.fn()
    })),
    utils: {
      formatUnits: jest.fn()
    }
  }
}));

describe('App', () => {
  test('renders Ethereum Block Explorer heading', () => {
    render(<App />);
    expect(screen.getByText(/Ethereum Block Explorer/i)).toBeInTheDocument();
  });

 
});


