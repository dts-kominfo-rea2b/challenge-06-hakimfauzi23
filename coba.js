const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

let pureData = [];
const saveData = (word) => {
  pureData.push(word);
};

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

function bacaData(fnCallback) {
  fs.readFile(file1, "utf-8", (err, data) => {
    if (err) {
      fnCallback(err, null);
    }
    saveData(dataGenerator(JSON.parse(data)));
    fs.readFile(file2, "utf-8", (err, data) => {
      if (err) {
        fnCallback(err, null);
      }
      saveData(dataGenerator(JSON.parse(data)));
      fs.readFile(file3, "utf-8", (err, data) => {
        if (err) {
          fnCallback(err, null);
        }
        saveData(dataGenerator(JSON.parse(data)));
        fnCallback(null, pureData);
      });
    });
  });
}

bacaData();

