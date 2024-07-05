'use client'

import BookItem from '@/app/components/BookItem'
import Pagination from '@/app/components/Pagination'
import {useState} from 'react'
import {useMemo} from "react";
import {useCallback} from "react";
import BookSkeleton from "@/app/components/BookSkeleton";
import {useBooks} from "@/utils/hooks/useBooks";
import {ITEMS_PER_PAGE} from "@/utils/constants/constants";


const BooksPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {books, totalBooks, loading} = useBooks(currentPage)

    const totalPages = useMemo(() => Math.ceil(totalBooks / ITEMS_PER_PAGE), [totalBooks])
    const setCurrentPageCallback = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    const renderContent = () => {
        if (loading) {
            return Array.from({length: ITEMS_PER_PAGE}).map((_, index) => (
                <BookSkeleton key={index}/>
            ));
        }
        return books.map((book) => (
            <BookItem key={book.id} book={book}/>
        ));
    }

    return (
        <>
            <div className='container mx-auto m-6 mt-14 sm:px-4 lg:px-6'>
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-16'>
                    {renderContent()}
                </div>
            </div>
            {!loading && totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPageCallback}
                />
            )}
        </>
    )
}

export default BooksPage
