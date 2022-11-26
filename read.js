const fs = require("fs");


const simiFetch = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (!err) resolve(data);
      else reject(err);
    });
  });
};
const seeData = async (path) => {
    try {
      const data = await simiFetch(path);
      console.log(data);
    } catch (error) {
      console.log("revisa informacion, tienes un error", error);
    }
  };
  
  console.log(seeData("data.json"));
    