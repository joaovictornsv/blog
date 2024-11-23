---
slug: 2024-04-11-event-loop-basics-this-time-you-understand
title: "Event Loop Basics: This Time You Understand"
authors: joaovictornsv
tags: [technical]
---

The idea of this text is to provide a simple explanation of the Event Loop. At the end of this text, it will be easy to teach your kid or even your grandmother about Event Loop.

<!-- truncate -->

## Introduction

I believe that the process of understanding a new subject should begin with abstractions and simplifications. And, from there, more explanations, new concepts, and specific details should be added to your knowledge. My suggestion for you: don’t try to absolve the entire context at once, put the puzzle together piece by piece.

So, with that in mind, my goal with this post is to give you a foundation to build your Event Loop knowledge. As I said, the foundation will only be the basic, so, for now, I will omit some advanced details and concepts in the explanation.

Let’s start.

## Initial concepts

### Callstack

Represents the JavaScript execution stack, the mechanism by which the JavaScript engine keeps track of function calls in a program.

Consider the code:

```jsx
function f1() {
	console.log('Hi by f1!');
}

function f2() {
	f1();
}

f2();
```

When the program runs, the following steps will occur:

1. `f2` function call will be added to the stack. Stack size: 1
2. `f1` function call will be added to the stack. Stack size: 2
3. `console.log` function call will be added to the stack. Stack size: 3
4. `console.log` will execute and be removed from the stack. Stack size: 2
5. `f1` will finish and be removed from the stack. Stack size: 1
6. `f2` will finish and be removed from the stack. Stack size: 0

### Microtask

A function executed after the function that created it exits, and only if the JavaScript execution stack is empty. Some examples of microtasks are the Promises’ callback functions: `.then`, `.catch`, and `.finally`. 

### Macrotask

A function that executes after the JavaScript execution stack and microtask have both been cleared. Macrotask represents some discrete and independent work. Some examples of macro tasks are the callback functions of the asynchronous timer: `setTimeout`, `setInterval`, and `setInterval`. 

## The loop

The Event Loop is responsible for orchestrating the execution of synchronous and asynchronous code in Node.js. It runs continuously while the Javascript code is executing.

In many posts about Event Loop, you will find a great and detailed explanation of how it works, the phases of execution, and which queues are managed. Well, the focus here is to make you understand the basics, so the explanation will be very simplified. But remember, this is your foundation to learn more in the future.

I will borrow and describe the good explanation presented in the video [Aula Essencial de Javascript que Você Perdeu](https://www.youtube.com/watch?v=BPAvOv0qYtw) from the Dev Junior Alves channel on YouTube.

The loop consists of three phases:

- Execute synchronous code and queue microtasks and macrotasks
- Execute callbacks on microtasks queue
- Execute callbacks on macrotasks queue

Let’s understand that process using this code example:

```jsx
console.log("1");

setTimeout(() => {
	console.log("2");
}, 0);

Promise.resolve().then(() => {
	console.log("3");
});

console.log("4");
```

Before continuing, try to figure out the code output based only on your knowledge and on what was said above.

Let’s move on. The output will be:

```
1
4
3
2
```

Okay, why? Let’s understand.

Now let’s read the code again, but with the initial concepts and the three phases of Event Loop in mind.

```jsx
// A synchronous code, execute it.
// Output: 1
console.log("1");

// Oh, a setTimeout function, this is a macrotask.
// Let's send the callback to the Macrotasks Queue.
// Output: 1
setTimeout(() => {
	console.log("2");
}, 0);

// Hmm, a Promise, a microtask.
// Let's send the .then callback to the Microtask Queue.
// Output: 1
Promise.resolve().then(() => {
	console.log("3");
});

// Other synchronous code, run it.
// Output: 1 4
console.log("4");

// -----------------------------

// Okay, now let's run the Microtask Queue: 
// Output: 1 4 3

// Finally let's run the Macrotasks Queue: 
// Output: 1 4 3 2

// Callstack, Microtask Queue, and Macrotasks Queue are empty.
// Then, THE END.
```

## Next steps

Well, now you understand in a simplified way how Event Loop works. It is no longer a seven-headed monster, perhaps a three-headed one. From now on it’s up to you to build your knowledge above this base.

“How can I do this?”. Watch, read, and practice until you get tired of the Event Loop and until it becomes a fixed concept in your mind. I will leave links to some videos and posts below.

And finally, explain it to other people: record a video, write a blog post, call a friend, etc.

I hope this post was helpful to you! See you next time :)

## Useful links

### Videos

- 🇧🇷 [Aula Essencial de Javascript que Você Perdeu](https://www.youtube.com/watch?v=BPAvOv0qYtw)
- 🇧🇷 [Async, Promises, Callbacks, Event Loop - JS](https://www.youtube.com/watch?v=NQFQQonyAxI)
- 🇺🇸 [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- 🇺🇸 [Inside the Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0)

### Posts

- [A complete guide to the Node.js event loop](https://blog.logrocket.com/complete-guide-node-js-event-loop/)
- [A Complete Visual Guide to Understanding the Node.js Event Loop](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)