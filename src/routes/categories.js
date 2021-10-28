import express from "express";
import controller from "../controllers/categories.js";

const router = express.Router();

router
	.route("/categories")
	.post(controller.POST)
	.delete(controller.DELETE)
	.put(controller.PUT)
	.get(controller.GET);

export default router;
