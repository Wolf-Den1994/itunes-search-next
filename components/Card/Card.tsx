import Image from 'next/image'
import { MediaResult } from "@/types";

type Props = Omit<MediaResult, 'collectionId' | 'trackId'>

export const Card = ({wrapperType, kind, collectionName, collectionViewUrl, collectionPrice, artworkUrl100}: Props) => {
    return (
        <div
            className="w-60 h-96 bg-gray-200 rounded-lg shadow">
            <div className="w-full h-60">
                <Image className="w-full h-full rounded-tl-lg rounded-tr-lg" src={artworkUrl100}
                       alt={`${collectionName} - ${collectionPrice}`}
                       width={100}
                       height={100}
                       placeholder="blur"
                       quality={80}
                       blurDataURL={artworkUrl100}
                />
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate">{collectionName || 'NOT HAVE NAME'}</h5>
                <p className="mb-3 font-normal text-gray-700">{wrapperType} - {kind}</p>
                <a href={collectionViewUrl}
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    {collectionPrice}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

    )
}
