//test
import { switchWord, replaceCharacter, sillyReplace, sillyMoveCharCode } from "@C/poeticWeb/BreakingNews/text/textTesting";

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
    textEditFunction: (text) => text.replaceAll("z", "%").replaceAll("it", "FAANG"),
  },
  {
    idx: 4,
    top: (news, i, j, size) => (Math.abs(j - i) / 2) * (size.windowWidth < 768 ? 80 : 60) + (news.asset_id % 13) * 10,
    left: (news, i, j, size) => getRandom(0, size.windowWidth * 0.2) + ((j * news.asset_id) % (i + 10)) * (((i * 2) % 13) + 2) + parseInt(updated_time(news)[0]),
    opacity: (news, i, j, size) => getRandom(0, getRandom(0, 1)),
    titleSize: (news, i, j, size) => 1.5 + (size.windowWidth % (j + i)) * 0.03,
    textEditFunction: (text) => switchWord(text, 3).replaceAll(".", "Harry Potter"),
  },

  {
    idx: 5,
    top: (news, i, j, size) => (Math.abs(date(news) % ((news.asset_id % (i + 10)) + j)) * 0.1 + ((j * i) % 30) / 150 + ((j - i) % 31) / 101) * size.windowHeight,
    left: (news, i, j, size) => ((parseInt(date(news)) - 15) / 15) * size.windowWidth,
    opacity: (news, i, j, size) => ((j + i) ** 3 % 17) / 100 + ((j + parseInt(date(news))) % 19) / 100 + Math.min(Math.abs(j - i / 4) ** 3 / 1000, 1),
    titleSize: (news, i, j, size) => Math.abs(((j - i) * (j + i)) % 10) / 10 + 1.5,
    abstractSize: (news, i, j, size) => 1,
    textEditFunction: (text) => switchWord(text, 10).replaceAll(",", "@"),
  },
  {
    idx: 6,
    top: (news, i, j, size) => size.windowHeight * 0.7 + getRandom(0, 0.5) * size.windowHeight * Math.cos(getRandom(0, Math.PI * 2)),
    left: (news, i, j, size) => size.windowWidth * 0.2 + getRandom(0, 0.5) * size.windowWidth * Math.sin(getRandom(0, Math.PI * 2)),
    opacity: (news, i, j, size) => ((j + i) ** 3 % 17) / 100 + ((j + parseInt(date(news))) % 19) / 100 + Math.min(Math.abs(j - i / 4) ** 3 / 1000, 1),
    textEditFunction: (text) => switchWord(text, 20).replaceAll(".", "%").replaceAll(",", "@"),
  },
  {
    idx: 7,
    top: (news, i, j, size) => ((news.asset_id % 197) / 197) * size.windowHeight,
    left: (news, i, j, size) => (((news.asset_id + j * 73) % 373) / 373) * size.windowWidth,
    titleSize: (news, i, j, size) => (Math.abs(j - i / 5) ** 3 / 400) ** 3 * 2,
    textEditFunction: (text) => switchWord(text, 20).replaceAll("s", "$").replaceAll(".", "!").replace(",", "?"),
  },
  {
    idx: 8,
    top: (news, i, j, size) => getRandom(-0.2 * size.windowHeight, size.windowHeight),
    left: (news, i, j, size) => ((((news.asset_id + j * 73) % 373) - 100) / 373) * size.windowWidth,
    opacity: (news, i, j, size) => getRandom(0, 0.3),
    titleSize: (news, i, j, size) => (Math.abs(j - i / 2) > 8 ? getRandom(10, 40) : getRandom(1, 2)),
    abstractSize: (news, i, j, size) => (Math.abs(j + i / 2) > 18 ? getRandom(5, 100) : getRandom(0, 3)),
    textEditFunction: (text) => switchWord(text, 20).replaceAll("s", "$").replaceAll(".", "!").replace(",", "?"),
  },
  {
    idx: 9,
    top: (news, i, j, size) => getRandom(-0.2 * size.windowHeight, size.windowHeight),
    left: (news, i, j, size) => ((((news.asset_id + j * 73) % 373) - 100) / 373) * size.windowWidth,
    opacity: (news, i, j, size) => getRandom(0, 0.3),
    titleSize: (news, i, j, size) => (Math.abs(j - i / 2) > 8 ? getRandom(10, 40) : getRandom(1, 2)),
    abstractSize: (news, i, j, size) => (Math.abs(j + i / 2) > 18 ? getRandom(5, 100) : getRandom(0, 3)),
    textEditFunction: (text) => switchWord(text, 20).replaceAll("s", "$").replaceAll(".", "!").replace(",", "?"),
  },
  {
    idx: 10,
    top: (news, i, j, size) => getRandom(-1 * size.windowHeight, size.windowHeight),
    left: (news, i, j, size) => ((((news.asset_id + j * 73) % 491) - 230) / 491) * size.windowWidth,
    opacity: (news, i, j, size) => getRandom(0, 0.2),
    titleSize: (news, i, j, size) => getRandom(0, 10),
    abstractSize: (news, i, j, size) => getRandom(0, 10),
    textEditFunction: (text) => sillyMoveCharCode(text),
  },
  {
    idx: 11,
    top: (news, i, j, size) => getRandom(-1 * size.windowHeight, size.windowHeight),
    left: (news, i, j, size) => ((((news.asset_id + j * 73) % 491) - 230) / 491) * size.windowWidth,
    opacity: (news, i, j, size) => getRandom(0, 0.2),
    titleSize: (news, i, j, size) => getRandom(0, 10),
    abstractSize: (news, i, j, size) => getRandom(0, 10),
    textEditFunction: (text) => sillyMoveCharCode(text),
  },
];

export default POS_META_DATA;
