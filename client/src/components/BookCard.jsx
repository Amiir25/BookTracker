import React from "react";
import { books, dashboardData } from "../assets/assets";
import { Link } from 'react-router-dom';

const BookCard = () => {

    return (
        <>
            <div className="mt-10">

                {/* Books */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {
                        books.map((book) => (
                            <div key={book.id} className="flex items-start gap-10 mx-2 px-2 py-4 border border-gray-300 rounded shadow-lg">

                                {/* Left */}
                                <div className="flex-1">
                                    <h1 className="text-[#023766] text-2xl md:text-3xl font-bold">{book.title}</h1>
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <p className="text-xl font-medium">{book.author}</p>
                                        <span className='font-medium text-xs'>{book.year}</span>
                                    </div>
                                    <p>{book.pages} pages</p>
                                    <div className="flex items-center gap-4 w-full mt-3 text-gray-700 text-sm">
                                        <button className="border border-[#023766] p-1 rounded hover:bg-[#023776] hover:text-gray-200">Update</button>
                                        <button className="border border-red-600 p-1 rounded hover:bg-red-600 hover:text-gray-200">Delete</button>
                                    </div>
                                </div>

                                {/* Right */}
                                <div className={`py-1 px-2 rounded`}>
                                    {book.status}
                                </div>

                            </div>

                        ))
                    }
                </div>

                <button className="mt-6 border border-[#023766] py-2 px-6 font-medium
                hover:bg-[#023766] hover:text-white">
                    <Link to={'/add'}>Add New Book</Link>
                </button>
            </div>
        </>
    )
}

export default BookCard;