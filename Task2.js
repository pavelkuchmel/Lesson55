document.getElementById('button').addEventListener('click', function (event){
        let nameText = document.getElementById("name").value;
        if(nameText.length > 0) {
            document.getElementById("poll").submit();
            console.log('srabotalo');
        }
});