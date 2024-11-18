let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];


function calculate(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();
    let d3, m3, y3;

    y3 = y2 - y1;
    
    if (m2 < m1 || (m2 === m1 && d2 < d1)) {
        y3--; // Subtract one year if the birthday hasn't occurred yet this year
    }
    
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        if (m3 < 0) {
            m3 = 11;
            y3--;
            d3 = new Date(y2, m2 - 1, 0).getDate() + d2 - d1;
        } else {
            d3 = new Date(y2, m2 - 1, 0).getDate() + d2 - d1;
        }
    }
   document.getElementById("info").innerHTML = `you are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;


}
