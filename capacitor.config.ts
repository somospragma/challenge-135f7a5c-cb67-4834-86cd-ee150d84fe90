import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fieldagent.app',
  appName: 'Field Agent App',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    Camera: {
      androidPermissionType: 'CAMERA',
      androidPermissions: ['android.permission.CAMERA', 'android.permission.READ_EXTERNAL_STORAGE'],
      iosPermissionType: 'photoLibraryAddOnly'
    },
    Geolocation: {
      androidPermissions: ['android.permission.ACCESS_COARSE_LOCATION', 'android.permission.ACCESS_FINE_LOCATION'],
      iosLocationUsageDescription: 'La aplicación necesita acceder a tu ubicación para registrar la posición del agente'
    },
    Storage: {
      iosKeychainAccessGroup: 'com.fieldagent.app.storage',
      androidPermissions: ['android.permission.WRITE_EXTERNAL_STORAGE']
    },
    App: {
      androidLifecycle: {
        onStart: 'onAppStart',
        onResume: 'onAppResume'
      }
    }
  },
  server: {
    hostname: 'localhost',
    androidScheme: 'https',
    iosScheme: 'capacitor'
  },
  android: {
    path: 'android',
    flavor: 'dev',
    versionCode: 1,
    versionName: '0.0.1'
  },
  ios: {
    path: 'ios',
    scheme: 'App',
    bundleId: 'com.fieldagent.app',
    targets: {
      App: 'App'
    }
  }
};

export default config;