function getDataWithXHRObject(url) {
    document = this.document;
    const oReq = new XMLHttpRequest();

    oReq.open("GET", url);

    oReq.responseType = "json";
    oReq.addEventListener("load", handleResponse)
    oReq.send();
}


function getDataWithFetch(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => handleResponseArray(data));
}

function getDataWithAJAX(url) {
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function (data) {
            $("#output").append("<br>Ajax call works - check yor browser console<br>");
            // .each is a loop function that iterates over the data object,
            // key is the index #,  value is an object
            $.each(data, function (key, value) {
                console.log(key);
                console.log(value);
                $("#output").append(`<br>${JSON.stringify(data)}`);
            })
        },
        error: function (data) {
            console.log(data);
            $("#output").append(`<br>${data.statusText}`);
        }
    })
}



function handleResponseArray(array) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    array.forEach((item, index, array) => {
        const newElement = document.createElement('p')
        newElement.innerText = `index: ${index}, object: ${JSON.stringify(item)}`;
        div.appendChild(newElement);
    });
}

function handleResponse() {
    handleResponseArray(this.response);
}