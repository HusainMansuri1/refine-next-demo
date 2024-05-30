'use client';

import { ThemedLayout } from '@components/themed-layout';
import {
	StyledInputWrapper,
	StyledInput,
	StyledLabel,
	StyledOption,
	StyledSelect,
	StyledButton,
	StyledTable,
	StyledTableHead,
	StyledTableRow,
	StyledTableHeader,
	StyledTableCell,
} from './styled-components';

export default function StyledComponents() {
	return (
		<ThemedLayout>
			<form>
				<StyledInputWrapper>
					<StyledLabel htmlFor='inp'>Name</StyledLabel>
					<StyledInput id='inp' type='text' />
				</StyledInputWrapper>
				<StyledInputWrapper>
					<StyledLabel htmlFor='gender'>Gender</StyledLabel>
					<StyledSelect id='gender'>
						<StyledOption value='male'>Male</StyledOption>
						<StyledOption value='female'>Female</StyledOption>
					</StyledSelect>
				</StyledInputWrapper>
				<StyledButton type='submit'>Submit</StyledButton>
			</form>

			<StyledTable>
				<StyledTableHead>
					<StyledTableRow>
						<StyledTableHeader>Deveoper</StyledTableHeader>
						<StyledTableHeader>Main</StyledTableHeader>
						<StyledTableHeader>UI</StyledTableHeader>
						<StyledTableHeader>API</StyledTableHeader>
					</StyledTableRow>
				</StyledTableHead>
				<tbody>
					<StyledTableRow>
						<StyledTableCell>Husain</StyledTableCell>
						<StyledTableCell>Next.js</StyledTableCell>
						<StyledTableCell>MUI</StyledTableCell>
						<StyledTableCell>Ably</StyledTableCell>
					</StyledTableRow>
					<StyledTableRow>
						<StyledTableCell>Siddhesh</StyledTableCell>
						<StyledTableCell>Vite</StyledTableCell>
						<StyledTableCell>Mantine</StyledTableCell>
						<StyledTableCell>Strappi</StyledTableCell>
					</StyledTableRow>
				</tbody>
			</StyledTable>
		</ThemedLayout>
	);
}
