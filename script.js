document.getElementById("healthForm").addEventListener("submit", function(e){
    e.preventDefault();

    let query = document.getElementById("query").value.toLowerCase();

    let response = "General Consultation";

    if(query.includes("fever")){
        response = "Possible Fever Related Query";
    }
    else if(query.includes("cough")){
        response = "Respiratory Related Query";
    }
    else if(query.includes("headache")){
        response = "Neurological Related Query";
    }

    document.getElementById("result").innerHTML =
    `<h3>AI Summary</h3>
     <p>${response}</p>
     <p>Your request has been recorded.</p>`;
});
