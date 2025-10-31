
import React from 'react';
import { SparklesIcon } from './Icons';

interface ResultDisplayProps {
  resultImage: string | null;
  isLoading: boolean;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-full text-center">
        <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="mt-4 text-lg font-semibold text-gray-700">Generating your new look...</p>
        <p className="text-sm text-gray-500">This may take a moment. Our AI stylist is hard at work!</p>
    </div>
);


export const ResultDisplay: React.FC<ResultDisplayProps> = ({ resultImage, isLoading }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-4">
      <div className="w-full h-full aspect-w-1 aspect-h-1">
        {isLoading ? (
          <LoadingSpinner />
        ) : resultImage ? (
          <img
            src={resultImage}
            alt="Virtual try-on result"
            className="object-contain w-full h-full rounded-lg"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <SparklesIcon className="h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Your Try-On Result</h3>
            <p className="mt-2 max-w-sm">The generated image of you wearing the selected garment will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};
