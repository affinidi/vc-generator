export const HealthPassportBundleCredentialV1 = {
    type: 'HealthPassportBundleCredentialV1',
      data: {
        '@type': 'BundleContainer',
        fhirVersion: '4.0.1',
        fhirBundle: {
          '@type': 'Bundle',
          resourceType: 'Bundle',
          entry: [
            {
              '@type': 'BundleEntry',
              resource: {
                '@type': 'Patient',
                resourceType: 'Patient',
                active: true,
                telecom: [
                  { system: 'phone', value: '+6518003339998' },
                  {
                    system: 'email',
                    value: 'demo+4@affinidi.com',
                  },
                ],
                name: [{ text: 'demo user2' }],
                identifier: [
                  {
                    type: {
                      coding: [
                        {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                          code: 'PPN',
                          display: 'Passport number',
                        },
                      ],
                      text: 'PPN',
                    },
                    value: 'E78311778',
                  },
                  { type: { text: 'NRIC' }, value: 'S9098989C' },
                ],
                gender: 'male',
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/patient-nationality',
                    valueCodeableConcept: { text: 'SGP' },
                  },
                ],
                birthDate: '1984-12-22',
              },
            },
            {
              '@type': 'BundleEntry',
              resource: {
                '@type': 'Specimen',
                resourceType: 'Specimen',
                status: 'available',
                type: {
                  coding: [
                    {
                      system: 'http://snomed.info/sct',
                      code: '258500001',
                      display: 'Nasopharyngeal swab',
                    },
                  ],
                },
                collection: { collectedDateTime: '2020-10-11T06:15:00Z' },
              },
            },
            {
              '@type': 'BundleEntry',
              resource: {
                '@type': 'Observation',
                resourceType: 'Observation',
                effectiveDateTime: '',
                identifier: [
                  {
                    type: {
                      coding: [
                        {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                          code: 'ACSN',
                          display: 'Accession ID',
                        },
                      ],
                      text: 'ACSN',
                    },
                    value: 'observation-identifier',
                  },
                ],
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'http://snomed.info/sct',
                      code: '260385009',
                      display: 'Negative',
                    },
                  ],
                },
                performer: [
                  {
                    resourceType: 'Practitioner',
                    name: [{ text: 'string' }],
                    qualification: [
                      {
                        identifier: [{ value: 'MCR 123214' }],
                        issuer: { identifier: { value: 'MOH' } },
                        code: {},
                      },
                    ],
                  },
                ],
                code: {
                  coding: [
                    {
                      system: 'http://loinc.org',
                      code: '94531-1',
                      display: 'Reverse transcription polymerase chain reaction (rRT-PCR) test',
                    },
                  ],
                },
                status: 'final',
              },
            },
            {
              '@type': 'BundleEntry',
              resource: {
                '@type': 'Organization',
                resourceType: 'Organization',
                name: 'Parkway Laboratory',
                type: [{ text: 'Licensed Healthcare Provider' }],
                endpoint: [{ display: 'https://www.parkwaylab.com.sg/' }],
                contact: [
                  {
                    telecom: [{ system: 'phone', value: '+6562789188' }],
                    address: {
                      type: 'physical',
                      use: 'work',
                      text: '2 Aljunied Avenue 1 #07-11 Framework 2 Building Singapore 389977',
                    },
                  },
                ],
                identifier: [{ id: 'organization-lab-1' }],
              },
            },
            {
              '@type': 'BundleEntry',
              resource: {
                '@type': 'Organization',
                resourceType: 'Organization',
                name: 'Raffles Medical Clinic',
                type: [{ text: 'Accredited Laboratory' }],
                endpoint: [{ display: 'https://www.rafflesmedical.com.sg' }],
                contact: [
                  {
                    telecom: [{ system: 'phone', value: '+6563111111' }],
                    address: {
                      type: 'physical',
                      use: 'work',
                      text: 'Raffles Hospital 585 North Bridge Road Singapore 188770',
                    },
                  },
                ],
                identifier: [{ id: 'organization-provider-1' }],
              },
            },
          ],
        },
      }
}