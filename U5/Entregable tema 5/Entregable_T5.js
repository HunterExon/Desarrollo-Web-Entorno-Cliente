let bw = document.getElementById("border_width");
let bc = document.getElementById("border_color");
let col = document.getElementById("create_col");
let row = document.getElementById("create_row");
let hd = document.getElementById("create_header");
let dv = document.getElementById("default_value");

let head = document.getElementById("create_header").addEventListener("click",function(){
        for(let z = 0; z < col.value; z++){
            let input = document.createElement("input");
            input.setAttribute("id", "header_text"+z);
            document.getElementById("inputs_headers").appendChild(input);
        }
})


function generate_table() {
    if (document.querySelector('table')) {
        document.querySelector('hr').remove();
        document.querySelector('table').remove();
    }

    let hr = document.createElement("hr");
    let div = document.createElement("div");
    let tb = document.createElement("table");

    document.body.appendChild(hr);
    document.body.appendChild(div);
    div.appendChild(tb);

    if (bw.value !== "") {
        tb.style.border = bw.value + "px solid " + bc.value;
        tb.style.borderCollapse = "collapse";

    } else {
        tb.style.border = "1px solid black";
        tb.style.borderCollapse = "collapse";
    }

    if (col.value !== "" && row.value !== "") {
        for (let i = 0; i < row.value; i++) {
            let tr = document.createElement("tr");
            tb.appendChild(tr);

            for (let j = 0; j < col.value; j++) {
                if (i === 0 && hd.checked) {
                    let th = document.createElement("th");

                    if (bw.value !== "") {
                        th.style.border = bw.value + "px solid " + bc.value;
                    } else {
                        th.style.border = "1px solid black";
                    }

                    tr.appendChild(th);

                    let text = document.getElementById("header_text"+j)
                    th.innerHTML = text.value;
            
                } else {
                    let td = document.createElement("td");

                    if (bw.value !== "") {
                        td.style.border = bw.value + "px solid " + bc.value;
                    } else {
                        td.style.border = "1px solid black";
                    }

                    tr.appendChild(td);

                    if (dv.value !== "") {
                        td.innerHTML = dv.value;
                    }
                }
            }
        }
    }
};