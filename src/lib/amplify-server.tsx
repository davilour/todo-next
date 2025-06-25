
import { generateServerClientUsingCookies} from "@aws-amplify/adapter-nextjs/api";
import { cookies } from 'next/headers';
import config from '@/amplifyconfiguration.json';

export const amplifyApi = generateServerClientUsingCookies({
  config: config,
  cookies,
  authMode: 'apiKey'
});