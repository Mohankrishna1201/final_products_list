import React, { useState } from 'react';

export default function Pagination({ totalPosts, postPerPage, onPageChange }) {
    const totalPages = Math.ceil(totalPosts / postPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (page) => {
        setCurrentPage(page);
        if (onPageChange) {
            onPageChange(page);
        }
    };

    return (
        <div>
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => handlePageClick(index + 1)}
                    style={{
                        background: currentPage === index + 1 ? '#007bff' : 'white',
                        color: currentPage === index + 1 ? 'white' : '#007bff',
                    }}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}
