import { ConfigData } from "@/iMedia/models"
import { useCallback, useEffect, useState } from "react"
import { remoteConfig } from '@/iMedia/utils/initFirebase';
import { getString, fetchAndActivate } from 'firebase/remote-config';

const useLoadConfig = () => {
    const [configData, setConfigData] = useState<ConfigData>()

    const parseConfig = useCallback(() => {
        if (remoteConfig) {
            const value = getString(remoteConfig, 'web_config');
            const parsedObj: ConfigData = JSON.parse(value);
            setConfigData(parsedObj)
         }
    }, [])
    useEffect(() => {
        if (remoteConfig) {
            fetchAndActivate(remoteConfig)
            .then(_ => {
                parseConfig()
            })
            .catch(_ => { })
        }
    }, [])

    return  {configData}
}

export default useLoadConfig;