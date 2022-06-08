const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

const dataGenerator = (rawData) => {
  if (rawData.message !== undefined) {
    let processedData = rawData.message.split(" ");
    return processedData[processedData.length - 1];
  }

  if (rawData[0].message !== undefined) {
    let processedData = rawData[0].message.split(" ");
    return processedData[processedData.length - 1];
  }

  if (rawData[0].data.message !== undefined) {
    let processedData = rawData[0].data.message.split(" ");
    return processedData[processedData.length - 1];
  }
};

async function bacaData(fnCallback) {
  let fileList = [file1, file2, file3];
  let data = [];

  try {
    for (const e of fileList) {
      const readedData = await fs.promises.readFile(e, "utf-8");
      data.push(dataGenerator(JSON.parse(readedData)));
    }
    fnCallback(null, data);
  } catch (error) {
    fnCallback(err, null);
  }
}

bacaData();

// async function readingDirectory(directory) {
//   const fileNames = await fs.promises.readdir(directory);
//   for (let file of fileNames) {
//     const absolutePath = path.join(directory, file);
//     log(absolutePath);

//     const data = await fs.promises.readFile(absolutePath);
//     log(data);
//   }
// }

// readingDirectory(folder)
//   .then(() => {
//     log("all done");
//   })
//   .catch((err) => {
//     log(err);
//   });
