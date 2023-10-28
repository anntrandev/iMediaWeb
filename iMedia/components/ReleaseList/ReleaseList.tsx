import { Container, SimpleGrid } from '@mantine/core';
import { useContext, useEffect, useMemo, useState } from 'react';
import classes from './Release.module.css';
import { IReleaseData, ReleaseCard } from '../ReleaseCard/ReleaseCard';
import { AppContext } from '@/iMedia/components/HomePage/HomePage';

interface SocialData {
  link: string;
}
interface ConfigData {
  releaseVersion: {
    title: string;
    version: string;
    descriptionGG: string;
    linkGG: string;
    descriptionAPK: string;
    linkAPK: string;
    type: string;
  }[];
  social: {
    facebook: SocialData;
    zalo: SocialData;
    mail: SocialData;
  };
  iptv: {
    title: string;
    links: string[];
  }[];
}

export function ReleaseList() {
  const { configData } = useContext(AppContext);
  const [data, setData] = useState<IReleaseData[]>([]);

  const releaseList = useMemo(() => data.map((v) => <ReleaseCard data={v} />), [data]);

  useEffect(() => {
    const mappedData: IReleaseData[] = configData?.releaseVersion.map((v) => ({
      title: v.title,
      descriptionGG: v.descriptionGG,
      descriptionAPK: v.descriptionAPK,
      linkGG: v.linkGG,
      linkAPK: v.linkAPK,
      version: v.version,
    })) || []
    setData(mappedData);
  }, [configData]);

  return (
    <Container size="xl" px="md" className={classes.wrapper}>
      <div className={classes.group}>
        <SimpleGrid id="cards-grid" cols={{ base: 1, sm: 2 }}>
          {releaseList}
        </SimpleGrid>
      </div>
    </Container>
  );
}
