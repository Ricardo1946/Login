import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.uniminuto.loggin',
  appName: 'LogginUniminuto',
  webDir: 'dist/loggin-uniminuto',
  server: {
    androidScheme: 'https'
  }
};

export default config;
