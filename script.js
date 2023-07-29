const quotes = {
    "-sanober khan":'"sometimes i think, i need a spare heart to feel all the things i feel."',
    "- maya angelou": '"we delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty."',
    "- quran [2:38]":'"so whenever guidance comes to you from Me, then whoever follows my guidance, then there will neither be any fear on them nor will they grieve."',
    "- paulo coelho": '"one day you will wake up and there won’t be any more time to do the things you’ve always wanted. Do it now."',
    "-umar ibn al khattab":'"do not let your love for someone be obsessive and do not let your hatred for someone be destructive." ',
    "- nigel cole": '"i think your 20s are the hardest part of life. I mean, everyone goes on about how hard it is to be a teenager, but actually I think it’s tougher to be in your 20s because you’re expected to be a grownup and expected to earn your own living and be successful and I think you feel like a kid still."',
    "- mieko kawakami, from 'heaven'":'"i knew that it was cruel to be optimistic, but, in my solitude, i couldnt resist the urge and spent entire days basking in idiotic fantsies, sometimes verging on prayer."',
    "- quran [55:60]":'"is there any reward for goodness except goodness?"',
    "- susan sontag":'"i must change my life so that i can live it, not wait for it."',
    "-charles bukowski":'"we dont even ask for happiness, just a little less pain."',
    "- mahmoud darwish":'"one the train we swapped seats, you wanted the window and i wanted to look at you."',
    "- juansen dizon": '"she agreed to love herself deeply. she was finally the sun of her own life."',
    "-prophet muhammad (peace & blessings be upon him, his family, companions and wives)":'"happy are those who find fault with themselves instead of finding fault with others."',
    "-muhammad ali":'"silence is golden when you cant think of a good anwser."'

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