import { createWithEqualityFn } from 'zustand/traditional'
import { MediaResult } from "@/types/media";
import { getMediaBySearch } from "@/services/getMedia";

type UseMedia = {
    data: MediaResult[],
    isLoading: boolean,
    getMediaBySearch: (search: string) => Promise<void>,
}

export const useMedia = createWithEqualityFn<UseMedia>((set) => ({
    data: [],
    isLoading: false,
    getMediaBySearch: async (search: string) => {
        set({isLoading: true})
        const data = await getMediaBySearch(search);
        set({isLoading: false, data: data.results})
    }
}))
