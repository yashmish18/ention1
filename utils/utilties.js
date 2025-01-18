export const SupabaseTable = {
  Products: "product",
  Category: "category",
  ImageBucket: "images",
};

export function extractYouTubeVideoId(url) {
  let videoId = null;

  // Check if it's a short youtu.be link
  const shortLinkMatch = url.match(/^https:\/\/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortLinkMatch) {
    videoId = shortLinkMatch[1];
  } else {
    // Check if it's a full youtube.com link with "v" query parameter
    const fullLinkMatch = url.match(/v=([a-zA-Z0-9_-]{11})/);
    if (fullLinkMatch) {
      videoId = fullLinkMatch[1];
    }
  }

  return videoId;
}
