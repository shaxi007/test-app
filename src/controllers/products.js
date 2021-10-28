import model from "../models/products.js";

const POST = async (req, res) => {
	try {
		let newProduct = await model.postProduct(req.body);
		if (newProduct) {
			res.status(201).json({
				status: 201,
				message: "product added",
				data: newProduct,
			});
		} else throw new Error("error");
	} catch (error) {
		res.status(400).json({
			status: 400,
			message: error,
			data: null,
		});
	}
};

const DELETE = async (req, res) => {
	try {
		let product = await model.deleteProduct(req.body);
		if (product) {
			res.status(200).json({
				status: 200,
				message: "deleted product",
				data: product,
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "not found",
				data: null,
			});
		}
	} catch (error) {
		res.status(400).json({
			status: 400,
			token: null,
			data: null,
		});
	}
};

const PUT = async (req, res) => {
	try {
		let product = await model.putProduct(req.body);
		if (product) {
			res.status(200).json({
				status: 200,
				message: "updated product",
				data: product,
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "not found",
				data: null,
			});
		}
	} catch (error) {
		res.status(400).json({
			status: 400,
			token: null,
			data: null,
		});
	}
};

const GET = async (req, res) => {
	try {
		let products = await model.getProducts(req.query);
		if (products) {
			res.status(200).json({
				status: 200,
				message: "ok",
				data: products,
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "not found",
				data: null,
			});
		}
	} catch (error) {
		res.status(400).json({
			status: 400,
			message: error.message,
			data: null,
		});
	}
};

export default {
	POST,
	DELETE,
	GET,
	PUT,
};
