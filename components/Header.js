import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MicrophoneIcon, XIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Avatar from './Avatar';
import HeaderOptions from "../components/HeaderOptions"
export default function Header() {
   
    const router = useRouter();

    const searchInputRef = useRef(null);


    const search =(e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center ">
            <Image src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height={40} width={120} className=" cursor-pointer"/>
            
            <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
                <input ref={searchInputRef} type="text" className="flex-grow w-full focus:outline-none" placeholder="Search Google or type a URL"/>
                <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition-none duration-100 transform hover:scale-110" onClick={()=>{searchInputRef.current.value = ""}}/>
                <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-400 border-l-2 pl-4"/>
                <SearchIcon  className="h-6 mr-3 hidden sm:inline-flex text-blue-400 "/>

                <button hidden type="submit" onClick={search}></button>
            </form>
            <Avatar className="ml-auto"  url={"https://hindibate.com/wp/WhatsApp-DP-For-Girls-HD-1686.png"}/>
            </div>

            {/**headeroption */}
            <HeaderOptions/>
        </header>
    )
}
