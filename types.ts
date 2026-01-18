import React from 'react';

export interface NavLink {
    label: string;
    href: string;
}

export interface FeatureCardProps {
    title: string;
    description: string;
    image: string;
    delay?: number;
}

export interface ServiceTierProps {
    title: string;
    image: string;
    features: string[];
    isPrimary?: boolean;
    delay?: number;
}

export interface SolutionProps {
    title: string;
    description: string;
    icon: React.ElementType;
    delay?: number;
}