import {useEffect} from "react";
import {useState} from "react";
import {BookData} from "@/types/bookData";
import {getAllBooks} from "@/utils/api";
import {ITEMS_PER_PAGE} from "@/utils/constants/constants";



export const useBooks = (currentPage: number) => {
    const [books, setBooks] = useState<BookData[]>([]);
    const [totalBooks, setTotalBooks] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBooks() {
            try {
                setLoading(true);
                if (totalBooks === 0) {
                    const allBooks = await getAllBooks(0, 1000);
                    setTotalBooks(allBooks.length);
                }
                const skip = (currentPage - 1) * ITEMS_PER_PAGE;
                const fetchedBooks = await getAllBooks(skip, ITEMS_PER_PAGE);
                setBooks(fetchedBooks);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchBooks()
    }, [currentPage, totalBooks])

    return {books, totalBooks, loading}
}