import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    description?: string;
    footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, description, footer }) => {
    return (
        <div className={`bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm ${className}`}>
            {(title || description) && (
                <div className="px-6 py-4 border-b border-slate-800">
                    {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
                    {description && <p className="text-sm text-slate-400 mt-1">{description}</p>}
                </div>
            )}
            <div className="px-6 py-6">
                {children}
            </div>
            {footer && (
                <div className="px-6 py-4 bg-slate-800/50 border-t border-slate-800">
                    {footer}
                </div>
            )}
        </div>
    );
};
