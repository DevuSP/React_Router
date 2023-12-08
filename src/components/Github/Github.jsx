import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
    const data = useLoaderData()
    return (
        <div className="h-80 w-full flex ">
            <div className="flex flex-row w-full justify-center items-center">
                <div>
                    <img src={data.avatar_url} alt="" style={{ width: "150px", marginRight: "10px"}} />
                </div>
                <div>
                    <div className="px-2 py-3 bg-neutral-300 rounded-lg text-center mb-2 w-full">
                        <h1 className="text-2xl text-gray-700">
                            Github Name: {data.name}
                        </h1>

                    </div>
                    <div className="px-2 py-3 bg-neutral-300 rounded-lg text-center mb-2 w-full">
                        <p>
                            Location: {data.location}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const githubInfoData = async () => {
    const response = await fetch("https://api.github.com/users/DevuSP")
    return response.json();
}

export { GitHub, githubInfoData };