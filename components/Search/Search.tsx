'use client'

import { useState, useEffect, useMemo, useCallback, type ChangeEvent } from "react";
import { getMediaBySearch } from "@/services/getMedia";
import { MediaResult } from "@/types/media";
import { useDebounce } from "@/hooks";
import { Loader } from "@/components/Loader";

type Props = {
    onSearch: (value: MediaResult[]) => void;
}

export const Search = ({ onSearch }: Props) => {
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const debouncedSearch = useDebounce(searchValue, 600)

    const fetchMediaBySearch = useMemo(() => async () => {
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
    }, [searchValue, onSearch])

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value), [])

    useEffect(() => {
        if (debouncedSearch) {
            fetchMediaBySearch().catch(console.error);
        }
    }, [debouncedSearch]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <input type="search" placeholder="Search..." value={searchValue}
                       onChange={handleChange}
                       className="bg-gray-500 border border-gray-400 text-gray-200 text-sm rounded-lg focus:ring-white-600 focus:border-white-600 block w-1/2 p-2"/>
            )}
            {error && <p>Oops, error: ${error}</p>}
        </>
    )
}
