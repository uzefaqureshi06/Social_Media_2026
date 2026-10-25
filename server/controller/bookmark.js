import { supabase } from "../db/connection.js";

export const getBookmark = async (req, res) => {
  try {
    const { data, error } = await supabase.from("bookmark").select("*");

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

export const getBookmarkById = async (req, res) => {
  try {
    const { userId, postId } = req.params;

    const { data, error } = await supabase
      .from("bookmark")
      .select("*")
      .eq("userId", userId)
      .eq("postId", postId)
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
  } catch (error) {
    console.log(error);
  }
};

export const createBookmark = async (req, res) => {
  try {
    const { userId, postId } = req.body;

    const { data, error } = await supabase
      .from("bookmark")
      .insert([{ userId, postId }])
      .select()
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
  } catch (error) {
    console.log(error);
  }
};

export const deleteBookmark = async (req, res) => {
  try {
    const { userId, postId } = req.params;

    const { data, error } = await supabase
      .from("bookmark")
      .delete()
      .eq("userId", userId)
      .eq("postId", postId)
      .select()
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
  } catch (error) {
    console.log(error);
  }
};
