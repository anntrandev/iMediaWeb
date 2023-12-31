import Head from 'next/head';
import { Shell } from '../Shell/Shell';

import { IPTVList } from '../IPTVList/IPTVList';

export function IPTVPages() {
  return (
    <Shell headerHeight={80}>
      <Head>
        <title>iMedia</title>
      </Head>
      <div id="main">
        <IPTVList />
      </div>
    </Shell>
  );
}
