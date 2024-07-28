'use client'

import {useState, useEffect, type ChangeEvent} from "react";
import {getMediaBySearch} from "@/services/getMedia";
import {MediaResult} from "@/types/media";

type Props = {
    onSearch: (value: MediaResult[]) => void;
}

export const Search = ({ onSearch }: Props) => {
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const fetchMediaBySearch = async () => {
            onSearch([])
            const media = await getMediaBySearch(searchValue)
            onSearch(media.results)
        }

        fetchMediaBySearch().catch(console.error)
    }, [searchValue, onSearch]);

    return (
        <>
            <input type="search" placeholder="Search..." value={searchValue}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                   className="bg-gray-500 border border-gray-400 text-gray-200 text-sm rounded-lg focus:ring-white-600 focus:border-white-600 block w-1/2 p-2"/>
        </>
    )
}
