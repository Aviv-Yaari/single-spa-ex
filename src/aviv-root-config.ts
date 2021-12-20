import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@aviv/policies",
  app: () => System.import("@aviv/policies"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
