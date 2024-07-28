'use client';

import { Card } from '@/components/Card';
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
          collectionViewUrl={media.collectionViewUrl}
          collectionPrice={media.collectionPrice}
          currency={media.currency}
          releaseDate={media.releaseDate}
          artworkUrl100={media.artworkUrl100}
        />
      ))}
    </div>
  );
};
