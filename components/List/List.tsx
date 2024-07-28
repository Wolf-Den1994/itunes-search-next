'use client';

import Link from 'next/link';
import { Card } from '@/components/Card';
import { ArrowIcon } from '@/components/Icons';
import { MediaResult } from '@/types';
import { useMedia } from '@/store';

export const List = () => {
  const mediaData = useMedia((state) => state.data);

  return (
    <div className='flex flex-row flex-wrap items-center justify-evenly gap-4'>
      {mediaData.map((media: MediaResult) => (
        <Card
          key={`${media.collectionId}-${media.trackId}`}
          wrapperType={media.wrapperType}
          kind={media.kind}
          collectionName={media.collectionName}
          collectionPrice={media.collectionPrice}
          currency={media.currency}
          releaseDate={media.releaseDate}
          artworkUrl100={media.artworkUrl100}
          mainClass='relative h-fit w-60 rounded-lg bg-gray-200 shadow'
        >
          <Link
            href={`/${media.collectionId}`}
            className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white duration-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'
          >
            {media.collectionPrice} ${media.currency}
            <ArrowIcon />
          </Link>
        </Card>
      ))}
    </div>
  );
};
