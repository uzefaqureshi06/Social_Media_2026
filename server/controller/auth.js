
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { supabase } from "../db/connection.js";

const secret = "qstore"; // Token banane aur verify karne ki secret key


// SIGN IN - Existing user ko login karwana
export const signin = async (req, res) => {

  // Frontend se email aur password lena
  const { email, password } = req.body;

  try {
    // Database mein email se user ko search karna
    const { data: user, error } = await supabase
      .from("user")
      .select("*")
      .eq("email", email)
      .maybeSingle();

    // Agar database mein error aaye
    if (error)
      return res.status(500).json({ message: "Database error" });

    // Agar user nahi mila
    if (!user)
      return res.status(404).json({ message: "User not found" });

    // Entered password ko database ke hashed password se check karna
    // Agar password match nahi hua, toh login reject karna
    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).json({ message: "Invalid credentials" });

    // Login successful hone par JWT token banana
    // Token mein user ki ID aur email hogi
    // Token 7 days mein expire hoga
    const token = jwt.sign(
      { id: user.id, email: user.email },
      secret,
      { expiresIn: "7d" }
    );

    // Password ko user details se hata dena
    const { password: _, ...result } = user;

    // User details aur token frontend ko bhejna
    res.status(200).json({ result, token });

  } catch (err) {
    // Agar koi unexpected error aaye
    res.status(500).json({ message: "Something went wrong" });
  }
};


// SIGN UP - New user ka account banana
export const signup = async (req, res) => {

  // Frontend se registration details lena
  const { name, email, password, bio, avatar, following, followers } = req.body;

  try {
    // Check karna ki email pehle se registered hai ya nahi
    const { data: user } = await supabase
      .from("user")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    // Agar user pehle se exist karta hai
    if (user)
      return res.status(400).json({ message: "User already exists" });

    // New user ki details database mein save karna
    const { data: newUser, error } = await supabase
      .from("user")
      .insert({
        name,
        email,

        // Password ko hash karke database mein save karna
        password: await bcrypt.hash(password, 12),

        bio,
        avatar,
        following,
        followers,
      })
      .select()
      .single();

    // Agar user save karte waqt database error aaye
    if (error)
      return res.status(500).json({ message: "Database error" });

    // New user ke liye JWT token banana
    // Token mein user ki ID aur email hogi
    // Token 7 days mein expire hoga
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      secret,
      { expiresIn: "7d" }
    );

    // Password ko response se hata dena
    const { password: _, ...result } = newUser;

    // New user ki details aur token frontend ko bhejna
    res.status(201).json({ result, token });

  } catch (err) {
    // Agar koi unexpected error aaye
    res.status(500).json({ message: "Something went wrong" });
  }
};

