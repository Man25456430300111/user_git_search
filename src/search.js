import React, { useState } from 'react';
import axios from 'axios'; 
import photogithub from './photo/photogithub.png';

function App() {
  const [username, setUsername] = useState(''); 
  const [repos, setRepos] = useState([]); 
  const [error, setError] = useState(null); 

  const searchUser = async (e) => {
    e.preventDefault();
    setError(null);
    setRepos([]);
    
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      const reposResponse = await axios.get(userResponse.data.repos_url);
      setRepos(reposResponse.data);
    } catch (error) {
      setError("User not found or other error occurred");
    }
  };

  return (
    <div className="flex flex-col w-full h-screen">
      
      <div className="flex flex-col xl:flex-row items-center justify-between w-full h-2/6 bg-gray-500 p-4">
        <div className="flex items-center">
          <img src={photogithub} className='w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] xl:w-[250px] xl:h-[250px] m-5' alt="GitHub Logo" />
          <h1 className='font-bold text-4xl sm:text-6xl xl:text-8xl'>GITHUB</h1>
        </div>
        <div className="mt-4 xl:mt-0 w-full xl:w-auto">
          <form className="flex max-w-md mx-auto" onSubmit={searchUser}>
            <input
              type="search"
              id="default-search"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users..."
              required
            />
            <button
              type="submit"
              className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      
      <div className=' h-4/6 p-4 overflow-auto'>
        {error && <p className="text-red-500">{error}</p>}
        {repos.length > 0 && (
          <div>
            <h2 className="font-bold text-2xl mb-4">Repositories for {username}:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {repos.map((repo) => (
                <div key={repo.id} className="p-4 border rounded-lg shadow-md bg-white">
                  <h3 className="font-bold text-lg mb-2">{repo.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">Stars: {repo.stargazers_count}</p>
                  <p className="text-sm text-gray-600 mb-2">Views: {repo.watchers_count}</p>
                  <a
                    href={repo.html_url}
                    className="block w-full bg-green-500 text-white text-center py-2 rounded-lg mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repository
                  </a>
                  <a
                    href={repo.html_url + "/archive/refs/heads/master.zip"}
                    className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
