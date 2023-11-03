import React from 'react'
function Pagination({ totalPosts, postPerPage }) {

    let pages = [];

    for (let i = 1; i <= 3; i++) {

        pages.push(i);
    }

    return (
        <div>
            const map = pages.map((pages) => {
                <button> {pages}</button>
            })


        </div>
    )
}
export default Pagination;
