import { R4 } from '@ahryman40k/ts-fhir-types'

export const InsuranceAccountCredentialPersonV1 = {
    type: 'InsuranceAccountCredentialPersonV1',
      data: [
        {
          '@type': 'Coverage',
          resourceType: 'Coverage',
          identifier: [{ id: '1234', use: R4.IdentifierUseKind._usual }],
          status: 'status',
          type: { id: '1234', coding: [{ system: 'sys' }] }, // This is invalid
          subscriberId: '1234',
          payor: [{ id: '1234' }],
          beneficiary: { id: '1234' },
          period: { start: 'start date', end: 'end date' },

          order: 1234,
          policyHolder: { id: '1234' },
          dependent: 'dep',
          relationship: { id: '1234', coding: [{ system: 'sys' }] },
          class: [{ type: { id: '1234', coding: [{ system: 'sys' }] } }],
          network: 'net',
          costToBeneficiary: [{ valueMoney: { value: 1000, currency: 'USD' } }],
          contract: [{ id: '1234' }],
        },
        {
          '@type': 'Patient',
          resourceType: 'Patient',
          identifier: [{ id: '1234', use: R4.IdentifierUseKind._usual }],

          active: true,
          name: [{ family: 'Belcher', given: ['Bob'] }],
          gender: R4.PatientGenderKind._male,
          birthDate: 'date',
          telecom: [{ value: '555 555 5555' }],
          address: [{ line: ['123 Main St'], city: 'City', state: 'State' }],
          contact: [{ name: { family: 'Belcher', given: ['Linda'] }, telecom: [{ value: '555 555 5555' }] }],
          communication: [{ language: { id: '1234', coding: [{ system: 'sys' }] } }],
        },
      ],
}