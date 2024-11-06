import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Определяем тип для элемента корзины
interface CartItem {
  id: number,
  otar: string,
  otardrosh: string,
  grab: string,
  eraguin: string
}

interface CartState {
  items: CartItem[];
}

// Начальное состояние
const initialState: CartState = {
  items: [],
};

// Создаем срез
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

// Экспортируем действия и редюсер
export default cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;