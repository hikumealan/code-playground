Sure, here's an example of how you can create a UI component library using a framework-agnostic approach, using HTML, CSS, and JavaScript:

HTML:
```
<div class="button primary">
  <span>Button Text</span>
</div>
```

CSS:
```
.button {
  display: inline-block;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
}

.primary {
  background-color: #007bff;
  color: #fff;
}

.secondary {
  background-color: #f0f0f0;
  color: #333;
}
```

JavaScript:
```
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log(`Clicked ${event.target.innerText} button`);
  });
});
```

In this example, we've created a simple button component using HTML and CSS. We've also added a JavaScript click event listener to the button, which logs a message to the console when the button is clicked.

You can use this approach to create additional UI components, such as forms, modals, and navigation menus. Just be sure to follow best practices for accessibility, usability, and maintainability, and document your components thoroughly.
