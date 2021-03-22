const immunization = {
    '@type': 'Immunization',
    resourceType: 'Immunization',
    id: 'example',
    text: {
      div: ""
    },
    identifier: [
      {
        system: 'urn:ietf:rfc:3986',
        value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234',
      },
    ],
    status: 'completed',
    vaccineCode: {
      coding: [
        {
          system: 'urn:oid:1.2.36.1.2001.1005.17',
          code: 'FLUVAX',
        },
      ],
      text: 'Fluvax (Influenza)',
    },
    patient: {
      reference: 'Patient/example',
    },
    encounter: {
      reference: 'Encounter/example',
    },
    occurrenceDateTime: '2013-01-10',
    primarySource: true,
    location: {
      reference: 'Location/1',
    },
    manufacturer: {
      reference: 'Organization/hl7',
    },
    lotNumber: 'AAJN11K',
    expirationDate: '2015-02-15',
    site: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
          code: 'LA',
          display: 'left arm',
        },
      ],
    },
    route: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
          code: 'IM',
          display: 'Injection, intramuscular',
        },
      ],
    },
    doseQuantity: {
      value: 5,
      system: 'http://unitsofmeasure.org',
      code: 'mg',
    },
    performer: [
      {
        function: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
              code: 'OP',
            },
          ],
        },
        actor: {
          reference: 'Practitioner/example',
        },
      },
      {
        function: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
              code: 'AP',
            },
          ],
        },
        actor: {
          reference: 'Practitioner/example',
        },
      },
    ],
    note: [
      {
        text: 'Notes on adminstration of vaccine',
      },
    ],
    reasonCode: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '429060002',
          },
        ],
      },
    ],
    isSubpotent: true,
    education: [
      {
        documentType: '253088698300010311120702',
        publicationDate: '2012-07-02',
        presentationDate: '2013-01-10',
      },
    ],
    programEligibility: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/immunization-program-eligibility',
            code: 'ineligible',
          },
        ],
      },
    ],
    fundingSource: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/immunization-funding-source',
          code: 'private',
        },
      ],
    },
  }

export const HealthPassportGeneralCredentialV1 = {
    type: 'HealthPassportGeneralCredentialV1',
    data: [immunization, {
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
    }, {
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
    }],
}