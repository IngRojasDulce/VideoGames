const { Router} =require("express");

 const {
   getVideogamesHandler,
   getVideogamesIdHandler,
   createVideogamesHandler
//   createUserHandler,
//   deleteUserHandler,
 } = require("../handlers/videogamesHandler");

 const videogamesRouter = Router();

 videogamesRouter
   .get("/", getVideogamesHandler)
   .get("/:id", getVideogamesIdHandler)
   .post("/", createVideogamesHandler)
//   .delete("/:id", deleteUserHandler);

 module.exports = videogamesRouter;
