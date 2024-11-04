import express from "express";
import * as blogController from "../app/controllers/check.controller.js"
const router = express.Router();


router.get("/read-blog",blogController.readBlog);

router.post("/create-blog",blogController.createBlog);

router.put("/update-blog",blogController.updateBlog);

router.delete("/delete-blog",blogController.deleteBlog);

export default router;