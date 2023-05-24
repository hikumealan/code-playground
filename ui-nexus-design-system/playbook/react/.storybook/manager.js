import { initSidebarAddons, setCommonConfig } from '../../../.storybook/manager';
import { REACT_URL } from '../../../.storybook/config';

setCommonConfig();
initSidebarAddons(REACT_URL);
