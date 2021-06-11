Check it out here: https://accordion-salaarshafi.netlify.app/

This project displays questions and you can toggle the altering buttons to show or hide the answers. The buttons alter according to the next chronological repeating toggle functionality.

The data is imported from a data file as people. This data is mapped and another function defined in another file is used to take each singular data object and return a component. This component displays the question and a button that toggles the answers and it's own appearence corresponding to it's current function.

A useState hook is present in each function that returns the jsx component and it controls whether the answer is to be shown or not by taking the buttons directives on onClick to either set the state to a true or false boolean value. The button does this by setting the state's value to opposite that of its current boolean value. React short circuit evaluation is used to decide whether the answer should be returned as an html element within the jsx component or not. The && evaluator is used. The button to be displayed is also concluded by the same method.



