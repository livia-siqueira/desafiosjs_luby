(function (win, doc) {

    var tasks = [];
    $buttonAddItem = doc.querySelector("[data-js='button']")
    $inputTask = doc.querySelector("[data-js='enterTask']");
    $list = doc.querySelector("ul");
    $buttonCompleted = doc.querySelector("[className = 'btnCompleted']");
    $h1 = doc.querySelector("h1");

    function on(element, event, callback) {
        return element.addEventListener(event, callback, false);
    }

    on($buttonAddItem, 'mouseover', function () {
        $buttonAddItem.style.color = "red";
    });

    on($buttonAddItem, 'mouseout', function () {
        $buttonAddItem.style.color = "black";
    });

    on($h1, 'pointerover', function () {
        var changeName = confirm("Deseja personalizar o nome da sua lista de tarefas? ");
        if (changeName)
            var newName = prompt("Digite o nome que deseja: ");
        if (newName)
            $h1.innerHTML = newName;
    })

    on($buttonAddItem, 'click', function () {
        if (!$inputTask.value) return alert("Adicione um item!");
        if (testTask() === 1) return alert("Item ja existe");
        tasks.push($inputTask.value);
        addItemList($inputTask.value);
    }, false);

    function createButtons() {
        var $buttonCompleted = doc.createElement("button");
        $buttonCompleted.innerHTML = "ok";
        var $buttonRemoved = doc.createElement("button");
        $buttonRemoved.innerHTML = "x";
        var arrButtons = [$buttonCompleted, $buttonRemoved];
        createEventButtons($buttonCompleted, $buttonRemoved);
        createClassButtons($buttonCompleted, $buttonRemoved);
        return arrButtons;
    }

    function createEventButtons(buttonCompleted, buttonRemoved) {
        var divFather;
        var FirstDiv;
        on(buttonCompleted, 'click', function () {
            divFather = this.parentNode;
            FirstDiv = divFather.parentNode;
            FirstDiv.className = 'addcomplete';
        });
        on(buttonRemoved, 'click', function () {
            divFather = this.parentNode;
            FirstDiv = divFather.parentNode;
            tasks.shift(FirstDiv.firstChild.nodeValue);
            $list.removeChild(FirstDiv);
        });
    }

    function createClassButtons(buttonCompleted, buttonRemoved) {
        buttonCompleted.className = "btnCompleted";
        buttonRemoved.className = "btnRemoved";
    }

    function createItem(item) {
        $div = doc.createElement("div");
        $div.className = "btn-list";
        $newItem = doc.createElement("li");
        $newItem.appendChild(doc.createTextNode(item));
        $div.appendChild(createButtons()[0]);
        $div.appendChild(createButtons()[1]);
        $newItem.appendChild($div);
        return $newItem;
    }

    function addItemList(item) {
        $list.appendChild(createItem(item));
    }

    function testTask() {
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i] === $inputTask.value) return 1;
        }
        return 0;
    }

})(window, document);
