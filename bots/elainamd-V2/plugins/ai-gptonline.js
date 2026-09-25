const axios = require('axios');
const cheerio = require('cheerio');
const FormData = require('form-data');

let handler = async (m, { text, reply }) => {
  if (!text) return reply('Contoh: .gptonline halo apa kabar?');

  try {
    const { data } = await axios.get("https://gptonline.ai/id/chatgpt-online/");
    const $ = cheerio.load(data);
    const div = $('.wpaicg-chat-shortcode');

    const nonce = div.attr('data-nonce');
    const botId = div.attr('data-bot-id');
    const postId = div.attr('data-post-id');

    let form = new FormData();
    form.append("_wpnonce", nonce);
    form.append("post_id", postId);
    form.append("url", "https://gptonline.ai/id/chatgpt-online/");
    form.append("action", "wpaicg_chat_shortcode_message");
    form.append("message", text);
    form.append("bot_id", botId);
    form.append("chat_bot_identity", "custom_bot_1040");
    form.append("wpaicg_chat_history", "[]");
    form.append("wpaicg_chat_client_id", "LCgGOMeIOC");

    const res = await axios.post(
      "https://gptonline.ai/id/wp-admin/admin-ajax.php",
      form,
      { headers: form.getHeaders() }
    );

    let hasil = res.data?.data?.message || res.data?.data || 'Gagal mendapatkan respon.';
    reply(hasil);
  } catch (e) {
    console.error(e);
    reply('Terjadi error, coba lagi nanti.');
  }
};

handler.command = ['gptonline'];
handler.tags = ['ai'];
handler.help = ['gptonline <pertanyaan>'];

module.exports = handler;
