var mas = [15, 'hello', 'trump', 23, 'world', 999, 176];
var out = document.getElementById('out');
for(var i=0; i<mas.length; i++){
    out.innerHTML += i +'-' + mas[i] + '<br>';
}