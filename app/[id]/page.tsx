import { Metadata } from 'next';
import React from 'react';
import { BackButton } from '@/components/BackButton';
import { Card } from '@/components/Card';
import { ArrowIcon } from '@/components/Icons';
import { getDataById } from '@/services';
import { MediaResponse } from '@/types';

type Props = {
  params: {
    id: number;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: `iTunes id: ${id}`,
  };
}

async function fetchingData(id: number): Promise<MediaResponse | null> {
  try {
    return getDataById(id);
  } catch (error) {
    return null;
  }
}

export default async function Details({ params: { id } }: Props) {
  const details = await fetchingData(id);

  return (
    <>
      {details ? (
        details.results?.map((media) => (
          <Card
            key={`${media.collectionId}-${media.trackId}`}
            wrapperType={media.wrapperType}
            kind={media.kind}
            collectionName={media.collectionName}
            collectionPrice={media.collectionPrice}
            currency={media.currency}
            releaseDate={media.releaseDate}
            artworkUrl100={media.artworkUrl100}
            mainClass='relative h-500px w-1/2 rounded-lg bg-gray-200 shadow'
          >
            <a
              href={media.collectionViewUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white duration-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'
            >
              {media.collectionPrice} ${media.currency}
              <ArrowIcon />
            </a>
          </Card>
        ))
      ) : (
        <p>Oops, something wrong :(</p>
      )}
      <BackButton>Go back</BackButton>
    </>
  );
}
