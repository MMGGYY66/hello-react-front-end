import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: '',
  loading: false,
  error: null,
};

export const fetchGreetings = createAsyncThunk(
  'message/fetchGreetings',
  async () => {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };

    const response = await axios.get('http://localhost:3000/api', config);
    return response.data.message;
  },
);

const greetingsSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchGreetings.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        greeting: action.payload,
      }))
      .addCase(fetchGreetings.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default greetingsSlice.reducer;
