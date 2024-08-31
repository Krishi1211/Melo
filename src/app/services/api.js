const { default: axios } = require("axios");

// const domain = 'https://test-api.melo.works' // for TEST
const domain = 'https://api.melo.works' // for LIVE


const addUTM = async (utmSource, utmMedium, utmContent ) => {
    try {
        const response = await axios.post(`${domain}/utm/addUTM`, { utmSource, utmMedium, utmContent });
        return response;
    }
    catch (err) {
        console.log(err);
    }
}

const floatButtonClick = async (path, buttonName) => {
    try {
        const response = await axios.post(`${domain}/pageClick/addPageClick`, { page: path, button: buttonName });
        return response;
    }
    catch (err) {
        console.log(err);
    }
}

export {
    domain,
    addUTM,
    floatButtonClick,
}
