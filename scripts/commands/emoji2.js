const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
  "https://i.imgur.com/9m6scog.mp4",

];

module.exports.config = {
  name: "😅",
  version: "1.0.0",
  permission: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "auto reply to salam",
  category: "noprefix",
  usages: "😅",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  const content = event.body ? event.body : '';
    const body = content.toLowerCase();
  if (body.startsWith("😅")) {
    const rahad = [
      "•┄┅════❁🌺❁════┅┄•\n\n-ভালোবাসা এটা একটা ছেলে খেলা...!!😅✨🥀\n\n•┄┅════❁🌺❁════┅┄•",
      "•┄┅════❁🌺❁════┅┄•\n\n-ভালোবাসা এটা একটা ছেলে খেলা...!!😅✨🥀\n\n•┄┅════❁🌺❁════┅┄•"

    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `${rahe
