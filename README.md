# For redux
- move only state you feel might be changed from different parts of the app to the redux store. Ask yourself, would we want to read the value of this state in different places eg showing the cart dropdown in this app may be triggered from numerous places hence the need to put the state controlling it in the global redux store. 

The reducer is much like the normal react state. It is a function that takes the initial state and action as arguments. You set an initial state of what you want before any interaction and then modify this state if it matches the exact action type you are expecting. if the action has a payload, we usually want to somehow attach this payload to the new state.

The actio(not action type) is a function that returns an object. its essentially an object really, we make it a function for modularity reasons so we can import and pass it around. This object usually contains a type property(usually required/present) and an optional payload. The reducer imports this action and uses it.


<!-- Documenting where I stopped each time on the github repo-->
<!-- Mon 4/01/2021 -->
<!-- https://github.com/ZhangMYihua/lesson-24/blob/master/src/pages/checkout/checkout.styles.scss -->


<!--  file:///Users/divinelovechukwuemeka/Downloads/Complete-React-Course-Course-Guideline%20(3).pdf-->