'use client'

import { useState, useEffect, useMemo, useCallback, type ChangeEvent } from "react";
import { getMediaBySearch } from "@/services/getMedia";
import { MediaResult } from "@/types/media";
import { useDebounce } from "@/hooks";

type Props = {
    onSearch: (value: MediaResult[]) => void;
}

export const Search = ({ onSearch }: Props) => {
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const debouncedSearch = useDebounce(searchValue, 600)

    useEffect(() => {
        const fetchMediaBySearch = async () => {
            setIsLoading(true);
            setError('')

            try {
                onSearch([])
                const media = await getMediaBySearch(searchValue)
                onSearch(media.results)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message)
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchMediaBySearch().catch(console.error)
    }, [debouncedSearch, onSearch]);

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <input type="search" placeholder="Search..." value={searchValue}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                       className="bg-gray-500 border border-gray-400 text-gray-200 text-sm rounded-lg focus:ring-white-600 focus:border-white-600 block w-1/2 p-2"/>
            )}
            {error && <p>Oops, error: ${error}</p>}
        </>
    )
}
