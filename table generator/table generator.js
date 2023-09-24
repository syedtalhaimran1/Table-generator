function a() {
    document.querySelector("#tbl1").innerHTML = "";

    var table_number = document.querySelector("#value1").value;
    for (let i = 1; i <= 10; i++) {
        console.log(`${table_number} x ${i} = ${table_number * i}`);
        document.querySelector("#tbl1").innerHTML += `${table_number} x ${i} = ${table_number * i}<br>`;
    }
}
