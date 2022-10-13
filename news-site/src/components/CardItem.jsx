import { formatDate } from "../utils/index"
import LazyLoad from 'react-lazy-load';

export default ({ news }) => {
    return (
        <article className="flex flex-col py-8 px-4 bg-white rounded-md border border-black w-fit h-auto">
            <a href={news.url} target="_blank" rel="noreferrer">
                <LazyLoad>
                    <img
                        className="border rounded-2xl border-black mt-1 h-48 w-full "
                        src={news?.urlToImage}
                        alt={news?.title}
                        // onError={({ currentTarget }) => {
                        //     currentTarget.onerror = null; // prevents looping
                        //     currentTarget.src = "../assets/background_black.png";
                        // }}
                    />
                </LazyLoad>
                <p className="text-sm pl-2 opacity-60 dr"><b><span>{news?.author}</span> • <span>{formatDate(news?.publishedAt)}</span></b></p>
                <div className="flex-col px-2 w-[fit-content]">
                    <h3 className="text-2xl leading-7"><strong>{news?.title}</strong></h3>
                    <p className="text-sm mt-2">{news?.description} </p>
                </div>
            </a>
        </article>
    )
}