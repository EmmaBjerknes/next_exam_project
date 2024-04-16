"use client";
import { createContext, useEffect, useState } from "react";
import { CartContextValue, CartProduct } from "../types/cart";
import { IProducts } from "../types/products";

export const CartContext = createContext<CartContextValue>({
  cart: [],
  addToCart: () => {},
  subtractFromCart: () => {},
});

interface LayoutProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: LayoutProps) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const addToCart = (product: IProducts) => {
    const productInCart = cart.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productInCart) {
      const updatedCart = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        } else {
          return cartProduct;
        }
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newCartItem: CartProduct = {
        id: product.id,
        name: product.name,
        productimage: product.productimage,
        price: product.price,
        campaign_discount_percent: product.campaign_discount_percent || null,
        discountPrice: product.discountPrice || undefined,
        quantity: 1,
      };

      const updatedCart = [...cart, newCartItem];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const subtractFromCart = (product: CartProduct) => {
    const updatedCart = cart.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        return { ...cartProduct, quantity: cartProduct.quantity - 1 };
      } else {
        return cartProduct;
      }
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, subtractFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
