import { create } from "zustand";

export const useStore = create((set) => ({
  firstname: "",
  lastname: "",
  birthday: "",
  gender: "",
  email: "",
  password: "",
  code: "",

  setFirstname: (value) => set({ firstname: value }),
  setLastname: (value) => set({ lastname: value }),
  setBirthday: (value) => set({ birthday: value }),
  setGender: (value) => set({ gender: value }),
  setEmail: (value) => set({ email: value }),
  setPassword: (value) => set({ password: value }),
  setCode: (value) => set({ code: value }),

  reset: () =>
    set({
      firstname: "",
      lastname: "",
      birthday: "",
      gender: "",
      email: "",
      password: "",
      code: "",
    }),
}));
