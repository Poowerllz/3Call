
const tel = document.getElementById('tel') // Seletor do campo de telefone

document.getElementById("block").checked = true;



tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
}

var estadoPorDdd = {
    "11": "SP - São Paulo",
    "12": "SP - São Paulo",
    "13": "SP - São Paulo",
    "14": "SP - São Paulo",
    "15": "SP - São Paulo",
    "16": "SP - São Paulo",
    "17": "SP - São Paulo",
    "18": "SP - São Paulo",
    "19": "SP - São Paulo",
    "21": "RJ - Rio de Janeiro",
    "22": "RJ - Rio de Janeiro",
    "24": "RJ - Rio de Janeiro",
    "27": "ES - Espirito Santo",
    "28": "ES - Espirito Santo",
    "31": "MG - Minas Gerais",
    "32": "MG - Minas Gerais",
    "33": "MG - Minas Gerais",
    "34": "MG - Minas Gerais",
    "35": "MG - Minas Gerais",
    "37": "MG - Minas Gerais",
    "38": "MG - Minas Gerais",
    "41": "PR - Paraná",
    "42": "PR - Paraná",
    "43": "PR - Paraná",
    "44": "PR - Paraná",
    "45": "PR - Paraná",
    "46": "PR - Paraná",
    "47": "SC - Santa Catarina",
    "48": "SC - Santa Catarina",
    "49": "SC - Santa Catarina",
    "51": "RS - Rio Grande do Sul",
    "53": "RS - Rio Grande do Sul",
    "54": "RS - Rio Grande do Sul",
    "55": "RS - Rio Grande do Sul",
    "61": "DF - Distrito Federal",
    "62": "GO - Goiás",
    "63": "TO - Tocantins",
    "64": "GO - Goiás",
    "65": "MT - Mato Grosso",
    "66": "MT - Mato Grosso",
    "67": "MS - Mato Grosso do Sul",
    "68": "AC - Acre",
    "69": "RO - Rondônia",
    "71": "BA - Bahia",
    "73": "BA - Bahia",
    "74": "BA - Bahia",
    "75": "BA - Bahia",
    "77": "BA - Bahia",
    "79": "SE - Sergipe",
    "81": "PE - Pernambuco",
    "82": "AL - Alagoas",
    "83": "PB - Paraíba",
    "84": "RN - Rio Grande do Norte",
    "85": "CE - Ceará",
    "86": "PI - Piauí",
    "87": "PE - Pernambuco",
    "88": "CE - Ceará",
    "89": "PI - Piauí",
    "91": "PA - Pará",
    "92": "AM - Amazonas",
    "93": "PA - Pará",
    "94": "PA - Pará",
    "95": "RR - Roraima",
    "96": "AP - Amapá",
    "97": "AM - Amazonas",
    "98": "MA - Maranhão",
    "99": "MA - Maranhão"
  }

  function discoverDDD(){
    if (tel.value == null || tel.value < 1) {
        document.getElementById("image").checked = false;
    } else {
        document.getElementById("qrcode").innerHTML = ""
        document.getElementById("image").checked = true;

        var corte = tel.value.substr(1, 2)
        console.log(estadoPorDdd[corte]);
        document.getElementById('estado').innerHTML = estadoPorDdd[corte];
        new QRCode(document.getElementById("qrcode"), {
            text: "0" + tel.value,
            width: 80,
            height: 80
        });
    }
  }

  document.getElementById("iconBlock").addEventListener("click", function(){ 
    console.log("click")
  });

function maximizeWindow() {
    var window = remote.getCurrentWindow()
    window.isMaximized() ? window.unmaximize() : window.maximize();
}