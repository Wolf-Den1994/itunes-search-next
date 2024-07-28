'use client';

import { Search } from "@/components/Search";
import { List } from "@/components/List";

export default function Home() {
    return (
        <main className="flex min-h-[calc(100vh-56px)] flex-col items-center justify-between gap-12 p-24">
            <Search />
            <List />
        </main>
    );
}
