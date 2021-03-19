export const EmploymentCredentialOrganizationV1 = {
    type: 'EmploymentCredentialOrganizationV1',
      data: {
        '@type': ['Organization', 'OrganizationE', 'EmploymentOrganization'],
        member: {
          '@type': ['EmployeeRole', 'OrganizationEmployeeRole'],
          member: {
            '@type': ['Person', 'PersonE'],
            name: 'Bob Belcher',
          },
        },
        name: "Bob's Burgers",
      },
}