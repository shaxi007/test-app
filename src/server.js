import express from "express";
import categorieRouter from "./routes/categories.js";
import categorieRefRouter from "./routes/categorieRef.js";
import productRouter from "./routes/products.js";
import productRefRouter from "./routes/productRef.js";
import tagRouter from "./routes/tags.js";
import tagRefRouter from "./routes/tagRef.js";
const app = express();

app.use(express.json());
app.use(categorieRouter);
app.use(categorieRefRouter);
app.use(productRouter);
app.use(productRefRouter);
app.use(tagRouter);
app.use(tagRefRouter);

app.use((error, req, res, next) => {
	return res.status(400).json({
		status: 400,
		message: error.message,
	});
});

app.listen(process.env.PORT || 8080, () =>
	console.log("http://localhost:8080")
);
