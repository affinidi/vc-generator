export const NatIDNumCredentialOrganizationV1 = {
    type: 'NatIDNumCredentialOrganizationV1',
      data: {
        '@type': ['Organization', 'OrganizationE', 'NatIDNumOrganization'],
        nationality: {
          '@type': ['Role', 'NationalityRole'],
          identifier: {
            '@type': ['PropertyValue', 'NatPropertyValue'],
            propertyID: 'Business ID',
            value: '123-123-123',
          },
          nationality: {
            '@type': 'Country',
            name: 'United States Of America',
          },
        },
      },
}