import React from "react";

interface ImageUploaderProps {
  value: string | undefined; // Allows value to be string or undefined
  onChange: (value: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ value, onChange }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          onChange(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {value ? (
        <img src={value} alt="Selected Image" />
      ) : (
        <p>No image selected</p>
      )}
    </div>
  );
};

export default ImageUploader;
