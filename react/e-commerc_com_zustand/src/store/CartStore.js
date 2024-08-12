import { create } from "zustand";

// Busca isso de uma IPA
const initialItem = [
  {
    id: "p1",
    name: "Wireless Bluetooth",
    price: 49.99,
  },
  {
    id: "p2",
    name: "Capa Smartphone Sansung",
    price: 39.50,
  },
  {
    id: "p3",
    name: "Pelicula ",
    price: 50.99,
  },
];

const useCartStore = create((set) => {
  return {
    cart: [],
    availableItems: initialItem,
    addToCart: (item) =>
      set((state) => ({
        cart: [...state.cart, item],
      })),
    removeFromCart: (id) => {
      set((state) => ({
        cart: state.cart.filter((produto) => produto.id !== id),
      }));
    },
  };
});

export default useCartStore;
