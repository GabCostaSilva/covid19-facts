const apiUrlBase = "https://covid19-brazil-api.now.sh/api/report/v1/"
const apiUrlStatus = "https://covid19-brazil-api.now.sh/api/status/v1"

/**
 * URLs
 * busca por estado -> 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp'
 * busca por data   -> 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/20200318'
 * busca por país   -> 'https://covid19-brazil-api.now.sh/api/report/v1/countries'
 */

/**
 * TODO
 * 
 * - implementar inputs para realizar:
 *  . busca por estados
 *      .. deve-se listar todos os estados disponíveis
 *  . busca por países
 *      .. deve-se listar todos os países disponíveis
 *  . busca por data
 * 
 * - implementar verificação de disponibilidade da api primeiramente
 */

export default async () => {
    let response = await window.fetch(apiUrlBase)
    response = await response.json()
    return response.data
}