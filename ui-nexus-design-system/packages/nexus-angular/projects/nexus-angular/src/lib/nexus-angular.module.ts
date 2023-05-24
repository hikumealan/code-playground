import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { applyPolyfills, defineCustomElements } from '@nexus/core/loader';

import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { RadioValueAccessor } from './directives/radio-value-accessor';
import { TextValueAccessor } from './directives/text-value-accessor';
import { SelectValueAccessor } from './directives/select-value-accessor';

import {
  NexusInput,
  NexusLabel,
  NexusFormField,
  NexusErrorMessage,
  NexusTextarea,
  NexusIcon,
  NexusCheckbox,
  NexusRadio,
  NexusSelect,
  NexusLoader,
  NexusBadge,
  NexusModal,
  NexusModalHeader,
  NexusModalBody,
  NexusModalFooter,
  NexusChip,
  NexusChipGroup,
  NexusAccordion,
  NexusAccordionTrigger,
  NexusAccordionContent,
  NexusTooltip,
  NexusTooltipTrigger,
  NexusTooltipContent,
  NexusCard,
  NexusCardHeader,
  NexusCardBody,
  NexusCardBodyImage,
  NexusCardFooter,
  NexusToast,
  NexusFileUpload,
  NexusPagination,
  NexusTree,
  NexusTreeTrigger,
  NexusTreeContent,
  NexusHeader,
  NexusHeaderLogo,
  NexusHeaderMenu,
  NexusMenu,
  NexusMenuItem,
  NexusTabBar,
  NexusNotification,
  NexusMessage,
  NexusModalHeaderSubtitle,
  NexusCardAvatar,
  NexusCardHeaderButton,
  NexusCardHeaderTitle,
  NexusCardHeaderSubtitle,
  NexusCardHeaderDetails,
  NexusFooter,
  NexusFooterLogo,
  NexusFooterBottom,
  NexusFooterColumn,
  NexusFooterContent,
  NexusFooterContentTitle,
  NexusProgressBar,
  NexusProgressBarLabel,
  NexusSearch,
  NexusSearchList,
  NexusSearchListItem,
  NexusSlider,
  NexusPinEntry,
  NexusToggle,
  NexusCarousel,
  NexusCarouselItem,
  NexusBreadcrumb,
  NexusBreadcrumbItem,
  NexusAccordionGroup,
  NexusDropdown,
  NexusOption,
  NexusAvatar,
  NexusStepper,
  NexusStepperItem
} from './directives/proxies';

applyPolyfills().then(() => {
  defineCustomElements(window);
});

const DECLARATIONS = [
  BooleanValueAccessor,
  RadioValueAccessor,
  TextValueAccessor,
  SelectValueAccessor,
  NexusInput,
  NexusLabel,
  NexusFormField,
  NexusErrorMessage,
  NexusTextarea,
  NexusIcon,
  NexusCheckbox,
  NexusRadio,
  NexusSelect,
  NexusLoader,
  NexusBadge,
  NexusModal,
  NexusModalHeader,
  NexusModalBody,
  NexusModalFooter,
  NexusChip,
  NexusChipGroup,
  NexusAccordion,
  NexusAccordionTrigger,
  NexusAccordionContent,
  NexusTooltip,
  NexusTooltipTrigger,
  NexusTooltipContent,
  NexusCard,
  NexusCardHeader,
  NexusCardBody,
  NexusCardBodyImage,
  NexusCardFooter,
  NexusToast,
  NexusFileUpload,
  NexusPagination,
  NexusTree,
  NexusTreeTrigger,
  NexusTreeContent,
  NexusHeader,
  NexusHeaderLogo,
  NexusHeaderMenu,
  NexusMenu,
  NexusMenuItem,
  NexusTabBar,
  NexusNotification,
  NexusMessage,
  NexusModalHeaderSubtitle,
  NexusCardAvatar,
  NexusCardHeaderButton,
  NexusCardHeaderTitle,
  NexusCardHeaderSubtitle,
  NexusCardHeaderDetails,
  NexusFooter,
  NexusFooterBottom,
  NexusFooterLogo,
  NexusFooterColumn,
  NexusFooterContent,
  NexusFooterContentTitle,
  NexusProgressBar,
  NexusProgressBarLabel,
  NexusSearch,
  NexusSearchList,
  NexusSearchListItem,
  NexusSlider,
  NexusPinEntry,
  NexusToggle,
  NexusCarousel,
  NexusCarouselItem,
  NexusBreadcrumb,
  NexusBreadcrumbItem,
  NexusAccordionGroup,
  NexusDropdown,
  NexusOption,
  NexusAvatar,
  NexusStepper,
  NexusStepperItem
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
  ],
  exports: DECLARATIONS,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NexusAngularModule { }