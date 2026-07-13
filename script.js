document.getElementById("regForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let regno = document.getElementById("regno").value;
    let email = document.getElementById("email").value;
    let event = document.getElementById("event").value;

    document.getElementById("msg").innerHTML =
    `
    <h3>Successfully Registered!</h3>
    Name: ${name}<br>
    Register Number: ${regno}<br>
    Email ID: ${email}<br>
    Event Name: ${event}
    `;

});