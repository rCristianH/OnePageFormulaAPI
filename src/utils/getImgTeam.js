const getImgTeam = async (data) => {
  const teamImgs = [
    {
        "team_name": "Red Bull Racing",
        "team_img": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg"
    },
    {
        "team_name": "Mercedes",
        "team_img": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/mercedes.jpg"
    },
    {
        "team_name": "Ferrari",
        "team_img": "https://media.formula1.com/content/dam/fom-website/teams/Ferrari/logo-ferrari-18%20.jpg"
    },
    {
        "team_name": "McLaren",
        "team_img": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/mclaren.jpg"
    },
    {
        "team_name": "Aston Martin",
        "team_img": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/aston%20martin.jpg"
    },
    {
        "team_name": "Alpine",
        "team_img": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/alpine.jpg"
    },
    {
        "team_name": "Williams",
        "team_img": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/williams%20blue.jpg"
    },
    {
        "team_name": "AlphaTauri",
        "team_img": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/alphatauri.jpg"
    },
    {
        "team_name": "Alfa Romeo",
        "team_img": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/alfa%20romeo.jpg"
    },
    {
        "team_name": "Haas F1 Team",
        "team_img": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/haas.jpg"
    }
  ]

  const foundTeamImg = teamImgs.find(team => team.team_name === data.team_name);

  if (foundTeamImg) {
    data.imgSrc = foundTeamImg.team_img;
  } else {
    console.error(`No se encontró una imagen para el equipo ${data.team_name}`);
  }

  return data;
} 
export default getImgTeam