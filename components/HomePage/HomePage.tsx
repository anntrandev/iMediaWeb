import Head from 'next/head';
import { CATEGORIES } from '../../data';
import { Shell } from '../Shell';
import { Banner } from './Banner/Banner';
import { CategoriesList } from './CategoriesList/CategoriesList';
import { DefaultMantineLogo, DefaultMatineHeaderContent } from '../Shell/Shell';

interface HomePageProps {
  componentsCountByCategory: Record<string, number>;
}

export function HomePage({ componentsCountByCategory }: HomePageProps) {
  const allComponentsCount = Object.keys(componentsCountByCategory).reduce(
    (acc, category) => acc + componentsCountByCategory[category],
    0
  );

  return (
    <Shell logo={<DefaultMantineLogo/>} header={<DefaultMatineHeaderContent/>}>
      <Head>
        <title>Mantine UI</title>
      </Head>
      <Banner componentsCount={allComponentsCount} />
      <div id="main">
        <CategoriesList groups={CATEGORIES} componentsCountByCategory={componentsCountByCategory} />
      </div>
    </Shell>
  );
}
