import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `iTunes search. About`,
  };
}

export default function About() {
  return (
    <p className='mx-auto w-full p-4 text-gray-700 sm:p-24 lg:w-1/2'>
      This web app allows users to search for media content, including music,
      books, and other types of media. We use the iTunes Search API to give you
      access to a vast library of content. Use our search bar to find exactly
      what you need and view the results in a convenient list.
    </p>
  );
}
