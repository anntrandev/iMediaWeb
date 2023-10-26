import Head from 'next/head';
import { createContext, useEffect, useState } from 'react';
import { fetchAndActivate } from 'firebase/remote-config';
import bannerImage from './tv.png';
import { Banner } from '../Banner/Banner';
import { ReleaseList } from '../ReleaseList/ReleaseList';
import { Shell } from '../Shell/Shell';
import { remoteConfig } from '@/iMedia/utils/initFirebase';

const AppContext = createContext({
  isLoadedConfig: false,
});

export function HomePage() {
  const [isLoadedConfig, setIsLoadedConfig] = useState(false);
  useEffect(() => {
    if (remoteConfig) {
      fetchAndActivate(remoteConfig)
        .then(() => {
          setIsLoadedConfig(true);
        })
        .catch(() => {});
    }
  }, []);
  return (
    <Shell headerHeight={80}>
      <AppContext.Provider value={{ isLoadedConfig }}>
        <Head>
          <title>iMedia</title>
        </Head>
        <Banner image={`${bannerImage.src}`} />
        <div id="main">
          <ReleaseList />
        </div>
      </AppContext.Provider>
    </Shell>
  );
}

export { AppContext };
