import React from "react";

const AddBook = () => {
    return (
        <>
            <form action="" className="px-6 flex-1">
                <h1 className="text-2xl text-[#023766] font-medium mb-6">
                    Add New Book
                </h1>
                
                <div className="grid grid-cols-2 gap-4">
                    {/* Title */}
                    <div className="flex flex-col">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" placeholder="Add title"
                            className="border border-gray-400 px-2 py-2 rounded" />
                    </div>
                    {/* Author */}
                    <div className="flex flex-col">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" placeholder="Add the author"
                            className="border border-gray-400 px-2 py-2 rounded" />
                    </div>
                    {/* Date */}
                    <div className="flex flex-col">
                        <label htmlFor="date">Published Date</label>
                        <input type="date" id="date"
                            className="border border-gray-400 px-2 py-2 rounded" />
                    </div>
                    {/* Pages */}
                    <div className="flex flex-col">
                        <label htmlFor="pages">Number of Pages</label>
                        <input type="number" id="pages" placeholder="Enter number of pages"
                            className="border border-gray-400 px-2 py-2 rounded" />
                    </div>
                    {/* Genre */}
                    <div className="flex flex-col">
                        <label htmlFor="genreInput">Genre</label>
                        <input type="text" id="genreInput" list="genre" placeholder="Enter the genre"
                            className="border border-gray-400 px-2 py-2 rounded" />
                        <datalist id="genre">
                            <option value="Biography"></option>
                            <option value="History"></option>
                            <option value="Science"></option>
                            <option value="Poetry"></option>
                            <option value="Self-help"></option>
                            <option value="Research"></option>
                        </datalist>
                    </div>
                    {/* Finishing date */}
                    <div className="flex flex-col">
                        <label htmlFor="genreInput">Finish in . . .</label>
                        <input type="text" id="genreInput" list="finish" placeholder="Days to finish this book"
                            className="border border-gray-400 px-2 py-2 rounded" />
                        <datalist id="finish">
                            <option value="5 days"></option>
                            <option value="10 days"></option>
                            <option value="15 days"></option>
                            <option value="20 days"></option>
                            <option value="25 days"></option>
                            <option value="1 month"></option>
                            <option value="1/2 month"></option>
                            <option value="2 months"></option>
                            <option value="Not sure"></option>
                        </datalist>
                    </div>
                    {/* Button */}
                    <button className="py-2 mt-8 border-4 border-[#023766] text-gray-800 text-xl font-medium
                    hover:bg-[#023766] hover:text-gray-300 transition-all duration-300">
                        Add
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddBook;