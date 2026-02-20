import React from 'react';

interface Column<T> {
    header: string;
    accessor: keyof T | ((item: T) => React.ReactNode);
}

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    onRowClick?: (item: T) => void;
}

export function Table<T extends { id: string | number }>({ columns, data, onRowClick }: TableProps<T>) {
    return (
        <div className="w-full overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
            <table className="w-full text-left border-collapse">
                <thead className="bg-slate-800/50">
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} className="px-6 py-12 text-center text-slate-500">
                                No records found.
                            </td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr
                                key={item.id}
                                onClick={() => onRowClick?.(item)}
                                className={`group hover:bg-slate-800/30 transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
                            >
                                {columns.map((col, idx) => (
                                    <td key={idx} className="px-6 py-4 text-sm text-slate-300">
                                        {typeof col.accessor === 'function'
                                            ? col.accessor(item)
                                            : (item[col.accessor] as React.ReactNode)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
