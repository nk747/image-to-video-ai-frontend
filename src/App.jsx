import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
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
      console.error(error);
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
      console.error(error);
      alert('Video conversion failed');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>🧠 Prompt to Video AI</h2>
      <input
        type="text"
        placeholder="Enter prompt"
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
          <h4>Generated Image:</h4>
          <img src={imageUrl} alt="Generated" style={{ width: '300px', marginTop: '10px' }} />
        </div>
      )}

      {videoUrl && (
        <div>
          <h4>Generated Video:</h4>
          <video controls src={videoUrl} style={{ width: '300px', marginTop: '10px' }} />
        </div>
      )}
    </div>
  );
};

export default App;
