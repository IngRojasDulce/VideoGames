const { Router} =require("express");

 const {
   getvideogamesHandler,
//   getUserIdHandler,
//   createUserHandler,
//   deleteUserHandler,
 } = require("../handlers/videogamesHandler");

 const videogamesRouter = Router();

 videogamesRouter.get("/", getvideogamesHandler)
// //   .get("/:id", getUserIdHandler)
//   .post("/", createUserHandler)
//   .delete("/:id", deleteUserHandler);

 module.exports = videogamesRouter;
