'use client';

import { useEffect, useMemo, useCallback, type ChangeEvent } from 'react';
import { Loader } from '@/components/Loader';
import { useDebounce } from '@/hooks';
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
          className='p-2/2 h-41 block w-full rounded-lg border border-white bg-gray-400 p-2 text-sm text-white placeholder-white focus:border-white focus:ring-white sm:w-1/2'
        />
      )}
      {error && <p>Oops, error: ${error}</p>}
    </>
  );
};
