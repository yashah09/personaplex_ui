import React from 'react';
import { Card } from '../../components/ui/Card';
import { Table } from '../../components/ui/Table';

export const CallLogs: React.FC = () => {
    const mockLogs = [
        { id: '1', date: '2024-05-20 14:32', agent: 'Support AI', duration: '4m 12s', status: 'Completed', sentiment: 'Positive' },
        { id: '2', date: '2024-05-20 13:15', agent: 'Sales Bot', duration: '2m 45s', status: 'Completed', sentiment: 'Neutral' },
        { id: '3', date: '2024-05-20 12:40', agent: 'Support AI', duration: '8m 22s', status: 'Completed', sentiment: 'Negative' },
        { id: '4', date: '2024-05-20 11:05', agent: 'Appointment AI', duration: '1m 15s', status: 'Failed', sentiment: 'N/A' },
        { id: '5', date: '2024-05-19 16:20', agent: 'Support AI', duration: '5m 50s', status: 'Completed', sentiment: 'Positive' },
    ];

    const columns = [
        { header: 'Date', accessor: 'date' as keyof typeof mockLogs[0] },
        { header: 'Agent', accessor: 'agent' as keyof typeof mockLogs[0] },
        { header: 'Duration', accessor: 'duration' as keyof typeof mockLogs[0] },
        {
            header: 'Status',
            accessor: (item: any) => (
                <span className={`text-xs ${item.status === 'Completed' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {item.status}
                </span>
            )
        },
        {
            header: 'Sentiment',
            accessor: (item: any) => (
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.sentiment === 'Positive' ? 'bg-emerald-500/10 text-emerald-400' :
                        item.sentiment === 'Negative' ? 'bg-red-500/10 text-red-400' : 'bg-slate-800 text-slate-400'
                    }`}>
                    {item.sentiment}
                </span>
            )
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Call Logs</h1>
                <p className="text-slate-400 mt-2">Historical view of all AI agent interactions.</p>
            </div>

            <Card className="!p-0 border-none bg-transparent">
                <Table
                    columns={columns}
                    data={mockLogs}
                />
            </Card>
        </div>
    );
};
