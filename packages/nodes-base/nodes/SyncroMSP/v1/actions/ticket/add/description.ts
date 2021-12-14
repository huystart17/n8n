import {
	TicketProperties,
} from '../../Interfaces';

export const ticketAddDescription: TicketProperties = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'ticket',
				],
				operation: [
					'add',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'ticket',
				],
				operation: [
					'add',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'ticket',
				],
				operation: [
					'add',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Asset ID',
				name: 'assetId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Due Date',
				name: 'dueDate',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Problem Type',
				name: 'problemType',
				type: 'options',
				options: [
					{
						name: 'Remote Support',
						value: 'Remote Support',
					},
					{
						name: 'Contract Work',
						value: 'Contract Work',
					},
					{
						name: 'Network Project',
						value: 'Network Project',
					},
					{
						name: 'Regular Maintenance',
						value: 'Regular Maintenance',
					},
					{
						name: 'Other',
						value: 'Other',
					},
				],
				default: '',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'New',
						value: 'New',
					},
					{
						name: 'In Progress',
						value: 'In Progress',
					},
					{
						name: 'Resolved',
						value: 'Resolved',
					},
					{
						name: 'Waiting for Parts',
						value: 'Waiting for Parts',
					},
					{
						name: 'Waiting on Customer',
						value: 'Waiting on Customer',
					},
					{
						name: 'Scheduled',
						value: 'Scheduled',
					},
					{
						name: 'Customer Reply',
						value: 'Customer Reply',
					},
				],
				default: 'New',
			},
		],
	},
];
