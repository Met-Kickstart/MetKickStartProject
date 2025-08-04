// routes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// ... other imports

const AppRoutes = () => {
  return (
    <Routes>
      {/* Your existing routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      {/* Social Media Redirect Routes */}
      <Route 
        path="/social/facebook" 
        element={
          <SocialRedirect url="https://www.facebook.com/yourpage" />
        } 
      />
      <Route 
        path="/social/twitter" 
        element={
          <SocialRedirect url="https://twitter.com/yourhandle" /> 
        }
      />
      <Route 
        path="/social/linkedin" 
        element={
          <SocialRedirect url="https://www.linkedin.com/yourprofile" />
        }
      />
      <Route 
        path="/social/instagram" 
        element={
          <SocialRedirect url="https://www.instagram.com/yourprofile" />
        }
      />
      <Route 
        path="/social/youtube" 
        element={
          <SocialRedirect url="https://www.youtube.com/watch?v=tJXSgP9csCY" />
        }
      />
    </Routes>
  );
};

// SocialRedirect component
const SocialRedirect = ({ url }) => {
  React.useEffect(() => {
    window.open(url, '_blank', 'noopener,noreferrer');
    // Optional: redirect back to home after opening the link
    window.location.href = '/';
  }, [url]);

  return <div>Redirecting to social media...</div>;
};

export default AppRoutes;