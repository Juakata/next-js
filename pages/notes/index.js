import { jsx } from 'theme-ui'
import Link from 'next/Link';
import '../../src/style.module.css';

const Page = () => {
  const arr = [1, 2, 3];
  return (
    <div sx={{ height: `calc(100vh - 60px)`}}>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
        <h1 sx={{fontSize: 8, my: 0}}>This is a really dope note taking app.</h1>
        {arr.map(e =>
          <div key={e}>
            <Link href="/notes/[id]" as={`/notes/${e}`}>
              <a>Go to Note {e}</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page;
