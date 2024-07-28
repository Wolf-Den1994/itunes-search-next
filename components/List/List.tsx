import { Card } from "@/components/Card";
import { MediaResult } from "@/types";

type Props = {
    media: MediaResult[]
}

export const List = ({ media }: Props) => {
    return (
        <div className="flex flex-row items-center justify-evenly flex-wrap gap-4">
            {media.map((media: MediaResult) => (
                <Card
                    key={`${media.collectionId}-${media.trackId}`}
                    wrapperType={media.wrapperType}
                    collectionName={media.collectionName}
                    collectionViewUrl={media.collectionViewUrl}
                    collectionPrice={media.collectionPrice}
                    artworkUrl100={media.artworkUrl100}
                />
            ))}
        </div>
    )
}
