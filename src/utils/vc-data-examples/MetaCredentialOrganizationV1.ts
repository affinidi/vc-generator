export const MetaCredentialOrganizationV1 = {
    type: 'MetaCredentialOrganizationV1',
    data: {
      '@type': ['Organization', 'OrganizationE', 'MetaOrganization'],
      name: 'Bob Belcher',
      receivedCredentials: {
        '@type': ['Role', 'ReceivedCredentialRole'],
        startDate: 'start',
        endDate: 'end',
        aggregatorDID: 'did:elem:...',
        typesSome: ['type 1'],
        typesAll: ['type 2'],
        typesNot: ['type 3'],
        contextsSome: ['context 1'],
        contextsAll: ['context 2'],
        contextsNot: ['context 3'],
        issuerDIDIn: ['did 1'],
        issuerDIDNotIn: ['did 2'],
        receivedCredentials: ['vc 1', 'vc 2'],
      },
    },
}