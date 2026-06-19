import { CardSim, DollarSign, TrendingUp, Zap } from "lucide-react";

const Banner2 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      
      <h1 className="text-4xl font-bold mb-4">How it Works</h1>
      <p className="text-lg text-base-content/70 mb-10">
        Get funded in just 4 simple steps
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10  mx-auto max-w-7xl">
        
        <div className="card bg-base-100 shadow-xl border border-gray-300">
          <div className="card-body">
            <h2 className="card-title font-bold text-lg"><CardSim />1. Create Account</h2>
            <p>Sign up with your email and basic information. It takes less than 5 minutes.</p>
            
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border border-gray-300">
          <div className="card-body">
            <h2 className="card-title font-bold text-lg"><DollarSign />2. Apply for Loan</h2>
            <p>Fill out a simple application form with the loan amount you need.</p>
           
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border border-gray-300">
          <div className="card-body">
            <h2 className="card-title font-bold text-lg"><Zap />3. Quick Approval</h2>
            <p>Our AI-powered system reviews your application instantly. Most are approved within hours.</p>
            
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl border border-gray-300">
          <div className="card-body">
            <h2 className="card-title font-bold text-lg"><TrendingUp />4. Get Funded</h2>
            <p>Once approved, funds are transferred directly to your account within 24 hours.</p>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner2;