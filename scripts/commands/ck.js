module.exports.config = {
  name: "ck",
  version: "1.0.0",
  permission: 0,
  credits: "farhan",
  description: "Random sad video",
  prefix: true,
  category: "Media",
  usages: "video",
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

  var hi = ["--যারা ফুলকে ভালোবাসে তারা নিজেরাই এক একটা ফুল 💕🌸 --Robiul-𝐈𝐬𝐥𝐚𝐦--"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [   
    "https://i.imgur.com/AXz2TkI.mp4",
    "https://i.imgur.com/Cqeicdt.mp4",
    "https://i.imgur.com/nS0MbvG.mp4",
    "https://i.imgur.com/5MHyL6n.mp4",
    "https://i.imgur.com/GkYPtWg.mp4",
    "https://i.imgur.com/qBq5KE5.mp4",
    "https://i.imgur.com/K70lPmy.mp4",
    "",
    "",
  ];

  var callback = () => {
    api.sendMessage({ body: `「 ${know} 」`, attachment: fs.createReadStream(__dirname + "/cache/15.mp4") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));
  };

  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/15.mp4")).on("close", () => callback());
};
