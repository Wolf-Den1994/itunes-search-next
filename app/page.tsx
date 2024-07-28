'use client';

import { Search } from "@/components/Search";
import { List } from "@/components/List";
import { Filter } from "@/components/Filter";

export default function Home() {
    return (
        <main className="flex min-h-[calc(100vh-56px)] flex-col items-center justify-start gap-12 p-24">
            <Search />
            <Filter />
            <List />
        </main>
    );
}
