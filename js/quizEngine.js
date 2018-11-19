const questionDBName = "quizEngineQuestions";
// const questionDSName = "questions";
const questionVersion = 1;
const datastores = ["leadershipDiagram", "littlesLaw", "radiatorChart", "criticalPath"];
const questionColumns = ["Subject", "Topic", "Question", "Answers", "CorrectAnswers", "Justifications"]; // TODO: test to see if you can access a question by 'id'

const scoreDBName = "QuizScores";
const scoreDSName = "quizScores";
const scoreVersion = 1;
const scoreIndecies = ["Subject", "Topic", "TotalPossible", "ActualScore"];

let score = {};
let submitButton, nextButton;
let counter = 0;
let currentDatastore;

function openQuestionsNScores() {
  // itemDB.open(questionDBName, questionVersion, questionDSName, "", questionIndecies, true, () => {
	// 	console.log("Questions Database opened...");
  //   //determine if dummy questions are needed to test.
  //   itemDB.fetchAll(questionDSName, (results) => {
  //     if (results[0] == null) {
  //       let questions = dummyQuestions();
  //       questions.forEach( (question) => {
  //         itemDB.createItem(questionDSName, question, () => {});
  //       });
  //     }
  //   });
	// });

	quizEngineDB.openDB(questionDBName, questionVersion, datastores, questionColumns, () => {
		console.log(questionDBName + " database opened...");

		// let questions = [];
		// datastores.forEach( (name) => {
		// 	questions[name] = questionFunctionNames[name];
		// });
		// console.log(questions['littlesLaw']);

		//load questions into db
		for (index = 0; index < datastores.length; index++){
			console.log(index);
			quizEngineDB.fetchAll(datastores[index], index, (results, myIndex) => {
				if (results[0] == null){
					console.log(myIndex);

					// get questions from file.
					let questions = questionFunctionNames[myIndex]();

					//loop through questions to insert into database.
					questions.forEach( (question) => {
						quizEngineDB.createItem(datastores[myIndex], question, () => {
							console.log("added question to " + datastores[myIndex]);
						});
					});
				}

			});
		}
		
	})

  itemDB.open(scoreDBName, scoreVersion, scoreDSName, "Subject", scoreIndecies, false, () => {
		console.log("QuizScores Database opened...");
	});
}


// NOT WORKING YET!!!
// function shuffle(array) {  // NOT WORKING YET!!!
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

function readQuestions (datastoreName) {
	// grab all questions from
	//console.log("In setupQuestions");
	currentDatastore = datastoreName;
	quizEngineDB.fetchAll(datastoreName, null, (results) => {
	 	//TODO: shuffle the results.

		createScore(results);
		
	});
}

function createScore(questions)
{
//Grab score from db if exists
itemDB.fetchOneByIndex(scoreDSName, "Subject", questions[0].Subject, (result) => {
	if (result != null){
		score = result;
		createQuiz(questions);
	}
	else {
		score = {"Subject": questions[0].Subject,
			"Topic": questions[0].Topic,
			"TotalPossible": questions.length,
			"ActualScore": 0,
			"currentQuestion": 0
		};
		itemDB.createItem(scoreDSName, score, () => {
			createQuiz(questions);
		});
	}
});
}

function createQuiz (questions) {
	

	let numQuestions = questions.length;
	counter = score.currentQuestion;

	// display questions 1 at a time.
	document.getElementById("quizContainer").display = "block";
	// document.getElementById("quizSubject").innerHTML = score.Subject;
	document.getElementById("quizTopic").innerHTML = score.Topic;

	// display question as the title
	var currentQuestion = document.getElementById('quizQuestion');
	document.getElementById("finishQuiz").display = "none";

	//create form element
	var answerForm = document.getElementById("answerForm");

	// display quiz score status.
	// display the current status of the quiz
	document.getElementById("questionNumber").innerHTML = "1 of " + numQuestions;

	document.getElementById("currentScore").innerHTML = "Score: 0%";

	//get the two buttons
	submitButton = document.getElementById("submitQuestionButton");
	nextButton = document.getElementById("nextButton");
	closeQuizButton = document.getElementById("closeQuizButton");

	nextButton.disabled = true;

	//determine answers and update score.
	//console.log(JSON.stringify(questions[counter]));
	nextQuestion(questions[counter].id, counter, numQuestions);

	submitButton.addEventListener("click", function(){
		checkAnswer(questions[counter].id, numQuestions);
	});

	closeQuizButton.addEventListener("click", () => {
		saveAndCloseQuiz();
	});

	nextButton.addEventListener("click", function(){
		counter++;
		if (counter < numQuestions-1) {
			nextQuestion(questions[counter].id, counter, numQuestions);
		} else if(counter < numQuestions){
			let submitQuizButton = document.getElementById("nextButton");
      submitQuizButton.innerText = "Submit Quiz";
      // submitQuizButton.setAttribute("class", "modal-close waves-effect btn");
			nextQuestion(questions[counter].id, counter, numQuestions);
		}
		else{
			submitQuiz();

      
			// let submitQuiz = document.createElement("button");
			// submitQuiz.setAttribute("id", "submitQuizButton");
			// submitQuiz.setAttribute("value", "Submit Quiz");
			// let submitQuizText = document.createTextNode("Submit Quiz");
			// submitQuiz.appendChild(submitQuizText);
			// quizContainer.appendChild(submitQuiz);

		}
	});

}

