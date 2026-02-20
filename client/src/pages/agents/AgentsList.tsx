import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Table } from '../../components/ui/Table';
import { Card } from '../../components/ui/Card';
import { getAgents, Agent } from '../../lib/storage';

export const AgentsList: React.FC = () => {
    const [agents, setAgents] = useState<Agent[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setAgents(getAgents());
    }, []);

    const columns = [
        {
            header: 'Name',
            accessor: (item: Agent) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-blue-500 font-bold border border-slate-700">
                        {item.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium text-white">{item.name}</span>
                </div>
            )
        },
        {
            header: 'Voice',
            accessor: (item: Agent) => (
                <span className="text-slate-400">
                    {item.voice.replace('.pt', '').replace(/^NAT/, 'NATURAL_').replace(/^VAR/, 'VARIETY_')}
                </span>
            )
        },
        {
            header: 'Status',
            accessor: (item: Agent) => (
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.status === 'Live' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}>
                    {item.status}
                </span>
            )
        },
        { header: 'Last Updated', accessor: 'lastUpdated' as keyof Agent },
        {
            header: '',
            accessor: (item: Agent) => (
                <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); navigate(`/agents/test?id=${item.id}`); }}>
                        Test
                    </Button>
                    <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); navigate(`/agents/new?id=${item.id}`); }}>
                        Edit
                    </Button>
                </div>
            )
        }
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Agents</h1>
                    <p className="text-slate-400 mt-2">Manage and deploy your conversational AI agents.</p>
                </div>
                <Button onClick={() => navigate('/agents/new')} className="gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    New Agent
                </Button>
            </div>

            <Card className="!p-0 border-none bg-transparent">
                <Table
                    columns={columns}
                    data={agents}
                    onRowClick={(item) => navigate(`/agents/new?id=${item.id}`)}
                />
            </Card>
        </div>
    );
};
