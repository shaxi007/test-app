import model from "../models/productRef.js";

const POST = async (req, res) => {
	try {
		let pc = await model.addProduct(req.body);
		if (pc) {
			res.status(201).json({
				status: 201,
				message: "product and categorie linked",
				data: pc,
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

const PUT = async (req, res) => {
	try {
		let pc = await model.putProduct(req.body);
		if (pc) {
			res.status(200).json({
				status: 200,
				message: "updated",
				data: pc,
			});
		} else throw new Error("error");
	} catch (error) {
		res.status(400).json({
			status: 400,
			message: error.message,
			data: null,
		});
	}
};

const DELETE = async (req, res) => {
	try {
		let pc = await model.deleteProduct(req.body);
		if (pc) {
			res.status(200).json({
				status: 200,
				message: "deleted",
				data: pc,
			});
		} else throw new Error("error");
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
	PUT,
	DELETE,
};
