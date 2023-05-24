const tabOption = [
    {
        title: 'Angular',
        value: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
        isActive: true
    },
    {
        title: 'React',
        value: 'React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development.',
        isActive: false
    },
    {
        title: 'Vue',
        value: 'Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.',
        isActive: false
    }
];
const loadTabOption = (selectedindex) => {
    tabOption.forEach((item) => {
        item.isActive = false;
    });
    tabOption[selectedindex].isActive = true;

    const tabTag = document.getElementById('tabComponent');
    const selectedTab = document.getElementById('tabSelected');
    selectedTab.innerHTML = '';
    tabTag.innerHTML = '';
    selectedTab.innerText = tabOption[selectedindex].value;
    tabOption.forEach((item, index) => {
        const button = document.createElement('button');
        button.innerText = item.title;
        button.addEventListener('click', () => {
            loadTabOption(index);
        });
        button.className = item.isActive ? 'nexus-link nexus-active' : 'nexus-link';
        tabTag.appendChild(button);
    });
};

loadTabOption(0);