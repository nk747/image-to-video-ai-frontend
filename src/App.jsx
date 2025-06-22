import React, { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const generateImage = async () => {
    const response = await fetch("https://image-to-video-api.onrender.com/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setImageUrl(data.image_url);
  };

  const generateVideo = async () => {
    const response = await fetch("https://image-to-video-api.onrender.com/generate-video", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image_url: imageUrl }),
    });
    const data = await response.json();
    setVideoUrl(data.video_url);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Image to Video AI</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your image prompt..."
        style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
      />
      <br />
      <button onClick={generateImage} style={{ margin: "5px" }}>
        Generate Image
      </button>
      <button onClick={generateVideo} style={{ margin: "5px" }} disabled={!imageUrl}>
        Convert to Video
      </button>
      <div>
        {imageUrl && <img src={imageUrl} alt="Generated" style={{ width: "300px", margin: "10px" }} />}
        {videoUrl && <video src={videoUrl} controls autoPlay style={{ width: "300px", margin: "10px" }} />}
      </div>
    </div>
  );
}

export default App;
