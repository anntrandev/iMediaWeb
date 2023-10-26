import Link from 'next/link';
import {
  AppShell,
  Container,
  Group,
  RemoveScroll,
  Title,
  Image,
  BackgroundImage,
  Space,
  rem,
  ActionIcon,
} from '@mantine/core';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import classes from './Shell.module.css';
import { links } from '@/iMedia/utils/conts';
import bgImage from '@/iMedia/resources/imgs/background.png';

interface ShellProps {
  children: React.ReactNode;
  headerHeight?: number;
}

interface NavItemProps {
  links: { link: string; label: string }[];
}

const NavItem = ({ links }: NavItemProps) => {
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={() => {
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Group gap={5} visibleFrom="xs">
      {items}
    </Group>
  );
};

const LogoName = () => (
  <Group>
    <Image src="./icon.png" alt="logo" width={60} height={60} />
    <Title className={classes.brandName}>iMedia</Title>
  </Group>
);

export function Shell({ children, headerHeight = 60 }: ShellProps) {
  return (
    <AppShell header={{ height: headerHeight }}>
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="xl" px="md" className={classes.inner}>
          <Link href="/" className={`mantine-focus-auto ${classes.link}`}>
            <LogoName />
          </Link>
          <NavItem links={links} />
        </Container>
      </AppShell.Header>
      <BackgroundImage src={bgImage.src}>
        <AppShell.Main>
          <div className={classes.main}>{children}</div>
        </AppShell.Main>
      </BackgroundImage>

      <Container>
        <Space h={rem(200)} />
        <div className={classes.footer}>
          <Container className={classes.innerFooter}>
            <LogoName />
            <Group gap={0} className={classes.linksFooter} justify="flex-end" wrap="nowrap">
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
            </Group>
          </Container>
        </div>
      </Container>
    </AppShell>
  );
}
