const apiUrl = "https://covid19-brazil-api.now.sh/api/report/v1"

export default async () => {
    let response = await window.fetch(apiUrl)
    response = await response.json()
    return response.data
}