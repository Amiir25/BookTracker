import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import Delete from "../components/Delete";

const Home = () => {

    // Delete Popup and id
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [bookToDelete, setBookToDelete] = useState(null);

    // Avoid background scrolling.
    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (showDeletePopup) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [showDeletePopup]);

    return (
        <>
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-2xl md:text-4xl font-bold">Book Tracker</h1>
                <p className="md:text-xl font-serif">Track what you read, finish what you start</p>

                {/* Book Card */}
                <BookCard 
                onDelete={(id) => {
                    setBookToDelete(id);
                    setShowDeletePopup(true);
                }} />

                {/* Delete Card */}
                {showDeletePopup &&
                    <Delete
                    bookId={bookToDelete}
                    onClose={() => setShowDeletePopup(false)} />
                }
            </div>
        </>
    )
}

export default Home;