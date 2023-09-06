import axios from "axios";
import { createContext, useEffect, useState } from "react";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  // general as default
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalNews, setTotalNews] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // handles
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleChangePage = (e, valor) => {
    setPage(valor);
  };

  // callin the API every time category changes
  useEffect(() => {
    const getNews = async () => {
      setIsLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);
      // We update the state with the API data
      setNews(data.articles);
      setTotalNews(data.totalResults);
      // If category changes, get us back to page number 1
      setPage(1);
      setIsLoading(false);
    };
    getNews();
  }, [category]);

  // adjusting the page everytime page changes
  useEffect(() => {
    const getNews = async () => {
      setIsLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);
      setNews(data.articles);
      setTotalNews(data.totalResults);
      setIsLoading(false);
    };
    getNews();
  }, [page]);

  return (
    <NewsContext.Provider
      value={{
        category,
        handleChangeCategory,
        news,
        totalNews,
        handleChangePage,
        page,
        isLoading,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };
export default NewsContext;
