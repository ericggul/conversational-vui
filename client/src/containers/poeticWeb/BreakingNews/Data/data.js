//test
import { switchWord } from "@C/poeticWeb/BreakingNews/text/textTesting";

const getRandom = (a, b) => Math.random() * (b - a) + a;

const date = (news) => news.published_date.split("-")[2];
const updated_time = (news) => news.updated.split(" ")[1].split(":");

const POS_META_DATA = [
  {
    idx: 0,
    top: (news, i, j, size) => i * (size.windowWidth < 768 ? 80 : 60) + 10,
    left: (news, i, j, size) => 10,
  },
  {
    idx: 1,
    top: (news, i, j, size) => i * (size.windowWidth < 768 ? 80 : 60) + 10,
    left: (news, i, j, size) => 10 + ((j * news.asset_id) % (i + 10)) * (((i * 2) % 13) + 2) + parseInt(updated_time(news)[0]),
    opacity: (news, i, j, size) => 0.5,
  },
  {
    idx: 2,
    top: (news, i, j, size) => ((j + i) / 2) * (size.windowWidth < 768 ? 80 : 60) + 10,
    left: (news, i, j, size) => 10 + ((j * news.asset_id) % (i + 10)) * (((i * 2) % 13) + 2) + parseInt(updated_time(news)[0]),
    opacity: (news, i, j, size) => 0.4,
  },
  {
    idx: 3,
    top: (news, i, j, size) => (Math.abs(j - i) / 2) * (size.windowWidth < 768 ? 80 : 60) + (news.asset_id % 13) * 10,
    left: (news, i, j, size) => 10 + ((j * news.asset_id) % (i + 10)) * (((i * 2) % 13) + 2) + parseInt(updated_time(news)[0]),
    opacity: (news, i, j, size) => 0.3,
    titleSize: (news, i, j, size) => 1.5 + (size.windowWidth % (j + i)) * 0.03,
  },
  {
    idx: 4,
    top: (news, i, j, size) => (Math.abs(j - i) / 2) * (size.windowWidth < 768 ? 80 : 60) + (news.asset_id % 13) * 10,
    left: (news, i, j, size) => 10 + ((j * news.asset_id) % (i + 10)) * (((i * 2) % 13) + 2) + parseInt(updated_time(news)[0]),
    opacity: (news, i, j, size) => 0.3,
    titleSize: (news, i, j, size) => 1.5 + (size.windowWidth % (j + i)) * 0.03,
    textEditFunction: (text) => switchWord(text, 1),
  },
  {
    idx: 5,
    top: (news, i, j, size) => (((j * news.asset_id) % (i + 10)) / (j + 10)) * size.windowHeight - parseInt(updated_time(news)[0]) * 10,
    left: (news, i, j, size) => (((news.asset_id % (news.des_facet.length + j + 5)) - 5) / 30) * news.windowWidth,
  },
  {
    idx: 6,
    top: (news, i, j, size) => (Math.abs(date(news) % ((news.asset_id % (i + 10)) + j)) * 0.1 + ((j * i) % 30) / 150 + ((j - i) % 31) / 101) * size.windowHeight,
    left: (news, i, j, size) => ((parseInt(date(news)) - 15) / 15) * size.windowWidth,
    opacity: (news, i, j, size) => ((j + i) ** 3 % 17) / 100 + ((j + parseInt(date(news))) % 19) / 100 + Math.min(Math.abs(j - i / 4) ** 3 / 1000, 1),
    titleSize: (news, i, j, size) => Math.abs(((j - i) * (j + i)) % 10) / 10 + 1.5,
    abstractSize: (news, i, j, size) => 1,
  },
];

export default POS_META_DATA;
