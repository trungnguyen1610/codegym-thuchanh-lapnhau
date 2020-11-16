let text;
text = "<table border='1' width='300' cellpadding='0' cellpadding='3'>";
for(i=1; i<=10;i++){
    text = text +"<tr>";
    for(j=1; j<=10;j++){
        text += "<td>" +i*j+ "</td>";
    }
    text = text +"</tr>";
}
//ket thuc vong lap dong the table
text += "</table>";
document.write(text);