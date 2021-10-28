import express from "express";
import controller from "../controllers/tags.js";

const router = express.Router();

router
	.route("/tags")
	.post(controller.POST)
	.delete(controller.DELETE)
	.put(controller.PUT)
	.get(controller.GET);

export default router;
