import React from "react";
import { Button } from "@/components/ui/button";
import DialogDemo from "../auth/triggerBtn";
import { Heart, Droplet, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white py-16 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-red-800 leading-tight">
            <span className="block">Give the Gift of Life:</span>
            <span className="block text-red-600">Donate Blood Today</span>
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Your donation can save up to three lives. Join our community of
            heroes and make a difference in someone's life today. Every drop
            counts!
          </p>

          {/* Impact Statistics */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <Droplet className="mx-auto text-red-600 mb-2" size={32} />
              <span className="block font-bold text-red-800">3 Lives</span>
              <span className="text-sm text-gray-600">Saved per Donation</span>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <Heart className="mx-auto text-red-600 mb-2" size={32} />
              <span className="block font-bold text-red-800">1 Hour</span>
              <span className="text-sm text-gray-600">Your Time</span>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <Users className="mx-auto text-red-600 mb-2" size={32} />
              <span className="block font-bold text-red-800">1000+</span>
              <span className="text-sm text-gray-600">Donors</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* <DialogDemo className="w-full sm:w-auto" login={true}/>
            <DialogDemo className="w-full sm:w-auto" login={false} /> */}
            <Link to="/login">
              <Button variant="destructive" size="lg" className="w-full sm:w-auto">
                login
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              signup
            </Button>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src="/images/hero.png"
            alt="Blood Donation"
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-red-100 opacity-50 clip-path-wave"></div>
    </div>
  );
};

export default HeroSection;
