import { createWithEqualityFn } from 'zustand/traditional'
import { MediaResult } from "@/types/media";
import { getMediaBySearch } from "@/services/getMedia";

type UseMedia = {
    data: MediaResult[],
    searchValue: string,
    isLoading: boolean,
    error: string,
    mediaTypeSearch: string;
    isShowFilter: boolean;
    getMediaBySearch: (search: string, type?: string) => Promise<void>,
    changeSearchValue: (search: string) => void,
    changeMediaTypeSearch: (newType: string) => Promise<void>,
}

export const useMedia = createWithEqualityFn<UseMedia>((set) => ({
    data: [],
    searchValue: '',
    isLoading: false,
    error: '',
    mediaTypeSearch: 'all',
    isShowFilter: false,
    getMediaBySearch: async (search: string) => {
        try {
            set({isLoading: true, error: ''})
            const data = await getMediaBySearch(search, useMedia.getState().mediaTypeSearch);
            set({isLoading: false, data: data.results, isShowFilter: true})
        } catch (error: unknown) {
            if (error instanceof Error) {
                set({isLoading: false, error: error.message, isShowFilter: false})
            }
        }
    },
    changeSearchValue: (searchValue: string) => {
        set({searchValue})
    },
    changeMediaTypeSearch: async (newType: string) => {
        const { searchValue, getMediaBySearch } = useMedia.getState();
        set({mediaTypeSearch: newType})
        await getMediaBySearch(searchValue, newType)
    }
}))
