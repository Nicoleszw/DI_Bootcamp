import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../api/api';
import { ApiState, Recipe } from '../types/types';

const initialState: ApiState<Recipe[]> = {
  data: null,
  loading: false,
  error: null,
};

export const fetchRecipes = createAsyncThunk(
  'data/fetchRecipes',
  async (url: string) => {
    const data = await fetchData<Recipe[]>(url);
    return data;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRecipes.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export default dataSlice.reducer;
