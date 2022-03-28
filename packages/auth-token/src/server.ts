import http from 'http';

export const localhostUrl = async (port: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const server = http
      .createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('You can now close this window');
        res.once('finish', () => {
          server.close();
          if (req.url) {
            resolve(req.url.slice(1));
          }
          reject("Couldn't get code or state");
        });
      })
      .listen(port);
  });
};
