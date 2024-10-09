// import React, { useState } from 'react';
// import axios from 'axios'; // นำเข้า Axios สำหรับการเชื่อมต่อ API
// import photogithub from './photo/photogithub.png';

// function App() {
//   const [username, setUsername] = useState(''); // เก็บค่าชื่อผู้ใช้ที่ค้นหา
//   const [repos, setRepos] = useState([]); // เก็บข้อมูล repositories
//   const [error, setError] = useState(null); // เก็บข้อผิดพลาด

//   // ฟังก์ชันเพื่อค้นหาผู้ใช้และดึง repositories
//   const searchUser = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setRepos([]);
    
//     try {
//       const userResponse = await axios.get(`https://api.github.com/users/${username}`);
//       const reposResponse = await axios.get(userResponse.data.repos_url);
//       setRepos(reposResponse.data);
//     } catch (error) {
//       setError("User not found or other error occurred");
//     }
//   };

//   return (
//     <div className="flex flex-col border-red-600 border-4 w-full h-screen">
//       <div className='flex border-blue-600 border-4 bg-gray-500 w-full h-2/6'>
//         <div className='flex flex-row w-3/6 h-full border-yellow-400 border-4'>
//           <div className='flex justify-center items-center w-3/6 h-full border-yellow-400 border-4'>
//             <img src={photogithub} className='w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] xl:w-[250px] xl:h-[250px] m-5' alt="GitHub Logo" />
//           </div>
//           <div className='flex w-3/6 items-center h-full mr-10 border-yellow-400 border-4'>
//             <h className='font-bold text-4xl sm:text-6xl xl:text-8xl'>GITHUB</h>
//           </div>
//         </div>
//         <div className='flex flex-row items-end w-3/6 h-full border-yellow-400 border-4'>
//           <div className='w-full border-x-emerald-500 border-4'>
//             <form className="max-w-md ml-auto" onSubmit={searchUser}>
//               <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                   <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                   </svg>
//                 </div>
//                 <input
//                   type="search"
//                   id="default-search"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Search for users..."
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                   Search
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className='border-green-600 border-4 h-4/6 p-4 overflow-auto'>
//         {error && <p className="text-red-500">{error}</p>}
//         {repos.length > 0 && (
//           <div>
//             <h2 className="font-bold text-2xl mb-4">Repositories for {username}:</h2>
//             <div className="grid grid-cols-4 gap-4">
//               {repos.map((repo) => (
//                 <div key={repo.id} className="p-4 border rounded-lg shadow-md bg-white">
//                   <h3 className="font-bold text-lg mb-2">{repo.name}</h3>
//                   <p className="text-sm text-gray-600 mb-2">Stars: {repo.stargazers_count}</p>
//                   <p className="text-sm text-gray-600 mb-2">Views: {repo.watchers_count}</p>
//                   <a
//                     href={repo.html_url}
//                     className="block w-full bg-green-500 text-white text-center py-2 rounded-lg mb-2"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Repository
//                   </a>
//                   <a
//                     href={repo.html_url + "/archive/refs/heads/master.zip"}
//                     className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Download
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


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
