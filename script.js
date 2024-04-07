document.getElementById('calculate-btn').addEventListener('click', function() {
    var totalQuestions = document.querySelectorAll('.question').length;
    var totalScore = 0;
    var totalValidQuestions = 0;
    var isValid = true;

    // Loop through each question
    for (var i = 1; i <= totalQuestions; i++) {
        var selectedOption = document.querySelector('input[name="question' + i + '"]:checked');
        // Check if any option is selected for the current question
        if (selectedOption) {
            var optionValue = parseInt(selectedOption.value);
            totalScore += optionValue;
            totalValidQuestions++;
        } else {
            isValid = false; // Mark the form as invalid if any question is unanswered
        }
    }

    // Calculate average score only if there are valid questions with selected answers
    if (isValid) {
        var averageScore = totalScore / totalValidQuestions;
        document.getElementById('result').innerText = 'Average Score: ' + averageScore.toFixed(2);
        document.getElementById('mood-result').innerText = getMood(averageScore);
    } else {
        document.getElementById('result').innerText = 'Please answer all questions.';
    }
});

document.getElementById('reset-btn').addEventListener('click', function() {
    // Reset form and result when button clicked
    var quizForm = document.getElementById('quiz-form');
    quizForm.reset();
    document.getElementById('result').innerText = '';
});
// function getMood(averageScore){
//     if(averageScore > 0){
//         return "Happy"
//     }
//     else if(averageScore < 0){
//         return 'Sad'
//     }
// }
// getMood();

const testYourSelf = document.querySelector(".moodtracker");
const mainPage = document.querySelector("main");
document.querySelector("#sidemenu").children[2].addEventListener("click",()=>{

    // ------------------negative-----------
    document.querySelector('.min-zero-zerofive').style.display = 'none';
    document.querySelector('.min-zerofive-one').style.display = 'none';
    document.querySelector('.min-one-onefive').style.display = 'none';
    document.querySelector('.min-onefive-two').style.display = 'none';

    document.querySelector('.zero').style.display = 'none';

    // -------------------positive--------------
    document.querySelector('.zero-half').style.display = 'none'
    document.querySelector('.half-one').style.display = 'none'
    document.querySelector('.one-onehalf').style.display = 'none'
    document.querySelector('.onehalf-two').style.display = 'none'
    document.querySelector('.two').style.display = 'none'


    var quizForm = document.getElementById('quiz-form');
    quizForm.reset();
    document.getElementById('result').innerText = '';
    mainPage.style.display = "none";
    testYourSelf.style.display = "block";
})

const back = document.querySelector(".back").addEventListener('click', () =>{
    mainPage.style.display = "block";
    testYourSelf.style.display = "none";
})

function getMood(averageScore){
    if(averageScore == 0 ) {
        document.querySelector(".zero").style.display ="block";
        mainPage.style.display = "block";
        testYourSelf.style.display = "none";
    }
    else if(averageScore > 0 && averageScore <= 0.5){
        document.querySelector(".zero-half").style.display ="block";
        mainPage.style.display = "block";
        testYourSelf.style.display = "none";
    }
    else if(averageScore > 0.5 && averageScore <= 1){
        document.querySelector(".half-one").style.display ="block";
        mainPage.style.display = "block";
        testYourSelf.style.display = "none";
    }
    else if(averageScore > 1 && averageScore <= 1.5){
        document.querySelector(".one-onehalf").style.display ="block";
        mainPage.style.display = "block";
        testYourSelf.style.display = "none";
    }
    else if(averageScore > 1.5 && averageScore < 2){
        document.querySelector(".onehalf-two").style.display ="block";
        mainPage.style.display = "block";
        testYourSelf.style.display = "none";
    }
    else if(averageScore == 2){
        document.querySelector(".two").style.display ="block";
        mainPage.style.display = "block";
        testYourSelf.style.display = "none";
    }
    //------------------For Negative Value0-------------------

    else if(averageScore < 0 && averageScore >= -0.5 ){
        document.querySelector(".min-zero-zerofive").style.display ="block";
        mainPage.style.display = "block";
        testYourSelf.style.display = "none";
    }
    else if(averageScore < -0.5 && averageScore >= - 1 ){
        document.querySelector(".min-zerofive-one").style.display ="block";
        mainPage.style.display = "block";
        testYourSelf.style.display = "none";
    }
    else if(averageScore < -1 && averageScore >= -1.5 ){
        document.querySelector(".min-one-onefive").style.display ="block";
        mainPage.style.display = "block";
        testYourSelf.style.display = "none";
    }
    else if(averageScore < -1.5 && averageScore >= -2 ){
        document.querySelector(".min-onefive-two").style.display ="block";
        mainPage.style.display = "block";
        testYourSelf.style.display = "none";
    }
}
document.getElementById('submit-btn').addEventListener('click', function() {

    document.getElementById('sub').innerText = 'Message Sent Succsesfully!';
    // document.getElementById('sub').innerText.style.color = "light-blue"
    setTimeout(function() {
        document.getElementById('sub').innerText = '';
    }, 5000);
});





