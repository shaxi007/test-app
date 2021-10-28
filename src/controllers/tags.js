import model from "../models/tags.js";

const POST = async (req, res) => {
	try {
		let tg = await model.addTag(req.body);
		if (tg) {
			res.status(201).json({
				status: 201,
				message: "tag added",
				data: tg,
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
		let tg = await model.deleteTag(req.body);
		if (tg) {
			res.status(200).json({
				status: 200,
				message: "tag deleted",
				data: tg,
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

const PUT = async (req, res) => {
	try {
		let tg = await model.updateTag(req.body);
		if (tg) {
			res.status(200).json({
				status: 200,
				message: "tags updated",
				data: tg,
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
		let tg = await model.getTags(req.body);
		if (tg) {
			res.status(200).json({
				status: 200,
				message: "ok",
				data: tg,
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
	DELETE,
	PUT,
	GET,
};
