

// f(x) =x*x
// y= f(5)
// occurence
let fq = [
  
  //question 1:
  {
    question:"What part of New York is Rachel originally from?",
    choices: ["Bronx", "Queens", "Long Island", "Stanten Island"],
    correctAnswer: "Long Island",
    image: "http://img2.tvtome.com/i/u/0aa3afb3cbe3468fc6e43e50070b0810.png",
    alt: "three men and three women drinking shake and ice cream sundae"
  },
  //question 2:
  {
    question: "What is Chandler's middle name?",
    choices: ["Muriel", "Green", "Maddie", "May"],
    correctAnswer: "Muriel",
    image: "http://d1ah1il5j7hxtz.cloudfront.net/wp-content/uploads/2017/06/this-quiz-will-reveal-which-friends-character-you-2-8214-1488911847-17_dblbig.jpg",
    alt: "three men and women staring and making smiley faces"
  },
  //question 3:
  {
    question: "How many sisters does Joey have?",
    choices: ["5", "6", "7", "8"],
    correctAnswer: "7",
    image: "http://assets.nydailynews.com/polopoly_fs/1.1919235.1409172900!/img/httpImage/image.jpg_gen/derivatives/article_750/1-12-99-friends.jpg",
    alt: "two women and one man sitting on an orange sofa"
  },
  //question 4:
  {
    question: "What food is Ross not allergic to?",
    choices: ["Lobster", "Kiwi", "Peanuts", "Lime"],
    correctAnswer: "Lime",
    image: "https://typeset-beta.imgix.net/2016/2/4/friends2.jpg",
    alt: "two women and two men sitting on a sofa, attentively listening"
  },
  //question 5:
  {
    question: "What is the name of Chandler's roommate after Joey moves out?",
    choices: ["Cathy", "Eddie", "Janice", "Janie"],
    correctAnswer: "Eddie",
    image :"https://i.ytimg.com/vi/0ObAFRFhlnE/maxresdefault.jpg",
    alt: "two women standing behind a bar"
  },
  //question 6:
  {
    question: "How many babies are born on the show?",
    choices: ["4", "7", "10", "13"],
    correctAnswer: "7",
    image: "https://pixel.nymag.com/imgs/daily/vulture/2016/03/24/24-friends-cover-story-1.w710.h473.2x.jpg",
    alt: "three women and men sitting around a coffee table at a cafe, laughing"
  },
  //question 7:
  {
    question: "What is the name of Rachel's prom date?",
    choices: ["Frank", "Paul", "Mark", "Chip"],
    correctAnswer: "Chip",
    image: "https://files.brightside.me/files/news/part_35/355210/15136010-25b2916b5c49db617f52fa5ea48efee7-76-1024x676-1500300569-650-777cae7089-1500550790.jpg",
    alt: "two women and men wearing costumes in the 90's"
  },
  //question 8:
  {
    question: "What is Pheobe's adoptive mother's first name?",
    choices: ["Pheobe", "Ursula", "Lily", "Rose"],
    correctAnswer: "Lily",
    image: "https://cdn.vox-cdn.com/thumbor/VJ8opFeAzcKsylH1pYsz9b3Bl8Q=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8634711/friends_all_the_wedding_dresses.jpg", 
    alt: "three women in white wedding dress, two of them drinking a beer with popcorns"
  },
  //question 9:
  {
    question: "What word did Rachel misspell on her resume?",
    choices: ["Computer", "Rachel", "Central Perk", "Dependable"],
    correctAnswer: "Computer",
    image: "https://i.ytimg.com/vi/VdemM6_Nmdk/maxresdefault.jpg",
    alt: "woman with a bob haircut holding a yellow piece of paper in front of kitchen cabinet"
  },
  //question 10:
  {
    question: "How many women give birth before Rachel in the hospital?",
    choices: ["4", "5", "6", "7"],
    correctAnswer: "5",
    image: "https://bellejarblog.files.wordpress.com/2015/01/friends.jpg",
    alt: "three men and women sitting around patio table, smiling"
  },
  

];

var currentQuestionIndex= 0;
var correctAnswerCount= 0;

function handleBeginQuiz(){
  $('#begin').on('click', function(event){
    beginQuiz()
  });
}

function beginQuiz(){
    console.log('`beginQuiz` ran')
    $('.quiz-section').show();
    $('.title-section').hide();
    $('.start-section').hide();
    renderQuizCard();
}

