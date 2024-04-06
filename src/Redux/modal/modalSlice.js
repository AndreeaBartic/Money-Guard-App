import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    toggleAddModal(state, action) {
      state.isModalOpen = true;
    },
    toggleEditModal(state, action) {
      state.isModalOpen = true;
    },
    toggleLogOutModal(state, action) {
      state.isModalOpen = false;
    },
    toggleModal(state, action) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const {
  toggleAddModal,
  toggleEditModal,
  toggleLogOutModal,
  toggleModal,
} = modalSlice.actions;
