import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/post";

export const usePostStore = create((set) => ({
  post: [],

  getPost: async () => {
    try {
      const { data } = await axios.get(API_URL);
      set({ post: data });
    } catch (error) {
      console.log(error);
    }
  },

  getPostById: async (id) => {
    try {
      const { data } = await axios.get(`${API_URL}/${id}`);
      set({ post: data });
    } catch (error) {
      console.log(error);
    }
  },

  deletePost: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      set((state) => ({
        post: state.post.filter((item) => item?.id != id),
      }));
    } catch (error) {
      console.log(error);
    }
  },

  createPost:async(data)=>{
    try {
      
      const response= await axios.post(API_URL,data);

      set((state)=>({
        post:[...state.post,response.data[0]],
      }))
    } catch (error) {
      console.log(error);
    }
  },
  savePost: async (data, id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);

      set((state) => ({
        post: state.post.map((item) =>
          item?.id == id ? response.data[0] : item,
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));
