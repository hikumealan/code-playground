import { initSidebarAddons, setCommonConfig } from '../../../.storybook/manager';
import { ANGULAR_URL } from '../../../.storybook/config';

setCommonConfig();
initSidebarAddons(ANGULAR_URL);
