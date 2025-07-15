import axios from 'axios'
import React from 'react'

const Delete = ({ bookId, onClose }) => {

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/books/${bookId}`);
            alert("Book deleted successfully");
            window.location.reload();
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
        <div className='fixed top-0 left-0 z-10 w-screen h-screen bg-gray-800/40
        flex items-center justify-center transition-all duration-200 '>

            <div className='border border-red-600 w-1/4 h-40 md:w-1/3 md:h-64
          bg-gray-800 px-10 pt-10 transition-all duration-200 '>

                <p className='text-gray-300 text-2xl mb-10'>Are you sure you want to delete this book permanently?</p>

                <div className='flex gap-6'>
                    <button 
                    onClick={handleDelete}
                    className='text-lg text-white bg-red-600 px-4 py-1 rounded cursor-pointer
                  hover:bg-red-600/80 '>
                        Yes
                    </button>
                    <button
                        onClick={onClose}
                        className='text-lg text-white bg-blue-600 px-4 py-1 rounded cursor-pointer
                      hover:bg-blue-600/80'>
                        No
                    </button>
                </div>

            </div>

        </div>
        </>
    )
}

export default Delete