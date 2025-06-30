import { Server } from "socket.io";
import http from "http";
import express from "express";

export const app = express();
export const server = http.createServer(app);

// ✅ This is the MOST important fix:
export const io = new Server(server, {
    cors: {
        origin: [
            "http://localhost:5173",
            "https://talkio-theta.vercel.app" // your Vercel frontend
        ],
        credentials: true,
    },
});

// ⚡️ Handle socket connection
const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    if (userId) {
        userSocketMap[userId] = socket.id;
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    }

    socket.on("disconnect", () => {
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});
