const axios = require('axios');

const CLIENT_ID = "llalajXxtbCW_tJLyy8i";
const CLIENT_SECRET = "YlVMINRxxl-gDTqhXDBLuiXXxWbLELgavX3NzcYK";
const AUTHORIZATION_CODE = "L8ac09P_Qcyj3FGPVO1GeQ";
const REDIRECT_URI = "https://teleportmap.ru/auth.html";

async function debugTokens() {
    try {
        const response = await axios.post('https://api.avito.ru/token/', new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: AUTHORIZATION_CODE,
            redirect_uri: REDIRECT_URI
        }), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        // Выводим весь ответ сервера на экран
        console.log("📦 ПОЛНЫЙ ОТВЕТ ОТ АВИТО:");
        console.log(JSON.stringify(response.data, null, 2));

    } catch (error) {
        console.error("❌ Ошибка:");
        console.error(JSON.stringify(error.response ? error.response.data : error.message, null, 2));
    }
}

debugTokens();