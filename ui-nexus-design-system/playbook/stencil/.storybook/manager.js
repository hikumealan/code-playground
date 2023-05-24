import { initSidebarAddons, setCommonConfig } from '../../../.storybook/manager';
import { WC_URL } from '../../../.storybook/config';

setCommonConfig();
initSidebarAddons(WC_URL);
