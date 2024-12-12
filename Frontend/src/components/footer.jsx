import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, GitFork, UserPlus } from "lucide-react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-gradient-to-br from-red-50 to-red-100 py-12 px-4 shadow-lg">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Heart className="text-red-600 w-10 h-10 mr-2" />
              <h3 className="text-2xl font-bold text-red-800">RedBond</h3>
            </div>
            <p className="text-gray-600 text-center md:text-left max-w-xs mx-auto md:mx-0">
              Connecting donors with those in need. 
              Your Blood, Their Hope.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-red-800">Quick Links</h4>
            <div className="space-y-3">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-600 hover:text-red-700 hover:bg-red-50 transition-colors"
              >
                <GitFork className="mr-2 w-5 h-5" />
                Find Donors
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-600 hover:text-red-700 hover:bg-red-50 transition-colors"
              >
                <Heart className="mr-2 w-5 h-5" />
                Request Blood
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-600 hover:text-red-700 hover:bg-red-50 transition-colors"
              >
                <UserPlus className="mr-2 w-5 h-5" />
                Become a Donor
              </Button>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-4 text-red-800">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a 
                href="#" 
                className="text-gray-600 hover:text-red-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-red-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5.4c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-red-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              contact@redbond.org
              <br />
              +1 (555) DONATE-NOW
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-red-200 text-center text-gray-600">
          <p className="text-sm">
            &copy; {date.getFullYear()} RedBond. Saving Lives, One Drop at a Time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;