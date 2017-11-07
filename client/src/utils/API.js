import axios from "axios";

const URL = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
const KEY = "89e53898cc8e488e87c03f07ed0f5b61";

export default {
  getData(search) {
    return axios.get(`${URL}?q=${search}&api-key=${KEY}`);
  },
  getArticles() {
    return axios.get("/api/articles");
  },
  saveData(articles) {
    return axios.post("api/articles", articles)
  }
};
