import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav
        className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-0 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-black fixed top-3/4 md:top-2/4 -translate-y-2/4 right-0 min-h-[auto] min-w-[30px] flex-col rounded-lg border"
        >
            <NavLink 
                to={'/'}
                className={({ isActive }) =>
                isActive ? 'flex aspect-square min-h-[32px] w-10 flex-col items-center justify-center gap-1 rounded-md p-1.5 dark:bg-cyan-400 dark:text-black' : "flex aspect-square min-h-[32px] w-10 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-800"
                }
            >
                
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                    />
                    </svg>

            </NavLink>

            <NavLink 
                to={'/about'}
                className={({ isActive }) =>
                isActive ? 'flex aspect-square min-h-[32px] w-10 flex-col items-center justify-center gap-1 rounded-md p-1.5 dark:bg-cyan-400 dark:text-black' : "flex aspect-square min-h-[32px] w-10 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-800"
                }
            >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 shrink-0"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                    </svg>
            </NavLink>

            <NavLink 
                to={'/projects'}
                className={({ isActive }) =>
                isActive ? 'flex aspect-square min-h-[32px] w-10 flex-col items-center justify-center gap-1 rounded-md p-1.5 dark:bg-cyan-400 dark:text-black' : "flex aspect-square min-h-[32px] w-10 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-800"
                }
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 shrink-0"
                >
                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg>

            </NavLink>

            <NavLink 
                to={'/resume'}
                className={({ isActive }) =>
                isActive ? 'flex aspect-square min-h-[32px] w-10 flex-col items-center justify-center gap-1 rounded-md p-1.5 dark:bg-cyan-400 dark:text-black' : "flex aspect-square min-h-[32px] w-10 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-800"
                }
            >
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                > 
                <path 
                    d="M7 18H17V16H7V18Z" fill="currentColor" 
                /> 
                <path 
                    d="M17 14H7V12H17V14Z" fill="currentColor" 
                    /> 
                <path 
                    d="M7 10H11V8H7V10Z" fill="currentColor" 
                /> 
                <path 
                    fillRule="evenodd" clipRule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z" fill="currentColor" 
                /> 

                </svg>

            </NavLink>

            <NavLink 
                to={'/contact'}
                className={({ isActive }) =>
                isActive ? 'flex aspect-square min-h-[32px] w-10 flex-col items-center justify-center gap-1 rounded-md p-1.5 dark:bg-cyan-400 dark:text-black' : "flex aspect-square min-h-[32px] w-10 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-800"
                }
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    className="bi bi-chat-dots" 
                    viewBox="0 0 16 16"
                > 
                <path 
                    d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                    /> 
                <path 
                    d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
                    /> 
                </svg>

            </NavLink>
            
        </nav>
    )
}

export default Navbar;