const https = require('https');
const fs = require('fs');
const os = require('os');
const stream = require('stream');

const {path, url, ex} = {
  Linux: {path: '/usr/bin/b2', url: 'https://f000.backblazeb2.com/file/backblazefiles/b2/cli/linux/b2', ex: true},
  Darwin: {path: '/usr/local/bin/b2', url: 'https://f000.backblazeb2.com/file/backblazefiles/b2/cli/osx/b2', ex: true},
  Windows_NT: {path: 'C:\\Windows\\system32\\b2.exe', url: 'https://f000.backblazeb2.com/file/backblazefiles/b2/cli/windows/b2.exe'},
}[os.type()];

https.get(url, res => {
  stream.pipeline(
    res,
    fs.createWriteStream(path),
    err => {
      if (err) {
        console.error(err);
      } else if (ex) {
        fs.chmodSync(path, 0o555);
      }
    }
  );
});

