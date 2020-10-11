/**
 * Covid19 Brazil API
 * https://covid19-brazil-api-docs.now.sh/
 *
 * URLs
 * busca por estado -> 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp'
 * busca por data   -> 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/20200318'
 * busca por país   -> 'https://covid19-brazil-api.now.sh/api/report/v1/countries'
 *
 */

const apiUrlBase = "https://covid19-brazil-api.now.sh/api/report/v1/";
const apiUrlStatus = "https://covid19-brazil-api.now.sh/api/status/v1";

export async function getApiData(url) {
    let response = await window.fetch(url);
    response = await response.json();
    return response.data;
}

export async function allCasesInTheWorld() {
    let response = await window.fetch(apiUrlBase + "countries");
    response = await response.json();
    return response.data;
}

export async function getApiServerDatetime() {
    let response = await window.fetch(apiUrlStatus);
    response = await response.json();
    return response.status;
}

export async function getDataByBrazilianState(state) {
    let response = await window.fetch(apiUrlBase + "brazil/uf/" + state.toLowerCase())
    return await response.json();
}

export async function getDataByWorldCountries(countrie) {
    console.log(countrie)
    let response = await window.fetch(apiUrlBase + countrie.toLowerCase())
    response = await response.json();
    return response.data;
}
