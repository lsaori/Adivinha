player1Name = localStorage.getItem("player1Name"); 
player2Name = localStorage.getItem("player2Name"); 

player1Score = 0; 
player2Score = 0; 

document.getElementById("player1Name").innerHTML = player1Name; 
document.getElementById("player2Name").innerHTML = player2Name; 

document.getElementById("player1Score").innerHTML = player1Score; 
document.getElementById("player2Score").innerHTML = player2Score; 

document.getElementById("playerQuestion").innerHTMl = "Turno de Pergunta = " + player1Name; 
document.getElementById("playerAnswer").innerHTMl = "Turno de Resposta = " + player2Name; 

function send(){
    getWord = document.getElementById("word").value;       // getWord = Neymar
    word = getWord.toLowerCase();                          // word = neymar
    // n = 0 , e = 1, y = 2, m = 3, a = 4, r = 5. 
    letra1 = word.charAt(1);                               // letra1 = e
    divide = Math.floor(word.length/2);                    // divide = 6/2 = 3 
    letra2 = word.charAt(divide);                          // letra2 = m
    menos = word.length - 1;                               // menos = 6-1 = 5
    letra3 = word.charAt(menos);                           // letra3 = r

    remove1 = word.replace(letra1, "_");                   // remove1 = n_ymar
    remove2 = remove1.replace(letra2, "_");                // remove2 = n_y_ar
    remove3 = remove2.replace(letra3, "_");                // remove3 = n_y_a_

    linha1 = "<h4 id='wordDisplay'> Palavra: " + remove3 + "</h4>";
    linha2 = "<br> Resposta: <input type='text' id='inputCheckBox'>";
    linha3 = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>"; 
    linha = linha1 + linha2 + linha3; 
    document.getElementById("output").innerHTML = linha; 
    document.getElementById("word").value = ""; 
}

questionTurn = "player1"; 
answerTurn = "player2"; 

function check(){
    getAnswer = document.getElementById("inputCheckBox").value;  
    answer = getAnswer.toLowerCase(); 

    if(answer == word){
        if(answerTurn == "player1"){
            player1Score = player1Score + 1; 
            document.getElementById("player1Score").innerHTML = player1Score; 
            questionTurn = "player1";
            document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name; 
            answerTurn = "player2";
            document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name; 
        }
        else{
            player2Score = player2Score + 1; 
            document.getElementById("player2Score").innerHTML = player2Score; 
            questionTurn = "player2";
            document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player2Name; 
            answerTurn = "player1";
            document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player1Name; 
        }
    }
}