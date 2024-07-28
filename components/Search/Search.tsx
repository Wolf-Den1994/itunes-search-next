'use client';

import { useEffect, useMemo, useCallback, type ChangeEvent } from 'react';
import { useDebounce } from '@/hooks';
import { Loader } from '@/components/Loader';
import { useMedia } from '@/store';

export const Search = () => {
  const [getMediaBySearch, isLoading, error, searchValue, changeSearchValue] =
    useMedia((state) => [
      state.getMediaBySearch,
      state.isLoading,
      state.error,
      state.searchValue,
      state.changeSearchValue,
    ]);

  const debouncedSearch = useDebounce(searchValue, 600);

  const fetchMediaBySearch = useMemo(
    () => async () => {
      await getMediaBySearch(searchValue);
    },
    [searchValue]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => changeSearchValue(e.target.value),
    []
  );

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
        <input
          type='search'
          placeholder='Search...'
          value={searchValue}
          onChange={handleChange}
          className='focus:ring-white-600 focus:border-white-600 p-2/2 block w-full rounded-lg border border-gray-400 bg-gray-500 p-2 text-sm text-gray-200 sm:w-1/2'
        />
      )}
      {error && <p>Oops, error: ${error}</p>}
    </>
  );
};
