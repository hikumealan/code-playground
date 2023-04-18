To create a popover in CSS, you can use the following code:

.popover {
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;
  border: 0;
  background: #fff;
  z-index: 1000;
}

.popover .popover-content {
  padding: 10px;
  background: #fff;
  border: 1px solid #ccc;
  max-width: 200px;
}

.popover .popover-arrow {
  position: absolute;
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #ccc;
  margin-top: -5px;
  margin-left: 10px;
}

.popover:hover {
  opacity: 1;
}
This CSS will create a popover that appears when you hover over an element. The popover will be positioned relative to the element that it is attached to, and it will have a white background with a black border. The popover will also have a small arrow that points to the element that it is attached to.

For example, if you have the following HTML:

<div class="popover">
  <div class="popover-content">This is the popover content.</div>
  <div class="popover-arrow"></div>
</div>
And the following CSS:

.popover {
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;
  border: 0;
  background: #fff;
  z-index: 1000;
}

.popover .popover-content {
  padding: 10px;
  background: #fff;
  border: 1px solid #ccc;
  max-width: 200px;
}

.popover .popover-arrow {
  position: absolute;
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #ccc;
  margin-top: -5px;
  margin-left: 10px;
}

.popover:hover {
  opacity: 1;
}
The .popover element will be displayed when you hover over the element with the class popover. The popover will have a white background with a black border, and it will contain the text "This is the popover content." The popover will also have a small arrow that points to the element with the class popover.

Sources
1. 
github.com/hernandes/MithosMuWeb
2. 
github.com/ebi-webcomponents/protvista-uniprot
