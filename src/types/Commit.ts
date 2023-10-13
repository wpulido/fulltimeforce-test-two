export type Commit = {
  html_url: string;
  commit: {
    author: {
      name: string;
    };
    message: string;
    committer: {
      date: Date;
    };
  };
};