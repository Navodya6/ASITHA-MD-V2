const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU43T1R2M0hScEEvOTNsWVhiSjlwTjlhOFZ4eVlwQVhVN3FmZDh6bHdHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVc5aVdleUQ4NXNDRGxFYTFlVHVUWWxCSlRZZDB0VkZRaVdYM09aclF4TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSXZ0WHVrZ1lVRVdkTmdDaU1rcTJoYUFFNW1wNWRoQTUyOFI3VXhyV1VZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKRTZyYjE5WGVWUDFHMXE3RkRJcm5abE5XR0RZRDZXSEw2Rys1enMvMVE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndLQk80dG1Yb0lJUDRMZ1ZyWGtQQ0hiVHQzbmc1bzh2WHEwU3VUYy93bVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd0cnNyRFlZSVpTdEpZSlNxWUxpMUZBN243V0R5Vk5WN2MxTVg3MTdPQWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlB6WVhEdWNEYk1uM2szbVlMQUVsRWw3eVZEOGE4NFVSQ3dPRlZWVGludz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkRjc1lDUW5ERHhJUmRmY2tUUXlYSk4yY0xmZzc3S1lHMWVpQkdkejhFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkvSWdtTHdGWFAxdW0wQjNra2ZPRXkwVzVOYXNmZlF0L0J6MlN4QTNIVTNaV1hqQkdpSnlGOEQ0VzlyUnZCOE9MTkxXVWRRSTdxSk4zcU4xb1FoTGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJEWHV0eDgyRjdaOWhiRk9qRXBsM093YXRXajlSeXFqZGVrYXcyc25GcndrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPVGUyak1TUFFiQzNjc1VlcVA1NW9BIiwicGhvbmVJZCI6IjI1NWJlOWVmLTE0ZmYtNDY3Mi1iN2VhLWYxZjIwZjIzZjdiMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZOGlLTlUxeVFrenhxNmRCQUdsSTAvVDRHd1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUt2V3BHY0lINEdKV0wwT2NmZXJQVTk3U2pVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlM3NzJKNENEIiwibWUiOnsiaWQiOiI5NDc2Njg4Nzc5MjozNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCN8J2QgPCdkJXwnZCOIDw8MyBcIiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGJPdzVVQkVJS0RnTG9HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYjNXSjJEWFlGakZDeWRpeUFMZlMvMW9MM3dodnM0c2ZjS0xWU3FWNWZuVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRzBWM05uNEJTeHNaUy93SXFuc2kwVXd6c2Q4K0JQeC9lOVdESHlQYjlXUVdtaXRlR2doSHJwL3Fkc0JlSnZJY3hiMThueXVkV3YzRDBNUXpnTUczRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjZYNUZmR3hkZXZwKzl0U0VrYkxHZGpFdXdPR3pJbllJamp5WHAvYmMxeVhUYSt3aVU4MXk1S2k0cHJSVVZ2VzdlcmlkcFo2cmlFNFY0ekYvRUUvTWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjY4ODc3OTI6MzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVzkxaWRnMTJCWXhRc25Zc2dDMzB2OWFDOThJYjdPTEgzQ2kxVXFsZVg1MSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjI0Nzk1MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIeVYifQ==' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? "*Hello , I am alive now!!*" : process.env.ALIVE_MSG,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS,
MODE: process.env.MODE === undefined ?"public" : process.env.MODE,
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? "true" : process.env.AUTO_VOICE,
AUTO_REPLY: process.env.AUTO_REPLY === undefined ? "true" : process.env.AUTO_REPLY,
AUTO_STICKER: process.env.AUTO_STICKER === undefined ? "true" : process.env.AUTO_STICKER,
ANTI_BAD: process.env.ANTI_BAD === undefined ? "true" : process.env.ANTI_BAD,
ANTI_LINK: process.env.ANTI_LINK === undefined ? "true" : process.env.ANTI_LINK,
ANTI_BOT: process.env.ANTI_BOT === undefined ? "true" : process.env.ANTI_BOT,
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE === undefined ? "false" : process.env.ALLWAYS_OFFLINE,
READ_CMD: process.env.READ_CMD === undefined ? "true" : process.env.READ_CMD,
RECORDING: process.env.RECORDING === undefined ? "true" : process.env.RECORDING,
AUTO_REACT: process.env.AUTO_REACT === undefined ? "false" : process.env.AUTO_REACT,
NEWS_JID: process.env.NEWS_JID === undefined ? "120363345216596571@g.us" : process.env.NEWS_JID,
BAD_NO_BLOCK: process.env.BAD_NO_BLOCK === undefined ? "false" : process.env.BAD_NO_BLOCK,  
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
};
