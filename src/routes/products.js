import express from "express";
import controller from "../controllers/products.js";

const router = express.Router();

router
	.route("/products")
	.post(controller.POST)
	.delete(controller.DELETE)
	.put(controller.PUT)
	.get(controller.GET);

export default router;
