const PerformFilter = function() {
    const inputText = document.getElementById("nexus-input-1");
    const items = ["Item 1",
        "Item 2",
        "Item 3"];
    let filterItem = items;

    filterItem = typeof inputText !== "undefined" && inputText ? items.filter((item) => item.toLocaleLowerCase().indexOf(inputText.value.toLocaleLowerCase()) !== -1) : items;

    const list = document.getElementById("nxSearchList");
    list.innerHTML = "";
    filterItem.forEach((item) => {
        const listItem1 = document.createElement("nexus-search-list-item");
        const button1 = document.createElement("button");
        button1.innerText = item;
        listItem1.appendChild(button1);
        list.appendChild(listItem1);
    });
};

PerformFilter();
