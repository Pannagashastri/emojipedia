const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },
  {
    id: 4,
    emoji: "😀 ",
    name: "Grinning Face",
    meaning:
      "The happy smiling face is one of the most common emojis and universally applicable: you just want to say hello, express joy or excitement about something or brighten up a short text."
  },
  {
    id: 5,
    emoji: "😃",
    name: "Smiling Face With Open Mouth",
    meaning:
      "Typical smiley face with open mouth and oval eyes. Is in a positive mood, shows its teeth and laughs cheerfully. Expresses enthusiasm: from a cheerful greeting to boundless joy."
  },
  {
    id: 6,
    emoji: "😄",
    name: "Smiling Face With Open Mouth And Smiling Eyes",
    meaning:
      "Smiley's mouth is wide open, its eyes squeezed shut with joy. Laughs loudly, cheerfully and heartily. Only the typical emoji eyes distinguish it from the classical smiley face. Can also be used for sarcasm."
  },
  {
    id: 7,
    emoji: "😁",
    name: "Grinning Face With Smiling Eyes",
    meaning:
      "Happy face with a mischievous laugh. Represents lightheartedness and exuberance. Full of joy due to an event, excited and agitated or just a bit embarrassed."
  },
  {
    id: 8,
    emoji: "😆",
    name: "Smiling Face With Open Mouth And Closed Eyes",
    meaning:
      "Emoji is on the verge of a fit of laughter because something is so silly or incredibly funny. Also, mischievous or bitchy laughter about an event, or something that happened to another person.. Means the same as “XD“ and “X“ as a text-based emoticon."
  },
  {
    id: 9,
    emoji: "😅",
    name: "Smiling Face With Open Mouth & Cold Sweat",
    meaning:
      "Sweaty smile. Relief that a tight situation went well or was coped with positively, e.g. an important appointment. A difficult event is imminent and you are already nervous"
  },
  {
    id: 10,
    emoji: "😂",
    name: "Face With Tears of Joy",
    meaning:
      "I am laughing to hard that I can hardly keep myself on my chair! Something is so incredibly funny that you cry laughing. Gets the giggles and can hardly contain himself. This emoji is the most popular and was named Word of the Year 2015."
  },
  {
    id: 11,
    emoji: "🤣",
    name: " Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },
  {
    id: 12,
    emoji: "☺",
    name: "Smiling Face",
    meaning:
      "I am as merry as a lark! Completely satisfied and speechless. Expression of bliss. Shy grin in response to a nice compliment or something great that happened."
  },
  {
    id: 13,
    emoji: "😊",
    name: "Smiling Face With Smiling Eyes",
    meaning:
      "Is grinning shyly and embarrassed. The red cheeks are an expression of joy. Represents happiness, contentment, peace of mind and gratitude. Text-based variant: ^^."
  },
  {
    id: 14,
    emoji: "😇",
    name: " Smiling Face With Halo",
    meaning:
      "Would like to express its (possibly pretended) innocence. Someone does good deeds, is very sweet, innocent and behaves in an exemplary way. The angelic face can also be used humorously for rather not so good deeds or behaviors."
  },
  {
    id: 15,
    emoji: "🙂",
    name: "Slightly Smiling Face",
    meaning:
      "A light smile means you are satisfied with yourself and the world. Can make a statement sound friendlier than it might have been meant. Or have a sarcastic meaning when a smile does not actually fit the content."
  },
  {
    id: 16,
    emoji: "🙃",
    name: "Upside-Down Face",
    meaning:
      "Don't take me seriously! The message is either ambiguous, ironic or joking. Person plays the fool and horses around, or in response to a joke"
  },
  {
    id: 17,
    emoji: "😉",
    name: "Winking Face",
    meaning:
      "Smiley blinks mischievously with one eye. Expression of humor, has been pulling a practical joke, is flirting with you or has an ulterior motive. The wink weakens the message: do not take it seriously, regard it as humorous."
  },
  {
    id: 18,
    emoji: "😌",
    name: " Relieved Face",
    meaning:
      "Everything went well! Relieved smiley face. Is happy that something unpleasant is over without having caused any harm. Relaxed, thankful and free of worries."
  },
  {
    id: 19,
    emoji: "😍",
    name: "Smiling Face With Heart-Eyes",
    meaning:
      "Happily beaming face with heart-shaped eyes. Insanely in love: with a person, a place or an object. Expresses the extent of love and affection as well as gratitude and is often part of romantic messages. Just does not know what to do with all the luck."
  },
  {
    id: 20,
    emoji: "🥰",
    name: "Smiling face with smiling eyes and three hearts",
    meaning:
      "You are in love, sitting on cloud number nine. The romantic emoji with the enamored expression of the face stands for affairs of the heart."
  },
  {
    id: 21,
    emoji: "😘",
    name: "Face Throwing a Kiss",
    meaning:
      "Smiley sends you a loving kiss that comes from the heart. Amicable, to express affection or with romantic intent, as an expression of love. May weaken a sarcastic response or be a reaction to a rude message. Symbol for flirting and showing gratitude."
  },
  {
    id: 22,
    emoji: "😗",
    name: "Kissing Face",
    meaning:
      "The face sends kisses to another person. The open eyes and the neutral face are not so much a sign of an intimate kiss but rather a kiss to a friend or relative. “Thank you“, “Hello“ or “Goodbye“. Could also stand for “whistling” or “duck face”."
  },
  {
    id: 23,
    emoji: "😙",
    name: " Kissing Face With Smiling Eyes",
    meaning:
      "Relaxed face expression, smiling eyes and kissing lips. A kiss to friends or “We hug and kiss you“ to relatives. Can also be used for whistling."
  },
  {
    id: 24,
    emoji: "😚 ",
    name: "Kissing Face With Closed Eyes",
    meaning:
      "Cute face with closed eyes and rosy cheeks. As a thank you for a tip or a favor. Loving kiss to the closest friends, family or darling."
  },
  {
    id: 25,
    emoji: "😋",
    name: " Face Savouring Delicious Food",
    meaning:
      "Bon appetit! Smiley is licking the corner of its mouth with its tongue. Is hungry, just cooked something very delicious or eaten a whole dish. Often interpreted as a grimace, with tongue outstretched, and used after a funny message or when fooling around."
  },
  {
    id: 26,
    emoji: "😛",
    name: " Face With Stuck-Out Tongue",
    meaning:
      "Horseplay with friends, weakening an ironic remark and making sure that the other does not take seriously what has been said. Making fun of others: I knew you'd screw it up."
  },
  {
    id: 27,
    emoji: "😝",
    name: "Face With Stuck-Out Tongue & Tightly Closed Eyes",
    meaning:
      "Making fun of someone, annoying or jokingly offending someone. In provocative news, crude or black humor as well as with glee."
  },
  {
    id: 28,
    emoji: "😜",
    name: "Face With Stuck-Out Tongue & Winking Eye",
    meaning:
      "Smiley boldly sticks out the tongue, winking with one eye. Has made a joke or wants to flirt with the chat partner. Is carefree and does not mean it seriously."
  },
  {
    id: 29,
    emoji: "🤪",
    name: "Crazy Face",
    meaning:
      "Something is insanely funny. The mood is exuberant - you are totally silly and crazy. Totally freaking out with enthusiasm or joy. Maybe someone has even told an indecent joke."
  },
  {
    id: 30,
    emoji: "🤨",
    name: " Face With a Raised Eyebrow",
    meaning:
      "With the questioning look on the face, resembles the actor “The Rock“ (Dwayne Johnson). Can be used to express skepticism, disbelief or disapproval."
  },
  {
    id: 31,
    emoji: "🧐",
    name: "Face With Monocle",
    meaning:
      "A monocle is a visual aid with only one glass. At the end of the 19th century it was a status symbol. Something seems suspicious! The smiley makes a warning look around. The “upper-class“ version of the pondering smiley"
  },
  {
    id: 32,
    emoji: "🤓",
    name: "Nerd Face",
    meaning:
      "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits."
  },
  {
    id: 33,
    emoji: "😎",
    name: "Face With Sunglasses",
    meaning:
      "I'm the king of the world! Mr. Cool Smiley with sunglasses. Is totally self-assured and relaxed. Everything is absolutely easy and cool. Also a symbol for sun, summer holidays, and holidays on the beach."
  },
  {
    id: 34,
    emoji: "🤩",
    name: "Smirking Face With Starry Eyes",
    meaning:
      "Is very excited about something and already full of anticipation. Overwhelmed and speechless after meeting someone you like a lot. Fascinated by the glory and the world of the stars."
  },
  {
    id: 35,
    emoji: "🥳 ",
    name: "Face with party blower and party hat",
    meaning:
      "That was a wild party or “Let's celebrate“. No matter what joyful event is in view, it will be celebrated appropriately. May also stand for the carnival season."
  },
  {
    id: 36,
    emoji: "😏",
    name: " Smirking/Whimsical Face",
    meaning:
      "Half a smile that oozes with complacency. Represents irony, coolness or playfulness. Be careful: Somebody could be up to something. Used as an offensive look for flirting or sexual innuendo."
  },
  {
    id: 37,
    emoji: "😒",
    name: "Unamused Face",
    meaning:
      "The grumpy, sullen gaze expresses dissatisfaction. Is not enthusiastic about a thing and shows that. Expression of disinterest and disapproval."
  },
  {
    id: 38,
    emoji: "😔",
    name: "Pensive Face",
    meaning:
      "A pensive expression on the face. Emoji looks downwards and needs time to think. Represents melancholy, general dissatisfaction and frustration."
  },
  {
    id: 39,
    emoji: "😟",
    name: "Worried Face",
    meaning:
      "Worried looking face due to a complicated situation or important event. Feels anxious, insecure and uncomfortable."
  },
  {
    id: 40,
    emoji: "😕",
    name: "Confused Face",
    meaning:
      "Is confused or does not agree with something. Is uncertain or disappointed, had imagined this in a different way."
  },
  {
    id: 41,
    emoji: "🙁",
    name: " Slightly frowning face",
    meaning:
      '“I’m sorry to hear that” or “What you’re saying annoys me a little bit". The frown can show rejection and anger or a person is surprised, anxious.'
  },
  {
    id: 42,
    emoji: "☹",
    name: " Frowning Face",
    meaning:
      "Face with very sad mouth angle. Emoji seems unhappy and disgruntled. Dissatisfied with the weather, small mistakes or the behavior of a person."
  },
  {
    id: 43,
    emoji: "😣",
    name: "Suffering Face",
    meaning:
      "Emoji is struggling and suffering. After a hard day, ready to throw in the towel. However, has to endure the situation and will have worked it through some day."
  },
  {
    id: 44,
    emoji: "😖",
    name: " Confounded Fac",
    meaning:
      "How on earth could that happen? Smiley is extremely dismayed and bewildered. Or damn angry: That's almost the final straw!"
  },
  {
    id: 45,
    emoji: "	😫",
    name: "Tired Face",
    meaning:
      "Overtired emoji with narrowed eyes and open mouth. Because of too little sleep, because of what is going on around you, from a person or situation. Is very exhausted and broken. Now needs peace first"
  },
  {
    id: 46,
    emoji: "😩",
    name: "Weary Face",
    meaning:
      "Leave me alone! Reluctant smiley with raised eyebrows and mouth downturned, moaning about grueling, unpleasant but inevitable things. Is weepy, upset and completely exhausted, mentally or physically."
  }
];
export default emojipedia;
