let inputText = prompt(`Biron bir matn kiriting`);

function reverseStringTxt(txt){
    let array = txt.split('');
    let reversed = array.reverse().join(``);
    var object = {};
    for (var i = 0; i < array.length; i++){
        if (object[array[i]]){
            object[array[i]] ++ ;
        }else{
            object[array[i]] = 1;
        }
    }

    let maximal = 0;
    let maximalList = "";
    for (tet in object){
        if (object[tet] > maximal){
            maximal = object[tet];
            maximalList = tet;
        }else if (maximal ==1){
            maximalList = ' no'
        }
    }
    return reversed+" "+maximalList;
}

console.log(reverseStringTxt(inputText));