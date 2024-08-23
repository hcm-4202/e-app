import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import shopStore from "../store/store"
import CardComponent from "../components/home/CardComponent"
import mockData from '../components/mockData.json'
test('should be card deatils present',()=>{
    render(<MemoryRouter>
        <Provider store={shopStore}>
          <CardComponent products={mockData}/>
        </Provider>
    </MemoryRouter>)
    const item = screen.getByText(/Solid Gold Petite Micropave/i)
    const price = screen.getByText(/Price :168/i)
    expect(item).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    const addToCart = screen.getByRole('button')
    fireEvent.click(addToCart)
    const count = screen.getByTestId('test')
    expect(count).toBeInTheDocument()
})