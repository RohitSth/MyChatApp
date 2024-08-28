import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId, socketId} : key value pair to store the mapping of userId and socketId

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId; // userId is sent from the client side
  if (userId != "undefined") {
    userSocketMap[userId] = socket.id; // store the mapping of userId and socketId
  }

  // io.emit() is used to send the events to all the connected clients.
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on() is used to listen for the events sent by the client. Can be used both on the server and client side.
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    delete userSocketMap[userId]; // delete the mapping of userId and socketId

    // io.emit() is used to send the events to all the connected clients.
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
