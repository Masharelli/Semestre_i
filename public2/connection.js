const socket = io()

let microservice = document.getElementById('MicroservicesList');
let component   = document.getElementById('ComponentList');
let status      = document.getElementById('StatusList');
let btn = document.getElementById('update');

function up() {
    var getValue = document.getElementById('MicroservicesList').selectedOptions[0].value;
    alert (getValue); 
}


btn.addEventListener('click', function(){
    socket.emit('updateControl',{
        microserviceID:  document.getElementById('MicroservicesList').value,
        componentID: document.getElementById('ComponentList').value,
        status: document.getElementById('StatusList').value
    })
    //console.log(document.getElementById('MicroservicesList').value);
});