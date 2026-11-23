import React from "react";

interface MediaAssetProps {
  src?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  fallback?: React.ReactNode;
}

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

export const MediaAsset: React.FC<MediaAssetProps> = ({ src, alt = "", className, style, fallback }) => {
  if (!src) return fallback ?? null;

  if (isVideo(src)) {
    return (
      <video
        src={src}
        className={className}
        style={style}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    );
  }

  return <img src={src} alt={alt} className={className} style={style} />;
};
