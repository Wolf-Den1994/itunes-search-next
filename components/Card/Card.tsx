import Image from 'next/image'
import { format } from 'date-fns'
import { MediaResult } from "@/types";
import { ArrowIcon, FavoriteIcon } from "@/components/Icons";

type Props = Omit<MediaResult, 'collectionId' | 'trackId'>

export const Card = ({wrapperType, kind, collectionName, collectionViewUrl, collectionPrice, currency, releaseDate, artworkUrl100}: Props) => {
    return (
        <div
            className="w-60 h-fit bg-gray-200 rounded-lg shadow relative">
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
                <p className="font-normal text-gray-700 text-right bg-gray-200 rounded-lg px-3 py-2 absolute top-3 right-3">{format(releaseDate, 'yyyy.MM.dd')}</p>
                <div className="flex items-center justify-between">
                    <a href={collectionViewUrl}
                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 duration-300"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        {collectionPrice} ${currency}
                        <ArrowIcon/>
                    </a>
                    <div className="text-white cursor-pointer hover:text-red-300 duration-300">
                        <FavoriteIcon/>
                    </div>
                </div>
            </div>
        </div>

    )
}
