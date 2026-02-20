import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export const Settings: React.FC = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Settings</h1>
                <p className="text-slate-400 mt-2">Manage your organization and account preferences.</p>
            </div>

            <div className="max-w-3xl space-y-6">
                <Card title="Organization Details" description="Update your company information.">
                    <div className="space-y-4">
                        <Input label="Organization Name" defaultValue="Future Theory" />
                        <Input label="Subdomain" defaultValue="futuretheory.personaplex.ai" disabled className="opacity-60" />
                        <div className="pt-2">
                            <Button>Save Changes</Button>
                        </div>
                    </div>
                </Card>

                <Card title="Security" description="Manage your password and authentication.">
                    <div className="space-y-4">
                        <Button variant="outline">Change Password</Button>
                        <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                            <div>
                                <p className="text-sm font-medium text-white">Two-Factor Authentication</p>
                                <p className="text-xs text-slate-500">Add an extra layer of security to your account.</p>
                            </div>
                            <div className="w-10 h-6 bg-slate-700 rounded-full relative cursor-pointer">
                                <div className="absolute left-1 top-1 w-4 h-4 bg-slate-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card title="Danger Zone" className="border-red-900/50 bg-red-900/5">
                    <p className="text-sm text-slate-400 mb-4">Once you delete your organization, there is no going back. Please be certain.</p>
                    <Button variant="danger">Delete Organization</Button>
                </Card>
            </div>
        </div>
    );
};