function renderQuizCard(){
  console.log('`renderQuizCard` ran');
  let currentQuestion = fq[currentQuestionIndex].question;
  renderStatusandPoints();
  displayQuiz();
  displayImages();
  displayChoices(currentQuestion.choices);
}

function renderStatusandPoints() {
  console.log("`renderStatus` ran")  
  console.log("`renderPoints` ran")
  $('.nav-container .box').find('#status').text(`Question ${currentQuestionIndex + 1} of ${fq.length}`)
  $('.nav-container .box').find('#score').text(`Points: ${correctAnswerCount} of ${fq.length}`)
}

function displayImages(){
    $('#image').html(`<img src="${fq[currentQuestionIndex].image}" alt="${fq[currentQuestionIndex].alt}">`)
    //$('#image img').attr('src', fq[currentQuestionIndex].image);
}

function displayQuiz(){
  console.log('`displayQuiz` ran')
  let currentQuestionText= fq[currentQuestionIndex].question;
  $('#question').html((currentQuestionIndex+1) + ". "+ currentQuestionText);
}

function displayChoices(){
  console.log('`displayChoices` ran')
   
  $('#form label').each(function(index, input){
      // console.log('lbl', fq[currentQuestionIndex], index)
    $(input).find('span').text(fq[currentQuestionIndex].choices[index]);
  })
}

function handleNextButton(){
  $('#checkAnswer').on('click', function(event){
    event.preventDefault();
    console.log('checkAnswer button was clicked'); 
    let userPick = $("input[type='radio']:checked").val();
    let selectedAnswer =$("input[type='radio']:checked").next().text();
    if (userPick === undefined) {
      renderFeedBack('unanswered');
    } 
    else {
      checkAnswer(selectedAnswer);
    }
})
}

function checkAnswer(selectedAnswer){
   console.log("checkanswer ran")
    let correctAnswer = fq[currentQuestionIndex].correctAnswer;
      if (selectedAnswer === correctAnswer) {
        correctAnswerCount++;
        renderFeedBack(true);
      } else {
        $("input[type='radio']:checked").attr('checked',false);
        renderFeedBack(false);
      }
}

function renderFeedBack(boolean){
  $('.feedback-section').show();
  console.log("`renderFeedBack` ran")
  if (boolean === true) {
    console.log("true")
    $(".popup-box #popup-text").text("Correct!");
    $(".popup-box #popup-img").html("<img src='http://digitalspyuk.cdnds.net/16/47/480x240/landscape-1479751656-friends-phoebe.gif'>")
    $(".popup-box").show();
  } 
  else if (boolean === 'unanswered') {
      console.log("unaswered")
      $(".popup-box #popup-text").text("please select your answer");
       $(".popup-box #popup-img").html("<img src='https://media.giphy.com/media/lKL2F4BrnYsJW/giphy.gif'>")
      currentQuestionIndex--;
      $(".popup-box").show();
    } else {
        console.log("false")
        $(".popup-box #popup-text").text(`Sorry, correct answer is: ${fq[currentQuestionIndex].correctAnswer}`); 
        $(".popup-box #popup-img").html("<img src='https://media.giphy.com/media/qifqwgi19hIg8/giphy.gif'>")
        $(".popup-box").show();
    }
  }

function handlePopup(){
  $('.close-button').on('click', function(event){
    console.log("`handlePopup` ran")
    $('.popup-box').hide();
    $('.feedback-section').hide();
    $('.quiz-section').fadeIn();
    $("input[type='radio']:checked").attr('checked',false);
    currentQuestionIndex++;
    if (currentQuestionIndex < fq.length) {
      //$('#image').html("");
      $(".popup-box #popup-img").html("");
      renderQuizCard();
    } else {
      renderResult();
      $('.quiz-section').hide();
      $('.result-section').show();
  }
})
}

function resetQuiz(){
  currentQuestionIndex = 0;
  correctAnswerCount =0;
}

function renderResult(){
  console.log("renderResult")
  $('#result-text').text(`You score is: ${correctAnswerCount} out of ${fq.length}`);
  //resetQuiz();
}


function handleRetry(){
  $('.retry-button').on('click', function(event){
    event.preventDefault();  
    resetQuiz();  
    beginQuiz();
  })
}

function initialPage(){
  console.log('`initialPage()` ran')
  $('section').hide();
  handleBeginQuiz();
  handleNextButton();
  handlePopup();
  handleRetry();
}

$(function(){
  initialPage();
});



