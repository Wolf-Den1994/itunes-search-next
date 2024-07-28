import { createWithEqualityFn } from 'zustand/traditional'
import { MediaResult } from "@/types/media";
import { getMediaBySearch } from "@/services/getMedia";

type UseMedia = {
    data: MediaResult[],
    isLoading: boolean,
    getMediaBySearch: (search: string) => Promise<void>,
    error: string,
}

export const useMedia = createWithEqualityFn<UseMedia>((set) => ({
    data: [],
    isLoading: false,
    error: '',
    getMediaBySearch: async (search: string) => {
        try {
            set({isLoading: true, error: ''})
            const data = await getMediaBySearch(search);
            set({isLoading: false, data: data.results})
        } catch (error: unknown) {
            if (error instanceof Error) {
                set({isLoading: false, error: error.message})
            }
        }
    }
}))
