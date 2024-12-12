import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">RedBond</h3>
            <p className="text-gray-600">
              Connecting donors with those in need.
              Your Blood, Their Hope.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="flex flex-row items-center">
              <li>
                <Button
                  variant="link"
                  href="/donors"
                  className="text-gray-600 hover:text-gray-700 transition-colors duration-200"
                >
                  Find Donors
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  href="/request"
                  className="text-gray-600 hover:text-gray-700 transition-colors duration-200"
                >
                  Request Blood
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  href="/register"
                  className="text-gray-600 hover:text-gray-700 transition-colors duration-200"
                >
                  Become a Donor
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary text-center text-gray-600">
          <p>&copy; {date.getFullYear()} BloodConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
