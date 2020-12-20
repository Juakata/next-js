import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <div>
      <h1>Note with all params</h1>
      {params.map(e => <h3 key={e}>{e}</h3>)}
    </div>
  );
}

export default Page;
