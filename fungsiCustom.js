// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3


const dataGenerator = (rawData) => {

  // Fungsi untuk mengambil kata terakhir dari pesan yg sudah dibaca
  // Setiap kondisi spesifik dengan setiap file yang akan dibaca

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
    // Menggunakan for of, karena await tidak akan bs berjalan apabila menggunakan for each.
    for (const e of fileList) {
      const readedData = await fs.promises.readFile(e, "utf-8");
      // menggunakan fungsi dataGenerator untuk mendapatkan kata terakhir.
      data.push(dataGenerator(JSON.parse(readedData)));
    }
    fnCallback(null, data);
  } catch (err) {
    fnCallback(err, null);
  }
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
