import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cs-user-pass',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    hostname: 'ionic-user-pass3.netlify.app'
  }
};

export default config;
