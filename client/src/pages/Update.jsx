import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [book, setBook] = useState({
        title: '',
        author: '',
        date: null,
        totalpage: null,
        genre: '',
        status: '',
        currentpage: null,
    })

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/books/${id}`);
                setBook(res.data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchBook();
    }, [id]);

    const handleChange = (e) => {
        setBook((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/books/${id}`, book);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
        <form action="" className="px-6 flex-1 mt-10">
            <h1 className="text-2xl text-[#023766] font-medium mb-6">
                Update Your Book
            </h1>

            <div className="grid grid-cols-2 gap-4">
                {/* Title */}
                <div className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="Add title"
                        className="border border-gray-400 px-2 py-2 rounded"
                        onChange={handleChange} />
                </div>
                {/* Author */}
                <div className="flex flex-col">
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" name="author" placeholder="Add the author"
                        className="border border-gray-400 px-2 py-2 rounded"
                        onChange={handleChange} />
                </div>
                {/* Date */}
                <div className="flex flex-col">
                    <label htmlFor="date">Published Year</label>
                    <input type="number" id="date" name="date" placeholder="Enter published year"
                        className="border border-gray-400 px-2 py-2 rounded"
                        onChange={handleChange} />
                </div>
                {/* Pages */}
                <div className="flex flex-col">
                    <label htmlFor="pages">Number of Pages</label>
                    <input type="number" id="pages" name="totalpage" placeholder="Enter number of pages"
                        className="border border-gray-400 px-2 py-2 rounded"
                        onChange={handleChange} />
                </div>
                {/* Genre */}
                <div className="flex flex-col">
                    <label htmlFor="genreInput">Genre</label>
                    <input type="text" id="genreInput" list="genre" name="genre"
                        placeholder="Enter the genre" className="border border-gray-400 px-2 py-2 rounded"
                        onChange={handleChange} />
                    <datalist id="genre">
                        <option value="Tech"></option>
                        <option value="Biography"></option>
                        <option value="Business"></option>
                        <option value="Self-help"></option>
                    </datalist>
                </div>
                {/* Status */}
                <div className="flex flex-col">
                    <label htmlFor="statusInput">Status</label>
                    <input type="text" id="statusInput" list="status" name="status" placeholder="Status"
                        className="border border-gray-400 px-2 py-2 rounded"
                        onChange={handleChange} />
                    <datalist id="status">
                        <option value="Not Started"></option>
                        <option value="Reading"></option>
                        <option value="Finished"></option>
                    </datalist>
                </div>
                {/* Current Page */}
                <div className="flex flex-col">
                    <label htmlFor="currentPage">Current Page</label>
                    <input type="number" id="currentPage" name="currentpage" placeholder="Enter your current pages"
                        className="border border-gray-400 px-2 py-2 rounded"
                        onChange={handleChange} />
                </div>
            </div>

            {/* Button */}
            <button className="py-2 mt-8 w-1/3 border-4 border-[#023766] text-gray-800 text-xl font-medium
                hover:bg-[#023766] hover:text-gray-300 transition-all duration-300"
                onClick={handleUpdate} >
                Update
            </button>
        </form>
        </>
    )
}

export default Update;