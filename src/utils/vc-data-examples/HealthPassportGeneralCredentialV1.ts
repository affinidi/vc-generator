import { R4 } from '@ahryman40k/ts-fhir-types'

const immunization = {
    '@type': 'Immunization',
    resourceType: 'Immunization',
    id: 'example',
    text: {
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234</p><p><b>status</b>: completed</p><p><b>vaccineCode</b>: Fluvax (Influenza) <span>(Details : {urn:oid:1.2.36.1.2001.1005.17 code 'FLUVAX' = 'Fluvax)</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>occurrence</b>: 10/01/2013</p><p><b>primarySource</b>: true</p><p><b>location</b>: <a>Location/1</a></p><p><b>manufacturer</b>: <a>Organization/hl7</a></p><p><b>lotNumber</b>: AAJN11K</p><p><b>expirationDate</b>: 15/02/2015</p><p><b>site</b>: left arm <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActSite code 'LA' = 'left arm', given as 'left arm'})</span></p><p><b>route</b>: Injection, intramuscular <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration code 'IM' = 'Injection, intramuscular', given as 'Injection, intramuscular'})</span></p><p><b>doseQuantity</b>: 5 mg<span> (Details: UCUM code mg = 'mg')</span></p><blockquote><p><b>performer</b></p><p><b>function</b>: Ordering Provider <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code 'OP' = 'Ordering Provider)</span></p><p><b>actor</b>: <a>Practitioner/example</a></p></blockquote><blockquote><p><b>performer</b></p><p><b>function</b>: Administering Provider <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code 'AP' = 'Administering Provider)</span></p><p><b>actor</b>: <a>Practitioner/example</a></p></blockquote><p><b>note</b>: Notes on adminstration of vaccine</p><p><b>reasonCode</b>: Procedure to meet occupational requirement <span>(Details : {SNOMED CT code '429060002' = 'Procedure to meet occupational requirement)</span></p><p><b>isSubpotent</b>: true</p><h3>Educations</h3><table><tr><td>-</td><td><b>DocumentType</b></td><td><b>PublicationDate</b></td><td><b>PresentationDate</b></td></tr><tr><td>*</td><td>253088698300010311120702</td><td>02/07/2012</td><td>10/01/2013</td></tr></table><p><b>programEligibility</b>: Not Eligible <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-program-eligibility code 'ineligible' = 'Not Eligible)</span></p><p><b>fundingSource</b>: Private <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-funding-source code 'private' = 'Private)</span></p></div>",
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
  
  const observation = {
    '@type': 'Observation',
    resourceType: 'Observation',
    category: [{}],
    identifier: [
      {
        system: 'urn:ietf:rfc:3986',
        value: 'urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281',
      },
    ],
    status: 'final' as R4.ObservationStatusKind,
    method: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '708099001',
          display: 'Rapid immunoassay',
        },
      ],
    },
    device: {
      reference: 'Device/12345',
    },
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '94503-0',
          display: 'SARS coronavirus 2 IgG and IgM panel - Serum or Plasma by Rapid immunoassay',
        },
      ],
    },
    subject: {
      reference: 'Patient/example',
    },
    effectiveDateTime: '2020-04-24',
    performer: [
      {
        reference: 'Practitioner/example',
      },
    ],
    component: [
      {
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '94508-9',
              display: 'SARS coronavirus 2 IgM Ab [Presence] in Serum or Plasma by Rapid immunoassay',
            },
          ],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: 'http://loinc.org',
              code: 'LA6577-6',
              display: 'Negative',
            },
          ],
        },
      },
      {
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '94507-1',
              display: 'SARS coronavirus 2 IgG Ab [Presence] in Serum or Plasma by Rapid immunoassay',
            },
          ],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: 'http://loinc.org',
              code: 'LA6576-8',
              display: 'Positive',
            },
          ],
        },
      },
    ],
  }
  
  const patient = {
    '@type': 'Patient',
    resourceType: 'Patient',
    id: 'example',
    text: {
      status: 'generated' as R4.NarrativeStatusKind,
      div:
        '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<table>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Name</td>\n\t\t\t\t\t\t<td>Peter James \n              <b>Chalmers</b> (&quot;Jim&quot;)\n            </td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Address</td>\n\t\t\t\t\t\t<td>534 Erewhon, Pleasantville, Vic, 3999</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Contacts</td>\n\t\t\t\t\t\t<td>Home: unknown. Work: (03) 5555 6473</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Id</td>\n\t\t\t\t\t\t<td>MRN: 12345 (Acme Healthcare)</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>',
    },
    identifier: [
      {
        use: 'usual' as R4.IdentifierUseKind,
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
              code: 'MR',
            },
          ],
        },
        system: 'urn:oid:1.2.36.146.595.217.0.1',
        value: '12345',
        period: {
          start: '2001-05-06',
        },
        assigner: {
          display: 'Acme Healthcare',
        },
      },
    ],
    active: true,
    name: [
      {
        use: 'official' as R4.HumanNameUseKind,
        family: 'Chalmers',
        given: ['Peter', 'James'],
      },
      {
        use: 'usual' as R4.HumanNameUseKind,
        given: ['Jim'],
      },
      {
        use: 'maiden' as R4.HumanNameUseKind,
        family: 'Windsor',
        given: ['Peter', 'James'],
        period: {
          end: '2002',
        },
      },
    ],
    telecom: [
      {
        use: 'home' as R4.ContactPointUseKind,
      },
      {
        system: 'phone' as R4.ContactPointSystemKind,
        value: '(03) 5555 6473',
        use: 'work' as R4.ContactPointUseKind,
        rank: 1,
      },
      {
        system: 'phone' as R4.ContactPointSystemKind,
        value: '(03) 3410 5613',
        use: 'mobile' as R4.ContactPointUseKind,
        rank: 2,
      },
      {
        system: 'phone' as R4.ContactPointSystemKind,
        value: '(03) 5555 8834',
        use: 'old' as R4.ContactPointUseKind,
        period: {
          end: '2014',
        },
      },
    ],
    gender: 'male' as R4.PatientGenderKind,
    birthDate: '1974-12-25',
    _birthDate: {
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/patient-birthTime',
          valueDateTime: '1974-12-25T14:35:45-05:00',
        },
      ],
    },
    deceasedBoolean: false,
    address: [
      {
        use: 'home' as R4.AddressUseKind,
        type: 'both' as R4.AddressTypeKind,
        text: '534 Erewhon St PeasantVille, Rainbow, Vic  3999',
        line: ['534 Erewhon St'],
        city: 'PleasantVille',
        district: 'Rainbow',
        state: 'Vic',
        postalCode: '3999',
        period: {
          start: '1974-12-25',
        },
      },
    ],
    contact: [
      {
        relationship: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                code: 'N',
              },
            ],
          },
        ],
        name: {
          family: 'du Marché',
          _family: {
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/humanname-own-prefix',
                valueString: 'VV',
              },
            ],
          },
          given: ['Bénédicte'],
        },
        telecom: [
          {
            system: 'phone' as R4.ContactPointSystemKind,
            value: '+33 (237) 998327',
          },
        ],
        address: {
          use: 'home' as R4.AddressUseKind,
          type: 'both' as R4.AddressTypeKind,
          line: ['534 Erewhon St'],
          city: 'PleasantVille',
          district: 'Rainbow',
          state: 'Vic',
          postalCode: '3999',
          period: {
            start: '1974-12-25',
          },
        },
        gender: 'female' as R4.Patient_ContactGenderKind,
        period: {
          start: '2012',
        },
      },
    ],
    managingOrganization: {
      reference: 'Organization/1',
    },
  }

export const HealthPassportGeneralCredentialV1 = {
    type: 'HealthPassportGeneralCredentialV1',
    data: [immunization, observation, patient],
}