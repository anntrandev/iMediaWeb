import { Container, SimpleGrid, Title, Text } from '@mantine/core';
import { useEffect, useMemo, useState } from 'react';
import classes from './Release.module.css';
import { IReleaseData, ReleaseCard } from '../ReleaseCard/ReleaseCard';
import resource from '@/iMedia/resources/data.json';

export function ReleaseList() {
  const [data, setData] = useState<IReleaseData[]>([]);

  const releaseList = useMemo(() => data.map((v) => <ReleaseCard data={v} />), [data]);

  useEffect(() => {
    const mappedData: IReleaseData[] = resource.releaseVersion.map((v) => ({
      title: v.title,
      descriptionGG: v.descriptionGG,
      descriptionAPK: v.descriptionAPK,
      linkGG: v.linkGG,
      linkAPK: v.linkAPK,
      version: v.version,
    }));
    setData(mappedData);
  }, []);

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
