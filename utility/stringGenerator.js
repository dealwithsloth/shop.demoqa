const generateString = (length) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
}

const generateRandomUsername =() => {
    return (`${generateString(5)}-automationTest`)
}

const generateRandomEmailAddress = () => {
    return (`${generateString(10)}@automationtest.com`)
}

export {
    generateString, generateRandomUsername, generateRandomEmailAddress
}