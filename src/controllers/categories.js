import model from "../models/categories.js";

const POST = async (req, res) => {
	try {
		let cat = await model.addCategrie(req.body);
		if (cat) {
			res.status(201).json({
				status: 201,
				message: "categorie added",
				data: cat,
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
		let cat = await model.putCategrie(req.body);
		if (cat) {
			res.status(201).json({
				status: 201,
				message: "categorie updated",
				data: cat,
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

const GET = async (req, res) => {
	try {
		let cat = await model.getCategorie(req.query);
		if (cat) {
			res.status(200).json({
				status: 201,
				message: "ok",
				data: cat,
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
		let cat = await model.deleteCategrie(req.body);
		if (cat) {
			res.status(201).json({
				status: 201,
				message: "categorie deleted",
				data: cat,
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
	GET,
};
