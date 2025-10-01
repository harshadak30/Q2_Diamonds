const EventsSection: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start gap-16">
          <AnimatedCircle />
          
          <div className="flex-1">
            <div className="relative mb-12 rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-purple-900 via-black to-red-900">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZyI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=')] opacity-50"></div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-5xl font-bold text-white mb-12">UPCOMING EVENTS</h2>
            
            <div className="space-y-6">
              <h3 className="text-3xl text-blue-400 mb-4">Small Satellite Conference</h3>
              <p className="text-gray-300 text-lg">
                Salt Palace Convention Center 100 South West<br/>
                Temple Salt Lake City, Utah
              </p>
              <p className="text-gray-400">August 11th–13th, 2025</p>
              
              <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
                <span>Learn More</span>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 10h10m-5-5l5 5-5 5"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Research Grants Section
const ResearchSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-16">
          <div className="flex-1">
            <AnimatedCircle className="mb-8" />
            <p className="text-sm text-gray-500 mb-4">Collaboration</p>
            <h2 className="text-5xl font-bold mb-8">RESEARCH GRANTS</h2>
          </div>

          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Quantum Quest is committed to advancing and supporting research at the forefront of knowledge. 
              Through our Research Grant Programme, we provide funding to innovative projects that align with 
              our mission and values and we are committed to supporting projects in the following research themes:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-700">- Quantum Sensing and Computing</li>
              <li className="text-gray-700">- Optoelectronics</li>
              <li className="text-gray-700">- High-Power Electronics</li>
              <li className="text-gray-700">- RF Electronics/high frequency devices</li>
              <li className="text-gray-700">- Thermal Management/Heat spreaders</li>
            </ul>

            <p className="text-gray-700 mb-8">
              For inquiries or additional information about grants and PhD scholarships available, please contact us.
            </p>

            <a href="#/contact" className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors">
              CHAT WITH US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
