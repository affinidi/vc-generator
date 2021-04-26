import React from 'react';
import './VcTypeDetail.scss';

const VcTypeDetail = () => {
	const data = [
		{
			type: 'AccountCredentialPersonV1',
			description: 'Account credentials of an individual',
		},
		{
			type: 'AccountCredentialOrganizationV1',
			description: 'Account credentials of an organization',
		},
		{
			type: 'AddressCredentialPersonV1',
			description: 'Address of an individual',
		},
		{
			type: 'AccountCredentialOrganizationV1',
			description: 'Address of an organization',
		},
		{
			type: 'AMLCredentialPersonV1',
			description: 'Anti-money Laundering activities of an individual',
		},
		{
			type: 'AMLCredentialOrganizationV1',
			description: 'Anti-money Laundering activities of an organization',
		},
		{
			type: 'BillOfLadingCredentialV1',
			description:
				'Bill of Lading details such as the name of the shipper, recipient, shipment, loading and unloading ports, and more.',
		},
		{
			type: 'CargoShippingCredentialV1',
			description:
				'Cargo shipping details such as the name of the shipper, recipient, shipment, and loading and unloading ports.',
		},
		{
			type: 'CourtRecordSearchCredentialPersonV1',
			description: 'The court records associated with an entity',
		},
		{
			type: 'CreditScoreCredentialPersonV1',
			description: 'Credit score of an entity',
		},
		{
			type: 'DOBCredentialPersonV1',
			description: 'Date of birth of an entity',
		},
		{
			type: 'EducationCredentialPersonV1',
			description: 'Education qualifications of an entity',
		},
		{
			type: 'EmailCredentialPersonV1',
			description: 'The email of an individual',
		},
		{
			type: 'EmailCredentialOrganizationV1',
			description: 'The email of an organization',
		},
		{
			type: 'EmploymentCredentialOrganizationV1',
			description:
				'Verifies the name of the organization where an individual has worked in the past',
		},
		{
			type: 'EmploymentCredentialOrganizationV1',
			description:
				'Checks the complete details of employment such as role, period of work, gross salary, net salary, etc.',
		},
		{
			type: 'EmploymentOfferCredentialOrganizationV1',
			description:
				'The details of an employment offer such as the starting date, location, name of the interviewer, etc.',
		},
		{
			type: 'GenderCredentialPersonV1',
			description: 'Gender of an individual',
		},
		{
			type: 'HealthPassportBundleCredentialV1',
			description: 'Healthcare record of an individual',
		},
		{
			type: 'HealthPassportGeneralCredentialV1',
			description: 'Immunization records of an individual',
		},
		{
			type: 'IDDocumentCredentialPersonV1',
			description: 'Validating the PII of an entity',
		},
		{
			type: 'InsuranceAccountCredentialPersonV1',
			description: 'Insurance details of an entity',
		},
		{
			type: 'LeanEntityCredentialOrganizationV1',
			description:
				'Validity of an organization’s credentials like license and the authority that issued it, and more.',
		},
		{
			type: 'MetaCredentialOrganizationV1',
			description:
				'Overview of the types of credentials issued to an organization, date of issue and validity period of each, etc.',
		},
		{
			type: 'MetaCredentialPersonV1',
			description: 'Overview of an individual’s credentials and their validity',
		},
		{
			type: 'NameCredentialOrganizationV1',
			description:
				'Credentials of an organization such as name, ID, email, etc',
		},
		{
			type: 'NameCredentialPersonV1',
			description: 'PII of an individual',
		},
		{
			type: 'NatIDNumCredentialOrganizationV1',
			description: 'Nationality and the associated proof of an organization',
		},
		{
			type: 'NatIDNumCredentialPersonV1',
			description: 'Nationality and the associated proof of an individual',
		},
		{
			type: 'PhoneCredentialOrganizationV1',
			description: 'Phone number of an organization',
		},
		{
			type: 'PhoneCredentialPersonV1',
			description: 'Phone number of an individual',
		},
	];

	const filteredData = data;

	return (
		<div className="table_root">
			<table className="table table-striped table-bordered table-hover">
				<thead>
					<tr>
						<th scope="col">Type</th>
						<th scope="col">Description</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.map((temp) => (
						<tr>
							<td>{temp.type}</td>
							<td>{temp.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default VcTypeDetail;
