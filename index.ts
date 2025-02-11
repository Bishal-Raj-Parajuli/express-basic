import express from "express";
import authRouter from "./src/routes/auth.routes";
import userRouter from "./src/routes/user.routes";
import connectToDatabase from "./src/database/mongodb";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.APP_PORT || 3000, async () => {
  console.log(
    `Server is running on http://localhost:${process.env.APP_PORT || 3000}`
  );
  await connectToDatabase();
});

export default app;
