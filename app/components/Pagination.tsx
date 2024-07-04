import React from "react";
import {useEffect} from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages, onPageChange}) => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }, [currentPage])

    return (
        <div className="flex justify-center items-center gap-10 pb-6">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className={`cursor-pointer border-2 border-amber-400 py-2 px-4 hover:bg-amber-400 transition duration-300 rounded-tl-md rounded-bl-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                Назад
            </button>
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className={`cursor-pointer border-2 border-amber-400 py-2 px-4 hover:bg-amber-400 transition duration-300 rounded-tr-md rounded-br-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
                Вперед
            </button>
        </div>
    );
};

export default Pagination;