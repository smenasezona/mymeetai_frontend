import React from "react";
import {BookData} from "@/types/bookData";

interface BookItemProps {
    book: BookData
}

const BookItem: React.FC<BookItemProps> = React.memo(({book}) => {
    return (
        <div className="relative w-full p-1 border-2 border-amber-400 ">
            <div
                className="absolute top-1 left-1 w-3 h-3 border-2 border-amber-400 text-amber-400 flex items-center justify-center text-xs">•
            </div>
            <div
                className="absolute top-1 right-1 w-3 h-3 border-2 border-amber-400 text-amber-400 flex items-center justify-center text-xs">•
            </div>
            <div className="relative border-2 border-amber-400 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <picture>
                            <img
                                className="w-[250px] h-auto"
                                src={book.cover}
                                alt={book.title}
                                loading={"lazy"}
                            />
                        </picture>
                    </div>
                    <div className="pl-4 flex-grow flex flex-col">
                        <h2 className="font-bold text-gray-700 text-2xl pb-2">{book.title}</h2>
                        <p className="text-gray-700 text-xl pb-2"><strong>Автор:</strong> {book.author}</p>
                        <p className="text-gray-700 text-xl pb-2"><strong>Жанр:</strong> {book.genre}</p>
                        <p className="text-gray-700 text-xl pb-2"><strong>Дата написания:</strong> {book.release_date}
                        </p>
                        <p className="text-gray-700 text-xl pb-2">{book.description}</p>
                    </div>
                </div>
                <div
                    className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-2 border-amber-400  text-amber-400 flex items-center justify-center">•
                </div>
                <div
                    className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-2 border-amber-400 text-amber-400 flex items-center justify-center ">•
                </div>
            </div>
        </div>
    )
})

export default BookItem