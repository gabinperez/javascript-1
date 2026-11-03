function chargerLesDonnees() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);

     
            let zone = document.getElementById('zoneAffichage');

            data.data.forEach(p => {
                zone.innerHTML += '<tr><td>' + p.name + '</td><td>' + p.capital + '</td></tr>';
            });
        }
    };

    xhr.open('GET', 'https://countriesnow.space/api/v0.1/countries/capital');
    xhr.send();
}