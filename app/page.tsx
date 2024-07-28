'use client';

import { Filter } from '@/components/Filter';
import { List } from '@/components/List';
import { Search } from '@/components/Search';

export default function Home() {
  return (
    <>
      <Search />
      <Filter />
      <List />
    </>
  );
}
