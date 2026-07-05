import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
     
   const formData = new FormData(e.target);

   axios.post("http://localhost:3000/create-post", formData)
    .then((res) => {
      console.log(res.data);
      navigate("/feed"); // Redirect to feed page after successful upload
    })
    .catch((err) => {
      console.error(err);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Upload Image
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Caption */}
          <div>
            <label
              htmlFor="caption"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Caption
            </label>

            <input
              type="text"
              id="caption"
              name="caption"
              placeholder="Enter image caption..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Image
            </label>

            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="block w-full text-sm text-gray-600
                file:mr-4
                file:rounded-lg
                file:border-0
                file:bg-blue-600
                file:px-4
                file:py-2
                file:font-medium
                file:text-white
                hover:file:bg-blue-700
                cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}