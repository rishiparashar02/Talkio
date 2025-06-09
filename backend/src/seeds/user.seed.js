import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.models.js";

config();

const seedUsers = [
  //  Female users
  {
    email: "geet.dhillon@example.com",
    fullName: "Geet Dhillon",
    password: "geet123",
    profilePic: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    email: "tara.maheshwari@example.com",
    fullName: "Tara Maheshwari",
    password: "tara123",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    email: "naina.talwar@example.com",
    fullName: "Naina Talwar",
    password: "naina123",
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    email: "aditi.mehra@example.com",
    fullName: "Aditi Mehra",
    password: "aditi123",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },

  // Male users
  {
    email: "aditya.kashyap@example.com",
    fullName: "Aditya Kashyap",
    password: "aditya123",
    profilePic: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    email: "ved.sahni@example.com",
    fullName: "Ved Vardhan Sahni",
    password: "ved123",
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    email: "kabir.thapar@example.com",
    fullName: "Kabir Thapar",
    password: "kabir123",
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    email: "avi.kulkarni@example.com",
    fullName: "Avi Kulkarni",
    password: "avi123",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    email: "priya.sharma@example.com",
    fullName: "Priya Sharma",
    password: "priya123",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "ananya.verma@example.com",
    fullName: "Ananya Verma",
    password: "ananya123",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "arjun.mehra@example.com",
    fullName: "Arjun Mehra",
    password: "arjun123",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "rahul.banerjee@example.com",
    fullName: "Rahul Banerjee",
    password: "rahul123",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();