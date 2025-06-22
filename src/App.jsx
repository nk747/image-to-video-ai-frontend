import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateImage = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/generate-image`, { prompt });
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      alert('Image generation failed');
    }
    setLoading(false);
  };

  const handleConvertToVideo = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/generate-video`, { imageUrl });
      setVideoUrl(response.data.videoUrl);
    } catch (error) {
      alert('Video generation failed');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🖼️ Image to Video AI</h1>
      <input
        type="text"
        placeholder="Enter your prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '10px' }}
      />
      <br />
      <button onClick={handleGenerateImage} disabled={loading} style={{ marginRight: '10px' }}>
        Generate Image
      </button>
      <button onClick={handleConvertToVideo} disabled={loading || !imageUrl}>
        Convert to Video
      </button>

      {loading && <p>Processing...</p>}

      {imageUrl && (
        <div>
          <h3>Generated Image:</h3>
          <img src={imageUrl} alt="Generated" style={{ width: '300px' }} />
        </div>
      )}

      {videoUrl && (
        <div>
          <h3>Generated Video:</h3>
          <video src={videoUrl} controls style={{ width: '300px' }} />
        </div>
      )}
    </div>
  );
}

export default App;
fix: full working UI
