import { MediaResponse } from "@/types";

export const getMediaBySearch = async (search: string, media: string): Promise<MediaResponse> => {
    const response = await fetch(`https://itunes.apple.com/search?term=${search}&media=${media}`, {
        next: {
            revalidate: 60,
        }
    });

    if (!response.ok) {
        throw new Error('Unable to fetch!')
    }

    return response.json();
}
