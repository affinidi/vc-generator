export const IDDocumentCredentialPersonV1 = {
    type: 'IDDocumentCredentialPersonV1',
      data: {
        '@type': ['Person', 'PersonE', 'IDDocumentPerson'],
        hasIDDocument: {
          '@type': ['Role', 'IDDocumentRole'],
          authenticationResult: 'result',
          selfieImage: 'base64:...',
          faceMatch: {
            '@type': 'IDDocumentFaceMatch',
            isMatch: true,
            score: 100,
            identifier: 1234,
          },
          hasIDDocument: {
            '@type': ['CreativeWork', 'IDDocument'],
            issuer: {
              '@type': 'State',
              name: 'Washington',
            },
            documentType: 'type',
            issueDate: 'date',
            issueType: 'type',
            expirationDate: 'date',
            classificationMethod: 'automatic',
            idClass: 'birth_certificate',
            idClassName: 'className',
            countryCode: 'code',
            frontImage: 'base64:...',
            backImage: 'base64:...',
            generic: true,
            keesingCode: 'code',
          },
        },
        name: 'Bob Belcher',
      },
}