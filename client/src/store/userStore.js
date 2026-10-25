import { create } from "zustand";

const API_URL = "http://localhost:5000/api/v1/user";

export const useUserStore = create((set) => ({
  userData: [],

  getUser: async () => {
    try {
      const { data } = await axios.get(API_URL);
      set({ userData: data });
    } catch (error) {
      console.log(error);
    }
  },

  getUserById: async (id) => {
    try {
      const { data } = await axios.get(`${API_URL}/${id}`);
      set({ userData: data });
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      set((state) => ({
        userData: state.userData.filter((item) => item?.id != id),
      }));
    } catch (error) {
      console.log(error);
    }
  },

  saveUser: async (data, id) => {
    try {
      await axios.put(`${API_URL}/${id}`,data);

      set((state) => ({
        userData:state.userData.map((item)=>item?.id==id? response.data[0]:item)
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));
