
export async function fetchData(url) {
    try {
        const response = await fetch(url);
        const responseJSON = await response.json();
        return responseJSON;
    } catch (exception) {
        return [];
    }
}