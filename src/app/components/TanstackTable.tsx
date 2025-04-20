"use client";

import React from "react";

import "../globals.css";

import {
	ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
	ColumnDef,
} from "@tanstack/react-table";
import { ItemData, TableProps } from "@/types";
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useItemStore } from "../stores/itemStore";
import Container from "./Container";
import { useTableStorage } from "../stores/tableStorage";

export const LocationColumns: ColumnDef<ItemData>[] = [
	{
		accessorKey: "image",
		header: () => (
			<div className="flex items-center gap-2 !font-[TypelightSans]">
				<Image
					src="/imgs/frutigerPhoto.png"
					alt="Image icon"
					className="h-5 w-5"
					width={60}
					height={60}
				/>
				<span>Image</span>
			</div>
		),
		cell: ({ getValue }) => {
			const value = getValue() as string;
			return (
				<Image
					src={value}
					alt="Item visual"
					width={80}
					height={80}
					quality={70}
				/>
			);
		},
		size: 100, // Base size
		minSize: 60,
		maxSize: 150,
		footer: (props) => props.column.id,
	},
	{
		accessorKey: "name",
		header: () => (
			<div className="flex items-center gap-2 !font-[TypelightSans]">
				<Image
					src="/imgs/butterfly.png"
					alt="Image icon"
					className="h-5 w-5"
					width={60}
					height={60}
				/>
				<span>Name</span>
			</div>
		),
		footer: (props) => props.column.id,
		size: 100, // Base size
		minSize: 60,
		maxSize: 150,
		cell: ({ getValue }) => (
			<div className="truncate max-w-[280px]" title={getValue() as string}>
				{getValue() as string}
			</div>
		),
	},
	{
		accessorKey: "location",
		header: () => (
			<div className="items-center gap-2 !font-[TypelightSans] ">
				<Image
					src="/imgs/locationIcon.png"
					alt="Image icon"
					className="h-5 w-5"
					width={60}
					height={60}
				/>
				<span>Location</span>
			</div>
		),
		size: 100,
		minSize: 60,
		maxSize: 150,
		footer: (props) => props.column.id,
		meta: { className: "hidden sm:table-cell " },
		cell: ({ getValue }) => (
			<div className="truncate max-w-[280px]" title={getValue() as string}>
				{getValue() as string}
			</div>
		),
	},
	{
		accessorKey: "current_status",
		header: () => (
			<div className=" items-center gap-2 !font-[TypelightSans] ">
				<Image
					src="/imgs/statusIcon.png"
					alt="Image icon"
					className="h-5 w-5"
					width={60}
					height={60}
				/>
				<span>Status</span>
			</div>
		),
		size: 100,
		minSize: 60,
		maxSize: 150,
		cell: ({ getValue }) => {
			const status = getValue() as string;
			let color = "";
			if (status === "Operational") color = "text-green-300";
			if (status === "Inactive") color = "text-red-400";
			if (status === "Redesigned") color = "text-yellow-300";
			return <span className={` ${color} `}>{status}</span>;
		},
		meta: { className: "hidden sm:table-cell" },
		footer: (props) => props.column.id,
	},
];
const TanstackTable: React.FC<TableProps> = ({ dataItems, columns }) => {
	const router = useRouter();
	const { pageIndex, pageSize, setPagination } = useTableStorage();

	const navigateToItem = (item: ItemData) => {
		useItemStore.getState().setSelectedItem(item);
		router.push(`locations/${item._id.toString()}`);
	};

	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const table = useReactTable({
		data: dataItems,
		columns,
		filterFns: {},
		state: {
			columnFilters,
			pagination: { pageIndex, pageSize },
		},
		onPaginationChange: (updater) => {
			const newPagination =
				typeof updater === "function"
					? updater({ pageIndex, pageSize })
					: updater;

			setPagination(newPagination.pageIndex, newPagination.pageSize);
		},
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		debugTable: true,
		debugHeaders: true,
		debugColumns: false,
	});

	return (
		<>
			<div className="space-y-4 sm:hidden">
				{table.getRowModel().rows.map((row) => {
					let color = "text-green-300";
					if (row.original.current_status === "Operational")
						color = "text-green-300";
					if (row.original.current_status === "Inactive")
						color = "text-red-400";
					if (row.original.current_status === "Redesigned")
						color = "text-yellow-300";
					return (
						<Container
							key={row.id}
							className=" p-4 mx-8 sm:m-8 max-w-[calc(100vw-4rem)] sm:max-w-none">
							<div
								className=" rounded-lg p-4"
								onClick={() => navigateToItem(row.original)}>
								<div className="flex gap-4 mb-3">
									<Image
										src={row.original.image}
										alt="sd"
										width={80}
										height={80}
										className="rounded"
									/>
									<h3 className="text-xl !font-[RoSpiritendo] text-gray-200/80">
										{row.original.name}
									</h3>
								</div>
								<div className="grid grid-cols-2 gap-2 text-sm !font-[TypelightSans]">
									<div>Location: {row.original.location}</div>
									<div>
										Status:
										<span className={`${color}`}>
											{row.original.current_status}
										</span>
									</div>
								</div>
							</div>
						</Container>
					);
				})}
			</div>

			<table className="w-full hidden sm:block">
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id} className="items-center">
							{headerGroup.headers.map((header) => {
								return (
									<th
										key={header.id}
										colSpan={header.colSpan}
										className={`px-4 py-3 text-center sm:text-left text-slate-300 border-b-2 shadow-lg border-gray-200/50 ${cn(header.column.columnDef.meta?.className)}`}
										style={{
											width: header.getSize(),
											minWidth: header.column.columnDef.minSize,
											maxWidth: header.column.columnDef.maxSize,
										}}>
										{header.isPlaceholder ? null : (
											<>
												<div
													{...{
														className: header.column.getCanSort()
															? "cursor-pointer select-none"
															: "",
														onClick: header.column.getToggleSortingHandler(),
													}}>
													{flexRender(
														header.column.columnDef.header,
														header.getContext()
													)}
													{{
														asc: " 🔼",
														desc: " 🔽",
													}[header.column.getIsSorted() as string] ?? null}
												</div>
											</>
										)}
									</th>
								);
							})}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => {
						return (
							<tr
								key={row.id}
								onClick={() => navigateToItem(row.original)}
								className=" hover:bg-gray-300/30  !font-[TypelightSans] text-slate-200 hover:cursor-[url(/imgs/magnifierCursor.png)]">
								{row.getVisibleCells().map((cell) => {
									return (
										<td
											key={cell.id}
											className={`  px-4 py-3 ${cn(cell.column.columnDef.meta?.className)}`}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="flex items-center gap-2 pt-2 ">
				<button
					className="px-2 border  border-gray-200/50  shadow-xl hover:shadow-2xl transition-shadow shadow-teal-500/70 rounded-full cursor-pointer"
					onClick={() => table.setPageIndex(0)}
					disabled={!table.getCanPreviousPage()}>
					<ChevronsLeft className="stroke-white" />
				</button>
				<button
					className="px-2 border  border-gray-200/50   shadow-xl hover:shadow-2xl transition-shadow shadow-teal-500/70 rounded-full cursor-pointer"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}>
					<ChevronLeft className="stroke-white" />
				</button>
				<button
					className=" px-2 border  border-gray-200/50   shadow-xl hover:shadow-2xl transition-shadow shadow-teal-500/70  rounded-full cursor-pointer"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}>
					<ChevronRight className="stroke-white" />
				</button>
				<button
					className="px-2 border  border-gray-200/50 shadow-teal-500/70 hover:shadow-2xl transition-shadow  shadow-xl rounded-full cursor-pointer "
					onClick={() => table.setPageIndex(table.getPageCount() - 1)}
					disabled={!table.getCanNextPage()}>
					<ChevronsRight className="stroke-white" />
				</button>
				<span className="flex items-center gap-1">
					<div>Page</div>
					<strong>
						{table.getState().pagination.pageIndex + 1} of{" "}
						{table.getPageCount()}
					</strong>
				</span>
				<span className=" hidden sm:flex items-center gap-1">
					| Go to page:
					<input
						type="number"
						min="1"
						max={table.getPageCount()}
						defaultValue={table.getState().pagination.pageIndex + 1}
						onChange={(e) => {
							const page = e.target.value ? Number(e.target.value) - 1 : 0;
							table.setPageIndex(page);
						}}
						className="border p-1 rounded w-16"
					/>
				</span>
				<select
					value={table.getState().pagination.pageSize}
					onChange={(e) => {
						table.setPageSize(Number(e.target.value));
					}}>
					{[10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
			</div>
		</>
	);
};
export default TanstackTable;
