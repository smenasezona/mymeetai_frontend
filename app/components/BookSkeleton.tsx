import React from "react";

const BookSkeleton: React.FC = () => {
    return (
        <div className="relative w-full p-1 border-2 border-amber-400">
            <div
                className="absolute top-1 left-1 w-3 h-3 border-2 border-amber-400 text-amber-400 flex items-center justify-center text-xs">•
            </div>
            <div
                className="absolute top-1 right-1 w-3 h-3 border-2 border-amber-400 text-amber-400 flex items-center justify-center text-xs">•
            </div>
            <div className="relative border-2 border-amber-400 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="w-[250px] h-[375px] bg-gray-300 animate-pulse"></div>
                    </div>
                    <div className="pl-4 flex-grow flex flex-col">
                        <div className="h-8 bg-gray-300 w-3/4 mb-2 animate-pulse"></div>
                        <div className="h-6 bg-gray-300 w-1/2 mb-2 animate-pulse"></div>
                        <div className="h-6 bg-gray-300 w-1/3 mb-2 animate-pulse"></div>
                        <div className="h-6 bg-gray-300 w-2/3 mb-2 animate-pulse"></div>
                        <div className="h-24 bg-gray3400 w-full animate-pulse"></div>
                    </div>
                </div>
                <div
                    className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-2 border-amber-400 text-amber-400 flex items-center justify-center">•
                </div>
                <div
                    className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-2 border-amber-400 text-amber-400 flex items-center justify-center">•
                </div>
            </div>
        </div>
    )
}

export default BookSkeleton;