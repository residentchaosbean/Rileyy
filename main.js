    // Change button 1 - effecting cloud button and cloud span
    const arr1 = [];
    arr1[1]="his";

    //second array for chain reactions
    const arr4 = [];
    arr4[0]="burning sulphur";
    arr4[1]="hands";
    arr4[2]="drag";
    // i begins at 1 so that the first button click changes from 0 to 1.
    let i = 1; 
    
    function replace1() {
        if (i <= 2) { // i counts from 0 to 2 (<= means equal to or less than)
            document.getElementById("rep1").innerHTML = arr1[i];

            //insert chain reaction 1
                setTimeout(()=> {
                    document.getElementById("rep1one").innerHTML = arr1[i];
                } ,1000); //1000 represents 1000 milliseconds
            //insert chain reaction 2
                setTimeout(()=> {
                    document.getElementById("rep1one1").innerHTML = arr4[i]; //the second chain reaction draws from a different array called arr4
                } ,2000); //2000 represents 1000 milliseconds
            
            //to get rid of delay and have the words change at the same time, comment out the above lines and 'uncomment' the below line
            //document.getElementById("rep1one").innerHTML = arr1[i];
            //console.log(i, arr1[i]);
            i++;
            if (i === 3) { //if i counts higher than 2, turn i back into 0
                i = 0;
            }
        }
    }
// Change button 2 - effecting dripping
const arr2 = [];
    arr2[0]="dripping";
    arr2[1]="coughing";
    arr2[2]="plotting";
    arr2[3]="gloating";
    arr2[4]="floating";
    let j = 1; // j also begins at 1 so that the first button click changes from 0 to 1.

    function replace2() {
        if (j < 5) { // i counts from 0 to 5
            document.getElementById("rep2").innerHTML = arr2[j];
            //console.log(i, arr1[i]);
            j++;

            if (j === 5) { //if j counts higher than 2, turn j back into 0
                j = 0;
                }
            }
    }

// Change button 3 - effecting spring 
const arr3 = [];
    arr3[0]="Djeran 2024";
    arr3[1]="Djeran 2024 [1963 Spring originally composed by Yoko Ono]";
    arr3[2]="1963 Spring originally composed by Yoko Ono for her instructional book <i>Grapefruit</i>";
    arr3[3]="1963 Spring";
    let k = 1; // k lastly begins at 1 so that the first button click changes from 0 to 1.

    function replace3() {
        if (k < 4) { // i counts from 0 to 5
            document.getElementById("rep3").innerHTML = arr3[k];
            //console.log(i, arr1[i]);
            k++;

            if (j === 4) { //if k counts higher than 2, turn k back into 0
                k = 0;
                }
            }
    }