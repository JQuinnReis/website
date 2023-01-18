

function TextAPI(){

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '8dd2244ec3msh3d18816cf7d331ep1acf1djsn0f7d65e1df57',
    //         'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    //     }
    // };
    // var MemeText = document.getElementById("MemeText");
    // fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', options)
    //     .then(response => response.json())
    //     .then(response =>  MemeText.innerHTML = response['content'])
    //     .then(response => console.log(response['content']) )

           
    //     .catch(err => console.error(err));};

        const options = {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': '8dd2244ec3msh3d18816cf7d331ep1acf1djsn0f7d65e1df57',
            'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
            }
            };
            //  var MemeText = document.getElementById("MemeText");
            fetch('https://famous-quotes4.p.rapidapi.com/', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
        };