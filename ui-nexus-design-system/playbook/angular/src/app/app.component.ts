import { Component, ViewChild, OnInit, ComponentFactoryResolver } from '@angular/core';
import { PlaybookDirective } from './playbook-component.directive';
import { IndexComponent } from './views/index/index.component';
import { InputComponent } from './components/input/input.component';
import { InputExamplesComponent } from './components/input-examples/input-examples.component';
import { LabelComponent } from './components/label/label.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { IconComponent } from './components/icon/icon.component';
import { IconExamplesComponent } from './components/icon-examples/icon-examples.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonExamplesComponent } from './components/button-examples/button-examples.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CheckboxExamplesComponent } from './components/checkbox-examples/checkbox-examples.component';
import { RadioComponent } from './components/radio/radio.component';
import { RadioExamplesComponent } from './components/radio-examples/radio-examples.component';
import { SelectComponent } from './components/select/select.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderExamplesComponent } from './components/loader-examples/loader-examples.component';
import { BadgeComponent } from './components/badge/badge.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ModalComponent } from './components/modal/modal.component';
import { BadgeExamplesComponent } from './components/badge-examples/badge-examples.component';
import { AvatarExamplesComponent } from './components/avatar-examples/avatar-examples.component';
import { ChipComponent } from './components/chip/chip.component';
import { ChipExamplesComponent } from './components/chip-examples/chip-examples.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionExamplesComponent } from './components/accordion-examples/accordion-examples.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipExamplesComponent } from './components/tooltip-examples/tooltip-examples.component';
import { CardComponent } from './components/card/card.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastExamplesComponent } from './components/toast-examples/toast-examples.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TreeComponent } from './components/tree/tree.component';
import { MenuComponent } from './components/menu/menu.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FormFieldExamplesComponent } from './components/form-field-examples/form-field-examples.component';
import { CardExamplesComponent } from './components/card-examples/card-examples.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressBarExamplesComponent } from './components/progress-bar-examples/progress-bar-examples.component';
import { SearchComponent } from './components/search/search.component';
import { SearchExamplesComponent } from './components/search-examples/search-examples.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderExamplesComponent } from './components/slider-examples/slider-examples.component';
import { PinEntryComponent } from './components/pin-entry/pin-entry.component';
import { PinEntryExamplesComponent } from './components/pin-entry-examples/pin-entry-examples.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ToggleExamplesComponent } from './components/toggle-examples/toggle-examples.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TableComponent } from './components/table/table.component';
import { TableExamplesComponent } from './components/table-examples/table-examples.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbExampleComponent } from './components/breadcrumb-example/breadcrumb-example.component';
import { AccordionGroupExamplesComponent } from './components/accordion-examples/accordion-group-examples/accordion-group-examples.component';
import { SelectExampleComponent } from './components/select-example/select-example.component';
import { ModalExamplesComponent } from './components/modal-examples/modal-examples.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownExamplesComponent } from './components/dropdown-examples/dropdown-examples.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepperExamplesComponent } from './components/stepper-examples/stepper-examples.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { StackedBarChartComponent } from './components/stacked-bar-chart/stacked-bar-chart.component';

// New Import Here

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(PlaybookDirective, { static: true }) playbookDirective: PlaybookDirective;

  index = IndexComponent;

  input = InputComponent;

  inputExamples = InputExamplesComponent;

  label = LabelComponent;

  formField = FormFieldComponent;

  errorMessage = ErrorMessageComponent;

  textarea = TextareaComponent;

  icon = IconComponent;

  iconExamples = IconExamplesComponent;

  button = ButtonComponent;

  buttonExamples = ButtonExamplesComponent;

  checkbox = CheckboxComponent;

  checkboxExamples = CheckboxExamplesComponent;

  radio = RadioComponent;

  radioExamples = RadioExamplesComponent;

  select = SelectComponent;

  loader = LoaderComponent;

  loaderExamples = LoaderExamplesComponent;

  badge = BadgeComponent;

  avatar = AvatarComponent;

  modal = ModalComponent;

  modalExamples = ModalExamplesComponent;

  badgeExamples = BadgeExamplesComponent;

  avatarExamples = AvatarExamplesComponent;

  chip = ChipComponent;

  chipExamples = ChipExamplesComponent;

  accordion = AccordionComponent;

  accordionExamples = AccordionExamplesComponent;

  accordionGroupExamples = AccordionGroupExamplesComponent;

  tooltip = TooltipComponent;

  tooltipExamples = TooltipExamplesComponent;

  card = CardComponent;

  toast = ToastComponent;

  toastExamples = ToastExamplesComponent;

  fileUpload = FileUploadComponent;

  pagination = PaginationComponent;

  tree = TreeComponent;

  menu = MenuComponent;

  tabBar = TabBarComponent;

  header = HeaderComponent;

  notification = NotificationComponent;

  formFieldExamples = FormFieldExamplesComponent;

  cardExamples = CardExamplesComponent;

  footer = FooterComponent;

  progressBar = ProgressBarComponent;

  progressBarExamples = ProgressBarExamplesComponent;

  search = SearchComponent;

  searchExamples = SearchExamplesComponent;

  slider = SliderComponent;

  sliderExamples = SliderExamplesComponent;

  stepper = StepperComponent;

  stepperExamples = StepperExamplesComponent;

  pinEntry = PinEntryComponent;

  pinEntryExamples = PinEntryExamplesComponent;

  toggle = ToggleComponent;

  toggleExamples = ToggleExamplesComponent;

  carousel = CarouselComponent;

  table = TableComponent;

  tableExamples = TableExamplesComponent;

  breadcrumb = BreadcrumbComponent;

  breadcrumbExample = BreadcrumbExampleComponent;

  selectExample = SelectExampleComponent;

  dropdown = DropdownComponent;

  dropdownExamples = DropdownExamplesComponent;

  barChart = BarChartComponent;

  lineChart = LineChartComponent;

  pieChart = PieChartComponent;

  stackedBarChart = StackedBarChartComponent;
  // New Map Here

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent(window.location.search.split('?')[1]);
  }

  loadComponent(component) {
    const app = component ? this[component] : this.index;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(app);

    const { viewContainerRef } = this.playbookDirective;
    viewContainerRef.clear();

    viewContainerRef.createComponent(componentFactory);
  }
}
