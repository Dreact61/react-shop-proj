import { useEffect } from 'react'
import './styles/App.css'
import { storeValues } from './components/shopStore'
import { Link } from 'react-router'

function App() {
  const { products, cart, loading, error, topProducts, balance, handleBalance, fetchProducts, sortProductsByRating, addToCart, removeFromCart, clearCart, buyCartItem, extractOneCartItem } = storeValues()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  useEffect(() => {
    if (products.length > 0) sortProductsByRating()
  }, [sortProductsByRating, products.length])

  return (
    <div className='body'>
      <header>
        <h1>Shop</h1>
        <p>Balance: ${balance.toFixed(2)}<input type="number" placeholder='Change your balance here.' id="balance-input" onBlur={(e) => handleBalance(Number(e.target.value))} defaultValue={balance.toFixed(2)}/></p>

        <nav className='header-element'>
          <p><a href="#">Profile</a></p>
        </nav>
      </header>

      <section className='rating-section'>
        <h3 style={{alignSelf:"center"}}>Top 5 positions:</h3>
        {loading ? <p className="loading-msg">Loading...</p> : ''}
          {error === null ? 
            topProducts.slice(0,5).map(product => (
                <div className="top-menu" key={product.id}>
                  <b>{product.title}</b>
                  <p>Rating: {product.rating}</p>
                </div>
            )) : <p className='error-msg'>Error :(</p>
          }
      </section>

      <main>
        {loading ? <p className="loading-msg">Loading...</p> : ''}
        {error === null ? 
        products.map(product => (
          <div key={product.id} className='product'>
            <img src={product.image} alt={product.title} />
            <b>{product.title}</b>
            <p>{product.description}</p>
            <i>${product.price}</i>
            <button type="button" className='add-to-cart-btn' onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        )) : <p className='error-msg'>Error :(</p>
        }
      </main>

      <section className='cart-section'>
        <h3>Your cart</h3>
        {cart && cart.length > 0 ? 
        cart.map(item => (
          <div key={item.id} className='cart-item'>
            <b>{item.title}</b>
            <p>Quantity: {item.quantity}</p>
            <p>Summary: ${Number(item.price) * Number(item.quantity)}</p>
            <div className='btns' style={{width:"100%", display:"flex", justifyContent:"space-evenly"}}>
              <button type='button' className='cart-btn' style={{width:"30%"}} onClick={() => buyCartItem(item)}>Buy</button>
              <button type="button" className='cart-btn' style={{width:"30%"}} onClick={() => extractOneCartItem(item.id)}>Remove one</button>
            </div>
          </div>
        )) : <p>No products found in your cart.</p>}
        <button type="button" className='cart-btn' onClick={clearCart}>Clear cart</button>
      </section>
      
      <footer>
        <div className='footer-element'>
          <a href="https://github.com/Dreact61/portfolio">My GitHub portfolio</a>
        </div>
        <Link to="/sign-in" style={{width:"auto", fontStyle:"normal"}}>
          <button type="button" className='footer-btn'>Sign in</button>
        </Link>

        <button type="button" className="footer-btn">View cart</button>
      </footer>
    </div>
  )
}

export default App
