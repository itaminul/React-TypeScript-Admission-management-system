// dropdownSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DropdownState {
  firstDropdownOptions: string[];
  secondDropdownOptions: string[];
}

const initialState: DropdownState = {
  firstDropdownOptions: [],
  secondDropdownOptions: [],
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    setFirstDropdownOptions: (state, action: PayloadAction<string[]>) => {
      state.firstDropdownOptions = action.payload;
    },
    setSecondDropdownOptions: (state, action: PayloadAction<string[]>) => {
      state.secondDropdownOptions = action.payload;
    },
  },
});

export const { setFirstDropdownOptions, setSecondDropdownOptions } =
  dropdownSlice.actions;

export default dropdownSlice.reducer;
