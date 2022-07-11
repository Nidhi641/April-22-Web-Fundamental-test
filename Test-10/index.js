const fetchData = () =>{

    return fetch(`data.json`)

    .then(response => response.json())
    
    .then(data => {

                // Data prints on console
                console.log(data[0]["id"]);
                console.log(data[0]["name"]);
                console.log(data[0]["username"]);
                console.log(data[0]["email"]);
                console.log(data[0]["address"]["street"], data[0]["address"]["suite"], data[0]["address"]["city"], data[0]["address"]["zipcode"], data[0]["address"]["geo"]["lat"]);
                console.log(data[0]["phone"]);
                console.log(data[0]["website"]);
                console.log(data[0]["company"]["name"], data[0]["company"]["catchPhrase"], data[0]["company"]["bs"]);
                
                // Data prints on browser window
                document.getElementById(`h1`).innerHTML = `${data[0]["id"]}`;
                document.getElementById(`h2`).innerHTML = `${data[0]["name"]}`;
                document.getElementById(`h3`).innerHTML = `${data[0]["username"]}`;
                document.getElementById(`h4`).innerHTML = `${data[0]["email"]}`;
                document.getElementById(`h5`).innerHTML = `${data[0]["address"]["street"]}, ${data[0]["address"]["suite"]}, ${data[0]["address"]["city"]}, ${data[0]["address"]["zipcode"]}, ${data[0]["address"]["geo"]["lat"]}`;
                document.getElementById(`h6`).innerHTML = `${data[0]["phone"]}`;
                document.getElementById(`h7`).innerHTML = `${data[0]["website"]}`;
                document.getElementById(`h8`).innerHTML = `${data[0]["company"]["name"]}, ${data[0]["company"]["catchPhrase"]}, ${data[0]["company"]["bs"]}`;
            })
    
}
 




