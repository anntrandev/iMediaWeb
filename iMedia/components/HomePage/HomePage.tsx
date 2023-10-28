import Head from 'next/head';
import { createContext, useEffect, useState } from 'react';
import bannerImage from './tv.png';
import { Banner } from '../Banner/Banner';
import { ReleaseList } from '../ReleaseList/ReleaseList';
import { Shell } from '../Shell/Shell';
import useLoadConfig from './useLoadConfig';
import { ConfigData } from '@/iMedia/models';

interface IAppContext {
  configData: ConfigData | undefined
}

const AppContext = createContext<IAppContext>({
  configData: undefined,
});

export function HomePage() {
  const { configData } = useLoadConfig();

  return (
    <AppContext.Provider value={{ configData }}>
      <Shell headerHeight={80}>
        <Head>
          <title>iMedia</title>
        </Head>
        <Banner image={`${bannerImage.src}`} />
        <div id="main">
          <ReleaseList />
        </div>
      </Shell>
    </AppContext.Provider>
  );
}

export { AppContext };
