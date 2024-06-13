// store/layoutSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LayoutState {
  defaultLayout: any; // Replace 'any' with your specific type if known
  defaultCollapsed: any; // Replace 'any' with your specific type if known
}

const initialState: LayoutState = {
  defaultLayout: undefined,
  defaultCollapsed: undefined,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setDefaultLayout(state, action: PayloadAction<any>) {
      state.defaultLayout = action.payload;
    },
    setDefaultCollapsed(state, action: PayloadAction<any>) {
      state.defaultCollapsed = action.payload;
    },
  },
});

export const { setDefaultLayout, setDefaultCollapsed } = layoutSlice.actions;
export default layoutSlice.reducer;
