import Head from 'next/head';
import { ReleaseList } from '@/iMedia/components/ReleaseList/ReleaseList';
import { Shell } from '../Shell/Shell';

export function ReleasePage() {
  return (
    <Shell headerHeight={80}>
      <Head>
        <title>iMedia</title>
      </Head>
      <div id="main">
        <ReleaseList />
      </div>
    </Shell>
  );
}
