import { Button } from "@/components/ui/button"
import DialogDemo from "../auth/loginForm";


const  HeroSection=()=> {
  return (
    <div className="relative my-4 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover sm:object-scale-down"
          src="https://www.cpsmumbai.org/Uploads/2762023161833920.png"
          alt="Blood donation"
        />
        <div className="absolute inset-0 mix-blend-multiply opacity-40" />
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 bg-primary/40 rounded-sm">
        <div className="md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight">
            Give the gift of life:
            <span className="block text-primary-">Donate Blood Today</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-secondary/70 max-w-3xl">
            Your donation can save up to three lives. Join our community of heroes and make a difference in someone's life today. Every drop counts!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <DialogDemo/>
            <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-100 bg-opacity-20 hover:bg-opacity-30 md:py-4 md:text-lg md:px-10">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-2/3 h-1/3 md:h-2/3">
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-red-400 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
          width="364"
          height="384"
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
        </svg>
      </div>
    </div>
  )
}


export default HeroSection;