// ---------------------chatbot------------------
const inputMessage = document.getElementById('userBox');
const sendButton = document.getElementById('sendButton');
const chatMessages = document.querySelector('.box');

sendButton.addEventListener('click', sendMessage);
inputMessage.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() 
{
  const message = inputMessage.value;
  if (message) 
  {
    addMessageToChat('user', message);
    inputMessage.value = '';

    // Add your own custom response messages here
    if (message === 'Hi' || message === 'Hello' || message === 'Hey' || message === 'Hi there' || message === 'Hello there' || message === 'Hey there' || message === 'Hi there!' || message === 'Hello there!' || message === 'Hey there!' || message === 'hi' || message === 'hello' || message === 'hey' || message === 'hi there' || message === 'hello there' || message === 'hey there' || message === 'hi there!' || message === 'hello there!' || message === 'hey there!') {
        setTimeout(() => {
        const botMessage = 'Hello! How are you?';
        addMessageToChat('bot', botMessage);
        }, 1000);
    }

    else if (message === 'i am okay' || message === 'not feeling good' || message === 'not great' || message === 'not good' || message === 'not okay' || message === 'not well' || message === 'not good.' || message === 'not okay.' || message === 'not well.' || message === 'not great.' || message === 'I am okay' || message === 'Not feeling good' || message === 'Not great' || message === 'Not good' || message === 'Not okay' || message === 'Not well' || message === 'Not good.' || message === 'Not okay.' || message === 'Not well.' || message === 'Not great.' || message === 'I am okay.' || message === 'Not feeling good.' || message === 'Not great.' || message === 'Not good.' || message === 'Not okay.' || message === 'Not well.' || message === 'I am okay!' || message === 'Not feeling good!' || message === 'Not great!' || message === 'Not good!' || message === 'Not okay!' || message === 'Not well!' || message === 'I am okay!' || message === 'Not feeling good!' || message === 'Not great!' || message === 'Not good!' || message === 'Not okay!' || message === 'Not well!' || message === 'I am okay!' || message === 'Not feeling good!' || message === 'Not great!' || message === 'Not good!' || message === 'Not okay!' || message === 'Not well!' || message === 'I am okay!' || message === 'Not feeling good!' || message === 'Not great!' || message === 'Not good!' || message === 'Not okay!' || message === 'Not well!' || message === 'I am okay!' || message === 'Not feeling good!' || message === 'Not great!' || message === 'Not good!' || message === 'Not okay!' || message === 'Not well!') {
        setTimeout(() => {
        const botMessage = 'Why? What happened? Would you like to talk about it?';
        addMessageToChat('bot', botMessage);
        }, 1000);
    }

    // else if (message === 'How are you?' || message === 'how are you?' || message === 'How are you doing?' || message === 'how are you doing?' || message === 'How are you doing today?' || message === 'how are you doing today?' || message === 'How are you doing today' || message === 'how are you doing today' || message === 'How are you doing today?' || message === 'how are you doing today?') {
    //     setTimeout(() => {
    //     const botMessage = 'I am doing well, thank you for asking. How are you feeling today?';
    //     addMessageToChat('bot', botMessage);
    //     }, 1000);
    // }

    else if (message === 'I am not feeling good' || message === 'Today was not good' || message === 'i am not feeling good' || message === 'today was not good' || message === 'I am not feeling good.' || message === 'Today was not good.' || message === 'i am not feeling good.' || message === 'today was not good.' || message === 'i am not okay' || message === 'I am not okay') {
        setTimeout(() => {
            const botMessage = 'Why? What happened? Would you like to talk about it?';
            addMessageToChat('bot', botMessage);
        }, 1900);
    }

    else if (message === 'Yes' || message === 'yes' || message === 'Yes.' || message === 'yes.' || message === 'Yes!' || message === 'yes!') {
        setTimeout(() => {
            const botMessage = 'Tell me about it. I am here to listen.';
            addMessageToChat('bot', botMessage);
        }, 1900);
    }

    else if (message === 'No' || message === 'no' || message === 'No.' || message === 'no.' || message === 'No!' || message === 'no!') {
        setTimeout(() => {
            const botMessage = 'You can talk to me about anything. I will help you.';
            addMessageToChat('bot', botMessage);
        }, 1900);
    }

    else if (message === 'okay' || message === 'Okay' || message === 'okay.' || message === 'Okay.' || message === 'okay!' || message === 'Okay!') {
        setTimeout(() => {
            const botMessage = 'Great!, tell me about your day.';
            addMessageToChat('bot', botMessage);
        }, 1500);
    }

    else if (message === 'nothing much, today was not as great' || message === 'nothing much, today was not as great.' || message === 'Nothing much, today was not as great!'){
        setTimeout(() => {
            const botMessage = 'Why?';
            addMessageToChat('bot', botMessage);
        }, 1000);
    }

    else if (message === 'i dont know, i just feel sad and unmotivated all the time' || message === 'i dont know, i am feeling a bit down lately') {
        setTimeout(() => {
            const botMessage = 'That sounds really tough. Have you talked to anyone about it, like a friend or family member?';
            addMessageToChat('bot', botMessage);
        }, 2900);
    }

    else if (message === 'no i dont want to burden anyone with my problems' || message === 'no i dont want to share it with anyone'){
        setTimeout(() => {
            const botMessage = 'It is important to remember that talking to someone about your feelings is not a burden.';
            addMessageToChat('bot', botMessage);
        }, 2500);

        setTimeout(() => {
            const botMessage = 'In fact, it can often help to share your thoughts with someone you trust';
            addMessageToChat('bot', botMessage);
        }, 4400);
    }

    else if (message === 'i dont know if that would help' || message === 'it might not help me'){
        setTimeout(() => {
            const botMessage = 'It is definitely worth a try. Therapy can be a really effective way to manage symptoms of depression and improve your overall well-being';
            addMessageToChat('bot', botMessage);
        }, 3800);
    }

    else if (message === 'i dont really have friends nearby, i am just bad at making friends'){
        setTimeout(() => {
            const botMessage = 'It can be tough, but remember that everyone feels awkward sometimes';
            addMessageToChat('bot', botMessage);
        }, 2500);

        setTimeout(() => {
            const botMessage = 'And remember that making friends takes time, it is okay if it does not happen overnight';
            addMessageToChat('bot', botMessage);
        }, 4200);
    }

    else if (message === 'i will try, but i just feel so hopeless'){
        setTimeout(() => {
            const botMessage = 'I know it can feel that way sometimes, but it is important to hold on to hope.';
            addMessageToChat('bot', botMessage);
        }, 2900);

        setTimeout(() => {
            const botMessage = 'By far, i have analysed that you some symptoms of a mild depression.';
            addMessageToChat('bot', botMessage);
        }, 4000);
        
        setTimeout(() => {
            const botMessage = 'But it is okay, you can get through this. It is a treatable condition, and with the right support, many people are able to make a full recovery';
            addMessageToChat('bot', botMessage);
        }, 6090);

        setTimeout(() => {
            const botMessage = 'I will help you through this, you can talk to me about anything. And i will recommend you some experts who can help you if you want';
            addMessageToChat('bot', botMessage);
        }, 7800);
    }

    else if (message === 'i am feeling a bit better now, thank you for listening'){
        setTimeout(() => {
            const botMessage = 'I am glad to hear that. I am here to listen to you anytime you need me.';
            addMessageToChat('bot', botMessage);
        }, 2800);

        setTimeout(() => {
            const botMessage = ' In the meantime, there are some other things you can try to help boost your mood, like getting regular exercise, practicing mindfulness, and connecting with others.';
            addMessageToChat('bot', botMessage);
        }, 4600);
        
    }

    else if (message === 'thank you, i will try those things'){
        setTimeout(() => {
            const botMessage = 'Wonderful!';
            addMessageToChat('bot', botMessage);
        }, 1800);
    }

    else if (message === 'bye'){
        setTimeout(() => {
            const botMessage = 'Bye, take care.';
            addMessageToChat('bot', botMessage);
        }, 2000);
    }

    else {
      setTimeout(() => {
        const botMessage = 'I am sorry, I did not understand.';
        addMessageToChat('bot', botMessage);
        }, 1000);
    }
  }
}

function addMessageToChat(sender, message) 
{
  const messageWrapper = document.createElement('div');
  messageWrapper.classList.add('chat-message');

  const messageContent = document.createElement('div');
  messageContent.classList.add(`${sender}-message`);
  messageContent.textContent = message;

  messageWrapper.appendChild(messageContent);
  chatMessages.appendChild(messageWrapper);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}



function moveButton() {
    var button = document.getElementById('submitBtn');
    var container = document.querySelector('.gameone');
    
    // Get container dimensions
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    
    // Generate random coordinates
    var newX = Math.random() * (containerWidth - button.offsetWidth);
    var newY = Math.random() * (containerHeight - button.offsetHeight);
    
    // Set new coordinates
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}



// ---------------------games-------------------------------
