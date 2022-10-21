import React from "react";
export default ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex justify-center">
                {/*? Permasalahan, fungsi dibawah tidak terinput pada web */}
                {pageNumbers.map(number => (
                    <li key={number} className="mx-1">
                        <button onClick={() => paginate(number)} className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-500 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-600 focus:outline-none focus:shadow-outline-primary">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}