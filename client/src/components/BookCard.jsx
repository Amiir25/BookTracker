import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookCard = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:5000/books");
                setBooks(res.data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchAllBooks();
    }, [])

    return (
        <>
            <div className="mt-10">

                {/* Books */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {
                        books.map((book) => (
                            <div key={book.id} className="relative flex items-start gap-12 mx-2 px-2 pt-12 pb-2 border border-gray-300 rounded shadow-lg">

                                {/* Left */}
                                <div className="flex-1">
                                    <h1 className="relative text-[#023766] text-2xl md:text-3xl font-bold">
                                        {book.title}
                                    </h1>
                                    <div className="flex items-baseline gap-4 mb-4">
                                        <p className="font-medium">{book.author}</p>
                                        <span className='font-light text-xs'>{book.date}</span>
                                    </div>
                                    <p>{book.totalpage} pages</p>
                                    <div className="flex items-center gap-4 w-full mt-3 text-gray-700 text-sm">
                                        <button className="border border-[#023766] p-1 rounded hover:bg-[#023776] hover:text-gray-200">Update</button>
                                        <button className="border border-red-600 p-1 rounded hover:bg-red-600 hover:text-gray-200">Delete</button>
                                    </div>
                                </div>

                                {/* Genre */}
                                <span className="absolute top-0 right-0 text-[10px] bg-[#023766] text-white p-1">{book.genre}</span>

                                {/* Right */}
                                <div className="flex flex-col items-center">
                                    <p
                                    className={`${book.status === 'Not Started' && 'bg-blue-300'}
                                    ${book.status === 'Reading' && 'bg-amber-300'}
                                    ${book.status === 'Finished' && 'bg-green-300'} py-1 px-2 rounded`}>
                                        {book.status}
                                    </p>
                                    {
                                        book.status === 'Reading' &&
                                        <p className="text-[10px]">page - {book.currentpage}</p>
                                    }
                                </div>
                            </div>

                        ))
                    }
                </div>

                <button className="mt-10 border border-[#023766] mx-2 py-2 px-6 font-medium
                hover:bg-[#023766] hover:text-white">
                    <Link to={'/add'}>Add New Book</Link>
                </button>
            </div>
        </>
    )
}

export default BookCard;