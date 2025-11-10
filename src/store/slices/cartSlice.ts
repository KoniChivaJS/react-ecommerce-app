import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const loadFromLocalStorage = (): CartItem[] => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (items: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const initialState: CartItem[] = loadFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
      saveToLocalStorage(state);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const updated = state.filter((item) => item.id !== action.payload);
      saveToLocalStorage(updated);
      return updated;
    },
    clearCart() {
      saveToLocalStorage([]);
      return [];
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      saveToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
