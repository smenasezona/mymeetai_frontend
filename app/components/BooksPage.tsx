'use client'

import BookItem from '@/app/components/BookItem'
import Pagination from '@/app/components/Pagination'
import {BookData} from '@/types/bookData'
import {getAllBooks} from '@/utils/api'
import {Bona_Nova} from 'next/font/google'
import {useEffect, useState} from 'react'

const bona_nova = Bona_Nova({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
})

const ITEMS_PER_PAGE = 10

const BooksPage = () => {
    const [books, setBooks] = useState<BookData[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        async function fetchBooks() {
            try {
                const skip = (currentPage - 1) * ITEMS_PER_PAGE
                const fetchedBooks = await getAllBooks(skip, ITEMS_PER_PAGE + 1)
                if (fetchedBooks.length > ITEMS_PER_PAGE) {
                    setBooks(fetchedBooks.slice(0, ITEMS_PER_PAGE))
                    setTotalPages(currentPage + 1)
                } else {
                    setBooks(fetchedBooks)
                    setTotalPages(currentPage)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchBooks()
    }, [currentPage])

    return (
        <div className={bona_nova.className}>
            <div className='container mx-auto m-6 mt-14 sm:px-4 lg:px-6  '>
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-16'>
                    {books &&
                        books.map((book: BookData) => (
                            <BookItem key={book.id} book={book}/>
                        ))}
                </div>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    )
}

export default BooksPage
