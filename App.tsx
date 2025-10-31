
import React, { useState, useCallback } from 'react';
import { ImageUploader } from './components/ImageUploader';
import { ResultDisplay } from './components/ResultDisplay';
import { generateTryOnImage } from './services/geminiService';
import { LogoIcon } from './components/Icons';

const App: React.FC = () => {
  const [modelImage, setModelImage] = useState<string | null>(null);
  const [garmentImage, setGarmentImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleTryOn = useCallback(async () => {
    if (!modelImage || !garmentImage) {
      setError('Please upload both a model and a garment image.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResultImage(null);

    try {
      // Extract base64 data from data URLs
      const modelImageBase64 = modelImage.split(',')[1];
      const garmentImageBase64 = garmentImage.split(',')[1];

      const generatedImageBase64 = await generateTryOnImage(modelImageBase64, garmentImageBase64);
      setResultImage(`data:image/jpeg;base64,${generatedImageBase64}`);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [modelImage, garmentImage]);

  const handleReset = () => {
    setModelImage(null);
    setGarmentImage(null);
    setResultImage(null);
    setError(null);
    setIsLoading(false);
  };

  const canTryOn = modelImage && garmentImage && !isLoading;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <LogoIcon className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Virtual Try-On Studio
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how an outfit looks on you before you buy. Upload your photo, pick a clothing item, and let our AI do the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Input Column */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <ImageUploader
              id="model-image"
              title="Step 1: Upload Your Photo"
              description="A clear, full-body photo works best."
              onImageUpload={setModelImage}
              imagePreviewUrl={modelImage}
            />
            <ImageUploader
              id="garment-image"
              title="Step 2: Upload Garment"
              description="Use a clean image of the clothing item."
              onImageUpload={setGarmentImage}
              imagePreviewUrl={garmentImage}
            />
          </div>

          {/* Result Column */}
          <div className="lg:col-span-2">
            <ResultDisplay
              resultImage={resultImage}
              isLoading={isLoading}
            />
          </div>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            <strong>Error:</strong> {error}
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleTryOn}
            disabled={!canTryOn}
            className={`w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              ${canTryOn
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
          >
            {isLoading ? 'Generating...' : 'Virtual Try On'}
          </button>
           <button
            onClick={handleReset}
            className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-300 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Start Over
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
