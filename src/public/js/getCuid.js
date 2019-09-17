const regeneratorRuntime =  require("regenerator-runtime");

const getCuid = async (uuid) => {
    const resp1 = await fetch(`https://biz.nanosemantics.ru/api/2.1/json/Chat.init`, {
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(uuid),
    })
    const cuid = await resp1.json();
    return cuid.result.cuid
}

export default getCuid;