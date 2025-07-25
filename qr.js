const { makeid } = require('./gen-id');
const express = require('express');
const QRCode = require('qrcode');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    jidNormalizedUser
} = require("@whiskeysockets/baileys");
const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
 //   let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                	
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});
            
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect,
                    qr
                } = s;
              if (qr) await res.end(await QRCode.toBuffer(qr));
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "MEGALODON~MD~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `Q𝚛 𝙲𝚘𝚍𝚎 𝙲𝚘𝚗𝚗𝚎𝚌𝚝𝚎𝚍 𝚂𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢
𝙼𝚊𝚍𝚎 𝚆𝚒𝚝𝚑 𝙼𝙴𝙶𝙰𝙻𝙾𝙳𝙾𝙽 𝙼𝙳 🤍
______________________________________
╔════◇
║ 『 𝚆𝙾𝚆 𝚈𝙾𝚄'𝚅𝙴 𝙲𝙷𝙾𝚂𝙴𝙽 𝙼𝙴𝙶𝙰𝙻𝙾𝙳𝙾𝙽 𝙼𝙳』
║ 𝚈𝚘𝚞 𝙷𝚊𝚟𝚎 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍 𝚝𝚑𝚎 𝙵𝚒𝚛𝚜𝚝 𝚂𝚝𝚎𝚙 𝚝𝚘 𝙳𝚎𝚙𝚕𝚘𝚢 𝚊 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝚘𝚝.
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ 𝚈𝚝𝚞𝚋𝚎: https://youtube.com/@dybytech00
║❒ 𝙾𝚠𝚗𝚎𝚛: https://wa.me/50934960331
║❒ 𝚁𝚎𝚙𝚘: https://github.com/DybyTech/MEGALODON-MD
║❒ 𝚆𝚊𝙲𝚑𝚊𝚗𝚗𝚎𝚕: https://whatsapp.com/channel/0029VatK7Ab6buMGF3Dq6q0V
║❒ 𝚃𝙷𝙰𝙽𝙺𝚂 𝚃𝙾: 𝚂𝚃𝙴𝙴𝚅𝚈 𝚃𝙴𝙲𝙷 💀🔥
╚════════════════════════╝
_____________________________________

_𝙳𝚘𝚗'𝚝 𝙵𝚘𝚛𝚐𝚎𝚝 𝚃𝚘 𝙶𝚒𝚟𝚎 𝚂𝚝𝚊𝚛 𝚃𝚘 𝙼𝚢 𝚁𝚎𝚙𝚘"

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ*`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: " 𝖇𝖔𝖙 𝖈𝖔𝖓𝖓𝖊𝖈𝖙𝖊𝖉",
thumbnailUrl: "https://files.catbox.moe/rful77.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VbAdcIXJP216dKW1253g",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `Q𝚛 𝙲𝚘𝚍𝚎 𝙲𝚘𝚗𝚗𝚎𝚌𝚝𝚎𝚍 𝚂𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢
𝙼𝚊𝚍𝚎 𝚆𝚒𝚝𝚑 𝙼𝙴𝙶𝙰𝙻𝙾𝙳𝙾𝙽 𝙼𝙳 🤍
______________________________________
╔════◇
║ 『 𝚆𝙾𝚆 𝚈𝙾𝚄'𝚅𝙴 𝙲𝙷𝙾𝚂𝙴𝙽 𝙼𝙴𝙶𝙰𝙻𝙾𝙳𝙾𝙽 𝙼𝙳』
║ 𝚈𝚘𝚞 𝙷𝚊𝚟𝚎 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍 𝚝𝚑𝚎 𝙵𝚒𝚛𝚜𝚝 𝚂𝚝𝚎𝚙 𝚝𝚘 𝙳𝚎𝚙𝚕𝚘𝚢 𝚊 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝚘𝚝.
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ 𝚈𝚝𝚞𝚋𝚎: https://youtube.com/@dybytech00
║❒ 𝙾𝚠𝚗𝚎𝚛: https://wa.me/50934960331
║❒ 𝚁𝚎𝚙𝚘: https://github.com/DybyTech/MEGALODON-MD
║❒ 𝚆𝚊𝙲𝚑𝚊𝚗𝚗𝚎𝚕: https://whatsapp.com/channel/0029VatK7Ab6buMGF3Dq6q0V
║❒ 𝚃𝙷𝙰𝙽𝙺𝚂 𝚃𝙾: 𝚂𝚃𝙴𝙴𝚅𝚈 𝚃𝙴𝙲𝙷 💀🔥
╚════════════════════════╝
_____________________________________

_𝙳𝚘𝚗'𝚝 𝙵𝚘𝚛𝚐𝚎𝚝 𝚃𝚘 𝙶𝚒𝚟𝚎 𝚂𝚝𝚊𝚛 𝚃𝚘 𝙼𝚢 𝚁𝚎𝚙𝚘"

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ*`; 
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: " 𝖒𝖉 𝖈𝖔𝖓𝖓𝖊𝖈𝖙𝖊𝖉 ✅  ",
thumbnailUrl: "https://files.catbox.moe/rful77.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VbAdcIXJP216dKW1253g",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
    await GIFTED_MD_PAIR_CODE();
});
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min
module.exports = router;
