import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'dude' },
  { id: '1', name: 'dude' },
  { id: '2', name: 'dude' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = state => state.users;
export default usersSlice.reducer;
