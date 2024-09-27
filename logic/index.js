const populatre = async (value, currency) => {
    let mystr = ""
    URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_6q5hUerDUuWDJAPj3Zpx62Nhm2a7LIzHsU7wooPP&base_currency=" + currency
    let responce = await fetch(URL)
    let rJson = await responce.json()
    document.querySelector(".output").style.display = "block"
    for (let key of Object.keys(rJson["data"])) {
        mystr += `<tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${rJson["data"][key]["value"] * value}</td>
                </tr>`
    }

    const tablBody = document.querySelector("tbody");

    tablBody.innerHTML = mystr;
}

const btn = document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name=quantity]").value);
    const currency = document.querySelector("select[name=currency]").value;
    populatre(value, currency)
})

