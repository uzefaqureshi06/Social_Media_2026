import { supabase } from "../db/connection.js";

export const getPost = async (req, res) => {
  try {
    const { data, error } = await supabase.from("post").select("*");

    if (error) {
      return res.status(500).json({
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from("post")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      return res.status(500).json({
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
    }

    return res.status(200).json(data);
  } catch (error) {}
};

export const createPost = async (req, res) => {
  try {
    const { images, title, description, likes, userId } = req.body;
    const { data, error } = await supabase
      .from("post")
      .insert([{ images, title, description, likes, userId }])
      .select();

    if (error) {
      return res.status(500).json({
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { images, title, description, likes, userId } = req.body;
    const { data, error } = await supabase
      .from("post")
      .update({ images, title, description, likes, userId })
      .eq("id", id)
      .select();

    if (error) {
      return res.status(500).json({
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("post")
      .delete()
      .eq("id", id)
      .select();

    if (error) {
      return res.status(500).json({
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
