let friends = ['Brandon', 'Dillon', 'Joe', 'Carl', 'Frank'];
var num = null;
for(i = 0; friends.length > i; i++) {
    for(j = 1; 100 > j; j++) {
        if(num != 0) {
            num = 100 - j;
            nextNum = num - 1;
            if(num != 1) {
                console.log(num + " lines of code in the file, " + num + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + nextNum +" lines of code in the file");
            } else {
                console.log(num + " line of code in the file, " + num + " line of code; " + friends[i] + " strikes one out, clears it all out, " + nextNum +" lines of code in the file");
            }
        }
    }
}