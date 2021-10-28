import express from "express";
import controller from "../controllers/productRef.js";

const router = express.Router();

router
	.route("/products-ref")
	.post(controller.POST)
	.delete(controller.DELETE)
	.put(controller.PUT);

export default router;
