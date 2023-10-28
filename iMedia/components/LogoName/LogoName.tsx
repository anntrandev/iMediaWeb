import { Group, Title, Image } from '@mantine/core';
import classes from './LogoName.module.css';
import logoIcon from './icon.png';

const LogoName = () => (
  <Group>
    <Image src={logoIcon.src} alt="logo" width={60} height={60} />
    <Title className={classes.brandName}>iMedia</Title>
  </Group>
);

export default LogoName;
