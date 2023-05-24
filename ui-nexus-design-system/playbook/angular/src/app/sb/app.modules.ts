/* eslint-disable max-lines */
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NexusAngularModule } from '@nexus/angular';
import SBAccordionComponent from './components/accordion/01_accordion.component';
import SBAccordionAlignmentComponent from './components/accordion/02_accordionAlignment.component';
import SBCardInsideAccordionComponent from './components/accordion/03_cardInsideAccordion.component';
import SBAccordionGroupComponent from './components/accordion/04_accordionGroup.component';
import SBBadgeComponent from './components/badge/01_badge.component';
import SBAppearenceComponent from './components/badge/02_appearence.component';
import SBButtonOverlayComponent from './components/badge/03_buttonOverlay.component';
import SBIconOverlayComponent from './components/badge/04_iconOverlay.component';
import SBCarouselComponent from './components/carousel/01_carousel.component';
import SBChipComponent from './components/chip/01_chip.component';
import SBChipVariantComponent from './components/chip/02_variant.component';
import SBChipGroupComponent from './components/chip/03_group.component';
import SBRemovableChipComponent from './components/chip/04_removable.component';
import SBChipOnDarkThemeComponent from './components/chip/05_darkTheme.component';
import SBIconComponent from './components/icon/01_icon.component';
import SBIconSizeComponent from './components/icon/02_size.component';
import SBLoaderComponent from './components/loader/01_loader.component';
import SBLoaderOverlayComponent from './components/loader/02_overlay.component';
import SBNotificationComponent from './components/notification/01_notification.component';
import SBOverlayComponent from './components/icon/03_overlay.component';
import SBIconOnFormComponent from './components/icon/04_iconOnForm.component';
import SBNotificationOverlayComponent from './components/notification/02_overlay.component';
import SBPaginationComponent from './components/pagination/01_pagination.component';
import SBProgressBarComponent from './components/progress-bar/01_progress-bar.component';
import SBProgressBarETAComponent from './components/progress-bar/02_infinite.component';
import SBProgressBarPerfReportComponent from './components/progress-bar/03_reports.component';
import SBModalComponent from './components/modal/01_modal.component';
import SBModalTOUComponent from './components/modal/02_termsOfUse.component';
import SBToastComponent from './components/toast/01_toast.component';
import SBToastVariantComponent from './components/toast/02_variants.component';
import SBToastAutoCloseComponent from './components/toast/03_autoClose.component';
import SBTooltipComponent from './components/tooltip/01_tooltip.component';
import SBTooltipPositionVariantComponent from './components/tooltip/02_position.component';
import SBBreadcrumbComponent from './components/breadcrumb/01_breadcrumb.component';
import SBBreadcrumbWithIconComponent from './components/breadcrumb/02_breadcrumbWithIcon.component';
import SBDisableBreadcrumbItemComponent from './components/breadcrumb/03_disableBreadcrumbItem.component';
import SBFooterComponent from './components/footer/01_footer.component';
import SBHeaderComponent from './components/header/01_header.component';
import SBMenuComponent from './components/menu/01_menu.component';
import SBHeaderWithAvatarComponent from './components/header/02_withAvatar.component';
import SBStepperComponent from './components/stepper/01_stepper.component';
import SBButtonComponent from './components/button/01_button.component';
import SBStateComponent from './components/button/03_state.component';
import SBSizeComponent from './components/button/02_size.component';
import SBDisabledComponent from './components/button/05_disabled.component';
import SBFloatingButtonComponent from './components/button/06_floatingButton.component';
import SBDarkThemeComponent from './components/button/04_darkTheme.component';
import SBTabBarComponent from './components/tab-bar/01_tab-bar.component';
import SBWithCustomContentComponent from './components/tab-bar/02_withCustomContent.component';
import SBTableComponent from './components/table/01_table.component';
import SBDropdownComponent from './components/dropdown/01_dropdown.component';
import SBWithSelectComponent from './components/dropdown/03_withSelect.component';
import SBTabbedButtonComponent from './components/button/07_tabbed.component';
import SBPinEntryComponent from './components/pin-entry/01_pin-entry.component';
import SBPinEntryDisabledComponent from './components/pin-entry/02_pinEntryDisabled.component';
import SBWithCustomLengthComponent from './components/pin-entry/03_withCustomLength.component';
import SBErrorMessageComponent from './components/error-message/01_error-message.component';
import SBEmailValidationComponent from './components/error-message/02_emailValidation.component';
import SBNameValidationComponent from './components/error-message/03_nameValidation.component';
import SBNexusNotificationVariant from './components/notification/03_variants.component';
import SBInputComponent from './components/input/01_input.component';
import SBInputMaxLengthComponent from './components/input/02_maxLength.component';
import SBInputPasswordComponent from './components/input/04_withPassword.component';
import SBInputNumberComponent from './components/input/03_withNumber.component';
import SBInputDateComponent from './components/input/05_withDate.component';
import SBInputReadOnlyComponent from './components/input/06_readOnly.component';
import SBInputDisabledComponent from './components/input/07_disabled.component';
import SBFormFieldComponent from './components/form-field/01_form-field.component';
import SBFormFieldDisableComponent from './components/form-field/02_disabled.component';
import SBFormFieldMessageComponent from './components/form-field/03_withMessage.component';
import SBFormFieldWithErrorComponent from './components/form-field/04_withError.component';
import SBRadioComponent from './components/radio/01_radio.component';
import SBGroupComponent from './components/radio/02_group.component';
import SBWithIconComponent from './components/radio/03_withIcon.component';
import SBVariantsComponent from './components/radio/04_variants.component';
import SBGroupDisabledComponent from './components/radio/05_groupDisabled.component';
import SBDisabledSelectedComponent from './components/radio/06_disabledSelected.component';
import SBSelectComponent from './components/select/01_select.component';
import SBCustomComponent from './components/select/02_custom.component';
import SBMultiselectComponent from './components/select/03_multiselect.component';
import SBFileUploadComponent from './components/file-upload/01_file-upload.component';
import SBUploadImageComponent from './components/file-upload/02_uploadImage.component';
import SBSliderComponent from './components/slider/01_slider.component';
import SBSliderDisabledComponent from './components/slider/02_disabled.component';
import SBValidationComponent from './components/slider/03_validation.component';
import SBToggleComponent from './components/toggle/01_toggle.component';
import SBSwitchDisabledComponent from './components/toggle/02_switchDisabled.component';
import SBWithLabelComponent from './components/toggle/03_withLabel.component';
import SBTypesComponent from './components/toggle/04_types.component';
import SBSwitchSizeComponent from './components/toggle/05_switchSize.component';
import SBButtonSwitchComponent from './components/toggle/06_buttonSize.component';
import SBBarchartComponent from './components/bar-chart/01_bar-chart.component';
import SBLinechartComponent from './components/line-chart/01_line-chart.component';
import SBCheckboxComponent from './components/checkbox/01_checkbox.component';
import SBConfigurationComponent from './components/checkbox/02_configuration.component';
import SBTextareaComponent from './components/textarea/01_textarea.component';
import SBCardComponent from './components/card/01_card.component';
import SBCardWithBackgroundColor from './components/card/02_backgroundColor.component';
import SBCardFullBackgroundImage from './components/card/03_fullBackgroundImage.component';
import SBCardBodyWithBackgroundImage from './components/card/04_bodyWithImage.component';
import SBAccordionGroupWithTableSlotComponent from './components/accordion/05_accordionGroupWithTableSlot';
import SBTreeComponent from './components/tree/01_tree.component';
import SBAvatarComponent from './components/avatar/01_avatar.component';
import SBImageAndNameComponent from './components/avatar/04_imageAndName.component';
import SBAvatarInitialsComponent from './components/avatar/05_initials.component';
import SBAvatarInitialsAndNameComponent from './components/avatar/06_initialsAndName.component';
import SBInitialsNameAndNotificationComponent from './components/avatar/07_initialsNameAndNotification.component';
import SBLogoAndNameComponent from './components/avatar/08_logoAndName.component';
import SBStatusComponent from './components/avatar/03_status.component';
import SBAvatarSizeComponent from './components/avatar/02_size.component';
import SBSearchComponent from './components/search/01_search.component';
import SBFilterTableComponent from './components/search/02_filterTable.component';
import SBStepperStatusComponent from './components/stepper/02_status.component';
import SBAccordionFileUploadComponent from './components/accordion/06_withFileUpload.component';
import SBPieChartComponent from './components/pie-chart/01_pie-chart.component';
import SPStackedBarChart from './components/stacked-bar-chart/01_stacked-bar-chart.component';
import SBWithButtonComponent from './components/dropdown/02_withButton.component';
@NgModule({
  declarations: [
    SBAccordionComponent,
    SBAccordionAlignmentComponent,
    SBCardInsideAccordionComponent,
    SBAccordionGroupComponent,
    SBBadgeComponent,
    SBAppearenceComponent,
    SBButtonOverlayComponent,
    SBSizeComponent,
    SBIconOverlayComponent,
    SBCarouselComponent,
    SBChipComponent,
    SBChipVariantComponent,
    SBChipGroupComponent,
    SBRemovableChipComponent,
    SBChipOnDarkThemeComponent,
    SBIconComponent,
    SBIconSizeComponent,
    SBLoaderComponent,
    SBLoaderOverlayComponent,
    SBNotificationComponent,
    SBOverlayComponent,
    SBIconOnFormComponent,
    SBNotificationOverlayComponent,
    SBPaginationComponent,
    SBProgressBarComponent,
    SBProgressBarETAComponent,
    SBProgressBarPerfReportComponent,
    SBModalComponent,
    SBModalTOUComponent,
    SBToastComponent,
    SBToastVariantComponent,
    SBToastAutoCloseComponent,
    SBTooltipComponent,
    SBBreadcrumbComponent,
    SBBreadcrumbWithIconComponent,
    SBDisableBreadcrumbItemComponent,
    SBFooterComponent,
    SBHeaderComponent,
    SBMenuComponent,
    SBHeaderWithAvatarComponent,
    SBStepperComponent,
    SBButtonComponent,
    SBStateComponent,
    SBTooltipPositionVariantComponent,
    SBDisabledComponent,
    SBFloatingButtonComponent,
    SBDarkThemeComponent,
    SBTabBarComponent,
    SBWithCustomContentComponent,
    SBTabBarComponent,
    SBTableComponent,
    SBDropdownComponent,
    SBWithSelectComponent,
    SBTabbedButtonComponent,
    SBPinEntryComponent,
    SBPinEntryDisabledComponent,
    SBWithCustomLengthComponent,
    SBErrorMessageComponent,
    SBEmailValidationComponent,
    SBNameValidationComponent,
    SBNexusNotificationVariant,
    SBInputComponent,
    SBInputMaxLengthComponent,
    SBInputPasswordComponent,
    SBInputNumberComponent,
    SBInputDateComponent,
    SBInputReadOnlyComponent,
    SBInputDisabledComponent,
    SBFormFieldComponent,
    SBFormFieldDisableComponent,
    SBFormFieldMessageComponent,
    SBFormFieldWithErrorComponent,
    SBRadioComponent,
    SBGroupComponent,
    SBWithIconComponent,
    SBVariantsComponent,
    SBGroupDisabledComponent,
    SBDisabledSelectedComponent,
    SBSelectComponent,
    SBCustomComponent,
    SBMultiselectComponent,
    SBFileUploadComponent,
    SBUploadImageComponent,
    SBSliderComponent,
    SBSliderDisabledComponent,
    SBValidationComponent,
    SBToggleComponent,
    SBSwitchDisabledComponent,
    SBWithLabelComponent,
    SBTypesComponent,
    SBSwitchSizeComponent,
    SBButtonSwitchComponent,
    SBBarchartComponent,
    SBLinechartComponent,
    SBCheckboxComponent,
    SBConfigurationComponent,
    SBTextareaComponent,
    SBCardComponent,
    SBCardWithBackgroundColor,
    SBCardFullBackgroundImage,
    SBCardBodyWithBackgroundImage,
    SBLinechartComponent,
    SBAccordionGroupWithTableSlotComponent,
    SBTreeComponent,
    SBAvatarComponent,
    SBImageAndNameComponent,
    SBAvatarInitialsComponent,
    SBAvatarInitialsAndNameComponent,
    SBInitialsNameAndNotificationComponent,
    SBLogoAndNameComponent,
    SBStatusComponent,
    SBAvatarSizeComponent,
    SBSearchComponent,
    SBFilterTableComponent,
    SBStepperStatusComponent,
    SBAccordionFileUploadComponent,
    SBPieChartComponent,
    SPStackedBarChart,
    SBWithButtonComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NexusAngularModule],

  bootstrap: [],
  entryComponents: [
    SBAccordionComponent,
    SBAccordionAlignmentComponent,
    SBCardInsideAccordionComponent,
    SBAccordionGroupComponent,
    SBBadgeComponent,
    SBAppearenceComponent,
    SBButtonOverlayComponent,
    SBSizeComponent,
    SBIconOverlayComponent,
    SBCarouselComponent,
    SBChipComponent,
    SBChipVariantComponent,
    SBChipGroupComponent,
    SBRemovableChipComponent,
    SBChipOnDarkThemeComponent,
    SBIconComponent,
    SBIconSizeComponent,
    SBLoaderComponent,
    SBLoaderOverlayComponent,
    SBNotificationComponent,
    SBOverlayComponent,
    SBIconOnFormComponent,
    SBNotificationOverlayComponent,
    SBPaginationComponent,
    SBProgressBarComponent,
    SBProgressBarETAComponent,
    SBProgressBarPerfReportComponent,
    SBModalComponent,
    SBModalTOUComponent,
    SBToastComponent,
    SBToastVariantComponent,
    SBToastAutoCloseComponent,
    SBTooltipComponent,
    SBBreadcrumbComponent,
    SBBreadcrumbWithIconComponent,
    SBDisableBreadcrumbItemComponent,
    SBFooterComponent,
    SBHeaderComponent,
    SBMenuComponent,
    SBHeaderWithAvatarComponent,
    SBStepperComponent,
    SBButtonComponent,
    SBStateComponent,
    SBTooltipPositionVariantComponent,
    SBDisabledComponent,
    SBFloatingButtonComponent,
    SBDarkThemeComponent,
    SBTabBarComponent,
    SBWithCustomContentComponent,
    SBTabBarComponent,
    SBTableComponent,
    SBDropdownComponent,
    SBWithSelectComponent,
    SBTabbedButtonComponent,
    SBPinEntryComponent,
    SBPinEntryDisabledComponent,
    SBWithCustomLengthComponent,
    SBErrorMessageComponent,
    SBEmailValidationComponent,
    SBNameValidationComponent,
    SBNexusNotificationVariant,
    SBInputComponent,
    SBInputMaxLengthComponent,
    SBInputPasswordComponent,
    SBInputNumberComponent,
    SBInputDateComponent,
    SBInputReadOnlyComponent,
    SBInputDisabledComponent,
    SBFormFieldComponent,
    SBFormFieldDisableComponent,
    SBFormFieldMessageComponent,
    SBFormFieldWithErrorComponent,
    SBRadioComponent,
    SBGroupComponent,
    SBWithIconComponent,
    SBVariantsComponent,
    SBGroupDisabledComponent,
    SBDisabledSelectedComponent,
    SBSelectComponent,
    SBCustomComponent,
    SBMultiselectComponent,
    SBFileUploadComponent,
    SBUploadImageComponent,
    SBSliderComponent,
    SBSliderDisabledComponent,
    SBToggleComponent,
    SBSwitchDisabledComponent,
    SBWithLabelComponent,
    SBTypesComponent,
    SBSwitchSizeComponent,
    SBButtonSwitchComponent,
    SBBarchartComponent,
    SBLinechartComponent,
    SBCheckboxComponent,
    SBConfigurationComponent,
    SBTextareaComponent,
    SBCardComponent,
    SBCardWithBackgroundColor,
    SBCardFullBackgroundImage,
    SBCardBodyWithBackgroundImage,
    SBAccordionGroupWithTableSlotComponent,
    SBTreeComponent,
    SBAvatarComponent,
    SBImageAndNameComponent,
    SBAvatarInitialsComponent,
    SBAvatarInitialsAndNameComponent,
    SBInitialsNameAndNotificationComponent,
    SBLogoAndNameComponent,
    SBStatusComponent,
    SBAvatarSizeComponent,
    SBSearchComponent,
    SBFilterTableComponent,
    SBStepperStatusComponent,
    SBPieChartComponent,
    SPStackedBarChart,
    SBWithButtonComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SBAppModule {}
