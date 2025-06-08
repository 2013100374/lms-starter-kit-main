import React from "react";

export default function StickyBottomCTA() {
  return (
    <div>
      {/* Sticky Bottom CTA (Mobile Only) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-md border-t border-white/10 p-4 z-50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">$299</p>
            <p className="text-xs text-gray-400">Lifetime Access</p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg shadow-blue-500/20">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
