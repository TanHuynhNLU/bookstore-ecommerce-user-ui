import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(
        localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    );

    const addToCart = (item) => {
        const itemFinded = cartItems.find((cartItem) => cartItem.id === item.id);
        if (itemFinded) {
            setCartItems(
                cartItems.map((cardItem) =>
                    cardItem.id === item.id ? { ...cardItem, quantity: cardItem.quantity + item.quantity } : cardItem,
                ),
            );
        } else {
            setCartItems([...cartItems, item]);
        }
    };

    const removeFromCart = (item) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const increaseQuantity = (itemId) => {
        const itemFinded = cartItems.find((cartItem) => cartItem.id === itemId);
        if (itemFinded.quantity < itemFinded.stock) {
            setCartItems(
                cartItems.map((cardItem) =>
                    cardItem.id === itemId ? { ...cardItem, quantity: cardItem.quantity + 1 } : cardItem,
                ),
            );
        }
    };
    const decreaseQuantity = (itemId) => {
        const itemFinded = cartItems.find((cartItem) => cartItem.id === itemId);
        if (itemFinded.quantity > 1) {
            setCartItems(
                cartItems.map((cardItem) =>
                    cardItem.id === itemId ? { ...cardItem, quantity: cardItem.quantity - 1 } : cardItem,
                ),
            );
        }
    };
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
                increaseQuantity,
                decreaseQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
