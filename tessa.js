/* codded by rejisan
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// mkz Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {

 OA_AI: process.env.Z_tessa_AI === undefined ? true : process.env.Z_BOTNAME,  
 OB_NAME: process.env.Z_BOT_NAME === undefined ? 'tessa' : process.env.Z_BOT_NAME,
 OA_NAME: process.env.Z_DEP_NAME === undefined ? 'mkz' : process.env.Z_DEP_NAME,
 OA_REPLY: process.env.Z_DEP_REPLY === undefined ? 'mkz is my creator his full name is Rejisan-mkz' : process.env.Z_DEP_REPLY,
    

};
