import express from "express";
import controller from "../controllers/tagRef.js";

const router = express.Router();

router
	.route("/tags-ref")
	.post(controller.POST)
	.delete(controller.DELETE)
	.put(controller.PUT);

export default router;
