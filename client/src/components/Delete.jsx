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

            <div className='border border-red-600 w-1/2 h-40 md:w-1/3 md:h-64
          bg-gray-800 px-4 md:px-10 pt-4 md:pt-10 transition-all duration-200 '>

                <p className='text-gray-300 text-sm md:text-2xl mb-10'>Are you sure you want to delete this book permanently?</p>

                <div className='flex gap-6 text-sm md:text-lg text-white'>
                    <button 
                    onClick={handleDelete}
                    className='bg-red-600 px-4 py-1 rounded cursor-pointer
                  hover:bg-red-600/80 '>
                        Yes
                    </button>
                    <button
                        onClick={onClose}
                        className='bg-blue-600 px-4 py-1 rounded cursor-pointer
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