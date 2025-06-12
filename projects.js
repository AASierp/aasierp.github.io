function updateContent(data){

    let projDesc = ["projectZero", "projectOne", "projectTwo", "projectThree"];
    let projTitle = ["projectZeroTitle", "projectOneTitle", "projectTwoTitle", "projectThreeTitle"]
    let projName = ["RealEstateScrapeMVC", "TimeSheetFilter", "BadRabbitBeardBalm", "Adventure_Game_Repo"];

    for( let i = 0; i < projName.length; i++){

        const repoName = projName[i];
        const targetRepo = data.find(i => i.name.toLowerCase() === repoName.toLowerCase());

        if(targetRepo){
            const projDescription = document.getElementById(projDesc[i]);

            const projTitles = document.getElementById(projTitle[i]);

            if(projDescription && projTitles){

                projDescription.textContent = ""; 

                projDescription.textContent = targetRepo.description;

                projTitles.textContent = "";

                projTitles.textContent = targetRepo.name;
            }
        }
    }

}


async function gitHubApi(){
    const userName = "aasierp";
    const response = await fetch(`https://api.github.com/users/${userName}/repos`);
    const data =  await response.json();

    console.log(data)

    updateContent(data);

}

gitHubApi();




