import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const fetchArticles = async () => {
  const articlesRef = collection(db, "articles");
  const resp = await getDocs(articlesRef);
  const articlesArray = resp.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  articlesArray.sort((a, b) => {
    if (typeof a.index === "number" && typeof b.index === "number") {
      return a.index - b.index;
    } else {
      return typeof a.index === "number" ? 1 : -1;
    }
  });
  return articlesArray;
};

export default fetchArticles;
