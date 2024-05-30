'use client';

import {
	StyledTable,
	StyledTableCell,
	StyledTableHead,
	StyledTableHeader,
	StyledTableRow,
} from '@app/styled-components/styled-components';
import { ThemedLayout } from '@components/themed-layout';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

type Person = {
	firstName: string;
	lastName: string;
	age: number;
	visits: number;
	status: string;
	progress: number;
};

const peronData: Person[] = [
	{
		firstName: 'tanner',
		lastName: 'linsley',
		age: 24,
		visits: 100,
		status: 'In Relationship',
		progress: 50,
	},
	{
		firstName: 'tandy',
		lastName: 'miller',
		age: 40,
		visits: 40,
		status: 'Single',
		progress: 80,
	},
	{
		firstName: 'joe',
		lastName: 'dirte',
		age: 45,
		visits: 20,
		status: 'Complicated',
		progress: 10,
	},
];

const columnHelper = createColumnHelper<Person>();

const personColumns = [
	columnHelper.accessor('firstName', {
		id: 'firstName',
		header: () => 'First Name',
		// footer: () => 'First Name Footer',
	}),
	columnHelper.accessor('lastName', {
		id: 'LastName',
		header: () => 'Last Name',
		// footer: () => 'Last Name Footer',
	}),
	columnHelper.accessor('age', {
		id: 'Age',
		header: () => 'Age',
		// footer: () => 'Age Footer',
	}),
	columnHelper.accessor('visits', {
		id: 'Visits',
		header: () => 'Visits',
		// footer: () => 'Visits Footer',
	}),
	columnHelper.accessor('status', {
		id: 'Status',
		header: () => 'Status',
		// footer: () => 'Status Footer',
	}),
	columnHelper.accessor('progress', {
		id: 'Progress',
		header: () => 'Progress',
		// footer: () => 'Progress Footer',
	}),
];

export default function TanstackTable() {
	const [tableData, setTableData] = useState<Person[]>([...peronData]);

	const table = useReactTable({
		data: tableData,
		columns: personColumns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<ThemedLayout>
			<StyledTable className='custom-tanstak-table'>
				<StyledTableHead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<StyledTableHeader key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</StyledTableHeader>
							))}
						</tr>
					))}
				</StyledTableHead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<StyledTableRow key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<StyledTableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</StyledTableCell>
							))}
						</StyledTableRow>
					))}
				</tbody>
				<tfoot>
					{table.getFooterGroups().map((footerGroup) => (
						<StyledTableRow key={footerGroup.id}>
							{footerGroup.headers.map((header) => (
								<StyledTableHeader key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.footer,
												header.getContext()
										  )}
								</StyledTableHeader>
							))}
						</StyledTableRow>
					))}
				</tfoot>
			</StyledTable>
		</ThemedLayout>
	);
}
