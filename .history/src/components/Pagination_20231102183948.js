import React from 'react'

export default function Pagination({ totalPosts, postsPerPage }) {

    let pages = [];

    for (int i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {

        pages.push(i);
    }

    return (
        <div>

        </div>
    )
}
