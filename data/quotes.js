const quotes = [
  {
    q: "What you become is far more important than what you get.",
    a: "Jim Rohn",
    c: "56",
    h: "<blockquote>&ldquo;What you become is far more important than what you get.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
  },
  {
    q: "It's easier to lose than to win.  ",
    a: "Wayne Gretzky",
    c: "34",
    h: "<blockquote>&ldquo;It's easier to lose than to win.  &rdquo; &mdash; <footer>Wayne Gretzky</footer></blockquote>",
  },
  {
    q: "Failure is not fatal, but failure to change might be.",
    a: "John Wooden",
    c: "53",
    h: "<blockquote>&ldquo;Failure is not fatal, but failure to change might be.&rdquo; &mdash; <footer>John Wooden</footer></blockquote>",
  },
  {
    q: "Life is but one dream flowing into another.",
    a: "Ming-Dao Deng",
    c: "43",
    h: "<blockquote>&ldquo;Life is but one dream flowing into another.&rdquo; &mdash; <footer>Ming-Dao Deng</footer></blockquote>",
  },
  {
    q: "You have to make time, even for something as universal as staring at the stars.",
    a: "W.P. Kinsella",
    c: "79",
    h: "<blockquote>&ldquo;You have to make time, even for something as universal as staring at the stars.&rdquo; &mdash; <footer>W.P. Kinsella</footer></blockquote>",
  },
  {
    q: "Men are anxious to improve their circumstances but are unwilling to improve themselves; they therefore remain bound.",
    a: "James Allen",
    c: "116",
    h: "<blockquote>&ldquo;Men are anxious to improve their circumstances but are unwilling to improve themselves; they therefore remain bound.&rdquo; &mdash; <footer>James Allen</footer></blockquote>",
  },
  {
    q: "You don't need a weatherman to know which way the wind blows.",
    a: "Bob Dylan",
    c: "61",
    h: "<blockquote>&ldquo;You don't need a weatherman to know which way the wind blows.&rdquo; &mdash; <footer>Bob Dylan</footer></blockquote>",
  },
  {
    q: "True love stories never have endings.",
    a: "Richard Bach",
    c: "37",
    h: "<blockquote>&ldquo;True love stories never have endings.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>",
  },
  {
    q: "Don't let someone elses. opinion become your reality.",
    a: "Les Brown",
    c: "53",
    h: "<blockquote>&ldquo;Don't let someone elses. opinion become your reality.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>",
  },
  {
    q: "The season of failure is the best time for sowing the seeds of success. ",
    a: "Paramahansa Yogananda",
    c: "72",
    h: "<blockquote>&ldquo;The season of failure is the best time for sowing the seeds of success. &rdquo; &mdash; <footer>Paramahansa Yogananda</footer></blockquote>",
  },
  {
    q: "A gentleman is one who puts more into the world than he takes out.",
    a: "George Bernard Shaw",
    c: "66",
    h: "<blockquote>&ldquo;A gentleman is one who puts more into the world than he takes out.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>",
  },
  {
    q: "Whatever your mind can conceive and believe, it can achieve.",
    a: "Napoleon Hill",
    c: "60",
    h: "<blockquote>&ldquo;Whatever your mind can conceive and believe, it can achieve.&rdquo; &mdash; <footer>Napoleon Hill</footer></blockquote>",
  },
  {
    q: "There are dark shadows on the earth, but its lights are stronger in the contrast.",
    a: "Charles Dickens",
    c: "81",
    h: "<blockquote>&ldquo;There are dark shadows on the earth, but its lights are stronger in the contrast.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>",
  },
  {
    q: "When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
    a: "Walt Disney",
    c: "86",
    h: "<blockquote>&ldquo;When you believe in a thing, believe in it all the way, implicitly and unquestionable.&rdquo; &mdash; <footer>Walt Disney</footer></blockquote>",
  },
  {
    q: "You are never too old to set another goal or to dream a new dream.",
    a: "Les Brown",
    c: "66",
    h: "<blockquote>&ldquo;You are never too old to set another goal or to dream a new dream.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>",
  },
  {
    q: "Do not stop thinking of life as an adventure.",
    a: "Eleanor Roosevelt",
    c: "45",
    h: "<blockquote>&ldquo;Do not stop thinking of life as an adventure.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>",
  },
  {
    q: "If you are patient in one moment of anger, you will escape a hundred days of sorrow. ",
    a: "Chinese Proverb",
    c: "85",
    h: "<blockquote>&ldquo;If you are patient in one moment of anger, you will escape a hundred days of sorrow. &rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>",
  },
  {
    q: "Focused, hard work is the real key to success.",
    a: "John Carmack",
    c: "46",
    h: "<blockquote>&ldquo;Focused, hard work is the real key to success.&rdquo; &mdash; <footer>John Carmack</footer></blockquote>",
  },
  {
    q: "Always seek out the seed of triumph in every adversity.",
    a: "Og Mandino",
    c: "55",
    h: "<blockquote>&ldquo;Always seek out the seed of triumph in every adversity.&rdquo; &mdash; <footer>Og Mandino</footer></blockquote>",
  },
  {
    q: "I will not walk backward in life.",
    a: "J.R.R. Tolkien",
    c: "33",
    h: "<blockquote>&ldquo;I will not walk backward in life.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>",
  },
  {
    q: "Trust, but verify.",
    a: "Ronald Reagan",
    c: "18",
    h: "<blockquote>&ldquo;Trust, but verify.&rdquo; &mdash; <footer>Ronald Reagan</footer></blockquote>",
  },
  {
    q: "If it's not broken, tinker with it till you find out how it works.",
    a: "Bob Proctor",
    c: "66",
    h: "<blockquote>&ldquo;If it's not broken, tinker with it till you find out how it works.&rdquo; &mdash; <footer>Bob Proctor</footer></blockquote>",
  },
  {
    q: "The best of us sometimes eat our words.  ",
    a: "Albus Dumbledore",
    c: "41",
    h: "<blockquote>&ldquo;The best of us sometimes eat our words.  &rdquo; &mdash; <footer>Albus Dumbledore</footer></blockquote>",
  },
  {
    q: "Be approximately right rather than exactly wrong.",
    a: "John Tukey",
    c: "49",
    h: "<blockquote>&ldquo;Be approximately right rather than exactly wrong.&rdquo; &mdash; <footer>John Tukey</footer></blockquote>",
  },
  {
    q: "If he cannot stop the mind that seeks after fame and profit, he will spend his life without finding peace.",
    a: "Dogen",
    c: "106",
    h: "<blockquote>&ldquo;If he cannot stop the mind that seeks after fame and profit, he will spend his life without finding peace.&rdquo; &mdash; <footer>Dogen</footer></blockquote>",
  },
  {
    q: "Everything is created twice, first in the mind and then in reality.",
    a: "Robin Sharma",
    c: "67",
    h: "<blockquote>&ldquo;Everything is created twice, first in the mind and then in reality.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>",
  },
  {
    q: "Keep your eyes on the stars, but remember to keep your feet on the ground.",
    a: "Theodore Roosevelt",
    c: "74",
    h: "<blockquote>&ldquo;Keep your eyes on the stars, but remember to keep your feet on the ground.&rdquo; &mdash; <footer>Theodore Roosevelt</footer></blockquote>",
  },
  {
    q: "The person who says something is impossible should not interrupt the person who is doing it.",
    a: "Chinese Proverb",
    c: "92",
    h: "<blockquote>&ldquo;The person who says something is impossible should not interrupt the person who is doing it.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>",
  },
  {
    q: "What the eye doesn't see and the mind doesn't know, doesn't exist.",
    a: "D. H. Lawrence",
    c: "66",
    h: "<blockquote>&ldquo;What the eye doesn't see and the mind doesn't know, doesn't exist.&rdquo; &mdash; <footer>D. H. Lawrence</footer></blockquote>",
  },
  {
    q: "Life is too short to waste your time on people who don't respect, appreciate, and value you.",
    a: "Roy T. Bennett",
    c: "92",
    h: "<blockquote>&ldquo;Life is too short to waste your time on people who don't respect, appreciate, and value you.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>",
  },
  {
    q: "A poet should be so crafty with words that he is envied even for his pains.",
    a: "Criss Jami",
    c: "75",
    h: "<blockquote>&ldquo;A poet should be so crafty with words that he is envied even for his pains.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>",
  },
  {
    q: "We may not be responsible for the world that created our minds, but we can take responsibility for the mind with which we create our world.",
    a: "Gabor Mate",
    c: "139",
    h: "<blockquote>&ldquo;We may not be responsible for the world that created our minds, but we can take responsibility for the mind with which we create our world.&rdquo; &mdash; <footer>Gabor Mate</footer></blockquote>",
  },
  {
    q: "The few who do are the envy of the many who only watch.",
    a: "Jim Rohn",
    c: "55",
    h: "<blockquote>&ldquo;The few who do are the envy of the many who only watch.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
  },
  {
    q: "Winning isn't everything, but wanting to win is.",
    a: "Vince Lombardi",
    c: "48",
    h: "<blockquote>&ldquo;Winning isn't everything, but wanting to win is.&rdquo; &mdash; <footer>Vince Lombardi</footer></blockquote>",
  },
  {
    q: "Falling down is not failure. Failure comes when you stay where you have fallen.",
    a: "Socrates",
    c: "79",
    h: "<blockquote>&ldquo;Falling down is not failure. Failure comes when you stay where you have fallen.&rdquo; &mdash; <footer>Socrates</footer></blockquote>",
  },
  {
    q: "The beautiful journey of today can only begin when we learn to let go of yesterday.",
    a: "Steve Maraboli",
    c: "83",
    h: "<blockquote>&ldquo;The beautiful journey of today can only begin when we learn to let go of yesterday.&rdquo; &mdash; <footer>Steve Maraboli</footer></blockquote>",
  },
  {
    q: "Your greatest asset is your earning ability. Your greatest resource is your time.",
    a: "Brian Tracy",
    c: "81",
    h: "<blockquote>&ldquo;Your greatest asset is your earning ability. Your greatest resource is your time.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>",
  },
  {
    q: "I have not failed. I've just found 10,000 ways that won't work.",
    a: "Thomas Edison",
    c: "63",
    h: "<blockquote>&ldquo;I have not failed. I've just found 10,000 ways that won't work.&rdquo; &mdash; <footer>Thomas Edison</footer></blockquote>",
  },
  {
    q: "Whatever you think the world is withholding from you, you are withholding from the world.",
    a: "Eckhart Tolle",
    c: "89",
    h: "<blockquote>&ldquo;Whatever you think the world is withholding from you, you are withholding from the world.&rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>",
  },
  {
    q: "Be the silent watcher of your thoughts and behavior. You are beneath the thinker.",
    a: "Eckhart Tolle",
    c: "81",
    h: "<blockquote>&ldquo;Be the silent watcher of your thoughts and behavior. You are beneath the thinker.&rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>",
  },
  {
    q: "Teachers open the door. You enter by yourself. ",
    a: "Chinese Proverb",
    c: "47",
    h: "<blockquote>&ldquo;Teachers open the door. You enter by yourself. &rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>",
  },
  {
    q: "Every traveler has a home of his own, and he learns to appreciate it the more from his wandering.",
    a: "Charles Dickens",
    c: "97",
    h: "<blockquote>&ldquo;Every traveler has a home of his own, and he learns to appreciate it the more from his wandering.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>",
  },
  {
    q: "Whenever you do a thing, act as if all the world were watching.",
    a: "Thomas Jefferson",
    c: "63",
    h: "<blockquote>&ldquo;Whenever you do a thing, act as if all the world were watching.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>",
  },
  {
    q: "To the mind that is still, the whole universe surrenders.",
    a: "Lao Tzu",
    c: "57",
    h: "<blockquote>&ldquo;To the mind that is still, the whole universe surrenders.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>",
  },
  {
    q: "Bad things are not the worst things that an happen to us. NOTHING is the worst thing that can happen to us.",
    a: "Richard Bach",
    c: "107",
    h: "<blockquote>&ldquo;Bad things are not the worst things that an happen to us. NOTHING is the worst thing that can happen to us.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>",
  },
  {
    q: "To be alive - is Power.",
    a: "Emily Dickinson",
    c: "23",
    h: "<blockquote>&ldquo;To be alive - is Power.&rdquo; &mdash; <footer>Emily Dickinson</footer></blockquote>",
  },
  {
    q: "The fear of death is more to be feared, than death itself.",
    a: "Publilius Syrus",
    c: "58",
    h: "<blockquote>&ldquo;The fear of death is more to be feared, than death itself.&rdquo; &mdash; <footer>Publilius Syrus</footer></blockquote>",
  },
  {
    q: "Focus on how far you have come in life rather than looking at the accomplishments of others.",
    a: "Lolly Daskal",
    c: "92",
    h: "<blockquote>&ldquo;Focus on how far you have come in life rather than looking at the accomplishments of others.&rdquo; &mdash; <footer>Lolly Daskal</footer></blockquote>",
  },
  {
    q: "If you are lucky enough to find love, remember it is there and don't throw it away.",
    a: "Stephen Hawking",
    c: "83",
    h: "<blockquote>&ldquo;If you are lucky enough to find love, remember it is there and don't throw it away.&rdquo; &mdash; <footer>Stephen Hawking</footer></blockquote>",
  },
  {
    q: "Our anxiety does not empty tomorrow of its sorrows, but only empties today of its strengths.",
    a: "Charles Spurgeon",
    c: "92",
    h: "<blockquote>&ldquo;Our anxiety does not empty tomorrow of its sorrows, but only empties today of its strengths.&rdquo; &mdash; <footer>Charles Spurgeon</footer></blockquote>",
  },
];

export default quotes;

// const api_url = "https://zenquotes.io/api/quotes/";

// async function getapi(url) {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
//   return data;
// }
