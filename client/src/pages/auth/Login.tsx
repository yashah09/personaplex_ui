import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';

export const Login: React.FC = () => {
    const [email, setEmail] = useState('demo@personaplex.ai');
    const [password, setPassword] = useState('password');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple mock login
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center font-bold text-white text-3xl mx-auto mb-4 shadow-xl shadow-blue-500/20">
                        P
                    </div>
                    <h1 className="text-3xl font-bold text-white">Welcome back</h1>
                    <p className="text-slate-400 mt-2">Sign in to your PersonaPlex account</p>
                </div>

                <Card>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500" />
                                <span className="text-slate-400">Remember me</span>
                            </label>
                            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">Forgot password?</a>
                        </div>

                        <Button type="submit" className="w-full" size="lg">
                            Sign In
                        </Button>
                    </form>
                </Card>

                <p className="text-center text-slate-500 mt-8 text-sm">
                    Don&apos;t have an account? <a href="#" className="text-blue-500 hover:text-blue-400 font-medium">Start 14-day free trial</a>
                </p>
            </div>
        </div>
    );
};
