import { useEffect, useState } from 'react'
import './App.css'
import { storeValues } from './components/shopStore'

function App() {
  const { products, cart, loading, error, fetchProducts } = storeValues()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <div className='body'>
      <header>
        <h1>Shop</h1>
        <div className='header-element'>
          <p><a href="#">Sign in</a></p>
          <p><a href="#">About us</a></p>
          <p><a href="#">FAQ</a></p>
        </div>
      </header>

      <nav>
        <h3>Trended offers:</h3>
        {loading ? <p className="loading-msg">Loading...</p> : ''}
        <ul>
          {error === null ? 
            products.map(product => (
              <li></li>
            )) : <p className='error-msg'>Error :(</p>
          }
        </ul>
      </nav>

      <main>
        {loading ? <p className="loading-msg">Loading...</p> : ''}
        {error === null ? 
        products.map(product => (
          <div key={product.id} className='product'>
            <img src={product.image} alt={product.title} />
            <b>{product.title}</b>
            <p>{product.description}</p>
            <i>${product.price}</i>
            <button type="button">Add to cart</button>
          </div>
        )) : <p className='error-msg'>Error :(</p>
        }
      </main>
    </div>
  )
}

export default App
