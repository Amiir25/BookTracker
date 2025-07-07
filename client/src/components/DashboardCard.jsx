import React from "react";
import { dashboardData } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardCard = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                {
                    dashboardData.map((dashData, i) => (
                        <div key={i} className="md:w-1/3 flex items-start mx-2 px-2 py-4 border border-gray-300 rounded shadow-lg">

                            {/* Left */}
                            <div className="flex-1">
                                <h1 className="text-[#023766] text font-bold">{dashData.title}</h1>
                                <div className="flex items-baseline gap-2 my-4">
                                    <p className="text-3xl md:text-4xl font-medium">{dashData.number}</p>
                                    <span className={`${dashData.progress === '+' ? 'text-green-500' : 'text-red-500'} font-medium`}>
                                        ( {dashData.progress}{dashData.progressAmount}% )
                                    </span>
                                </div>
                                <p>{dashData.description}</p>
                            </div>

                            {/* Right */}
                            <div className={`text-${dashData.iconColor}-600 bg-${dashData.iconColor}-200 py-1 px-2 rounded`}>
                                <FontAwesomeIcon icon={dashData.icon} />
                            </div>

                        </div>

                    ))
                }
            </div>
        </>
    )
}

export default DashboardCard;