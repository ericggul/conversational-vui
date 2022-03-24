const getRandom = (a, b) => Math.random() * (b - a) + a;

const date = (news) => news.published_date.split("-")[2];
const updated_time = (news) => news.updated.split(" ")[1].split(":");

const POS_META_DATA = [
  {
    top: (news, i, j, size) => i * 40 + 10,
    left: (news, i, j, size) => 10,
  },
  {
    top: (news, i, j, size) => i * 40 + 10,
    left: (news, i, j, size) => 10 + ((j * news.asset_id) % (i + 10)) + parseInt(updated_time(news)[0]),
  },
  {
    top: (news, i, j, size) => (((j * news.asset_id) % (i + 10)) / (j + 10)) * size.windowHeight - parseInt(updated_time(news)[0]) * 10,
    left: (news, i, j, size) => (((news.asset_id % (news.des_facet.length + j + 5)) - 5) / 30) * news.windowWidth,
  },
  {
    top: (news, i, j, size) => (Math.abs(date(news) % ((news.asset_id % (i + 10)) + j)) * 0.1 + ((j * i) % 30) / 150 + ((j - i) % 31) / 101) * size.windowHeight,
    left: (news, i, j, size) => ((parseInt(date(news)) - 15) / 15) * size.windowWidth,
    opacity: (news, i, j, size) => ((j + i) ** 3 % 17) / 100 + ((j + parseInt(date(news))) % 19) / 100 + Math.min(Math.abs(j - i / 4) ** 3 / 1000, 1),
    titleSize: (news, i, j, size) => Math.abs(((j - i) * (j + i)) % 10) / 10 + 1.5,
    abstractSize: (news, i, j, size) => 1,
  },
];

export default POS_META_DATA;
