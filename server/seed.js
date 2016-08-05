const watson = require('watson-developer-cloud');
const alchemy_language = watson.alchemy_language({
  api_key: '6ff345eccabba7b5668e24cfb5d344ad11ff61e1'
});
const db = require('./db/db');
const Story = db.model('story');

const fs = require('fs');

let storiesArr = [
  {filename: 'a_dogs_tale_twain.txt', title: "A Dog's Tale", author: 'Mark Twain'},
  {filename: 'an_occurence_at_owl_creek_bridge_bierce.txt', title: "An Occurence at Owl Creek Bridge", author: 'Amborse Bierce'},
  {filename: 'rappaccinis_daughter_hawthorne.txt', title: "Rappaccini's Daughter", author: 'Nathaniel Hawthorne'},
  {filename: 'the_30000_dollar_bequest_twain.txt', title: "The $30,000 Bequest", author: 'Mark Twain'},
  {filename: 'the_celebrated_jumping_frog_of_calaveras_county_twain.txt', title: "The Celebrated Jumping Frog of Calaveras County", author: 'Mark Twain'},
  {filename: 'the_cloak_gogol.txt', title: "The Cloak", author: 'Nikolai Gogol'},
  {filename: 'the_curious_case_of_benjamin_button_fitzgerald.txt', title: "The Curious Case of Benjamin Button", author: 'F. Scott Fitzgerald'},
  {filename: 'the_dead_joyce.txt', title: "The Dead", author: 'James Joyce'},
  {filename: 'the_devil_and_tom_walker_washington.txt', title: "The Devil and Tom Walker", author: 'Irving Washington'},
  {filename: 'the_emperors_new_clothes_andersen.txt', title: "The Emperor's New Clothes", author: 'Hans Christian Andersen'},
  {filename: 'the_fall_of_the_house_of_usher_poe.txt', title: "The Fall of the House of Usher", author: 'Edgar Allen Poe'},
  {filename: 'the_grand_inquisitor_dostoevsky.txt', title: "The Grand Inquisitor", author: 'Fyodor Dostoevsky'},
  {filename: 'the_necklace_maupassant.txt', title: "The Necklace", author: 'Guy de Maupassant'},
  {filename: 'the_open_boat_crane.txt', title: "The Open Boat", author: 'Stephen Crane'},
  {filename: 'the_queen_of_spades_pushkin.txt', title: "The Queen of Spades", author: 'Alexander Pushkin'},
  {filename: 'the_shot_pushkin.txt', title: "The Shot", author: 'Alexander Pushkin'},
  {filename: 'the_three_strangers_hardy.txt', title: "The Three Strangers", author: 'Thomas Hardy'},
  {filename: 'two_friends_maupassant.txt', title: "Two Friends", author: 'Guy de Maupassant'}
];

function emotionParser (num) {
  return parseFloat(num).toFixed(2) * 100;
}

storiesArr.forEach(story => {
  let contents = fs.readFileSync('./stories/' + story.filename);
  alchemy_language.emotion({text: contents.toString()}, (err, response) => {
    if (err) console.error('Problem down under', err);
    else {
      Story.create({
        title: story.title,
        author: story.author,
        anger: emotionParser(response.docEmotions.anger),
        disgust: emotionParser(response.docEmotions.disgust),
        fear: emotionParser(response.docEmotions.fear),
        joy: emotionParser(response.docEmotions.joy),
        sadness: emotionParser(response.docEmotions.sadness)
      });
    }
  });
});
