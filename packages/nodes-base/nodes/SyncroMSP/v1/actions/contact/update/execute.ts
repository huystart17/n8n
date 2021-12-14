import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
} from 'n8n-workflow';

import {
	apiRequest,
} from '../../../transport';


export async function updateContact(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as IDataObject;
	const { address, customerId, email, name, notes, phone } = this.getNodeParameter('additionalFields', index) as IDataObject;

	const qs = {} as IDataObject;
	const requestMethod = 'PUT';
	const endpoint = `contacts/${id}`;
	let body = {} as IDataObject;
	let addressData = address as IDataObject;

	if (addressData) {
		addressData = addressData['addressFields'] as IDataObject;
		addressData.address1 = addressData.address;
	}

	body = {
		...addressData,
		contact_id: id,
		customer_id: customerId,
		email,
		name,
		notes,
		phone,
	};

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
