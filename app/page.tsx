'use client';

import { Search } from "@/components/Search";
import { useState } from "react";
import { MediaResult } from "@/types";
import { List } from "@/components/List";

export default function Home() {
    const [media, setMedia] = useState<MediaResult[]>([])

    return (
        <main className="flex min-h-[calc(100vh-56px)] flex-col items-center justify-between gap-12 p-24">
            <Search onSearch={setMedia}/>
            <List media={media}/>
        </main>
    );
}
