export const mediaType = ['all', 'movie', 'podcast', 'music', 'musicVideo', 'audiobook', 'shortFilm', 'tvShow', 'software', 'ebook'] as const;
export type Media = typeof mediaType[number];

export type MediaResponse = {
    resultCount: number;
    results: MediaResult[];
}

export type MediaResult = {
    wrapperType: string;
    kind: string;
    collectionId: number;
    trackId: number;
    collectionName: string;
    collectionViewUrl: string;
    artworkUrl100: string;
    collectionPrice: number;
}
