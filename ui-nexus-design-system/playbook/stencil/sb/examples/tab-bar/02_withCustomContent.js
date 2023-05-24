const tabOption = [
    {
        title: 'Agile',
        value: `
              <div class="nexus-row">
          <div class="nexus-col-xs-1">
              <img src="https://www.krasamo.com/wp-content/uploads/agile-01-980x544.jpeg">
          </div>
          <div class="nexus-col-xs-3">
              <p class="nexus-body primary-story">Agile Development began during the software industry boom in the 1990s, accelerating the pace of
              innovation and competitiveness, forcing companies to react by adopting more flexible processes and considerations.</p>
  
              <p class="nexus-body primary-story">Market forces pushed for more innovative applications that require lightweight,
              agile development processes as opposed to waterfall methods with strict linear processes and a high emphasis on planning and documentation.
              User desires and preferences evolve continually, forcing applications to adapt by putting users at the center of the design
              (user-centered design) and relying on customer feedback and collaboration.</p>
          </div>
        </div>
        `,
        isActive: true
    },
    {
        title: 'Waterfall',
        value: `
        <div class="nexus-row">
        <div class="nexus-col-xs-1">
            <img src="https://startinfinity.s3.us-east-2.amazonaws.com/t/zqeUd4rpCH4mtqsKCDdu5BCanjP9GecjRMYW7Agi.png">
        </div>
        <div class="nexus-col-xs-3">
            <p class="nexus-body primary-story">The waterfall method proudly wears the title of one of the oldest process models known today.
            It was first introduced in the software development industry, yet the simplicity and universality of this approach to project management
            make it a perfect match for any type of business imaginable.</p>
  
            <p class="nexus-body primary-story">The waterfall method is a way of organizing your project activities in a gradual, cascade-like manner.
            When using it, you just need to consider your work process as a whole and divide it into several consecutive,
            logically connected phases, so that the end result of a preceding phase provides an input for the next one.</p>
        </div>
      </div>
        `,
        isActive: false
    }
];
const loadTabOption = (selectedindex) => {
    tabOption.forEach((item) => {
        item.isActive = false;
    });
    tabOption[selectedindex].isActive = true;

    const tabTag = document.getElementById('tab-component');
    const selectedTab = document.getElementById('tab-selected');
    selectedTab.innerHTML = '';
    tabTag.innerHTML = '';
    selectedTab.innerHTML = tabOption[selectedindex].value;
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