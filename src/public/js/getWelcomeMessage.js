const regeneratorRuntime = require("regenerator-runtime");

const getWelcomeMessage = async (cuid) => {
    const euid = '00b2fcbe-f27f-437b-a0d5-91072d840ed3';
    const welcome = {
        cuid: cuid,
        euid: euid,
    }
    const resp = await fetch(`https://biz.nanosemantics.ru/api/2.1/json/Chat.event`, {
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(welcome),
    })
    const message = await resp.json();
    return message.result.text.value;
}

export default getWelcomeMessage;