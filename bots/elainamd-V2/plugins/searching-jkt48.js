let handler = async (m, { conn, text, prefix, command }) => {
  const axios = require('axios');
  const cheerio = require('cheerio');

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async function scrapeJkt48(query) {
    try {
      if (query === 'berita') {
        const newsResponse = await axios.get('https://jkt48.com/news/list?lang=id');
        const $ = cheerio.load(newsResponse.data);
        const newsList = [];
        $('.entry-news__list').each((_, element) => {
          const title = $(element).find('.entry-news__list--item h3 a').text().trim();
          const link = $(element).find('.entry-news__list--item h3 a').attr('href');
          const date = $(element).find('.entry-news__list--item time').text().trim();
          newsList.push({ title, link: `https://jkt48.com${link}`, date });
        });
        const randomNews = shuffle(newsList).slice(0, Math.max(10, newsList.length));
        return `*📢 Berita JKT48 :*\n\n${randomNews.map((item, idx) => `${idx + 1}. ${item.title}\n   Link: ${item.link}\n   Tanggal: ${item.date}`).join('\n\n')}`;
      } else if (query === 'jadwal') {
        const eventResponse = await axios.get('https://jkt48.com');
        const $ = cheerio.load(eventResponse.data);
        const schedule = [];
        $('.entry-schedule__calendar .table tbody tr').each((_, element) => {
          const dateText = $(element).find('td h3').html().trim();
          const date = dateText.split('<br>')[0].trim();
          const day = dateText.split('<br>')[1].replace(/[()]/g, '').trim();
          const events = [];
          $(element).find('.contents p a').each((_, eventElement) => {
            const event = $(eventElement).text().trim();
            const link = $(eventElement).attr('href');
            events.push({ event, link: `https://jkt48.com${link}` });
          });
          schedule.push({ date, day, events });
        });
        const randomSchedule = shuffle(schedule).slice(0, Math.max(10, schedule.length));
        return `*📅 Jadwal JKT48 :*\n\n${randomSchedule.map((item, idx) => `${idx + 1}. ${item.date} (${item.day})\n   Acara: ${item.events.map(e => e.event).join(', ')}`).join('\n\n')}`;
      } else if (query === 'member') {
        const memberResponse = await axios.get('https://jkt48.com/member/list?lang=id');
        const $ = cheerio.load(memberResponse.data);
        const members = [];
        $('div.col-4.col-lg-2').each((_, element) => {
          const name = $(element).find('.entry-member__name a').html().replace(/<br\s*\/?>/g, ' ').trim();
          const profileLink = $(element).find('.entry-member a').attr('href');
          const imageSrc = $(element).find('.entry-member img').attr('src');
          members.push({
            name,
            profileLink: profileLink ? `https://jkt48.com${profileLink}` : null,
            imageSrc: imageSrc ? `https://jkt48.com${imageSrc}` : null,
          });
        });
        const randomMembers = shuffle(members).slice(0, Math.max(10, members.length));
        return `*Member JKT48 :*\n\n${randomMembers.map((member, idx) => `${idx + 1}. ${member.name}\n   Profil: ${member.profileLink}`).join('\n\n')}`;
      } else {
        return `❌ Query tidak dikenal. Gunakan salah satu dari: *berita*, *jadwal*, *member*\n\ncontoh : ${prefix + command} berita`;
      }
    } catch (err) {
      return `Terjadi kesalahan: ${err.message}`;
    }
  }

  const query = text?.toLowerCase();
  const response = await scrapeJkt48(query);
  conn.sendMessage(m.chat, { text: response }, { quoted: m });
};

handler.help = ["jkt48info"];
handler.tags = ["searching"];
handler.command = ["jkt48info"];

module.exports = handler;