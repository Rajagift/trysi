
import React, { useRef } from 'react';
import { UploadIcon, PersonIcon, GarmentIcon } from './Icons';

interface ImageUploaderProps {
  id: string;
  title: string;
  description: string;
  onImageUpload: (base64: string | null) => void;
  imagePreviewUrl: string | null;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  id,
  title,
  description,
  onImageUpload,
  imagePreviewUrl,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageUpload(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onImageUpload(null);
    if(fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  const isModelUploader = id.includes('model');

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 w-full transition-shadow hover:shadow-lg">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <div
          onClick={handleUploadClick}
          className="mt-4 aspect-w-1 aspect-h-1 w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200"
        >
          {imagePreviewUrl ? (
            <div className="relative w-full h-full group">
              <img
                src={imagePreviewUrl}
                alt="Preview"
                className="object-cover w-full h-full rounded-lg"
              />
               <button 
                onClick={handleClear}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Clear image"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
            </div>
          ) : (
            <div className="text-center p-6">
              {isModelUploader ? (
                <PersonIcon className="mx-auto h-12 w-12 text-gray-400" />
              ) : (
                <GarmentIcon className="mx-auto h-12 w-12 text-gray-400" />
              )}
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold text-indigo-600">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, WEBP</p>
            </div>
          )}
          <input
            id={id}
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/png, image/jpeg, image/webp"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};
