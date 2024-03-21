const paragraph = 'The quick brown fox jumped over the lazy dog.'

const shakespeare = `I left no ring with her: what means this lady?
Fortune forbid my outside have not charm'd her!
She made good view of me; indeed, so much,
That sure methought her eyes had lost her tongue,
For she did speak in starts distractedly.
She loves me, sure; the cunning of her passion
Invites me in this churlish messenger.
None of my lord's ring! why, he sent her none.
I am the man: if it be so, as 'tis,
Poor lady, she were better love a dream.
Disguise, I see, thou art a wickedness,
Wherein the pregnant enemy does much.
How easy is it for the proper-false
In women's waxen hearts to set their forms!
Alas, our frailty is the cause, not we!
For such as we are made of, such we be.
How will this fadge? my master loves her dearly;
And I, poor monster, fond as much on him;
And she, mistaken, seems to dote on me.
What will become of this? As I am man,
My state is desperate for my master's love;
As I am woman,--now alas the day!--
What thriftless sighs shall poor Olivia breathe!
O time! thou must untangle this, not I;
It is too hard a knot for me to untie!`

const phoneText = 'My phone number is (913) 445-6766.'

//* -------------------------------- .match() -------------------------------- */

const phoneNumberRegex = /\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})?/

const found = phoneText.match(phoneNumberRegex);

console.log(found);

//* ------------------------------- .replace() ------------------------------- */

const animalRegex = /(fox|dog)/g;

const replacedParagraph = paragraph.replace(animalRegex, 'RAT');

console.log(replacedParagraph);

const idealParagraph = shakespeare.replace(/\b\w{3}\b/g, 'RAT');

// console.log(idealParagraph);

//* -------------------------------- .search() ------------------------------- */

const dogRegex = /dog/;
const catRegex = /cat/;

console.log(paragraph.search(dogRegex));

console.log(paragraph.search(dogRegex) > 0);
(paragraph.search(catRegex) > 0) ? console.log(true) : console.log(false);
if (paragraph.search(catRegex) > 0) {
    console.log('cat found');
}

//* -------------------------------- .split() -------------------------------- */

const spaceRegex = / /g

const wordList = paragraph.split(spaceRegex);

console.log(wordList);