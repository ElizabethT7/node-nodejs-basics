import fs from 'node:fs';
const fileName = 'fresh.txt';

const create = async () => {
    try {
        if (!fs.existsSync(fileName)) {
          fs.appendFile(`files/${fileName}`, 'I am fresh and young', function (err) {
            if (err) throw err;

          })
        }
      } catch (err) {
        throw err;
      }
};

await create();