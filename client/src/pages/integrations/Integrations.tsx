import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const Integrations: React.FC = () => {
    const integrations = [
        { name: 'Twilio', description: 'Connect your AI agents to phone lines via Twilio.', icon: 'T' },
        { name: 'Webhooks', description: 'Trigger external actions based on call events.', icon: 'W' },
        { name: 'Retell', description: 'High-availability voice infrastructure integration.', icon: 'R' },
        { name: 'Vapi', description: 'Seamlessly sync with your existing Vapi assistants.', icon: 'V' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Integrations</h1>
                <p className="text-slate-400 mt-2">Connect PersonaPlex with your favorite tools and platforms.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrations.map((item) => (
                    <Card key={item.name} className="flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl font-bold text-blue-500 border border-slate-700">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white">{item.name}</h3>
                        </div>
                        <p className="text-sm text-slate-400 mb-6 flex-1">
                            {item.description}
                        </p>
                        <Button variant="outline" className="w-full">Configure</Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};
