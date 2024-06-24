import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const { userData, reposData } = useLoaderData();

    if (!Array.isArray(reposData)) {
        return <div>Error: Unable to fetch repositories.</div>;
    }

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center">
            <div className="flex items-start w-full">
                <img 
                    src={userData.avatar_url} 
                    width={150} 
                    alt={userData.login}  
                    className="mr-4" 
                />
                <div className="text-left">
                    <h2>User: {userData.login}</h2>
                    <h3 className="mt-4">Projects:</h3>
                    <ul>
                        {reposData.map((repo) => (
                            <li key={repo.id}>{repo.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Github;

export const gitinfo = async () => {
    const [res, res2] = await Promise.all([
        fetch('https://api.github.com/users/YashSewarik'),
        fetch('https://api.github.com/users/YashSewarik/repos')
    ]);

    const userData = await res.json();
    const reposData = await res2.json();

    console.log('User Data:', userData);  // Debugging
    console.log('Repos Data:', reposData);  // Debugging

    return { userData, reposData };
};
