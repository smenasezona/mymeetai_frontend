'use client'

import BookItem from '@/app/components/BookItem'
import Pagination from '@/app/components/Pagination'
import {BookData} from '@/types/bookData'
import {getAllBooks} from '@/utils/api'
import {useEffect, useState} from 'react'
import BookSkeleton from "@/app/components/BookSkeleton";

const ITEMS_PER_PAGE = 10

const BooksPage = () => {
    const [books, setBooks] = useState<BookData[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBooks() {
            try {
                setLoading(true)
                const skip = (currentPage - 1) * ITEMS_PER_PAGE
                const fetchedBooks = await getAllBooks(skip, ITEMS_PER_PAGE + 1)
                setBooks(fetchedBooks.slice(0, ITEMS_PER_PAGE))
                setTotalPages(Math.ceil(fetchedBooks.length / ITEMS_PER_PAGE))
                setLoading(false)
            } catch (error) {
                console.error(error)
                setLoading(false)
            }
        }

        fetchBooks()
    }, [currentPage])


    return (
        <>
            <div className='container mx-auto m-6 mt-14 sm:px-4 lg:px-6  '>
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-16'>
                    {loading ? (
                        Array.from({length: ITEMS_PER_PAGE}).map((_, index) => (
                            <BookSkeleton key={index}/>
                        ))
                    ) : (
                        books.map((book: BookData) => (
                            <BookItem key={book.id} book={book}/>
                        ))
                    )}
                </div>
            </div>
            {!loading && totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </>
    )
}

export default BooksPage
