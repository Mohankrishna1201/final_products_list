import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background: ${({ isActive }) => (isActive ? '#007bff' : 'white')};
  color: ${({ isActive }) => (isActive ? 'white' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 5px;
  font-weight: bold;
  outline: none;

  &:hover {
    background: #007bff;
    color: white;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const renderPageButtons = () => {
        const pageButtons = [];
        for (let i = 1; i <= totalPages; i++) {
            pageButtons.push(
                <PageButton
                    key={i}
                    isActive={i === currentPage}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </PageButton>
            );
        }
        return pageButtons;
    };

    return (
        <PaginationContainer>
            {renderPageButtons()}
        </PaginationContainer>
    );
};

export default Pagination;
