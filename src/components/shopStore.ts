import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

export type Product = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string 
}

export interface CartItem extends Product {
    quantity: number
}

export type ValuesType = {
    products: Product[],
    cart: CartItem[],
    loading: boolean,
    error: string | null
}

export type OperationsType = {
    fetchProducts: () => Promise<void>,
    addToCart: (product: Product) => void,
    removeFromCart: (id: number) => void,
    clearCart: () => void
}

export type StoreType = OperationsType & ValuesType

export const storeValues = create<StoreType>()(
    persist(
        (set, get) => ({
            products: [],
            cart: [],
            loading: false,
            error: null,

            fetchProducts: async () => {
                set({ loading: true, error: null });
                try {
                    const response = await axios.get<{ products: any[] }>('https://dummyjson.com/products');
                    const formattedProducts: Product[] = response.data.products.map(item => ({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        category: item.category,
                        description: item.description,
                        image: item.thumbnail 
                    }));
                    set({ products: formattedProducts, loading: false });
                } catch (error: any) {
                    set({ 
                        error: error.message || 'Error while fetching data', 
                        loading: false 
                    });
                }
            },

            addToCart: (product) => {
                const { cart } = get();
                const exists = cart.find(item => item.id === product.id);   
                if (exists) {
                    set({
                        cart: cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
                    });
                } else {
                    set({ cart: [...cart, { ...product, quantity: 1 }] });
                }
            },

            removeFromCart: (id) => {
                const { cart } = get();
                set({
                    cart: cart.filter(item => item.id !== id)
                });
            },

            clearCart: () => set({ cart: [] })
        }),
        { 
            name: 'shop-data',
            partialize: (state) => ({ cart: state.cart })
        }
    )
);
