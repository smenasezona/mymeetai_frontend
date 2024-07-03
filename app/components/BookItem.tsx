import React from "react";
import {BookData} from "@/types/bookData";

interface BookItemProps {
    book: BookData
}

const BookItem: React.FC<BookItemProps> = ({book}) => {
    return (
        <div className="border-2 border-amber-400 rounded-lg shadow-md overflow-hidden flex w-full">
            <div className="flex-shrink-0">
                <picture>
                    <img
                        width={250}
                        height={500}
                        src={book.cover}
                        alt={book.title}
                    />
                </picture>
            </div>
            <div className="pt-2 pl-2 flex-grow flex flex-col ">
                <h2 className="font-bold text-2xl pb-2">{book.title}</h2>
                <p className="text-gray-700 text-xl pb-2"> <strong>Автор:</strong> {book.author}</p>
                <p className="text-gray-700 text-xl pb-2"><strong>Жанр:</strong> {book.genre}</p>
                <p className="text-gray-700 text-xl pb-2"><strong>Дата написания:</strong> {book.release_date}</p>
                <p className="text-gray-700 text-xl pb-2">{book.description}</p>
            </div>
        </div>
    )
}

export default BookItem