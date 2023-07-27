import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false,
  isEmpty: false,
  status: 0,
  data: [],
  error: ''
}

const baseUrl = 'https://api.github.com/search'

export const fetchRepos = createAsyncThunk('github/repos', async (data, {rejectWithValue}) => {
  return axios.get(`${baseUrl}${data.url}`, {params: {
    ...data.params,
    q: data.params.q || 'a',
  }, headers: {
    Authorization: `Bearer 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`
  }})
  .then((response) =>  response.data.items)
  .catch(error => error.response)
})

export const repoSlice = createSlice({
  name: 'github',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRepos.pending, (state) => {
      state.isLoading= true;
    })
    builder.addCase(fetchRepos.fulfilled, (state, action) => {
      console.log(action.payload, '====');
      state.isLoading= false;
      state.data = action.payload;
      state.status = action.payload?.status || 0
      state.isEmpty = action.payload?.length === 0
      state.error = '';
    })
    builder.addCase(fetchRepos.rejected, (state, action) => {
      console.log(action, '0a9sa');
      state.isLoading= false;
      state.data = [];
      state.error = action.error.message;
    })
  }
})


export default repoSlice.reducer
