import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-linear-to-r from-cyan-50 to-cyan-200 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-mono font-bold text-gray-800 mb-6">
            Inventory Management
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Streamline your inventory tracking with our powerful, easy-to-use management system.Track products, monitor stock levels and gain valuable insights 
          </p>
          <div className="flex gap-4 justify-center">
             <Link className="bg-cyan-600 text-white border-2 rounded-lg px-8 py-3 font-semibold hover:bg-cyan-700 transition-colors" href="/sign-in">Sign in</Link>
              <Link className="bg-white text-cyan-600 px-8 py-3 rounded-lg border-2 border-cyan-600 hover:bg-cyan-100" href="/sign-in">Learn More</Link>
          </div>
        </div>
      </div>

    </div>    
    </>
  );
}
