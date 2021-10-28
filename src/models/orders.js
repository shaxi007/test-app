import fetchAll from "../lib/postgres.js";
import query from "../repositories/orders.js";
import keyboards from "../lib/keyboards.js";

async function orders(text, message_id, chatId, name, username, bot) {
	let categories_key = await fetchAll(true, query.sl_cat_arr);
	console.log(categories_key);
	if (text == "🛍 Buyurtma berish") {
		bot.sendMessage(
			chatId,
			"Ketgoriyalardan birini tanlang!",
			keyboards.category_keybords(categories_key.array_agg)
		);
	}
}

export default { orders };
