import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import { Droplet, Heart, Shield, Zap, Stethoscope, CheckCircle } from 'lucide-react'
import DialogDemo from '../auth/triggerBtn';

const reasons = [
    {
        title: "Save Lives", 
        description: "You can save up to 3 lives with a single donation.",
        icon: Heart
    },
    {
        title: "High Demand", 
        description: "Blood is needed every 2 seconds for various medical procedures.",
        icon: Zap
    },
    {
        title: "Be a Hero", 
        description: "Less than 10% of eligible people donate blood yearly. Be part of this heroic group!",
        icon: Shield
    },
    {
        title: "Unique Resource", 
        description: "Blood cannot be manufactured; it can only come from generous donors like you.",
        icon: Droplet
    },
    {
        title: "Health Benefits", 
        description: "Regular blood donation can reduce iron levels and lower the risk of certain health issues.",
        icon: Stethoscope
    },
    {
        title: "Free Health Screening", 
        description: "Every time you donate, your blood is tested for various conditions, giving you insights into your health.",
        icon: CheckCircle
    },
];

const ReasonCard = ({ title, description, icon: Icon }) => (
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

const Why = () => {
  return (
    <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-red-600">Why</span> Donate Blood
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Blood donation is a simple act that can make an extraordinary difference. Discover the incredible impact you can have by becoming a donor.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => (
                <ReasonCard 
                    key={reason.title} 
                    title={reason.title} 
                    description={reason.description} 
                    icon={reason.icon}
                />
            ))}
        </div>

        <div className="flex justify-center mt-12 space-x-4">
            <Button variant="destructive" size="lg">
                Donate Now
            </Button>
            <DialogDemo>
                <Button variant="outline" size="lg">
                    Learn More
                </Button>
            </DialogDemo>
        </div>
    </div>
  )
}

export default Why;