import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Html5Qrcode } from 'html5-qrcode';
import './ScanResults.css';

function ScanResults() {
  const [scanning, setScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [error, setError] = useState('');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate();

  // Start camera when scanning begins
  const startCamera = async () => {
    try {
      setError('');
      setScanning(true);
      
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment', // Use back camera on mobile
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (err) {
      console.error('Camera error:', err);
      setError('Unable to access camera. Please allow camera permissions or use file upload.');
      setScanning(false);
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setScanning(false);
  };

  // Capture image from video
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Draw video frame to canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Convert to data URL
      const imageData = canvas.toDataURL('image/png');
      setCapturedImage(imageData);
      
      // Stop camera
      stopCamera();
      
      // Simulate OCR processing
      processDocument(imageData);
    }
  };

  // Process document (simulate OCR)
  const processDocument = (imageData) => {
    // In a real application, you would send this to your Python backend
    // for OCR processing using Tesseract or similar
    
    setTimeout(() => {
      setScanComplete(true);
    }, 2000);
  };

  // Handle file upload (fallback option)
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCapturedImage(e.target.result);
        processDocument(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Confirm results and navigate
  const confirmResults = () => {
    navigate('/student/recommendations');
  };

  // Reset scan
  const resetScan = () => {
    setScanComplete(false);
    setCapturedImage(null);
    stopCamera();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="scan-container">
      <div className="scan-header">
        <Link to="/student/dashboard" className="back-btn">← Back</Link>
        <h1>Scan Matric Results</h1>
        <p>Use your camera to scan your Grade 12 results document</p>
      </div>

      {!scanComplete ? (
        <div className="scan-section">
          {!scanning ? (
            <div className="scan-options">
              <button 
                className="scan-btn camera"
                onClick={startCamera}
              >
                <span className="btn-icon">📷</span>
                Open Camera
              </button>
              
              <div className="scan-divider">
                <span>OR</span>
              </div>
              
              <label className="scan-btn upload">
                <span className="btn-icon">📁</span>
                Upload Document
                <input 
                  type="file" 
                  accept="image/*,.pdf" 
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          ) : (
            <div className="camera-wrapper">
              <div className="camera-container">
                <video 
                  ref={videoRef}
                  autoPlay 
                  playsInline
                  className="camera-video"
                />
                <div className="camera-overlay">
                  <div className="scan-frame"></div>
                </div>
              </div>
              
              <div className="camera-controls">
                <button className="btn-cancel" onClick={stopCamera}>
                  Cancel
                </button>
                <button className="btn-capture" onClick={captureImage}>
                  📸 Capture
                </button>
              </div>
              
              <p className="scan-instruction">
                Position your results document in the frame
              </p>
            </div>
          )}
          
          {/* Hidden canvas for capturing */}
          <canvas ref={canvasRef} style={{ display: 'none' }} />
          
          {error && <div className="error-message">{error}</div>}
        </div>
      ) : (
        <div className="results-preview">
          <div className="preview-header">
            <h2>✓ Results Extracted Successfully</h2>
            <p>Please verify the information below</p>
          </div>

          {capturedImage && (
            <div className="captured-image-preview">
              <img src={capturedImage} alt="Captured document" />
            </div>
          )}

          <div className="student-info">
            <h3>Learner Name</h3>
            <p>Examination Number: 123456789</p>
            <p className="aps-score">APS Score: <strong>32</strong></p>
          </div>

          <div className="subjects-table">
            <h3>Subjects & Marks</h3>
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Level</th>
                  <th>Mark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mathematics</td>
                  <td>Higher Grade</td>
                  <td className="mark">75%</td>
                </tr>
                <tr>
                  <td>Physical Sciences</td>
                  <td>Higher Grade</td>
                  <td className="mark">68%</td>
                </tr>
                <tr>
                  <td>English Home Language</td>
                  <td>Higher Grade</td>
                  <td className="mark">72%</td>
                </tr>
                <tr>
                  <td>Life Sciences</td>
                  <td>Higher Grade</td>
                  <td className="mark">70%</td>
                </tr>
                <tr>
                  <td>Geography</td>
                  <td>Higher Grade</td>
                  <td className="mark">65%</td>
                </tr>
                <tr>
                  <td>History</td>
                  <td>Higher Grade</td>
                  <td className="mark">60%</td>
                </tr>
                <tr>
                  <td>Sesotho</td>
                  <td>Higher Grade</td>
                  <td className="mark">78%</td>
                </tr>
                <tr>
                  <td>Life Orientation</td>
                  <td>Higher Grade</td>
                  <td className="mark">85%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="action-buttons">
            <button className="btn-confirm" onClick={confirmResults}>
              ✓ Confirm & Get Recommendations
            </button>
            <button className="btn-rescan" onClick={resetScan}>
              ↺ Rescan Document
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScanResults;