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

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  // socket.on() is used to listen for the events sent by the client. Can be used both on the server and client side.
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

export { app, io, server };
