import React, { useState, useRef, useEffect } from 'react';

export const PropertyMedia = ({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  controls = true,
  autoPlay = true,
  muted = true,
  loop = true,
}) => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = muted;
      videoRef.current.play().catch((err) => {
        // Autoplay may be deferred by browser policy if unmuted
      });
    }
  }, [src, autoPlay, muted]);

  if (!src) return null;

  // Check if src is a Google Drive link
  const isGoogleDrive = src.includes('drive.google.com') || src.includes('googleusercontent.com');
  const isDirectVideo = src.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i);

  if (isGoogleDrive) {
    // Extract file ID from google drive link if present
    const driveIdMatch = src.match(/\/d\/([a-zA-Z0-9_-]+)/) || src.match(/id=([a-zA-Z0-9_-]+)/);
    const driveId = driveIdMatch ? driveIdMatch[1] : null;

    if (driveId && !videoError) {
      const directVideoSrc = `https://lh3.googleusercontent.com/d/${driveId}`;

      return (
        <div className={`relative overflow-hidden bg-black ${className}`}>
          {/* Try HTML video first for seamless play */}
          <video
            ref={videoRef}
            src={directVideoSrc}
            className="w-full h-full object-cover"
            autoPlay={autoPlay}
            controls={controls}
            muted={muted}
            loop={loop}
            playsInline
            onError={() => setVideoError(true)}
          />
        </div>
      );
    }

    if (driveId && videoError) {
      const iframeSrc = `https://drive.google.com/file/d/${driveId}/preview`;
      return (
        <div className={`relative overflow-hidden bg-black ${className}`}>
          <iframe
            src={iframeSrc}
            className="w-full h-full border-0 pointer-events-auto"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={alt || "Property Video"}
          />
        </div>
      );
    }
  }

  if (isDirectVideo) {
    return (
      <div className={`relative overflow-hidden bg-black ${className}`}>
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          autoPlay={autoPlay}
          controls={controls}
          muted={muted}
          loop={loop}
          playsInline
        />
      </div>
    );
  }

  // Fallback / standard image or GIF
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
    />
  );
};
