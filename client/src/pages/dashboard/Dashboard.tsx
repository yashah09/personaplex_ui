import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const Dashboard: React.FC = () => {
    const stats = [
        { label: 'Total Minutes', value: '14,200', change: '+12%', color: 'text-blue-500' },
        { label: 'Active Agents', value: '8', change: '+2', color: 'text-emerald-500' },
        { label: 'Avg. Call Duration', value: '4m 32s', change: '-5%', color: 'text-amber-500' },
        { label: 'Completion Rate', value: '94.2%', change: '+0.8%', color: 'text-purple-500' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Dashboard Overlay</h1>
                <p className="text-slate-400 mt-2">Welcome back, here is what is happening with your agents today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <Card key={idx} className="relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                        </div>
                        <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                        <div className="flex items-end justify-between mt-2">
                            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                                {stat.change}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2" title="Activity Overview" description="Usage minutes across all agents for the last 7 days.">
                    <div className="h-64 flex items-end gap-2 px-2">
                        {[40, 60, 45, 80, 55, 90, 70].map((height, i) => (
                            <div key={i} className="flex-1 bg-blue-600/20 rounded-t-lg relative group">
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-lg transition-all duration-500 group-hover:bg-blue-400"
                                    style={{ height: `${height}%` }}
                                ></div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-slate-500 px-2 font-medium">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </Card>

                <Card title="Quick Actions" description="Commonly used tasks.">
                    <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                            Create New Agent
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                            Download Reports
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" x2="12" y1="17" y2="17" /></svg>
                            Support Documentation
                        </Button>
                    </div>

                    <div className="mt-8 p-4 bg-blue-600/10 border border-blue-500/20 rounded-xl">
                        <p className="text-sm font-semibold text-blue-400">Need help?</p>
                        <p className="text-xs text-slate-400 mt-1">Schedule a call with our specialist to optimize your agent performance.</p>
                        <Button size="sm" className="mt-4 w-full">Book a Call</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};
