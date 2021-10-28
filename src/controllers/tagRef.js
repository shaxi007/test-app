import model from "../models/tagRef.js";

const POST = async (req, res) => {
	try {
		let pt = await model.addTag(req.body);
		if (pt) {
			res.status(201).json({
				status: 201,
				message: "product and tag linked",
				data: pt,
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
		let pt = await model.putTag(req.body);
		if (pt) {
			res.status(200).json({
				status: 200,
				message: "updated",
				data: pt,
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
		let pt = await model.deleteTag(req.body);
		if (pt) {
			res.status(200).json({
				status: 200,
				message: "deleted",
				data: pt,
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
