import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Breadcrumb {
  title: string;
  path: string;
}

interface BreadcrumbState {
  breadcrumbs: Breadcrumb[]
}

const initialState: BreadcrumbState = {
  breadcrumbs: [],
}

const breadcrumbsSlice = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    setBreadcrumb(state, action: PayloadAction<Breadcrumb>) {
      state.breadcrumbs.push(action.payload);
    },
   },

  },
});

export const { setBreadcrumb } = breadcrumbsSlice.actions;

export default breadcrumbsSlice.reducer;