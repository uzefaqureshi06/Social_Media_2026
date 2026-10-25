import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../db/connection.js";

export const getUser = async (req, res) => {
  try {
    const { data, error } = await supabase.from("user").select("*");

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

// export const createUser = async (req, res) => {
//   try {
//     const { name, email, password, bio, avatar, following, followers } =
//       req.body;
//     const { data, error } = await supabase
//       .from("user")
//       .insert([{ name, email, password, bio, avatar, following, followers }])
//       .select();
//     if (error) {
//       return res.status(500).json({
//         message: error.message,
//         details: error.details,
//         hint: error.hint,
//         code: error.code,
//       });
//     }
//     return res.status(200).json(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("user")
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
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, password, bio, avatar, following, followers } =
      req.body;
    const { id } = req.params;

    const { data, error } = await supabase
      .from("user")
      .update({ name, email, password, bio, avatar, following, followers })
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

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from("user")
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
