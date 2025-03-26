const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61V666qRhR+lWb+6jlyHzA5SRFFUVEUULBpmgGGy5abMIp4sh+iT9A36TP1ERp07+zTnEt3k/JrMsx861trfeubzyAvkhovcAuGn0FZJRdEcLckbYnBEIzOYYgr0AcBIggMwXrq2IzteFfbmG3TibRJFLzJ3OYgZmVkrdTz6lQx2nbS2xefwHMflGcvTfwfAEprOWjEDVG5oMyMEl6oQtuLy8YcU/T+SnnRFF73shFTVAfYIaKkSvJoUsY4wxVKF7g1UFK9j74/i7YL1KSz+XTEp8d24+VWrKipuPSTsDBWjDBAi9y60Wz9PvqrFLXjattbTeHMG4xrD83ZwyQV2qzZbvNs3YMnL7LdbJDrD/p1EuU40AKck4S07657b3nwbsvV6kDQVBxcc922TteNLsjmnmPcaepqlS+k+sZw3kk8HCkbm9kOStO5BFlGsZYkUapLmTbjCkulmvd20aIUGOb2D+JG9aqV43+p+1TnesHMnSJJp2KSu5DJ+EaOo7UWThK1dM7+mZ6TchRRm/fR18/mRqlnJS/EhRlZk6fFjj8fRG1zavyTZTZH76YQ6jpSn9w3+oicqx+xDBWdM52FtnJIJsyZ3UXaSwsp9lfYSiLKhtVhYRYFOrTwZE8y+jKoltFJJLcq4ttsdLoqU0fJZ9aoLefXVEWcABVjHH26Z3TErRaAIf3cBxWOkppUiCRFft+j+wAFFxP7FSb36oLDGFpMri/dy8VbWedADWTHm6b7q7/2mxlkbV4fG6UmUPnkE+iDsip8XNc4mCU1KapWx3WNIlyD4S/3RnU5VzgrCJ4nARgChmUZQRCgwPDiz/XHJkakRmX5MccE9EFYFZmOwZBUZ9wH9wssVCZQVDhGZCVIS2NaElh2MpEUmWZVmpO6DLNHUCvJcE1QVoIhDTlG4mleZJ/7/w+PMc2pqioxvAhVEUqKyjOUwEBZZVRIi+rkxzwk5vnXPsjxlTxk3BWfZfogTKqa2Pm5TAsUvGr89Sfy/eKcE7PNfaVb4AoM6bdtTEiSR3WX2TlHlR8nF6x0eYBhiNIaP/dBgC+Jjzs84DQI/gazaCObE30Sw1UGR4LcdTAu8scRRoQIM3z4IeA5+IGjROGDxCLvA4MEnqIpSpR8BnTleDhId+e7gr5Fs6PEWZcrpHaGxcm98tr2cJpHR/0uyocScYWD1yp7yD+eS6s44vwHuNfZfmCHo+Jm+8Z+nXJ6cBNO8xgt5vYXuA+Fg+HnN9dWiqDD00WJ3ck8D7pudXG+UsOQ+1oPOeoOg8XH3U9LW1G0v/74/c8u2ksrOpwAE5SkNRgCZWVqy+2YP2nMYBRHI02WC1n+1E3La+teHeExcg7fW83jOOfnSuVDLp+vJWYFrUsbV2SbHPZmtTxve85earRvgYAhMGhvTFovvVFbCk7c68lrjOl0M1I5ye8pCz1Le1vLRnCa5QdXOrgxfUoWIZL5csvhw07ZGU4rLHeziNXhQnIujbgtleZO+SGhL4MN5rok01trsNBu8lPR3PZjxrgJBXEhq63DtTGS8HjWBIG8zHc9p1nrB23JtZrgFQvllBnz5ZOzGS3dwNEbapDWT+tUGr141d0r05c3KnmxkYfgwgTfLf+lF//WsjfpU8/9LyBe3pDvyGu064VPpuseeubmxK5789a6BE+YgmKBoO1mu+OphccwpS++Ap67mS5TRMKiysAQoDyoiiQAfZCimshv0/sNQ+DFPshauSxNgsjr0AO5++bWDjz/DY9qLLgeCQAA',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "233266676258",  
    CHATBOT : process.env.CHATBOT || "no",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "yes",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",
    OWNER_REACT: process.env.OWNER_REACT || "yes",
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    EMOJIS: process.env.EMOJIS || "⚔️, 👿, 🌎, 💜",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "I DON'T GIVE A FUCK⚔️",
   GREET_MSG: process.env.GREET_MSG || "Huskii am unavailable mzee 😂",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "yes", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'no',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'yes',
              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'yes',       
    ANTICALL_MSG : process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "ALPHA-MD",
    BOT : process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
