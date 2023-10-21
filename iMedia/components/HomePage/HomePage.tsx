import { Shell } from "@/components/Shell";
import { Group, Title, Image } from "@mantine/core";
import Head from "next/head";
import classes from './HomePage.module.css'
import { links } from "@/iMedia/utils/conts";

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

    return <Group gap={5} visibleFrom="xs">
        {items}
    </Group>
}

const LogoName = () => <Group>
    <Image src="./icon.png" alt="logo" width={60} height={60} />
    <Title className={classes.brandName}>iMedia</Title>
</Group>

export function HomePage() {
    return (
        <Shell logo={<LogoName />} header={<NavItem links={links} />}>
            <Head>
                <title>iMedia</title>
            </Head>
        </Shell>
    )
}