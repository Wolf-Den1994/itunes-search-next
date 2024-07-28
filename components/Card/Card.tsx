import Image from 'next/image';
import { format } from 'date-fns';
import { PropsWithChildren } from 'react';
import { MediaResult } from '@/types';
import { FavoriteIcon } from '@/components/Icons';

type Props = Omit<
  MediaResult,
  'collectionId' | 'collectionViewUrl' | 'trackId'
> & {
  mainClass: string;
};

export const Card = ({
  wrapperType,
  kind,
  collectionName,
  collectionPrice,
  currency,
  releaseDate,
  artworkUrl100,
  children,
  mainClass,
}: PropsWithChildren<Props>) => {
  return (
    <div className={mainClass}>
      <div className='h-60 w-full'>
        <Image
          className='h-full w-full rounded-tl-lg rounded-tr-lg'
          src={artworkUrl100}
          alt={`${collectionName} - ${collectionPrice} ${currency}`}
          width={100}
          height={100}
          placeholder='blur'
          quality={80}
          blurDataURL={artworkUrl100}
        />
      </div>
      <div className='p-5'>
        <h5 className='mb-2 truncate text-2xl font-bold tracking-tight text-gray-900'>
          {collectionName || 'NOT HAVE NAME'}
        </h5>
        <p className='mb-3 font-normal text-gray-700'>
          {wrapperType} - {kind}
        </p>
        <p className='absolute right-3 top-3 rounded-lg bg-gray-200 px-3 py-2 text-right font-normal text-gray-700'>
          {format(releaseDate, 'yyyy.MM.dd')}
        </p>
        <div className='flex items-center justify-between'>
          {children}
          <div className='cursor-pointer text-white duration-300 hover:text-red-300'>
            <FavoriteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
