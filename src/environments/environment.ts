// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiServer: 'http://localhost:3030',
  production: false,
  test: false,
  S3BucketUrlForPackages:
    'https://voyaah-package-images-dev.s3.ap-south-1.amazonaws.com/public/',
  aws_identity_pool_id: 'ap-south-1:1f75e46a-b52f-4f3e-b33d-d5321ab48774',
  bucket: 'voyaah-package-images-dev',
  region: 'ap-south-1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
