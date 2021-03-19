export const CourtRecordSearchCredentialPersonV1 = {
    type: 'CourtRecordSearchCredentialPersonV1',
    data: {
      '@type': ['Person', 'PersonE', 'CourtRecordSearchPerson'],
      hasCourtRecordSearch: {
        '@type': 'CourtRecordSearch',
        result: 'pass',
        query: {
          '@type': 'CourtRecordSearchQuery',
          parent: {
            '@type': 'Person',
            name: 'Bob Belcher',
          },
          spouse: {
            '@type': 'Person',
            name: 'Jimmy Pesto',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Denver',
            addressRegion: 'CO',
            postalCode: '80209',
            streetAddress: '7 S. Broadway',
          },
          addressStatus: 'current',
        },
      },
      name: 'Tine Belcher',
    },
  }