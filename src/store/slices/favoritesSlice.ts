import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

const loadFromLocalStorage = (): FavoriteItem[] => {
  try {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (items: FavoriteItem[]) => {
  localStorage.setItem("favorites", JSON.stringify(items));
};

const initialState: FavoriteItem[] = loadFromLocalStorage();

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<FavoriteItem>) {
      if (!state.find((item) => item.id === action.payload.id)) {
        state.push(action.payload);
        saveToLocalStorage(state);
      }
    },
    removeFavorite(state, action: PayloadAction<number>) {
      const updated = state.filter((item) => item.id !== action.payload);
      saveToLocalStorage(updated);
      return updated;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
