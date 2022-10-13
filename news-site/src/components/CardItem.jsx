import { formatDate } from "../utils/index"
import LazyLoad from 'react-lazy-load';
import { BsBookmark, BsBookmarkFill, BsHeart, BsHeartFill } from 'react-icons/bs'
import { useState } from 'react'

export default ({ news }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    function handleBookmark() {
        setIsBookmarked(!isBookmarked);
    }

    function handleLike() {
        setIsLiked(!isLiked);
    }

    return (
        <article className="flex flex-col py-8 px-4 bg-transparent rounded-md border border-primary w-fit h-auto">
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
            <footer className="align-bottom bottom-0">
                <hr />
                <div className="flex flex-row justify-between">
                    <button onClick={handleLike}>
                        {isLiked ? <BsHeartFill /> : <BsHeart />}
                    </button>
                    <button onClick={handleBookmark}>
                        {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
                    </button>
                </div>
            </footer>
        </article>
    )
}