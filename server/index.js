const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
// const { HOME_KEY, ABOUT_KEY, PORT } = require("../config/keys");

// const chatRoutes = require("./routes/chatRoutes");
// const userRoutes = require("./routes/userRoutes");
// const messageRoutes = require("./routes/messageRoutes");
// import cors from "cors";
// import helmet from "helmet";

dotenv.config();
const app = express();
// connectDB();

app.use(cors({ origin: "https://temp-project-ok3f.vercel.app" }));
app.use(helmet());
app.use(express.json()); //to accept json data

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the temp project",
  });
});
app.get("/home", (req, res) => {
  //   console.log(req);
  res.json({
    message: `Welcome to Temp project server Server ${process.env.HOME_KEY}`,
  });
});
app.get("/about", (req, res) => {
  //   console.log(req);
  res.json({
    message: `This is Temp Project to make temporary project ${process.env.ABOUT_KEY} `,
  });
});

// app.get("/api/chat", (req, res) => {

//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   console.log(req.params.id);
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

// app.use("/api/chat", chatRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/message", messageRoutes);

// app.use(notFound);
// app.use(errorHandler);

// const PORT = process.env.PORT || 4000;

app.listen(process.env.PORT, () => {
  console.log(
    `Server is Running on PORT: http://localhost:${process.env.PORT}`
  );
});

module.export = app;
