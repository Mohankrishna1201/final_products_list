import React from 'react'

export default function Pagination() {

    let Pages = [];

    for (int i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {

        Pages.push(i);


    }

    return (
        <div>

        </div>
    )
}
