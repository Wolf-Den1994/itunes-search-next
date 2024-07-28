export type Media = 'movie' | 'podcast' | 'music' | 'musicVideo' | 'audiobook' | 'shortFilm' | 'tvShow' | 'software' | 'ebook' | 'all'

export type MediaResponse = {
    resultCount: number;
    results: MediaResult[];
}

export type MediaResult = {
    wrapperType: string;
    collectionId: number;
    trackId: number;
    collectionName: string;
    collectionViewUrl: string;
    artworkUrl100: string;
    collectionPrice: number;
}
