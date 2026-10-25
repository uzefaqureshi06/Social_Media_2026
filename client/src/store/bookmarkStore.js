import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/bookmark";

export const useBookmarkStore = create((set) => ({
  bookmark: [],

  getBookmark: async () => {
    try {
      const { data } = await axios.get(API_URL);
      set({ bookmark: data });
    } catch (error) {
      console.log(error);
    }
  },


  

  getBookmarkById: async (id) => {
    try {
      const { data } = await axios.get(`${API_URL}/${id}`);
      set({ bookmark: data });
    } catch (error) {
      console.log(error);
    }
  },

  createBookmark: async (data) => {
    try {
      const response = await axios.post(API_URL, data);

      set((state) => ({
        bookmark: [...state.bookmark, response.data[0]],
      }));
    } catch (error) {
      console.log(error);
    }
  },
  deleteBookmark: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      set((state) => ({
        bookmark: state.bookmark.filter((item) => item?.id != id),
      }));
    } catch (error) {
      console.log(error);
    }
  },

  saveBookmark: async (data, id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);

      set((state) => ({
        bookmark: state.bookmark.map((item) =>
          item?.id == id ? response.data[0] : item,
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));
