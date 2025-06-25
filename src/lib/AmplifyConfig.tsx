'use client'

import { Amplify } from 'aws-amplify'
import config from '@/amplifyconfiguration.json'
import 'aws-amplify/auth/enable-oauth-listener'

export default function AmplifyConfig() {
    Amplify.configure(config, { ssr: true })
    return null
}