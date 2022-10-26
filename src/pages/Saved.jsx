// components
import Layout from "../components/Layout";

// redux
import { useDispatch, useSelector } from "react-redux";
import { deleteThisNews } from "../features/news-slice";

export default () => {
  const savedNews = useSelector((state) => state.news.data.saved);
  const dispatch = useDispatch();

  function deleteSaved(title) {
    dispatch(deleteThisNews(title));
  }

  return (
    <Layout title="Saved News">
      <h1 className="text-2xl font-bold border-primary border-b-2 mx-10 my-10 text-primary text-center ">
        Saved
      </h1>
      {savedNews.length > 0 ? (
        <div className="overflow-auto">
          <table className="w-auto mx-10 mt-4">
            <thead className="text-left font-bold text-xl tracking-wide">
              <tr>
                <th className="p-3 w-[14rem]">Source</th>
                <th className="p-3 w-[14rem]">Title</th>
                <th className="p-3">Description</th>
                <td className="p-3">Action</td>
              </tr>
            </thead>
            <tbody>
              {savedNews.map((news, index) => (
                <tr key={index} className="odd:bg-base-300">
                  <td className="p-3 w-[14rem]">
                    <div>
                      {news.source?.name} - {news?.author}
                    </div>
                    <a className="font-bold underline" href={news?.url}>
                      Go to News Page &rarr;
                    </a>
                  </td>
                  <td className="p-3 w-[14rem] ">{news?.title}</td>
                  <td className="p-3">{news?.description}</td>
                  <td className="p-3">
                    <button
                      href="#"
                      className="font-bold underline"
                      onClick={() => {
                        deleteSaved(news?.title);
                        return confirm("Yakin ingin menghapus berita ini?");
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="mt-4 text-2xl text-primary text-center">
          No saved news
        </h3>
      )}
    </Layout>
  );
};
