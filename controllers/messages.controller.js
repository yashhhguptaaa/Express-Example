const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my Friends",
    friend: "Elon Musk",
  });
  // res.sendFile(path.join(__dirname, "..", "public", "images", "download.jpg"));
  // res.send("<ul><li>Helloo Albert!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating Messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
