import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

export type Product = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating: number
}

export interface CartItem extends Product {
    quantity: number
}

export type ValuesType = {
    products: Product[],
    topProducts: Product[],
    cart: CartItem[],
    balance: number,
    loading: boolean,
    error: string | null
}

export type OperationsType = {
    fetchProducts: () => Promise<void>, //вызов api
    sortProductsByRating: () => unknown,
    addToCart: (product: Product) => void,
    removeFromCart: (id: number) => void,
    clearCart: () => void,
    extractOneCartItem: (productId: number) => void,
    buyCartItem: (product: CartItem) => void,
    handleBalance: (num: number) => void //функция выдачи денег, т.к. кошелек сайта фальшивый
}

export type StoreType = OperationsType & ValuesType

export const storeValues = create<StoreType>()(
    persist(
        (set, get) => ({
            products: [],
            topProducts: [],
            cart: [],
            balance: 0,
            loading: false,
            error: null,

            fetchProducts: async () => {
                set({ loading: true, error: null });
                try {
                    const response = await axios.get<{ products: any[] }>('https://dummyjson.com/products')
                    const formattedProducts: Product[] = response.data.products.map(item => ({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        category: item.category,
                        description: item.description,
                        image: item.thumbnail,
                        rating: item.rating
                    }));
                    set({ products: formattedProducts, loading: false })
                } catch (error: any) {
                    set({ 
                        error: error.message || 'Error while fetching data', 
                        loading: false 
                    });
                }
            },
            sortProductsByRating: () => {
                const { products, topProducts } = get()
                set({topProducts: products.sort((a,b) => b.rating - a.rating)})
            },

            addToCart: (product) => {
                const { cart } = get()
                const exists = cart.find(item => item.id === product.id);  
                if (exists) {
                    set({
                        cart: cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
                    });
                } else {
                    set({ cart: [...cart, { ...product, quantity: 1 }] })
                }
            },

            removeFromCart: (id) => {
                const { cart } = get();
                set({
                    cart: cart.filter(item => item.id !== id)
                });
            },

            clearCart: () => {
                const {cart} = get()
                if (cart.length) {
                    set({ cart: [] })
                    alert('Cart cleared.')
                } else {
                    return
                }
            },

            extractOneCartItem: (productId) => {
                const {cart} = get()
                const target = cart.find(item => item.id === productId)
                if (!target) return

                if (target.quantity === 1) {
                    set({cart: cart.filter(item => item.id !== productId)})
                } else {
                    set({cart: cart.map(item => item.id === productId 
                        ? {...item, quantity: item.quantity - 1} 
                        : item
                    )})
                }
            },

            buyCartItem: (product) => {
                const {cart, balance} = get()
                const summary = product.quantity * product.price
                if (balance >= summary) {
                    set({
                        balance: balance - summary,
                        cart: cart.filter(item => item.id !== product.id)
                    })
                    alert(`${product.title} was bought successfully! balance was changed to ${(balance - summary).toFixed(Number(2))}`)
                } else {
                    return
                }
            },

            handleBalance: (num) => set({balance: num})
        }),
        { 
            name: 'shop-data',
            partialize: (state) => ({ cart: state.cart, balance: state.balance })
        }
    )
);
