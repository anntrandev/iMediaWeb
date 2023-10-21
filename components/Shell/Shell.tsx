import Link from 'next/link';
import { AppShell, Container, RemoveScroll, Group } from '@mantine/core';
import {
  ColorSchemeControl,
  HeaderControls,
  MantineLogo,
  meta,
  SearchMobileControl,
} from '@mantine/ds';
import { searchHandlers } from '../Search';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
  header: React.ReactNode;
  logo: React.ReactNode;
}

const DefaultMatineHeaderContent = () => <>
  <HeaderControls
    visibleFrom="sm"
    onSearch={searchHandlers.open}
    githubLink={meta.gitHubLinks.mantineUi}
    withDirectionToggle={false}
  />

  <Group hiddenFrom="sm">
    <SearchMobileControl onSearch={searchHandlers.open} />
    <ColorSchemeControl />
  </Group>
</>

const DefaultMantineLogo = () => <MantineLogo variant="ui.mantine.dev" size={30} />

export function Shell({
   children, 
  header = <div></div>, 
  logo = <div></div>
  }: ShellProps) {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="xl" px="md" className={classes.inner}>
          <Link href="/" className={`mantine-focus-auto ${classes.link}`}>
            {logo}
          </Link>
          {header}
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <div className={classes.main}>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}

export { DefaultMatineHeaderContent, DefaultMantineLogo }