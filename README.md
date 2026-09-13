# 🎁Dev-Stack 2026🎆

### 📌📌 Key Features: From Dev Stack users can choose the stack they liked and they  able to add stack on their stack cart also remove stack can see the rating and short description. 


## ⚙️ Technologies used to build up this project:

This site has been build with the help of modern technologies as
1. JavaScript/ TypeScript: has been used for as primary coding language.

2. Tailwind CSS for creating  styling the project  and make an amazing outlook.

3. React for building UI

4. Daisy UI: To get outstanding and eye catching components 

6. Different animation effect to give the user best UI experience.

7. React toast, react icon to show message and visual satisfaction



## Assignment 05 Dev Stack 2026 : 

### Repo link:

https://github.com/Arif2ankhi/Dev-Stack-2026

 
# Project live link:


https://dev-stacks-2026.netlify.app/


## React question and answers

#### What is JSX, and why is it used in React?
JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. React uses it because it makes component structure easier to read and write than plain React.createElement() calls.

#### What is the difference between props and state?
Props are read-only data passed into a component from its parent, while state is internal data a component manages and can change over time. Props flow down; state is owned and updated by the component itself.

#### What does the useState hook do, and where did you use it in this project?
useState lets a function component store and update local state, returning the current value and a setter function. It was used here to hold things like the loaded stack items or form input values.

 #### What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs side effects after render, such as fetching data or subscribing to events. It was needed to fetch the JSON data once on mount and store it in state, since fetching is a side effect.

#### Why does every item in a .map() list need a unique key prop?
Keys help React identify which items changed, were added, or were removed. Without unique keys, React may re-render items incorrectly or inefficiently.

#### What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition, often using &&, a ternary, or an if statement. For example, rendering an "empty stack" message when the list length is zero.

#### How do you pass data from a parent to a child, and how does a child send something back?
A parent passes data to a child through props. A child sends data back by calling a callback function that the parent passed down as a prop.

# Thank You 