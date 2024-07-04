import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center items-center gap-10 pb-6">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="cursor-pointer bg-amber-400 text-white font-bold py-2 px-4 rounded-l">
                Назад
            </button>
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="cursor-pointer bg-amber-400 text-white font-bold py-2 px-4 rounded-l">
                Вперед
            </button>
        </div>
    );
};

export default Pagination;