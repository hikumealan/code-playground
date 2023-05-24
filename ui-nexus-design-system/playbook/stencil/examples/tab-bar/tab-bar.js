const tabOption = [
  {
    title: 'Option 1',
    value: 'Option 1 selected',
    isActive: true
  },
  {
    title: 'Option 2',
    value: 'Option 2 selected',
    isActive: false
  },
  {
    title: 'Option 3',
    value: 'Option 3 selected',
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
