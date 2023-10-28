import { Paper, Text, ThemeIcon, rem } from '@mantine/core';
import classes from './CardGradient.module.css';

export function CardGradient() {
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <Text size="xl" fw={500} mt="md">
        Theming documentation
      </Text>
      <Text size="sm" mt="sm" c="dimmed">
        Extend default theme with any amount of additional colors, replace shadows, radius, spacing,
        fonts and many other properties to match your design requirements. Mantine theme is just an
        object, you can subscribe to it in any part of application via context and use it to build
        your own components.
      </Text>
    </Paper>
  );
}