function nextQuestion(questionId, counter, numQuestions) {
	quizEngineDB.fetchOneByKey(currentDatastore, questionId, (question) => {
		//Put current question into html
		document.getElementById("questionNumber").innerHTML = (counter+1) + " of " + numQuestions;
		var quizQuestion = document.getElementById("quizQuestion");
		var questionText = document.createTextNode(question.Question);
		//console.log(questionText);
		quizQuestion.innerHTML = "";
		quizQuestion.appendChild(questionText);


		var answerForm = document.getElementById("answerForm");
		answerForm.innerHTML = "";
		var currentAnswer, answerText, answerLabel;
		//create input elements
		for(var i = 1; i <= question.Answers.length; i++){
			//create the input element and set attributes
			currentAnswer = document.createElement("input");
			currentAnswer.setAttribute("id", i);
			currentAnswer.setAttribute("type", "radio");
			currentAnswer.setAttribute("name", "answerGroup");
			currentAnswer.setAttribute("value", question.Answers[i - 1]);

      answerLabel = document.createElement("label");
      answerLabel.setAttribute("for", i);
			answerLabel.setAttribute("id", "label" + i);
			
			let answerJustification = document.createElement('div');
			answerJustification.setAttribute('id', "justification" + i);
			answerJustification.setAttribute('style', 'display: none');
			let justificationText = document.createTextNode(question.Justifications[i - 1]);
			answerJustification.appendChild(justificationText);

			let answerContainer = document.createElement("div");
			answerContainer.setAttribute("id", "answer" + i);
      // answerContainer.setAttribute("for", i);
			answerText = document.createTextNode(question.Answers[i - 1]);
			answerContainer.appendChild(currentAnswer);
			answerLabel.appendChild(answerText);
			answerContainer.appendChild(answerLabel);
			answerContainer.appendChild(answerJustification);
			//currentAnswer.innerHTML = "Test";
			//currentAnswer.appendChild(answerText);
			var breakElement = document.createElement("br");

			//answerForm.appendChild(currentAnswer);
			answerForm.appendChild(answerContainer);
			answerForm.appendChild(breakElement);
			//put a break after each question
			//console.log(question.Answers);
		}

		submitButton.disabled = false;
		nextButton.disabled = true;
		saveQuizScore();
		// counter++;
	});

}

function checkAnswer(questionId, numQuestions) {
	quizEngineDB.fetchOneByKey(currentDatastore, questionId, (question) => {
		
		if (question.CorrectAnswers.length > 1) {
			// TODO: checkboxes
			

		} else {
			// get list of radio buttons with specified name
	    var radios = document.getElementsByName("answerGroup");

	    // loop through list of radio buttons
	    radios.forEach( (button) => {
				//let answerContainer = document.getElementById("answer" + button.id);
				let answerLabel = document.getElementById("label" + button.id);
				let justification = document.getElementById('justification' + button.id);
				if (button.checked) {
					 if (button.value === question.CorrectAnswers[0]) {
						 score.ActualScore++;
						 document.getElementById("currentScore").innerHTML = "Score: " + (score.ActualScore / numQuestions) * 100 + '%';
						 
					 } else {
						 //answerContainer.style.color = "red";
						 answerLabel.style.color = "red";
						 justification.style.display = 'block';

					 }
				}
				if (button.value === question.CorrectAnswers[0]) {
					//answerContainer.style.color = "green";
					answerLabel.style.color = "green";
					justification.style.display = 'block';
				}
			});
		}



		//let submitButton = document.getElementById("submitButton");
		submitButton.disabled = true;

		//let nextButton = document.getElementById("nextButton");
		nextButton.disabled = false;

		saveQuizScore();
	});


}

function saveAndCloseQuiz(){
	itemDB.createItem(scoreDSName, score, () => {
		console.log("Score has been submitted");


		loadQuizList();
    // close the quiz modal.
    // document.getElementById("quizContainer").innerHTML = "";

	});
}

function saveQuizScore(){
	itemDB.updateItem(scoreDSName, "Subject", score.Subject, score, () => {
		console.log("updated score " + score.Subject);
	});
}

function submitQuiz(){
	quizContainer = document.getElementById("quizContainer");

	quizContainer.style.display = "none";
	
	document.getElementById("finishQuiz").style.display = "block";
	document.getElementById("currentScore").style.display = "block";
	
}

function getCheckedBoxes() {
  var checkboxes = document.getElementsByName("answerGroup");
  var checkboxesChecked = [];
  // loop over them all
  for (var i=0; i<checkboxes.length; i++) {
     // And stick the checked ones onto an array...
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i]);
     }
  }
  // Return the array if it is non-empty, or null
  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}
