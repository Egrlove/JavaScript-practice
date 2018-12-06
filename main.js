var stages = []
var first_array = []

var first_div = null
var last_div = null
var otboi_div = null


function addstage() {
    var a = prompt("Имя стадии", "");
    if (a.length != 0) {
        var div = document.createElement('div');

        div.innerHTML = "<h4>" + a + "</h4>" + "<hr>";
        var button = document.createElement('button');
        button.innerHTML = "Перевод задачи";
        div.setAttribute("id", "stage" + stages.length + "button")
        button.onclick = to_the_next_step;

        section = document.getElementById('section')

        div.setAttribute("id", "stage" + stages.length)
        var list = document.createElement('ol');
        list.setAttribute("id", "stage" + stages.length + "list")


        div.appendChild(button)
        div.appendChild(list)
        section.appendChild(div);

        stages.push(div)
        if (stages.length == 1) {
            first_div = div;
        }
        last_div = div;

    }

}

function to_the_next_step(event) {
    var name = event.path[1].id
    var id = name.substring(5, 6);
    var div = stages[0]

    oldstage = document.getElementById("stage" + id)

    oldList = document.getElementById("stage" + id + "list")
    if (oldList.firstChild != null) {
        text_from = oldList.firstChild.innerHTML;
        oldList.firstChild.remove()
        if (oldstage == last_div) {
            if (otboi_div == null) {
                var div = document.createElement('div');
                div.innerHTML = "<h4>" + "Законченные задачи" + "</h4>" + "<hr>";
                section = document.getElementById('final_sec')
                div.setAttribute("id", "final");
                div.setAttribute("align", "center")
                var list = document.createElement('ol');
                list.setAttribute("id", "final" + "list");
                div.appendChild(list);
                section.appendChild(div);
                otboi_div = div;
            }
            newList = document.getElementById("final" + "list")
            li = document.createElement("li");
            li.appendChild(document.createTextNode(text_from));
            newList.appendChild(li);
            return

        }

        newid = parseInt(id) + 1;
        newList = document.getElementById("stage" + newid + "list")
        li = document.createElement("li");
        li.appendChild(document.createTextNode(text_from));
        newList.appendChild(li);
    }
}



function addtask() {
    var a = prompt("Имя Задачи", "");
    first_array.push(a)
    if (a.length != 0) {
        var list = document.getElementById(first_div.id + "list")
        var newLi = document.createElement('li');
        newLi.innerHTML = a;
        list.appendChild(newLi);
    }
}
