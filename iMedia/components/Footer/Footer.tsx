import { ActionIcon, Container, Group, Stack, rem, Text, Image, Space } from "@mantine/core";
import classes from './Footer.module.css'
import { IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import LogoName from "../LogoName/LogoName";
import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../HomePage/HomePage";
import { remoteConfig } from '@/iMedia/utils/initFirebase';
import zaloIcon from '@/iMedia/resources/imgs/zalo.svg'
import facebookIcon from '@/iMedia/resources/imgs/ic_facebook.svg'
import Link from "next/link";

export function Footer() {
    const { configData } = useContext(AppContext);

    const facebookIconCpn = useMemo(() => configData?.social.facebook && (
        <Link href={configData.social.facebook.link} target="_blank">
            <ActionIcon size="lg" color="gray" variant="subtle" bg={'white'} >
                <Image src={facebookIcon.src} width={18} height={18} />
            </ActionIcon>
        </Link>
    ), [configData])

    const zaloIconCpn = useMemo(() => configData?.social.zalo && (
        <Link href={configData.social.zalo.link} target="_blank">
            <ActionIcon size="lg" color="gray" variant="subtle" bg={'white'} >
                <Image src={zaloIcon.src} width={18} height={18} />
            </ActionIcon>
        </Link>
    ), [configData])

    const emailCpn = useMemo(() => configData?.social.mail && (
        <Link href={`${configData?.social.mail.link}`}>
            <Text>{`Liên hệ hợp tác: ${configData.social.mail.link}`}</Text>
        </Link>
    ), [configData])

    return <div className={classes.footer}>
        <Container className={classes.innerFooter}>
            <LogoName />
            <Stack>
                <Group gap={0} className={classes.linksFooter} justify="flex-end" wrap="nowrap">
                    {facebookIconCpn}
                    <Space w={'md'} />
                    {zaloIconCpn}
                </Group>
                {emailCpn}
            </Stack>

        </Container>
    </div>
}