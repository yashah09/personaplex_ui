import moshiProcessorUrl from "../../audio-processor.ts?worker&url";
import { FC, useEffect, useState, useCallback, useRef, MutableRefObject } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Conversation } from "../Conversation/Conversation";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useModelParams } from "../Conversation/hooks/useModelParams";
import { prewarmDecoderWorker } from "../../decoder/decoderWorker";
import { getAgentById } from "../../lib/storage";

export const AgentTest: FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const agentId = searchParams.get("id");
    const overrideWorkerAddr = searchParams.get("worker_addr");

    const [hasMicrophoneAccess, setHasMicrophoneAccess] = useState<boolean>(false);
    const [showMicrophoneAccessMessage, setShowMicrophoneAccessMessage] = useState<boolean>(false);
    const [agentName, setAgentName] = useState<string>("New Agent");

    const modelParams = useModelParams();
    const audioContext = useRef<AudioContext | null>(null);
    const worklet = useRef<AudioWorkletNode | null>(null);

    // Load agent data if ID is present
    useEffect(() => {
        if (agentId) {
            const agent = getAgentById(agentId);
            if (agent) {
                setAgentName(agent.name);
                modelParams.setTextPrompt(agent.systemPrompt);
                modelParams.setVoicePrompt(agent.voice);
            }
        }
    }, [agentId]);

    const getMicrophoneAccess = useCallback(async () => {
        try {
            await window.navigator.mediaDevices.getUserMedia({ audio: true });
            setHasMicrophoneAccess(true);
            return true;
        } catch (e) {
            console.error(e);
            setShowMicrophoneAccessMessage(true);
            setHasMicrophoneAccess(false);
        }
        return false;
    }, []);

    const startProcessor = useCallback(async () => {
        if (!audioContext.current) {
            audioContext.current = new AudioContext();
            prewarmDecoderWorker(audioContext.current.sampleRate);
        }
        if (worklet.current) {
            return;
        }
        let ctx = audioContext.current;
        ctx.resume();
        try {
            worklet.current = new AudioWorkletNode(ctx, 'moshi-processor');
        } catch (err) {
            await ctx.audioWorklet.addModule(moshiProcessorUrl);
            worklet.current = new AudioWorkletNode(ctx, 'moshi-processor');
        }
        worklet.current.connect(ctx.destination);
    }, []);

    const startConnection = useCallback(async () => {
        await startProcessor();
        const hasAccess = await getMicrophoneAccess();
        if (hasAccess) {
            // Logic handled by modelParams passing to Conversation
        }
    }, [startProcessor, getMicrophoneAccess]);

    const isConnected = hasMicrophoneAccess && audioContext.current && worklet.current;

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" onClick={() => navigate('/agents')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold text-white">Testing: {agentName}</h1>
                        <p className="text-slate-400 mt-1">Status: {isConnected ? 'Active Session' : 'Ready to Connect'}</p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                {isConnected ? (
                    <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden min-h-[500px] flex flex-col">
                        <Conversation
                            workerAddr={overrideWorkerAddr ?? ""}
                            audioContext={audioContext as MutableRefObject<AudioContext | null>}
                            worklet={worklet as MutableRefObject<AudioWorkletNode | null>}
                            theme="light"
                            startConnection={startConnection}
                            {...modelParams}
                        />
                    </div>
                ) : (
                    <Card className="text-center py-12 px-6">
                        <div className="w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500 border border-blue-500/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Ready to test?</h2>
                        <p className="text-slate-400 max-w-sm mx-auto mb-8">
                            Click the button below to start a full-duplex session with <b>{agentName}</b>. You'll need to grant microphone access.
                        </p>

                        {showMicrophoneAccessMessage && (
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                                Please enable your microphone before proceeding.
                            </div>
                        )}

                        <Button size="lg" className="px-12" onClick={startConnection}>
                            Start Conversation
                        </Button>
                    </Card>
                )}
            </div>

            {!isConnected && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <Card title="Current Instructions" className="opacity-60">
                        <p className="text-sm text-slate-300 whitespace-pre-wrap">{modelParams.textPrompt || "No prompt set."}</p>
                    </Card>
                    <Card title="Voice Profile" className="opacity-60">
                        <p className="text-sm text-slate-300">
                            {modelParams.voicePrompt.replace('.pt', '').replace(/^NAT/, 'NATURAL_').replace(/^VAR/, 'VARIETY_')}
                        </p>
                    </Card>
                </div>
            )}
        </div>
    );
};
