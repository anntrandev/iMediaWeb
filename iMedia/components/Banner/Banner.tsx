import {
  Title,
  Overlay,
  Group,
  Text,
  SimpleGrid,
  Container,
  ThemeIcon,
  rem,
  Image,
} from '@mantine/core';
import { useCallback } from 'react';
import classes from './Banner.module.css';
import data from './data';

interface BannerProps {
  image: string;
}

export function Banner({ image }: BannerProps) {
  const features = useCallback(
    () =>
      data.map((feature) => (
        <div key={feature.title}>
          <ThemeIcon className={classes.featureIcon} size={44} radius="md">
            <Image
              alt={`${feature.icon.src}`}
              style={{ width: 24, height: 24 }}
              src={`${feature.icon.src}`}
            />
          </ThemeIcon>

          <div className={classes.featureBody}>
            <Text className={classes.featureTitle}>{feature.title}</Text>
            <Text className={classes.featureDescription}>{feature.description}</Text>
          </div>
        </div>
      )),
    []
  );
  return (
    <div className={classes.wrapper}>
      <Container size="xl" px="md">
        <div className={classes.bodyWrapper}>
          <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
          <Overlay className={classes.overlay} opacity={1} zIndex={0} />
          <div className={classes.body}>
            <Text className={classes.supTitle}>iMedia</Text>
            <Title className={classes.title}>
              <span className={classes.highlight}>
                Trải nghiệm Tivi, Bóng đá, IPTV miễn phí <br /> Giải trí trong lòng bàn tay!
              </span>
            </Title>

            <Text className={classes.description}>
              Xem gần 200 kênh Truyền hình trong nước và quốc tế
              <br />
              <br />
              Trực tiếp bóng đá Ngoại Hạng Anh, UEFA Champions League, LaLiga, Ligue 1, Bundesliga,
              V League,...
            </Text>

            <Group className={classes.controls}>
              <div />
            </Group>

            <SimpleGrid
              cols={{ base: 1, sm: 4 }}
              spacing={{ base: 'lg', sm: 'xl' }}
              className={classes.features}
              mt={100}
              visibleFrom="lg"
            >
              {features()}
            </SimpleGrid>
          </div>
        </div>
      </Container>
    </div>
  );
}
