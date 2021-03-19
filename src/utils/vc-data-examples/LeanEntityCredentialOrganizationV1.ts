export const LeanEntityCredentialOrganizationV1 = {
    type: 'LeanEntityCredentialOrganizationV1',
      data: {
        '@type': ['Organization', 'OrganizationE', 'LeanEntityOrganization'],
        name: "Bob's Burgers",
        hasCredential: [
          {
            '@type': ['EducationalOccupationalCredential', 'Credential'],
            dateRevoked: 'date',
            recognizedBy: {
              '@type': 'State',
              name: 'Washington',
            },
          },
          {
            '@type': ['EducationalOccupationalCredential', 'Credential', 'OrganizationalCredential'],
            credentialCategory: 'incorporation',
            active: true,
            recognizedBy: {
              '@type': 'State',
              name: 'Washington',
            },
          },
        ],
      },
}