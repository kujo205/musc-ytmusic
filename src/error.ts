export class YtMusicError extends Error {
  constructor(message: string) {
    super(
      `Error working with youtube music API: ${message} or you dont have yt channel`
    );
    this.name = 'YtMusicError';
  }
}
