What is the difference between getElementById, getElementsByClassName, and
querySelector / querySelectorAll? getElementById(): This method selects a single
HTML element by its specific ID attribute. getElementsByClassName(): This method
selects all HTML elements with a specific class name.

querySelector(): This method selects the first HTML element that matches a
specified CSS selector.

querySelectorAll(): This method selects all elements that match a specified CSS
selector.

2 How do you create and insert a new element into the DOM?

Create the element using document.createElement().

3 What is Event Bubbling and how does it work? Event bubbling is a method of
event propagation in JavaScript. When an event (like a click) occurs on a nested
element in the DOM, that event is first handled by the target element itself and
then "bubbles up" through its parent elements in a hierarchical order, all the
way to the document object.

4 What is Event Delegation in JavaScript? Why is it useful? Event delegation is
a practical application of the event bubbling principle. Instead of attaching a
separate event listener to every single element in a group (like a list or a
table), you can attach a single event listener to their common parent element.

5 What is the difference between preventDefault() and stopPropagation() methods?
event.preventDefault(): This method stops the default action of an event.

event.stopPropagation(): This method stops the event from bubbling up the DOM
tree.

Tools

Gemini
