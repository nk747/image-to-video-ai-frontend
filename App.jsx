import { useState } from "react"; import axios from "axios";

export default function Home() { const [prompt, setPrompt] = useState(""); const [imageUrl, setImageUrl] = useState(""); const [videoUrl, setVideoUrl] = useState(""); const [loading, setLoading] = useState(false);

const generateImage = async () => { setLoading(true); try { const res = await axios.post("http://localhost:8000/generate-image", { prompt }); setImageUrl(res.data.image_url); } catch (err) { alert("Image generation failed"); } setLoading(false); };

const generateVideo = async () => { setLoading(true); try { const res = await axios.post("http://localhost:8000/generate-video", { prompt, image_url: imageUrl, }); setVideoUrl(res.data.video_url); } catch (err) { alert("Video generation failed"); } setLoading(false); };

return ( <main className="min-h-screen p-4 bg-gray-100 flex flex-col items-center justify-center"> <h1 className="text-3xl font-bold mb-6">Image to Video AI</h1> <input className="w-full max-w-md p-2 mb-4 border border-gray-400 rounded" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enter your prompt..." /> <button
className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
onClick={generateImage}
disabled={loading}
> Generate Image </button> {imageUrl && ( <> <img src={imageUrl} alt="Generated" className="max-w-md mb-4 rounded" /> <button
className="bg-green-500 text-white px-4 py-2 rounded"
onClick={generateVideo}
disabled={loading}
> Generate Video </button> </> )} {videoUrl && ( <video className="mt-4" controls width="300"> <source src={videoUrl} type="video/mp4" /> Your browser does not support the video tag. </video> )} </main> ); }
