module.exports.config = {
  name: "Islam",
  version: "1.0.0",
  permission: 0,
  credits: "ROBIUL",
  description: "",
  prefix: true, 
  category: "prefix", 
  usages: "user",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
 
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Islam") == 0) {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link = ["https://i.imgur.com/lhRwoBZ.mp4","https://i.imgur.com/5kNdDnH.mp4",];
    var callback = () => api.sendMessage({
      body: `আল্লহ কে ভালোবাসো দেখবে জীবন বদলে যাবে 🥰`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
    const timeStart = Date.now();
    const PREFIX = config.PREFIX;
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
  }
};
 
module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};
 
module.exports.run = async ({ api, event, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["Islam"] == "undefined" || data["Islam"] == true) data["Islam"] = false;
  else data["Islam"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["Islam"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
