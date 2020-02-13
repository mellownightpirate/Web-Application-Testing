import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import Dashboard, {strikes} from './components/Dashboard';
import Display, {displayStrikes} from './components/Display';

afterEach(cleanup);
it('match the snapshot', () =>{
  const { asFragment } = rtl.render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders display', () => {
  const wrapper = rtl.render(<Display/>)
  const element = wrapper.getByText(/strike/i)
  expect(element).toBeInTheDocument();
});

test('renders dashboard', () => {
  const wrapper = rtl.render(<Dashboard/>)
  const element = wrapper.getByText(/hit/i)
  expect(element).toBeInTheDocument();
});


test('strikes are less than 3', ()=>{
  const { getByTestId } = rtl.render(<App/>);
  const displayStrikes = getByTestId('displayStrikes');
  const striker = getByTestId('striker');
  expect(displayStrikes.textContent).toBe('Strikes : 0')
   fireEvent.click(striker)
   expect(displayStrikes.textContent).toBe('Strikes : 1')
   fireEvent.click(striker)
   expect(displayStrikes.textContent).toBe('Strikes : 2')
   fireEvent.click(striker)
   expect(displayStrikes.textContent).toBe('Strikes : 0')
});

test('balls are less than 3', ()=>{
  const { getByTestId } = rtl.render(<App/>);
  const displayBalls = getByTestId('displayBalls');
  const baller = getByTestId('baller');
  expect(displayBalls.textContent).toBe('Balls : 0')
   fireEvent.click(baller)
   expect(displayBalls.textContent).toBe('Balls : 1')
   fireEvent.click(baller)
   expect(displayBalls.textContent).toBe('Balls : 2')
   fireEvent.click(baller)
   expect(displayBalls.textContent).toBe('Balls : 3')
   fireEvent.click(baller)
   expect(displayBalls.textContent).toBe('Balls : 0')
   fireEvent.click(baller)
});