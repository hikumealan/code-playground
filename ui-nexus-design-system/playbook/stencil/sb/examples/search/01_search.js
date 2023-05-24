
const PerformFilter=()=>{
    const inputText1 = document.getElementById("nexus-input-1");
    const items1 = ["Item 1",
        "Item 2",
        "Item 3"];
    let filterItem1 = items1;

    filterItem1 = typeof inputText1 !== "undefined" && inputText1 ? items1.filter((item) => 
    item.toLocaleLowerCase().indexOf(inputText1.value.toLocaleLowerCase()) !== -1) : items1;
    const list1 = document.getElementById("nxsSearchList");
    list1.innerHTML = "";
    filterItem1.forEach((item) => {
        const listItem11 = document.createElement("nexus-search-list-item");
        const button11 = document.createElement("button");
        button11.innerText = item;
        listItem11.appendChild(button11);
        list1.appendChild(listItem11);
    });
}
PerformFilter();
document.getElementById('nexus-input-1').addEventListener('input', () => {
    PerformFilter();
});
    