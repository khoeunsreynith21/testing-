import { useState } from 'react'
import './App.css'

const products = [
  { id: 'mug', name: 'Everyday mug', description: 'A little comfort in every sip.', price: 18, color: '#eee6db', category: 'CERAMICS' },
  { id: 'tote', name: 'Market tote', description: 'For wherever the day takes you.', price: 24, color: '#e8ecdf', category: 'EVERYDAY CARRY' },
  { id: 'lamp', name: 'Little desk lamp', description: 'A warm glow for your corner.', price: 45, color: '#f0e4db', category: 'HOME' },
  { id: 'plant', name: 'Sunday plant', description: 'A small dose of something green.', price: 16, color: '#e1e9e5', category: 'GREENERY' },
]

const money = (amount) => `$${amount.toFixed(2)}`

function BagIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 8h14l1 13H4L5 8Z" /><path d="M8 9V6a4 4 0 0 1 8 0v3" /></svg>
}

function ProductArt({ id }) {
  return (
    <svg className="product-art" viewBox="0 0 240 170" fill="none" aria-hidden="true">
      <ellipse cx="120" cy="147" rx="57" ry="7" fill="#000" opacity=".06" />
      {id === 'mug' && <>
        <path d="M151 71h13c29 0 29 44 0 44h-13" stroke="#a67756" strokeWidth="13" />
        <path d="M72 59h85v64c0 16-17 24-42 24s-43-8-43-24V59Z" fill="#bd9070" />
        <ellipse cx="114.5" cy="59" rx="42.5" ry="10" fill="#d7b393" />
        <ellipse cx="114.5" cy="59" rx="34" ry="6" fill="#77543e" />
        <path d="M83 79v39" stroke="#d8b497" strokeWidth="5" strokeLinecap="round" />
      </>}
      {id === 'tote' && <>
        <path d="M95 66V49a25 25 0 0 1 50 0v17" stroke="#92946c" strokeWidth="9" />
        <path d="m75 61-9 83h108l-9-83H75Z" fill="#b6b78f" />
        <path d="m81 64-6 72h90l-6-72" stroke="#c9caa6" strokeWidth="3" />
        <path d="M112 95c0-13 15-17 20-8-12 0-20 8-20 17m0-9c-11-11-20-2-17 6 6-4 12-3 17 3v15" stroke="#62694e" strokeWidth="2" strokeLinecap="round" />
      </>}
      {id === 'lamp' && <>
        <path d="M121 67v71" stroke="#995d43" strokeWidth="8" />
        <path d="M88 143c0-14 66-14 66 0v3H88v-3Z" fill="#ae7053" />
        <path d="m97 31-23 58h94l-23-58H97Z" fill="#c38765" />
        <ellipse cx="121" cy="89" rx="47" ry="6" fill="#e0b38e" />
        <path d="m99 39-14 40" stroke="#d69d7a" strokeWidth="4" strokeLinecap="round" />
      </>}
      {id === 'plant' && <>
        <path d="M120 109V50m0 42-21-20m21 7 23-21" stroke="#5d7959" strokeWidth="4" strokeLinecap="round" />
        <path d="M119 68c-26-1-34-22-27-31 19 0 31 12 27 31Z" fill="#79916a" />
        <path d="M121 82c-1-25 16-39 31-32 0 21-12 32-31 32Z" fill="#5e7b59" />
        <path d="M111 94c-24 0-38-12-34-27 20-4 35 8 34 27Z" fill="#91a57c" />
        <path d="M120 50c-13-18-7-37 5-40 14 13 12 29-5 40Z" fill="#65845b" />
        <path d="m91 104 7 39c2 8 43 8 45 0l7-39H91Z" fill="#d4b89a" />
        <ellipse cx="120.5" cy="104" rx="29.5" ry="6" fill="#e1c9ad" />
        <ellipse cx="120.5" cy="104" rx="23" ry="3.5" fill="#8d765c" />
      </>}
    </svg>
  )
}

function App() {
  const [cart, setCart] = useState([])
  const [message, setMessage] = useState('')
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function addToCart(product) {
    setCart((current) => {
      const exists = current.some((item) => item.id === product.id)
      return exists
        ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...product, quantity: 1 }]
    })
    setMessage(`${product.name} added to your cart.`)
  }

  function changeQuantity(id, amount) {
    setCart((current) => current
      .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
      .filter((item) => item.quantity > 0))
    setMessage('Cart updated.')
  }

  function removeItem(id) {
    setCart((current) => current.filter((item) => item.id !== id))
    setMessage('Item removed from your cart.')
  }

  return (
    <div className="shop">
      <header className="shop-header">
        <a className="brand-logo" href="#" aria-label="Littlegoods home">
          <img src="/logo.png" alt="Littlegoods" width="56" height="56" />
        </a>
        <a className="cart-link" href="#cart"><BagIcon /> Your cart <span className="count">{itemCount}</span></a>
      </header>
      <main>
        <div className="intro">
          <span className="eyebrow">THOUGHTFULLY SIMPLE</span>
          <h1>Little things. Everyday joy.</h1>
          <p>A few good finds to make your day a little better.</p>
        </div>
        <div className="shop-layout">
          <section aria-label="Products">
            <div className="section-heading"><h2>The little collection</h2><span>{products.length} everyday essentials</span></div>
            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-picture" style={{ backgroundColor: product.color }}><ProductArt id={product.id} /></div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <div className="product-title"><h3>{product.name}</h3><span>{money(product.price)}</span></div>
                    <p>{product.description}</p>
                    <button className="add-button" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`}><span aria-hidden="true">+</span> Add to cart</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <aside className="cart-panel" id="cart" aria-labelledby="cart-title">
            <div className="cart-heading"><h2 id="cart-title"><BagIcon /> Your cart</h2><span className="count">{itemCount}</span></div>
            {cart.length === 0 ? (
              <div className="empty-cart"><div className="empty-icon"><BagIcon /></div><h3>A little empty here</h3><p>Find something you love.<br />Your good things will appear here.</p></div>
            ) : (
              <ul className="cart-items">
                {cart.map((item) => (
                  <li className="cart-item" key={item.id}>
                    <div className="cart-thumbnail" style={{ backgroundColor: item.color }}><ProductArt id={item.id} /></div>
                    <div className="cart-item-detail">
                      <h3>{item.name}</h3><span className="item-price">{money(item.price * item.quantity)}</span>
                      <div className="cart-item-actions">
                        <div className="quantity"><button onClick={() => changeQuantity(item.id, -1)} aria-label={`Decrease ${item.name} quantity`}>−</button><span>{item.quantity}</span><button onClick={() => changeQuantity(item.id, 1)} aria-label={`Increase ${item.name} quantity`}>+</button></div>
                        <button className="remove-button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>Remove</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="cart-summary"><div><span>Total</span><strong>{money(total)}</strong></div><p>{itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart</p></div>
            <p className="cart-note">Good things, one little find at a time.</p>
          </aside>
        </div>
        <p className="sr-only" role="status">{message}</p>
      </main>
      <footer className="shop-footer"><span>Less, but lovely.</span><span>A small shop for everyday living.</span></footer>
    </div>
  )
}

export default App
