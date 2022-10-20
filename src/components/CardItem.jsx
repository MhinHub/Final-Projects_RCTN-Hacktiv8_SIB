import { formatDate } from "../utils/index"
import LazyLoad from 'react-lazy-load';
import { BsBookmark, BsBookmarkFill, BsHeart, BsHeartFill } from 'react-icons/bs'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { saveThisNews } from "../features/news-slice";

export default ({ news }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();

    const isNewsSaved = (news) => {
        const savedNews = useSelector((state) => state.news.data.saved);
        return savedNews.some((item) => item.title === news.title);
    };

    function handleBookmark() {
        setIsBookmarked(!isBookmarked);
        dispatch(saveThisNews(news));
    }

    function handleLike() {
        setIsLiked(!isLiked);
        // dispatch(saveThisLike(news));
    }

    return (
        <article className="cardItem">
            <div>
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
                    <p className="text-sm pl-2 opacity-60"><b><span>{news?.author}</span> • <span>{formatDate(news?.publishedAt)}</span></b></p>
                    <div className="flex-col px-2 w-[fit-content]">
                        <h3 className="text-2xl leading-7"><strong>{news?.title}</strong></h3>
                        <p className="text-sm mt-2">{news?.description} </p>
                    </div>
                </a>
            </div>
            <footer className="align-bottom bottom-4">
                <hr />
                <div className="flex flex-row justify-between">
                    <button onClick={handleLike}>
                        {isLiked ? <BsHeartFill size={25} /> : <BsHeart size={25} />}
                    </button>
                    <button onClick={handleBookmark}>
                        {isNewsSaved(news) ? <BsBookmarkFill size={25} /> : <BsBookmark size={25} />}
                    </button>
                </div>
            </footer>
        </article>
    )
}