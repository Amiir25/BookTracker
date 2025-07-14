import React from "react";
import BookCard from "../components/BookCard";

const Home = () => {



    return (
        <>
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-2xl md:text-4xl font-bold">Book Tracker</h1>
                <p className="md:text-xl font-serif">Track what you read, finish what you start</p>

                {/* Book Card */}
                <BookCard />
            </div>
        </>
    )
}

export default Home;