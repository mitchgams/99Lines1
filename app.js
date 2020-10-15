let friends = ['Brandon', 'Dillon', 'Joe', 'Carl', 'Frank'];
let singButton = document.createElement("BUTTON");
let buttonText = document.createTextNode("Sing!");
singButton.appendChild(buttonText);
document.body.appendChild(singButton);
singButton.id = "singButton";
document.getElementById("singButton").addEventListener("click", singConsole);

function singConsole(e) {
    for(let i = 0; friends.length > i; i++) {
        let friendDiv = document.createElement("DIV");
        friendDiv.classList.add(friends[i]);
        document.body.appendChild(friendDiv);
        let h3 = document.createElement("H3");
        let h3Text = document.createTextNode(friends[i]);
        h3.appendChild(h3Text);
        document.getElementsByClassName(friends[i])[0].appendChild(h3);
        for(let j = 99; j > 0; j--) {
            let pText = null;
            let p = document.createElement("P");
            if(j === 1) {
                pText = document.createTextNode(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more of code in the file");
            } else {
                pText = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file");
            }
            p.appendChild(pText);
            document.getElementsByClassName(friends[i])[0].appendChild(p);
        }
    }
}
