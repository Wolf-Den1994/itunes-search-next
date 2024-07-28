'use client'

import { type Media, mediaType } from "@/types/media";
import { useMedia } from "@/store";

export const Filter = () => {
    const [mediaTypeSearch, changeMediaTypeSearch, isShowFilter, isLoading] = useMedia((state) => [
        state.mediaTypeSearch, state.changeMediaTypeSearch, state.isShowFilter, state.isLoading
    ])

    return (
        <>
            {
                isShowFilter && !isLoading && (
                    <select
                        value={mediaTypeSearch}
                        onChange={(e) => changeMediaTypeSearch(e.target.value)}
                        className="bg-gray-500 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-1/2 w-full p-2.5"
                    >
                        {mediaType.map((media: Media) => (
                            <option key={media} value={media}>{media}</option>
                        ))}
                    </select>
                )
            }
        </>
    )
}
