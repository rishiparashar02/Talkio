import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

// ✅ Updated CORS for Socket.io
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173", // for local development
      "https://talkio-theta.vercel.app" // deployed Vercel frontend
    ],
    credentials: true, // ✅ allow cookies / sessions
  },
});

// Store online users
const userSocketMap = {}; // { userId: socketId }

// Helper to get socket ID of a specific user
export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

// Handle socket connections
io.on("connection", (socket) => {
  console.log("🔌 User connected:", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  // Notify all clients about online users
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
