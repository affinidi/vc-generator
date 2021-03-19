export const AMLCredentialPersonV1 = {
    type: 'AMLCredentialPersonV1',
    data: {
      '@type': ['Person', 'PersonE', 'AMLPerson'],
      hasAMLSeach: {
        '@type': 'AMLSearch',
        hitLocation: 'location',
        hitNumber: 1,
        lists: [
          {
            '@type': 'AMLList',
            name: 'My AML List',
            url: 'https://amllist.com',
          },
        ],
        recordId: '1234',
        identifier: '1234',
        score: '0',
        hits: [
          {
            '@type': 'AMLHit',
            identifier: '1234',
            name: 'AML Hit 1',
          },
        ],
        flagType: 'type',
        comment: 'some comment',
      },
      name: 'Bob Belcher',
    },
  }