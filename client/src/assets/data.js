import {
  Home,
  Compass,
  Bell,
  Mail,
  Bookmark,
  BarChart2,
  Palette,
  Settings,
} from "lucide-react";

export const img = (n) => `https://i.pravatar.cc/150?img=${n}`;
export const PURPLE = "#6c4fd9";

export const nav = [
  { label: "Home", path: "/", icon: Home },
  { label: "Explore", path: "/explore", icon: Compass },
  { label: "Notifications", path: "/notifications", icon: Bell },
  { label: "Message", path: "/messages", icon: Mail, badge: 6 },
  { label: "Bookmarks", path: "/bookmarks", icon: Bookmark },
  { label: "Analytics", path: "/analytics", icon: BarChart2 },
  { label: "Theme", path: "/theme", icon: Palette },
  { label: "Settings", path: "/settings", icon: Settings },
];

export const stories = [
  { name: "Your Story", img: 47 },
  { name: "Lilla James", img: 5 },
  { name: "Winnie Hale", img: 9 },
  { name: "Daniel Bale", img: 32 },
  { name: "Jane Doe", img: 25 },
  { name: "Tina White", img: 20 },
  { name: "Jane Doe", img: 25 },
];

export const notifications = [
  {
    img: 12,
    name: "Keke Benjamin",
    text: "accepted your friend request",
    time: "2 days ago",
  },
  {
    img: 13,
    name: "John Doe",
    text: "commented on your post",
    time: "1 hour ago",
  },
  {
    img: 15,
    name: "Mary Oppong",
    extra: "and 283 others",
    text: "liked your post",
    time: "4 minutes ago",
  },
  {
    img: 44,
    name: "Doris Y. Lartey",
    text: "commented on a post you are tagged in",
    time: "2 days ago",
  },
  {
    img: 52,
    name: "Donald Trump",
    text: "commented on a post you are tagged in",
    time: "1 hour ago",
  },
  {
    img: 60,
    name: "jane Doe",
    text: "commented on your post",
    time: "1 hour ago",
  },
];

export const messages = [
  { img: 3, name: "Edem Quist", text: "Just woke up bruh" },
  {
    img: 11,
    name: "Franca Deila",
    text: "Received bruh. Thanks!",
    online: true,
  },
  { img: 23, name: "Jane Doe", text: "ok" },
  { img: 45, name: "Daniella Jackson", text: "2 new messages" },
  { img: 36, name: "Juliet Makarey", text: "lol u right" },
  { img: 68, name: "Chantel Msiza", text: "Birthday Tomorrow!", online: true },
];
