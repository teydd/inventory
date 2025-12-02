import HomeCTAs from "./HomeCTAs";

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
              Streamline your inventory tracking with our powerful, easy-to-use
              management system.Track products, monitor stock levels and gain
              valuable insights
            </p>
            <HomeCTAs />
          </div>
        </div>
      </div>
    </>
  );
}
