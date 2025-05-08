import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'react-hot-toast';
const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            toast.success(`${item.name} quantity updated in cart!`);
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
           
          } else {
            toast.success(`${item.name} added to cart!`);
            return {
              items: [...state.items, { ...item, quantity: 1 }],
            };
          }
        }),
      removeItem: (id) =>
        set((state) => ({
          
          items: state.items.filter((item) => item.id !== id),
        
        }
        
      )
    ),
   
      decreaseQuantity: (id) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useCartStore;
