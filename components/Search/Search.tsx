'use client'

import { useState, useEffect, useMemo, useCallback, type ChangeEvent } from "react";
import { useDebounce } from "@/hooks";
import { Loader } from "@/components/Loader";
import { useMedia } from "@/store";

export const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const [error, setError] = useState('');
    const debouncedSearch = useDebounce(searchValue, 600)

    const [getMediaBySearch, isLoading] = useMedia((state) => [
        state.getMediaBySearch, state.isLoading
    ])

    const fetchMediaBySearch = useMemo(() => async () => {
        setError('')

        try {
            await getMediaBySearch(searchValue)
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message)
            }
        }
    }, [searchValue])

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
