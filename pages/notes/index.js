import React from 'react';
import Link from 'next/Link';

const Page = () => {
  const arr = [1, 2, 3];
  return (
    <div>
      <h1>Notes Page</h1>
      {arr.map(e =>
        <div key={e}>
          <Link href="/notes/[id]" as={`/notes/${e}`}>
            <a>Go to Note {e}</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Page;
