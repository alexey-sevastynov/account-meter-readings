import React from "react";
import { cn } from "@/shared/lib/cn";

interface MetricCardProps {
    title: string;
    value: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

export function MetricCard({ title, value, icon, className }: MetricCardProps) {
    return (
        <div className={cn("rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md", className)}>
            <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">{title}</div>
                {icon && <div className="text-gray-400">{icon}</div>}
            </div>
            <div className="mt-2 text-2xl font-semibold text-gray-900">{value}</div>
        </div>
    );
}
