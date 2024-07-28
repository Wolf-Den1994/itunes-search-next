import { Metadata } from 'next';
import { MediaResponse } from '@/types/media';
import { Card } from '@/components/Card';
import React from 'react';
import { ArrowIcon } from '@/components/Icons';
import { BackButton } from '@/components/BackButton';

type Props = {
  params: {
    id: number;
  };
};

async function getDataById(id: number): Promise<MediaResponse> {
  const response = await fetch(`https://itunes.apple.com/lookup?id=${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: `iTunes id: ${id}`,
  };
}

export default async function Details({ params: { id } }: Props) {
  const details = await getDataById(id);

  return (
    <>
      {details.results.map((media) => (
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
      ))}
      <BackButton>Go back</BackButton>
    </>
  );
}
