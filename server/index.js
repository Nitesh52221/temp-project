const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");

// const chatRoutes = require("./routes/chatRoutes");
// const userRoutes = require("./routes/userRoutes");
// const messageRoutes = require("./routes/messageRoutes");
// import cors from "cors";
// import helmet from "helmet";

dotenv.config();
const app = express();
// connectDB();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(helmet());
app.use(express.json()); //to accept json data

app.use(express.json());

app.get("/", (req, res) => {
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

if (process.env.NODE_ENV == "production") {
  const path = require("path");

  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// const PORT = process.env.PORT || 4000;
if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log(
      `Server is Running on PORT: http://localhost:${process.env.PORT}`
    );
  });
}
module.export = app;
