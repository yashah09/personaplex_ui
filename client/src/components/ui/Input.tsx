import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    error?: string;
    multiline?: boolean;
}

export const Input: React.FC<InputProps> = ({ label, error, multiline, className = '', ...props }) => {
    const baseStyles = 'w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-500';

    return (
        <div className={`space-y-1.5 ${className}`}>
            {label && <label className="block text-sm font-medium text-slate-300">{label}</label>}
            {multiline ? (
                <textarea
                    className={`${baseStyles} min-h-[100px] resize-y`}
                    {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ) : (
                <input
                    className={baseStyles}
                    {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                />
            )}
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
};
