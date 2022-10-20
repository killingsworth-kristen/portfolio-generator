const inquirer = require(`inquirer`)
const fs = require(`fs`)

inquirer
  .prompt([
    {
        type: `input`,
        name: `name`,
        message: `What is your name?`
    },
    {
        type: `input`,
        name: `location`,
        message: `Where are you located?`
    },
    {
        type: `input`,
        name: `bio`,
        message: `what is a fun fact about yourself?`
    },
    {
        type: `input`,
        name: `linkedIn`,
        message: `What is your linkedIn username?`
    },
    {
        type: `input`,
        name: `github`,
        message: `What is your Github username?`
    }
  ])
  .then((answers) => {
    const temp = JSON.stringify(answers)
    fs.writeFile(`index.html`, 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>
    <header>
        <h1>${answers.name}'s Portfolio</h1>
        <p>Located in ${answers.location}</p>
    </header>
    <main>
        <div class=" card text-bg-secondary p-3">
            <div class="card-body"> 
                <h2 class="card-title">About Me</h2>
                <p class="card-text">${answers.bio}</p>
            </div>
        </div>
        <div class="card text-bg-info">
            <div class="card-body">
            <a href="https://www.linkedin.com/in/${answers.linkedIn}/" target="_blank" class="link-light">LinkedIn</a>
            </div>
        </div>
        <div class="card text-bg-info">
            <div class="card-body">
                <a href="https://github.com/${answers.github}" target="_blank" class="link-light">Github</a>
            </div>
        </div>
    </main>
</body>
</html>
`
    , err => {
        if (err) {
          console.error(err);
        } else {
            console.log(`Success!`)
        }
      });
    }) 