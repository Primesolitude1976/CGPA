
let marks = [];
let credits = [];



function getResult() {
    // getting the html codes
    let all_marks = Array.from(document.querySelectorAll("#subject"));
    // getting the values from html input boxes
    all_marks.forEach((node) => {
        marks.push(Number(node.value));
    });

    let all_credits = Array.from(document.querySelectorAll(".credits"));
    // getting the values from html input boxes
    all_credits.forEach((node) => {
        credits.push(node.value);
    });


    let sum = 0;
    let total_credits = 0;
    // marks[0]*credits[0] + marks[1]*credits[1]... 
    for (let i = 0; i < 8; i++) {
        sum = sum + marks[i] * credits[i];
        total_credits += parseFloat(credits[i]);
    }
    let h1 = document.createElement("h1");
    h1.innerText = 'Your total CGPA is ' + sum / total_credits + '!';
    h1.style.textAlign = "center";
    document.body.append(h1);

}
