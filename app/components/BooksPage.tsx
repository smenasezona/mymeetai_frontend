'use client'

import {useState} from "react";
import {useEffect} from "react";
import {getAllBooks} from "@/utils/api";
import {BookData} from "@/types/bookData";
import BookItem from "@/app/components/BookItem";

const BooksPage = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const fetchedBooks = await getAllBooks()
                setBooks(fetchedBooks)
            } catch (error) {
                console.log(error)
            }
        }

        fetchBooks()
    }, [])

    return (
        <div className="container mx-auto m-6 mt-10 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-16">
                {books.map((book: BookData) => (
                    <BookItem key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}

export default BooksPage