import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
export interface Policy {
  name: string;
  description: string;
  isEnabled: boolean;
  type: { value: string; label: string } | null;
  blockedCountries?: string[];
}

// Define the initial state using that type
const initialState: Policy[] = [];

export const policySlice = createSlice({
  name: "policies",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addPolicy: (state, action) => {
      state.push(action.payload.policy);
    },
  },
});

export const { addPolicy } = policySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPolicy = (state: RootState) => state.policies;

export default policySlice.reducer;
