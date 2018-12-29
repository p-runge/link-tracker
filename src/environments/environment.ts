// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBrKQZN-mCNUHL2EC139ldnQordEJsPyDw',
    authDomain: 'url-tracker-40c38.firebaseapp.com',
    databaseURL: 'https://url-tracker-40c38.firebaseio.com',
    projectId: 'url-tracker-40c38',
    storageBucket: 'url-tracker-40c38.appspot.com',
    messagingSenderId: '1092023268645',
  },
  linkBase: 'localhost:4200',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
