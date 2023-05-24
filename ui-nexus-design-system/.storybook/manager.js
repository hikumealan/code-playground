import { ANGULAR_URL, REACT_URL, WC_URL } from './config';
import { addons } from '@storybook/addons';
import Theme from './nexus-theme';
import '../lib/register';
import favicon from './assets/favicon.ico';
const introductionPath = '?path=/docs/nexus-design-system--introduction';
const baseURL = 'https://apsdfsoom5wap0a.azurewebsites.net';
const availableVersion = require('./versions.json').availableVersion;
const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

export const setCommonConfig = () => {
  addons.setConfig({
    theme: Theme,
    sidebar: {
      showRoots: false
    }
  });
};

const waitForElm = (selector) => {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
};

let selectedFramework = '';

const initFrameworkSelect = (value) => {
  const frameworks = [
    {
      name: 'Javascript',
      value: WC_URL,
      framework: 'js'
    },
    {
      name: 'Angular',
      value: ANGULAR_URL,
      framework: 'angular'
    },
    {
      name: 'React',
      value: REACT_URL,
      framework: 'react'
    }
  ];

  const tree = document.getElementById('storybook-explorer-menu');
  const selectList = document.createElement('select');
  selectList.setAttribute('id', 'framework-selection-dropdown');
  selectList.classList.add('sb-framework-select');
  selectList.value = value;

  tree.prepend(selectList);

  for (let i = 0; i < frameworks.length; i++) {
    const option = document.createElement('option');
    option.value = frameworks[i].value;
    option.text = frameworks[i].name;
    option.setAttribute('id', `framework-selection-option-${option.text}`);

    if (option.value === value) {
      option.selected = 'selected';
      selectedFramework = frameworks[i].framework;
    }
    selectList.appendChild(option);
  }

  selectList.addEventListener('change', (event) => {
    window.location = event.target.value;
  });
};

const triggerFrameworkSelectionDOM = (value) => {
  const TIMEOUT = 1000;
  setTimeout(() => {
    initFrameworkSelect(value);
  }, TIMEOUT);
};

export function getAllVersions() {
  const versions = availableVersion;
  const versionValues = [];
  versions.forEach((version) => versionValues.push(version));
  return versionValues;
}

export let selectedVersionValue;

const initVersionsSelect = (value) => {
  const versionValues = getAllVersions();
  const versions = versionValues.map((versionValue) => {
    return {
      name: `Version ${versionValue}`,
      value: versionValue
    };
  });
  const versionTree = document.getElementById('storybook-explorer-menu');
  const selectVersion = document.createElement('select');
  selectList.setAttribute('id', 'version-selection-dropdown');
  selectVersion.classList.add('sb-version-select');
  selectVersion.value = value;

  versionTree.prepend(selectVersion);

  for (let i = 0; i < versions.length; i++) {
    const option = document.createElement('option');
    option.value = versions[i].value;
    option.text = versions[i].name;
    option.setAttribute('id', `version-selection-option-${option.text}`);
    if (option.value === value) {
      option.selected = 'selected';
    }
    selectVersion.appendChild(option);
  }

  selectVersion.addEventListener('change', (event) => {
    selectedVersionValue = event.target.value;
    window.location = `${baseURL}/${selectedVersionValue}/${selectedFramework}/${introductionPath}`;
  });
  return versions;
};

const triggerVersionSelectionDOM = (value) => {
  const TIMEOUT = 1000;
  setTimeout(() => {
    initVersionsSelect(value);
  }, TIMEOUT);
};

// this function seems to be designed to wait for the #storybook-explorer-menu element to be added to the DOM and then trigger action related to framework and version selection.
export const initSidebarAddons = async (value, valueofVersionDropdown) => {
  await waitForElm('#storybook-explorer-menu');
  if (document.readyState !== 'loading') {
    triggerFrameworkSelectionDOM(value), triggerVersionSelectionDOM(valueofVersionDropdown);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      triggerFrameworkSelectionDOM(value);
      triggerVersionSelectionDOM(valueofVersionDropdown);
    });
  }
};
