import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { saveAgent, getAgentById, Agent } from '../../lib/storage';

const VOICE_OPTIONS = [
    "NATF0.pt", "NATF1.pt", "NATF2.pt", "NATF3.pt",
    "NATM0.pt", "NATM1.pt", "NATM2.pt", "NATM3.pt",
    "VARF0.pt", "VARF1.pt", "VARF2.pt", "VARF3.pt", "VARF4.pt",
    "VARM0.pt", "VARM1.pt", "VARM2.pt", "VARM3.pt", "VARM4.pt",
];

const TEXT_PROMPT_PRESETS = [
    {
        label: "Assistant (default)",
        text: "You are a wise and friendly teacher. Answer questions or provide advice in a clear and engaging way.",
    },
    {
        label: "Medical office (service)",
        text: "You work for Dr. Jones's medical office, and you are receiving calls to record information for new patients. Information: Record full name, date of birth, any medication allergies, tobacco smoking history, alcohol consumption history, and any prior medical conditions. Assure the patient that this information will be confidential, if they ask.",
    },
    {
        label: "Bank (service)",
        text: "You work for First Neuron Bank which is a bank and your name is Alexis Kim. Information: The customer's transaction for $1,200 at Home Depot was declined. Verify customer identity. The transaction was flagged due to unusual location (transaction attempted in Miami, FL; customer normally transacts in Seattle, WA).",
    },
    {
        label: "Astronaut (fun)",
        text: "You enjoy having a good conversation. Have a technical discussion about fixing a reactor core on a spaceship to Mars. You are an astronaut on a Mars mission. Your name is Alex. You are already dealing with a reactor core meltdown on a Mars mission. Several ship systems are failing, and continued instability will lead to catastrophic failure. You explain what is happening and you urgently ask for help thinking through how to stabilize the reactor.",
    },
];

export const AgentBuilder: React.FC = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [systemPrompt, setSystemPrompt] = useState('');
    const [voice, setVoice] = useState(VOICE_OPTIONS[0]);

    useEffect(() => {
        if (id) {
            const agent = getAgentById(id);
            if (agent) {
                setName(agent.name);
                setSystemPrompt(agent.systemPrompt);
                setVoice(agent.voice);
            }
        }
    }, [id]);

    const handleSave = (status: 'Draft' | 'Live') => {
        if (!name) return alert('Please enter an agent name');

        const agent: Agent = {
            id: id || Date.now().toString(),
            name,
            systemPrompt,
            voice,
            status,
            lastUpdated: new Date().toLocaleDateString(),
        };

        saveAgent(agent);
        navigate('/agents');
    };

    const handleTest = () => {
        // Temporarily save to test
        const tempId = id || 'temp-' + Date.now();
        const agent: Agent = {
            id: tempId,
            name,
            systemPrompt,
            voice,
            status: 'Draft',
            lastUpdated: new Date().toLocaleDateString(),
        };
        saveAgent(agent);
        navigate(`/agents/test?id=${tempId}`);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" onClick={() => navigate('/agents')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </Button>
                <h1 className="text-3xl font-bold text-white">{id ? 'Edit Agent' : 'Create New Agent'}</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <Card title="Agent Configuration" description="Define how your agent behaves and who it is.">
                        <div className="space-y-6">
                            <Input
                                label="Agent Name"
                                placeholder="e.g. Customer Support AI"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-300">System Prompt</label>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {TEXT_PROMPT_PRESETS.map((p) => (
                                        <button
                                            key={p.label}
                                            onClick={() => setSystemPrompt(p.text)}
                                            className="px-3 py-1 text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full border border-slate-700 transition-colors"
                                        >
                                            {p.label}
                                        </button>
                                    ))}
                                </div>
                                <Input
                                    multiline
                                    placeholder="Enter detailed instructions for the AI..."
                                    value={systemPrompt}
                                    onChange={(e) => setSystemPrompt(e.target.value)}
                                    className="min-h-[200px]"
                                />
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card title="Voice & Output" description="Select the personality of the voice.">
                        <div className="space-y-6">
                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-slate-300">Select Voice</label>
                                <select
                                    value={voice}
                                    onChange={(e) => setVoice(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                >
                                    {VOICE_OPTIONS.map((v) => (
                                        <option key={v} value={v}>
                                            {v.replace('.pt', '').replace(/^NAT/, 'NATURAL_').replace(/^VAR/, 'VARIETY_')}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                                    {voice.includes('F') ? 'Female' : 'Male'} voice with {voice.startsWith('NAT') ? 'natural' : 'variety'} intonation.
                                </p>
                            </div>
                        </div>
                    </Card>

                    <div className="space-y-3">
                        <Button className="w-full" onClick={() => handleSave('Live')}>Publish Agent</Button>
                        <Button variant="outline" className="w-full" onClick={() => handleSave('Draft')}>Save Draft</Button>
                        <div className="h-px bg-slate-800 my-2"></div>
                        <Button variant="secondary" className="w-full gap-2" onClick={handleTest}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2" /><path d="M7 7a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Z" /><path d="M10 13h4" /><path d="M10 17h4" /></svg>
                            Test Connection
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
