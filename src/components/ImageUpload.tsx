import { useState } from 'react';
import Image from 'next/future/image';

import Button from './Button';

type Props = {
  onImageUpload: (imageUrl: string) => void;
};

function ImageUpload({ onImageUpload }: Props) {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const fileUrl = URL.createObjectURL(file);

    setImage(file);
    setPreview(fileUrl);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('file', image);
    formData.append('field', image);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
      credentials: 'same-origin',
    });
    const result = await response.json();

    if (!response.ok) {
      return;
    }

    setImage(null);
    setPreview(null);
    onImageUpload(result.data.url);
  };

  return (
    <form onSubmit={onSubmit}>
      {preview && (
        <Image
          src={preview}
          alt="preview"
          height={256}
          width={384}
          className="h-64 w-full object-cover"
        />
      )}
      {!preview && (
        <label
          htmlFor="file"
          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#ccc] bg-[#f4f4f4] hover:bg-gray-100"
          onDrop={(e) => {
            e.nativeEvent.preventDefault();
            if (!e) return;

            const file = e.dataTransfer.files[0];
            const fileUrl = URL.createObjectURL(file);

            setImage(file);
            setPreview(fileUrl);
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="mb-3 h-10 w-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF
            </p>
          </div>
          <input
            id="file"
            type="file"
            className="hidden"
            onChange={onFileChange}
          />
        </label>
      )}
      <Button type="submit" className="mt-5 w-full">
        Upload
      </Button>
    </form>
  );
}

export default ImageUpload;
