const quotes = {
    "- sanober khan":'"sometimes i think, i need a spare heart to feel all the things i feel."',
    "- maya angelou": '"we delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty."',
    "- quran [2:38]":'"so whenever guidance comes to you from Me, then whoever follows my guidance, then there will neither be any fear on them nor will they grieve."',
    "- paulo coelho": '"one day you will wake up and there won’t be any more time to do the things you’ve always wanted. Do it now."',
    "- umar ibn al khattab":'"do not let your love for someone be obsessive and do not let your hatred for someone be destructive." ',
    "- nigel cole": '"i think your 20s are the hardest part of life. I mean, everyone goes on about how hard it is to be a teenager, but actually I think it’s tougher to be in your 20s because you’re expected to be a grownup and expected to earn your own living and be successful and I think you feel like a kid still."',
    "- mieko kawakami, heaven":'"i knew that it was cruel to be optimistic, but, in my solitude, i couldnt resist the urge and spent entire days basking in idiotic fantsies, sometimes verging on prayer."',
    "- quran [55:60]":'"is there any reward for goodness except goodness?"',
    "- susan sontag":'"i must change my life so that i can live it, not wait for it."',
    "- charles bukowski":'"we dont even ask for happiness, just a little less pain."',
    "- mahmoud darwish":'"one the train we swapped seats, you wanted the window and i wanted to look at you."',
    "- juansen dizon": '"she agreed to love herself deeply. she was finally the sun of her own life."',
    "- prophet muhammad ﷺ":'"happy are those who find fault with themselves instead of finding fault with others."',
    "- muhammad ali":'"silence is golden when you cant think of a good anwser."',
    "- roy t. bennett":'"once you realize you deserve a bright future, letting go of your dark past is the best choice you will ever make."',
    "- veronika jensen":'"for once i need to choose myself, or else i’m going to lose myself."',
    "- yung pueblo":'"she once thought that the damage to her mind and heart was permanent - until she met Wisdom, who taught her that no pain or wound is eternal. that all can be healed, and that love can grow, even in the toughest places of her being."',
    "- matt haig": '"mental health problems don’t define who you are. They are something you experience. You walk in the rain, and you feel the rain - but you are not the rain."',
    "- warsan shire":'"my alone feels so good. i’ll only have you if you’re sweeter than my solitude."',
    "- j. iron word":'"she didn’t need to be saved. She needed to be found and appreciated for exactly who she was."',
    "- a.r asher":'"i don`t know what it is like to not have deep emotions. even when i feel nothing, i feel it completely."',
    "- lizzo": '"i don`t think that loving yourself is a choice. i think it`s a decision that has to be made for survival; it was in my case. loving myself was the result of anwsering two things: do you want to live? cause this who you`re gonna be for the rest of your life. or are you gonna just have a life of emptiness, seld-hatred and self-loathing? and i chose to live, so i had to accept myself."',
    "― hanya yanagihara, a little life":'"...things get broken, and sometimes they get repaired, and in most cases, you realize that no matter what gets damaged, life rearranges itself to compensate for your loss, sometimes wonderfully."',
    "- hanif abdurraqib": '"to love oneself is hard work. but i think it becomes harder when you realize that youre actually- at least, in my case- required to love multiple versions of yourself that show up without warning throughout a day, throughout a week, throughout a month, throughout a life."',
    "- sally rooney, beautiful world, where are you":'"and i want that- to prove that the most ordinary thing about human beings is not violence or greed but love and care. to prove it to whom, i wonder. myself, maybe."',
    "- zayn malik":'"there comes a day when you realise turning the page is the best feeling in the world, because you realise there`s so much more to the book than the page you were stuck on."',
    "- mary oliver":'"sometimes i really believe it, that i am going to save my life a little."',
    "- stephen chbosky, the perks of being a wallflower":'if you care about somebody, you should want them to be happy. Even if you wind up being left out."',
    "-haruki murakami, dance dance dance":'"people leave traces of themselves where they feel most comfortable, most worthwhile."'

  };


document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

function generate(){
 
  const authors = Object.keys(quotes);
  
  const author = authors[Math.floor(Math.random() * authors.length)];
  
  const quote = quotes[author]

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
}

window.onload = function(){
  generate()
}