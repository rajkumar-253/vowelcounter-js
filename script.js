function countVowels(){
    let textArea=document.getElementById('text').value;
    console.log(textArea)
    let totalVowels=0;
    textArea=textArea.toLowerCase();
    for(let i=0;i<=textArea.length;i++){
        if(isVowel(textArea.charAt(i))){
            totalVowels++;
        }

    }
    const result=document.getElementById('result');
    result.textContent="Total Vowels: "+totalVowels;

}

function isVowel(char){
    const myvowels=["a","e","i","o","u"];
    return myvowels.includes(char);
}
