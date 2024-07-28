'use client';

import { Search } from '@/components/Search';
import { List } from '@/components/List';
import { Filter } from '@/components/Filter';

export default function Home() {
  return (
    <>
      <Search />
      <Filter />
      <List />
    </>
  );
}
