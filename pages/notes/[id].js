import React from 'react';
import { useRouter } from 'next/router';
import '../../src/style.module.css';

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1 className="white-class">Note {id}</h1>
      <button type="button" onClick={() => router.push('/')}>
        Go Home
      </button>
      <button type="button" onClick={() => router.push('/notes/[...params]', '/notes/a/b/c/d')}>
        Show page with all params
      </button>
    </div>
  );
}

export default Page;
