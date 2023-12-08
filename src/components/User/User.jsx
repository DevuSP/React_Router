import React from "react"
import { useParams } from "react-router-dom"

export function User() {
    const { userid } = useParams();
    return (
        <div className="h-80 w-screen flex justify-center items-center">
            <div className="px-2 py-1 bg-neutral-300 rounded-lg hover:bg-neutral-200 w-1/3 text-center">
                <h1 className="text-gray-700 text-2xl hover:text-orange-700">User: {userid}</h1>
            </div>
        </div>
    )
}