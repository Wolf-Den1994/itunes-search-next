'use client';

import { useMedia } from '@/store';
import { type Media, mediaType } from '@/types/media';

export const Filter = () => {
  const [mediaTypeSearch, changeMediaTypeSearch, isShowFilter, isLoading] =
    useMedia((state) => [
      state.mediaTypeSearch,
      state.changeMediaTypeSearch,
      state.isShowFilter,
      state.isLoading,
    ]);

  return (
    <>
      {isShowFilter && !isLoading && (
        <select
          value={mediaTypeSearch}
          onChange={(e) => changeMediaTypeSearch(e.target.value)}
          className='block w-full rounded-lg border border-gray-300 bg-gray-500 p-2.5 text-sm text-gray-100 focus:border-blue-500 focus:ring-blue-500 sm:w-1/2'
        >
          {mediaType.map((media: Media) => (
            <option key={media} value={media}>
              {media}
            </option>
          ))}
        </select>
      )}
    </>
  );
};
