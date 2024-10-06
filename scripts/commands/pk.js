module.exports.config = {
  name: "pk",
  version: "1.0.0",
  permission: 0,
  credits: "farhan",
  description: "Random pk",
  prefix: true,
  category: "Media",
  usages: "pk",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];

  var hi = ["--রবিউল বসের দিকে নজর দিবি না সিঙ্গেল পোলা বস 🧐🧐 --Robiul-𝐈𝐬𝐥𝐚𝐦--"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [   
    "https://i.imgur.com/6LlSG1e.mPp4",
    "https://i.imgur.com/CeshhAq.jpeg",
    "https://i.imgur.com/lgTwQkN.jpeg",
    
  ];

  var callback = () => {
    api.sendMessage({ body: `「 ${know} 」`, attachment: fs.createReadStream(__dirname + "/cache/15.mp4") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));
  };

  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/15.mp4")).on("close", () => callback());
};
