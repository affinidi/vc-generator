export const NatIDNumCredentialPersonV1 = {
    type: 'NatIDNumCredentialPersonV1',
      data: {
        '@type': ['Person', 'PersonE', 'NatIDNumPerson'],
        nationality: {
          '@type': ['Role', 'NationalityRole'],
          identifier: {
            '@type': ['PropertyValue', 'NatPropertyValue'],
            propertyID: 'SSN',
            value: '123-12-1234',
          },
          nationality: {
            '@type': 'Country',
            name: 'United States Of America',
          },
        },
      },
}