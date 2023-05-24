// tslint:disable: max-line-length

import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SBAppModule } from './sb/app.modules';

import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { PlaybookDirective } from './playbook-component.directive';

import { NexusAngularModule } from '@nexus/angular';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionExamplesComponent } from './components/accordion-examples/accordion-examples.component';
import { AccordionGroupExamplesComponent } from './components/accordion-examples/accordion-group-examples/accordion-group-examples.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AvatarExamplesComponent } from './components/avatar-examples/avatar-examples.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BadgeExamplesComponent } from './components/badge-examples/badge-examples.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbExampleComponent } from './components/breadcrumb-example/breadcrumb-example.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonExamplesComponent } from './components/button-examples/button-examples.component';
import { CardComponent } from './components/card/card.component';
import { CardExamplesComponent } from './components/card-examples/card-examples.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CheckboxExamplesComponent } from './components/checkbox-examples/checkbox-examples.component';
import { ChipComponent } from './components/chip/chip.component';
import { ChipGroupComponent } from './components/chip-group/chip-group.component';
import { ChipExamplesComponent } from './components/chip-examples/chip-examples.component';
import { LabelComponent } from './components/label/label.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderExamplesComponent } from './components/loader-examples/loader-examples.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormFieldExamplesComponent } from './components/form-field-examples/form-field-examples.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { InputExamplesComponent } from './components/input-examples/input-examples.component';
import { IconExamplesComponent } from './components/icon-examples/icon-examples.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalExamplesComponent } from './components/modal-examples/modal-examples.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PinEntryComponent } from './components/pin-entry/pin-entry.component';
import { PinEntryExamplesComponent } from './components/pin-entry-examples/pin-entry-examples.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressBarExamplesComponent } from './components/progress-bar-examples/progress-bar-examples.component';
import { RadioComponent } from './components/radio/radio.component';
import { RadioExamplesComponent } from './components/radio-examples/radio-examples.component';
import { SearchComponent } from './components/search/search.component';
import { SearchExamplesComponent } from './components/search-examples/search-examples.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderExamplesComponent } from './components/slider-examples/slider-examples.component';
import { SelectComponent } from './components/select/select.component';
import { SelectExampleComponent } from './components/select-example/select-example.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { TableComponent } from './components/table/table.component';
import { TableExamplesComponent } from './components/table-examples/table-examples.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastExamplesComponent } from './components/toast-examples/toast-examples.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ToggleExamplesComponent } from './components/toggle-examples/toggle-examples.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipExamplesComponent } from './components/tooltip-examples/tooltip-examples.component';
import { TreeComponent } from './components/tree/tree.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownExamplesComponent } from './components/dropdown-examples/dropdown-examples.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepperExamplesComponent } from './components/stepper-examples/stepper-examples.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { StackedBarChartComponent } from './components/stacked-bar-chart/stacked-bar-chart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PlaybookDirective,
    AccordionComponent,
    AccordionExamplesComponent,
    AvatarComponent,
    AvatarExamplesComponent,
    AccordionGroupExamplesComponent,
    BadgeComponent,
    BadgeExamplesComponent,
    BreadcrumbComponent,
    BreadcrumbExampleComponent,
    ButtonComponent,
    ButtonExamplesComponent,
    CardComponent,
    CardExamplesComponent,
    CarouselComponent,
    CheckboxComponent,
    CheckboxExamplesComponent,
    ChipComponent,
    ChipGroupComponent,
    ChipExamplesComponent,
    ErrorMessageComponent,
    FileUploadComponent,
    FormFieldComponent,
    FormFieldExamplesComponent,
    FooterComponent,
    HeaderComponent,
    IconComponent,
    IconExamplesComponent,
    InputComponent,
    InputExamplesComponent,
    LabelComponent,
    LoaderComponent,
    LoaderExamplesComponent,
    MenuComponent,
    ModalComponent,
    ModalExamplesComponent,
    NotificationComponent,
    PaginationComponent,
    PinEntryComponent,
    PinEntryExamplesComponent,
    ProgressBarComponent,
    ProgressBarExamplesComponent,
    RadioComponent,
    RadioExamplesComponent,
    SearchComponent,
    SearchExamplesComponent,
    SelectComponent,
    SelectExampleComponent,
    SliderComponent,
    SliderExamplesComponent,
    StepperComponent,
    StepperExamplesComponent,
    TabBarComponent,
    TableComponent,
    TableExamplesComponent,
    TextareaComponent,
    TooltipComponent,
    TooltipExamplesComponent,
    ToastComponent,
    ToastExamplesComponent,
    ToggleComponent,
    ToggleExamplesComponent,
    TreeComponent,
    DropdownComponent,
    DropdownExamplesComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    StackedBarChartComponent
  ],
  imports: [HttpClientModule, BrowserModule, FormsModule, ReactiveFormsModule, NexusAngularModule, SBAppModule],
  bootstrap: [AppComponent],
  entryComponents: [
    AvatarComponent,
    AvatarExamplesComponent,
    IndexComponent,
    AccordionComponent,
    AccordionExamplesComponent,
    AccordionGroupExamplesComponent,
    BadgeComponent,
    BadgeExamplesComponent,
    BreadcrumbComponent,
    BreadcrumbExampleComponent,
    ButtonComponent,
    ButtonExamplesComponent,
    CardComponent,
    CardExamplesComponent,
    CarouselComponent,
    CheckboxComponent,
    CheckboxExamplesComponent,
    ChipExamplesComponent,
    ErrorMessageComponent,
    FileUploadComponent,
    FormFieldComponent,
    FormFieldExamplesComponent,
    FooterComponent,
    HeaderComponent,
    IconComponent,
    IconExamplesComponent,
    InputComponent,
    InputExamplesComponent,
    LabelComponent,
    LoaderComponent,
    LoaderExamplesComponent,
    ModalComponent,
    ModalExamplesComponent,
    MenuComponent,
    NotificationComponent,
    PaginationComponent,
    PinEntryComponent,
    PinEntryExamplesComponent,
    ProgressBarComponent,
    ProgressBarExamplesComponent,
    RadioComponent,
    RadioExamplesComponent,
    SelectComponent,
    SelectExampleComponent,
    SearchComponent,
    SearchExamplesComponent,
    SliderComponent,
    SliderExamplesComponent,
    StepperComponent,
    StepperExamplesComponent,
    TableComponent,
    TabBarComponent,
    TextareaComponent,
    ToastComponent,
    ToastExamplesComponent,
    ToggleComponent,
    ToggleExamplesComponent,
    TooltipComponent,
    TooltipExamplesComponent,
    TreeComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    StackedBarChartComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
