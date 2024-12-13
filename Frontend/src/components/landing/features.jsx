import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar, Heart, LocateIcon, MapPin, PinIcon, UsersRound } from "lucide-react";

// Feature data array
const featureData = [
    {
        title: "Event Tracking",
        description: "Efficiently manage and track your upcoming events",
        icon: Calendar
    },
    {
        title: "Location Services",
        description: "Precise location tracking and mapping capabilities",
        icon: MapPin
    },
    {
        title: "User Management",
        description: "Comprehensive user tracking and engagement tools",
        icon: UsersRound
    },
    {
        title: "Networking",
        description: "Connect and expand your professional network",
        icon: LocateIcon
    }
];

// Individual Feature Card Component
const FeatureCard = ({ title, description, icon: Icon }) => (
    <Card className="hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-white border-gray-100 hover:border-red-100">
        <CardHeader className="pb-2">
            <div className="flex items-center space-x-4">
                <Icon className="text-red-600 w-10 h-10" />
                <CardTitle className="text-xl text-red-800">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="pt-2">
            <p className="text-gray-600">{description}</p>
        </CardContent>
    </Card>
);

// Features Component
const Features = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-red-600">Key</span> Features
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover the powerful capabilities that make our platform unique and efficient.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featureData.map((feature) => (
                    <FeatureCard 
                        key={feature.title} 
                        title={feature.title} 
                        description={feature.description} 
                        icon={feature.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default Features;