// import { withModuleFederation } from '@nx/angular/module-federation';
//
// /**
//  * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
//  * The DTS Plugin can be enabled by setting dts: true
//  * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
//  */
// export default withModuleFederation(config, {
//   dts: false,
//   getPublicPath: 'da',
// });

export default async function (wco) {
  // console.log('doc-reader-app: ', config);
  // throw "Error: Module Federation is not yet supported in Nx Workspaces";
  // const wmf = await withModuleFederation(config, {});
  console.log('doc-reader-app: ', wco);
  return wco || {};
}

// to remove all tmp/nx-* files
// rm -rf tmp/nx-*
