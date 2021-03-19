export const EmploymentOfferCredentialPersonV1 = {
    type: 'EmploymentOfferCredentialPersonV1',
      data: {
        '@type': ['Person', 'PersonE', 'EmploymentOfferPerson'],
        worksFor: {
          '@type': ['EmployeeRole', 'PersonEmployeeCandidateRoleE'],
          expectedStartDate: '2022-04-21T20:00',
          interview: {
            '@type': 'EmploymentInterview',
            interviewer: {
              '@type': 'ContactPoint',
              name: 'Tina Belcher',
              email: 'tinabelcher@gmail.com',
            },
            date: '2022-01-21T20:00',
            location: {
              '@type': 'PostalAddress',
              addressLocality: 'Denver',
              addressRegion: 'CO',
              postalCode: '80209',
              streetAddress: '7 S. Broadway',
            },
          },
          reference: {
            '@type': 'ContactPoint',
            name: 'Linda Belcher',
            email: 'lindabelcher@gmail.com',
          },
          skills: ['burger', 'fries'],
          worksFor: {
            '@type': ['Organization', 'OrganizationE'],
            name: "Bob's Burgers",
          },
        },
        name: 'Bob Belcher',
      },
}