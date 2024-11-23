---
slug: 2024-05-17-how-not-to-make-mistakes-twice
authors: joaovictornsv
tags: [non-technical]
title: How not to make mistakes twice
---

Yes, I will talk about it, in the right way. I’m not a course seller or a coach. I’m just a person learning to be more efficient. I don’t like magic formulas or “success secrets”, I prefer practical, smart, and tangible actions, that anyone can do. I was thinking about how to approach it without vague and superfluous words, and I think I got a good result. This post is divided into three pillars that I follow to never make the same mistake twice. Let’s start.

<!-- truncate -->

## Don’t take feedback as a personal attack

Maybe some feedback can be a personal attack, but it’s up to you how you will deal with it. Sometimes they are valid and can be useful. For some people, it’s hard, I know, but it’s necessary to try.

Let’s imagine a daily scenario: You are walking in the street, going back to your house, and someone screams from the other side of the street: “Hey bro, your pants are dirty!”. When you look back, your pants are so dirty, it looks like you had diarrhea. Very embarrassing, right? I think you will be worried about your pants, and how to hide or fix this problem. I don’t think you will focus your attention on the guy that warned you. At the end of the day, you will feel grateful that you were warned.

Well, now let’s change the previous history a bit. Now the other side street guy screamed: “Hey bro, your pants are dirty hahahahaha, this is so ridiculous hahaha look at that idiot”. Yeah, I exaggerated. Now, your attitude will be the same? Or will you, at the first moment, be very angry and curse him? And just after saying 10^2 swearwords you will focus your attention on the real problem: your dirty pants. In this scenario, at the end of the day, you will continue hating that random guy, but you can’t say that him’s warning wasn’t helpful.

The advice here is to focus only on the main question: Is this feedback helpful and valid? Regardless it is personal or not. This a mental exercise. I’m not saying you don’t should be angry with the guy who screamed, but at least you should be grateful that he warned you, even with the jokes, he showed a problem that you couldn't find on your own.

## Write everything down all the time

Probably you already know that your brain is a powerful processor. But sometimes it hasn’t a good memory. So, don’t enslave your mind to remind about little details about random things. It can leave you anxious. A very good strategy to deal with it is to take notes. Write everything you know that you can forget (for this reason I use a password manager, and I intend to talk about it in a new post soon). Before continuing it’s important to say what type of notes I’m talking about. I’m referring to notes to remember things (like events, a little bug that appeared in your code and you want to fix it later, or a good idea that you thought of before going to sleep), not studying notes. 

You can choose the best tool for you to take your notes: a notebook, a website (like Notion), private DM with yourself, etc. You should turn it into a habit, when you think, read, or listen to something that you shouldn’t forget, write it down immediately. If you don’t do this, you will forget, as simple as it is.

I will use myself as an example. I take my notes in three different places. For quick notes about code, I use my private Canvas on Slack. During the meetings, sometimes I say: “Can you repeat that? I’m writing it down” or “Hold on a second, I’m writing down what you said.” And my notes are super simple, like  “Use X instead of Y”, “Remove that thing from the code”, or “Talk with John about Z”.

For future projects, books to read, and videos and post ideas (like this one), I use Notion. Finally, for those brilliant insights, I have before bed, I use a notebook next to my bed, or when it involves complex details (like troubleshooting a bug), I send myself an audio message on WhatsApp. And the next day, I move the notes from the previous night to the right places (Slack or Notion).

I’m not 100% satisfied with this strategy, but for now, it’s enough. But I intend to find the “perfect” note-taking strategy for me.

## Be a pattern finder

I think there is not much to say about it, the title is enough. Let's move to the practical examples.

Imagine you receive the feedback to change your code from this:

```jsx
const banUser = () => {
  if (isAdmin) {
    // all business logic
  } else {
    throw new Error("You aren't an admin")
  }
}
```

To this:

```jsx
const banUser = () => {
  if (!isAdmin) {
    throw new Error("You aren't an admin")  
  }
  // all business logic
}
```

> Just for information, this second version use the “Early return” strategy.

You learned a new good practice, cool! Now, to don’t forget this new knowledge, you need to follow this simple step: find another code that can be refactored with this strategy (you don’t need to refactor, just identify the need for refactoring), it can be in the same feedback project or another project. The goal is to teach your mind to be able to recognize this new pattern until it becomes natural behavior.

You must be sensitive to notice repetitive details. And it is not limited to code, it can be anything, like a good writing practice, a new trick to be more productive, an insight from reading a book, etc. Another quick example: You learned how to use commas correctly. Now read an email or text you wrote early and try to fix yourself.

For each new learning, think: Are there more places to apply or identify this new pattern?

## Conclusion

Let’s do a simple recap. From now on, try to have these attitudes:

- **Receiving feedback**: Don’t care about feelings. Can it help you improve? Yes? So it's valid
- **Notes**: You are not a database. Do you need to remember this? Write down.
- **New learning**: Search for at least one thing you can use your new knowledge for.

I hope these three pillars can help you to grow a little more as a person and as a developer.