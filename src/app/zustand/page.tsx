'use client';
import { ThemedLayout } from '@components/themed-layout';
import useStore, { State } from './store/store';
import { useEffect } from 'react';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import {
	StyledTable,
	StyledTableCell,
	StyledTableHead,
	StyledTableHeader,
	StyledTableRow,
} from '@app/styled-components/styled-components';

const columnHelper = createColumnHelper<State['coins']>();

const columns = [
	columnHelper.accessor('rank', {
		id: 'Rank',
		header: () => 'Rank',
	}),
	columnHelper.accessor('name', {
		id: 'Name',
		header: () => 'Name',
	}),
	columnHelper.accessor('price', {
		id: 'Price',
		header: () => 'Price',
	}),
	columnHelper.accessor('btcPrice', {
		id: 'BtcPrice',
		header: () => 'BtcPrice',
	}),
];

export default function StyledComponents() {
	const coins = useStore((state) => state.coins);
	const setCoins = useStore((state) => state.setCoins);

	const table = useReactTable({
		data: coins as any,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	useEffect(() => {
		(async () => {
			const url =
				'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '7af39f908fmsh2ad9bac4976954bp1f7afcjsn1a0028c0bb72',
					'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
				},
			};

			if (!coins.length) {
				try {
					const response = await fetch(url, options);
					const result = await response.json();
					if (result) {
						setCoins(result.data.coins);
					}
				} catch (error) {
					console.error(error);
				}
			}
		})();
	}, []);

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
