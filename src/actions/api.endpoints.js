export const POPULAR_PODCASTS_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
export const PODCAST_DETAIL_URL = (podcastId) => `https://api.allorigins.win/get?url=https://itunes.apple.com/lookup?id=${podcastId}`;
