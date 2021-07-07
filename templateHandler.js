import AsyncStorage from '@react-native-async-storage/async-storage';

async function getTemplates() {

    try {
        const value = await AsyncStorage.getItem('templates')
        other = value != null ? JSON.parse(value) : null;
        if (other !== null) {
            return other;
        }

    } catch (e) {
        console.error("ssss")
        console.log(e)

    }
    return null;

}


async function storeTemplates(value) {

    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('templates', jsonValue)
    } catch (e) {
        console.log(e)
        console.error("Store failed")
    }

}



export { getTemplates, storeTemplates }