const {
  makeid
} = require("./id");
const express = require("express");
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const {
  default: Fredi_Ezra,
  useMultiFileAuthState,
  delay,
  makeCacheableSignalKeyStore,
  Browsers
} = require("@whiskeysockets/baileys");
function removeFile(_0x1845d7) {
  if (!fs.existsSync(_0x1845d7)) {
    return false;
  }
  fs.rmSync(_0x1845d7, {
    'recursive': true,
    'force': true
  });
}
router.get('/', async (_0x101b93, _0x38c4f2) => {
  const _0x110751 = makeid();
  let _0x27d63d = _0x101b93.query.number;
  async function _0x2d7515() {
    const {
      state: _0xe04dd8,
      saveCreds: _0x522233
    } = await useMultiFileAuthState("./temp/" + _0x110751);
    try {
      let _0x4e425a = Fredi_Ezra({
        'auth': {
          'creds': _0xe04dd8.creds,
          'keys': makeCacheableSignalKeyStore(_0xe04dd8.keys, pino({
            'level': "fatal"
          }).child({
            'level': "fatal"
          }))
        },
        'printQRInTerminal': false,
        'logger': pino({
          'level': "fatal"
        }).child({
          'level': "fatal"
        }),
        'browser': Browsers.macOS("Chrome")
      });
      if (!_0x4e425a.authState.creds.registered) {
        await delay(1500);
        _0x27d63d = _0x27d63d.replace(/[^0-9]/g, '');
        const _0x5c29df = await _0x4e425a.requestPairingCode(_0x27d63d);
        if (!_0x38c4f2.headersSent) {
          await _0x38c4f2.send({
            'code': _0x5c29df
          });
        }
      }
      _0x4e425a.ev.on("creds.update", _0x522233);
      _0x4e425a.ev.on("connection.update", async _0x59615c => {
        const {
          connection: _0x277b27,
          lastDisconnect: _0x3d703d
        } = _0x59615c;
        if (_0x277b27 === "open") {
          await delay(50000);
          let _0x53f57f = fs.readFileSync(__dirname + ("/temp/" + _0x110751 + "/creds.json"));
          await delay(8000);
          let _0x4abf00 = Buffer.from(_0x53f57f).toString("base64");
          let _0x1aeb62 = await _0x4e425a.sendMessage(_0x4e425a.user.id, {
            'text': "MAKAMESCO-MD<=>" + _0x4abf00
          });
          await _0x4e425a.sendMessage(_0x4e425a.user.id, {
            'text': "\n*⁠■■■■■■■■■■■■■■■*\n\n*CONGRATULATIONS 👏 MAKAMESCO MD MULTI DEVICE 🗡️ IS CONNECTED TO YOUR WHATSAPP🤞*\n\n*■■■■■■■■■■■■■■■*\n_📢 FOR UPDATE AND HELPING FOLLOW CHANNEL 🌎 OR VISIT WEBSITE 🌐_ \n*📢 channel link*\n> https://whatsapp.com/channel/0029VbAEL9r5vKA7RCdnYG0S\n*🌐 Boost followers website link*\n> https://Makamescodigitalsolutions.com\n\n*■■■■■■■■■■■■■■■*\n_ℹ️ FOR MORE INFORMATION ABOUT AS AND BOT_\n \n*👤 sub GitHub info* @follow\n> https://GitHub.com/sesco001 \n*🆕 Visit Our Website \n> https://makamescodigitalsolutions.com \n*🗝️ Makamesco  xmd repo*\n> https://github.com/sesco001/Makamesco_md\n> Don't forget 😜 fork 🍴 and star 🌟 repo\n*All is safe on heroku 🟢*\n\n*■■■■■■■■■■■■■■*\n _💬 for any problem connect with me_\n> mesh-matheka https://wa.me/254739285768\n> FredieTech https://wa.me/255752593977\n*THIS PROJECT SCRIPTS CREATED BY MAKAMESCO*\n*■■■■■■■■■■■■■■*\n> regards maka"
          }, {
            'quoted': _0x1aeb62
          });
          await delay(100);
          await _0x4e425a.ws.close();
          return await removeFile("./temp/" + _0x110751);
        } else if (_0x277b27 === "close" && _0x3d703d && _0x3d703d.error && _0x3d703d.error.output.statusCode != 401) {
          await delay(10000);
          _0x2d7515();
        }
      });
    } catch (_0x3e945b) {
      console.log("service restated");
      await removeFile("./temp/" + _0x110751);
      if (!_0x38c4f2.headersSent) {
        await _0x38c4f2.send({
          'code': "Service Unavailable"
        });
      }
    }
  }
  return await _0x2d7515();
});
module.exports = router;
