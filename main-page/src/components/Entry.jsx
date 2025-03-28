import * as React from 'react';

function Entry({ title, caption, onClick }) {
  return (
    <div className="w-full px-2 py-2 h-full bg-gray-100 border-1 border-gray-300/50 shadow-sm text-left">
      {/* Title that acts as a button */}
      <button
        onClick={onClick}
        className="text-lg font-semibold text-maroon hover:text-darkmaroon hover:underline focus:outline-none"
      >
        {title}
      </button>

      {/* Caption */}
      {caption && (
        <p className="mt-2 text-sm text-gray-600">
          {caption}
        </p>
      )}
    </div>
  );
}

export default Entry;

