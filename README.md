
## Ans ro the quest no 1

- **getElementById** → Returns a single element with the given `id`.
- **getElementsByClassName** → Returns a *live* HTMLCollection of all elements that have the given class.
- **querySelector** → Returns only the **first matching** element.
- **querySelectorAll** → Returns a **list of all matches** (NodeList).






## Ans ro the quest no 2
- 1.creat the element using doccument.creatElement("tagName")
  Example :const newDiv = document.createElement("div");
- 2. Add content / attributes (texts/classs/id etc) ... ExaMple : newDiv.textContent = "Hello, I’m new here!";
- 3. Insert into the DOM usung append/prepend/beforer after An example of creating an element and insert it into DOM :

     ```html
<div id="container">yoooooo..</div> 
    ```js
<script> 
  const newDiv = document.createElement("div");
  newDiv.textContent = "Hello, I’m new here!"; 
  newDiv.className = "highlight"; 
  document.getElementById("container").appendChild(newDiv);
</script>









## Ans to the ques no 3
- Event bubbling is when an event like a click happens on an element it first runs on that element then “bubbles up” and triggers the same event on its parent then the parent’s parent and so on…like it TRavels upward through ancestors






## Ans to the quest no 4
-Event Delegation is a technique where we attach an event listener to a parent element instead of each individual child....cause via event bubbling it will handle the events of children...

-Its useful cause : 
    *It saves memory 
    *works for elements added later..we dont ned to reattach...
    *manage multiple child events in one place..so codes looks cleaner





 ## Ans to the ques no 5 
 -
   *preventDefault() : sometimes we fill-up froms ..then when we submit     the page reloads itself ..so using preventDefault stops the default     browser action for an event...
   *stopPropagation(): we know that cause of event bubbling when the         child is clicked (event happens) thw parent will receive the event      as well..so this stops the event from bubbling up to parent             elements....Clicking a child won’t trigger parent’s event listener
-SO THe Key Difference:

    *preventDefault() → Stops browser’s default action...
    *stopPropagation() → Stops the event from traveling upward.












  
