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
          className='h-41 block w-full rounded-lg border border-white bg-gray-400 p-2.5 text-sm text-white focus:border-blue-500 focus:ring-blue-500 sm:w-1/2'
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
