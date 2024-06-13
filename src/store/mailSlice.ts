// store/mailSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mail } from '../app/data';

interface MailState {
  selectedMail: Mail | null;
}

const initialState: MailState = {
  selectedMail: null,
};

const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    setSelectedMail(state, action: PayloadAction<Mail | null>) {
      state.selectedMail = action.payload;
    },
  },
});

export const { setSelectedMail } = mailSlice.actions;
export default mailSlice.reducer;
