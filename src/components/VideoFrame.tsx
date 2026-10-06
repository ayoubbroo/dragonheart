/** Renders an embed or mp4 for a configured URL. Caller guarantees url is non-empty. */
export default function VideoFrame({ url, title }: { url: string; title: string }) {
  if (/\.(mp4|webm|ogg)(\?|$)/i.test(url))
    return <video src={url} controls autoPlay playsInline className="absolute inset-0 h-full w-full bg-black" aria-label={title} />;
  return <iframe src={url} title={title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full border-0" />;
}
