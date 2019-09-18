const regeneratorRuntime = require("regenerator-runtime");

const sendMessage = async (text, cuid) => {
    const chatRequest = {
        cuid: cuid,
        text: text,
    }
    const resp = await fetch(`https://biz.nanosemantics.ru/api/2.1/json/Chat.request`, {
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(chatRequest),
    })
    const answer = await resp.json();
    return answer.result.text.value;
}

export default sendMessage;