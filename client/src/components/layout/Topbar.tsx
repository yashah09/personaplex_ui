import React from 'react';

export const Topbar: React.FC = () => {
    return (
        <header className="h-16 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="flex items-center gap-4">
                {/* Placeholder for Breadcrumbs or Page Title */}
                <h2 className="text-sm font-medium text-slate-400">PersonaPlex Dashboard</h2>
            </div>

            <div className="flex items-center gap-6">
                <button className="text-slate-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                </button>
                <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs font-medium text-white">Yash Shah</p>
                        <p className="text-[10px] text-slate-500">Admin</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    </div>
                </div>
            </div>
        </header>
    );
};
