'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Product = {
  id: string
  price: string
  image: string
  subtitle?: string
  newPrice?: string
  name: string
}

export type CartItem = Product & { quantity: number }

type CartContextType = {
  items: CartItem[]
  total: number
  count: number
  addToCart: (product: Product) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('cart_items')
    if (stored) {
      setItems(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart_items', JSON.stringify(items))
  }, [items])

  const addToCart = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id)
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }
  const count = items.reduce((sum, item) => sum + item.quantity, 0)

  const increaseQuantity = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantity = (id: string) => {
    setItems((prev) =>
      prev.flatMap((item) =>
        item.id === id
          ? item.quantity === 1
            ? []
            : [{ ...item, quantity: item.quantity - 1 }]
          : [item]
      )
    )
  }

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => setItems([])

  const total = items.reduce((sum, item) => {
    const price = Number(item.newPrice ?? item.price)
    return sum + price * item.quantity
  }, 0)

  return (
    <CartContext.Provider
      value={{ count, items, total, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
