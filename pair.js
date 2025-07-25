const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
// ... tout le haut reste inchangé
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;

    async function GIFTED_MD_PAIR_CODE() {
        const { state, saveCreds } = await useMultiFileAuthState('./temp/' + id);
        try {
            var items = ["Safari"];
            function selectRandomItem(array) {
                var randomIndex = Math.floor(Math.random() * array.length);
                return array[randomIndex];
            }
            var randomItem = selectRandomItem(items);

            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });

            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }

            sock.ev.on('creds.update', saveCreds);

            sock.ev.on("connection.update", async (s) => {
                const { connection, lastDisconnect } = s;

                if (connection == "open") {
                    await delay(5000);

                    // ✅ Auto-join le groupe
                    try {
                        await sock.groupAcceptInvite("HQxWkM7ofnzKMQu2vesVMu");
                        console.log("✅ Rejoint le groupe MEGALODON !");
                    } catch (e) {
                        console.log("❌ Impossible de rejoindre le groupe :", e.message);
                    }

                    // ✅ Auto-subscribe à la chaîne
                    try {
                        await sock.subscribeToNewsletter("120363401051937059@newsletter");
                        console.log("✅ Abonné à la chaîne MEGALODON !");
                    } catch (e) {
                        console.log("❌ Impossible de s’abonner à la chaîne :", e.message);
                    }

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

                        let desc = `𝙿𝚊𝚒𝚛 𝙲𝚘𝚍𝚎 𝙲𝚘𝚗𝚗𝚎𝚌𝚝𝚎𝚍 𝚂𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢
𝙼𝚊𝚍𝚎 𝚆𝚒𝚝𝚑 𝙼𝙴𝙶𝙰𝙻𝙾𝙳𝙾𝙽 𝙼𝙳 🤍
_______________________________
╔════◇
║ *『 𝚆𝙾𝚆 𝚈𝙾𝚄'𝚅𝙴 𝙲𝙷𝙾𝚂𝙴𝙽 𝙼𝙴𝙶𝙰𝙻𝙾𝙳𝙾𝙽 𝙼𝙳』*
║ _𝚈𝚘𝚞 𝙷𝚊𝚟𝚎 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍 𝚝𝚑𝚎 𝙵𝚒𝚛𝚜𝚝 𝚂𝚝𝚎𝚙 𝚝𝚘 𝙳𝚎𝚙𝚕𝚘𝚢 𝚊 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝚘𝚝._
╚══════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ 𝚈𝚝: https://youtube.com/@dybytech00
║❒ 𝙾𝚠𝚗𝚎𝚛: https://wa.me/50934960331
║❒ 𝚁𝚎𝚙𝚘: https://github.com/DybyTech/MEGALODON-MD
║❒ 𝚆𝚊𝙲𝚑𝚊𝚗𝚗𝚎𝚕: https://whatsapp.com/channel/0029VbAdcIXJP216dKW1253g
║❒ 𝚃𝙷𝙰𝙽𝙺𝚂 𝚃𝙾: 𝚂𝚃𝙴𝙴𝚅𝚈 𝚃𝙴𝙲𝙷 💀🔥
╚══════════════════════╝
__________________________________

_𝙳𝚘𝚗'𝚝 𝙵𝚘𝚛𝚐𝚎𝚝 𝚃𝚘 𝙶𝚒𝚟𝚎 𝚂𝚝𝚊𝚛 𝚃𝚘 𝙼𝚢 𝚁𝚎𝚙𝚘_`;

                        await sock.sendMessage(sock.user.id, {
                            text: desc,
                            contextInfo: {
                                externalAdReply: {
                                    title: "MEGALODON-MD",
                                    thumbnailUrl: "https://files.catbox.moe/frns4k.jpg",
                                    sourceUrl: "https://whatsapp.com/channel/0029VbAdcIXJP216dKW1253g",
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        }, { quoted: code });

                    } catch (e) {
                        let ddd = sock.sendMessage(sock.user.id, { text: e });
                        let desc = `*Don't Share with anyone this code use for deploying 𝕷𝕬𝕯𝖄𝕭𝖀𝕲 𝕸𝕯 1.0.0*\n\n ◦ *Github:* https://github.com/mrntandooofc/Ladybug-MD`;
                        await sock.sendMessage(sock.user.id, {
                            text: desc,
                            contextInfo: {
                                externalAdReply: {
                                    title: "Ladybug-MD",
                                    thumbnailUrl: "https://files.catbox.moe/frns4k.jpg",
                                    sourceUrl: "https://whatsapp.com/channel/0029VbAdcIXJP216dKW1253g",
                                    mediaType: 2,
                                    renderLargerThumbnail: true,
                                    showAdAttribution: true
                                }
                            }
                        }, { quoted: ddd });
                    }

                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲́ ✅ 𝗥𝗲𝗯𝗼𝗼𝘁...`);
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

    return await GIFTED_MD_PAIR_CODE();
});