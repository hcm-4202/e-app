import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router"
import shopStore from "../store/store"
import CartPage from "../components/cart/CartPage"



test('should be render cart',()=>{
    render(<MemoryRouter>
        <Provider store={shopStore}>
             <CartPage/>
        </Provider>
    </MemoryRouter>)
    const empty = screen.getByText(/Cart is Empty/i)
    expect(empty).toBeInTheDocument()
})
