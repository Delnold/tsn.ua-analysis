import {saveToJson} from "../utils/saveToJson.js";
import {getTsnNewsInfo} from "../api/getNews.js";

const startingRequest = "https://tsn.ua/user-api/categories/news?after=2425684";
// The quantity of news corresponds to: iterationCount * 11
const iterationCount = 5;
const filePath = "./data/tsnNews.json";


(async () => {
   const arrData = await getTsnNewsInfo(startingRequest, iterationCount);
   await saveToJson(arrData, filePath)
})()