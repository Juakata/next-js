import React from 'react';
import Link from 'next/Link';
const Page = () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/notes">
      <a>Go to Notes</a>
    </Link>
  </div>
);

export default Page;
