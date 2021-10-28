import express from "express";
import controller from "../controllers/categorieRef.js";

const router = express.Router();

router
	.route("/categories-ref")
	.post(controller.POST)
	.delete(controller.DELETE)
	.put(controller.PUT);

export default router;
