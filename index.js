// mod.cjs
// eslint - disable-next-line no-shadow
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

