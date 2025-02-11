import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({
    title: "Get All Users",
  });
});

userRouter.get("/:id", (req, res) => {
  res.send({
    title: "Get User By Id",
    id: req.params.id,
  });
});

userRouter.post("/", (req, res) => {
  res.send({
    title: "Create User",
  });
});

userRouter.put("/:id", (req, res) => {
  res.send({
    title: "Update User",
    id: req.params.id,
  });
});

userRouter.delete("/:id", (req, res) => {
  res.send({
    title: "Delete User",
    id: req.params.id,
  });
});

export default userRouter;
