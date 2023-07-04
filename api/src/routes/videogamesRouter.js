const { Router} =require("express");

 const {
   getVideogamesHandler,
//   getUserIdHandler,
//   createUserHandler,
//   deleteUserHandler,
 } = require("../handlers/videogamesHandler");

 const videogamesRouter = Router();

 videogamesRouter.get("/", getVideogamesHandler)
// //   .get("/:id", getUserIdHandler)
//   .post("/", createUserHandler)
//   .delete("/:id", deleteUserHandler);

 module.exports = videogamesRouter;
