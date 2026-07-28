const API_URL = "IL_TUO_LINK";


fetch(API_URL)

.then(response => response.text())

.then(data => {

    console.log(data);

});
