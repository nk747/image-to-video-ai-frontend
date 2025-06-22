import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = process.env.REACT_APP_API_URL;

  const generateImage = async () => {
    setLoading(true);
    setVideo(null);
    try {
      const res = await axios.post(`${api}/generate-image`, { prompt });
      setImage(res.data.image_url);
    } catch (err) {
      alert("Image generation failed");
    }
    setLoading(false);
  };

  const generateVideo = async () => {
    if (!image) return alert("Please generate an image first");
    setLoading(true);
    try {
      const res = await axios.post(`${api}/generate-video`, { image_url: image });
      setVideo(res.data.video_url);
    } catch (err) {
      alert("Video generation failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">🎬 Image to Video AI</h1>

      <input
        type="text"
        className="p-2 w-full max-w-md text-black rounded mb-4"
        placeholder="Enter prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="flex gap-4">
        <button
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          onClick={generateImage}
          disabled={loading}
        >
          Generate Image
        </button>
        <button
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
          onClick={generateVideo}
          disabled={loading || !image}
        >
          Convert to Video
        </button>
      </div>

      {loading && <p className="mt-4">Loading...</p>}

      {image && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">🖼️ Generated Image:</h2>
          <img src={image} alt="Generated" className="max-w-xs rounded shadow" />
          <a
            href={image}
            download
            className="block mt-2 text-blue-400 hover:underline"
          >
            Download Image
          </a>
        </div>
      )}

      {video && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">🎥 Generated Video:</h2>
          <video src={video} controls className="max-w-xs rounded shadow" />
          <a
            href={video}
            download
            className="block mt-2 text-green-400 hover:underline"
          >
            Download Video
          </a>
        </div>
      )}
    </div>
  );
}
