addSubDomain({
  description: 'Unblocker',
  domain: 'is-an.app',
  subdomain: 'tm-incog',
  owner: {
    repo: 'https://github.com/MicroChipKali/tm-incognito',
    email: 'microkalied@gmail.com',
  },
  record: {
    CNAME: 'https://timed-out-incognito.hop.sh/',
  },
  proxy: true,
})
