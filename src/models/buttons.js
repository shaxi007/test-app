import fetchAll from "../lib/postgres.js";
import query from "../repositories/start.js";
import keyboards from "../lib/keyboards.js";

const ADMIN = process.env.ADMIN;
async function buttons(text, message_id, chatId, name, username, bot) {
	let check_ques_6 = await fetchAll(true, query.check_st, chatId, 6);
	if (text == "📨 Talab va takliflar") {
		bot.sendMessage(
			chatId,
			"Menyulardan birini tanlang",
			keyboards.taklif_keyboards
		);
	} else if (text == "⬅️ Orqaga") {
		bot.sendMessage(chatId, "Asosiy menyudasiz", keyboards.menu_keyboards);
	} else if (text == "🗳 Taklif bildirish") {
		if (!check_ques_6) {
			await fetchAll(false, query.add_st, 6, "yuborildi", chatId);
		}
		await fetchAll(false, query.up_st, chatId, 6, "yuborildi");
		bot.sendMessage(chatId, "Talab va takliflaringizni kiriting");
	} else if (check_ques_6?.status == "yuborildi") {
		let send_text = `<a href="tg://user?id=${chatId}">${name}</a>\n${text}\n\nTaklif bildirdi`;
		bot.sendMessage(ADMIN, send_text, keyboards.html_option);
		bot.sendMessage(chatId, "Talab va takliflaringiz qabul qilindi! ✅");
		await fetchAll(false, query.up_st, chatId, 6, "boldi");
	} else if (text == "📝 Oferta") {
		bot.sendMessage(
			chatId,
			"Offerta bilan tanishib chiqing",
			keyboards.oferta_keyboard
		);
	}
}

export default buttons;
