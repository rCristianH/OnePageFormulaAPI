import getByStan from "../utils/getByStan";
import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Pilots = async () => {
  const team = await getByStan(getHash());

  const view = `
    <div class="Pilots-inner">
      <article class="Pilots-card">
        <img src="${team.imgSrc}" alt="${team.team_name}" width=200>
        <h2>${team.team_name}</h2>
      </article>
      <article class="Pilots-card-info">
        <h3>Position: ${team.position}</h3>
        <h3>Points: ${team.points}:</h3>
        <h3>${team.season}</h3>
      </article>
    </div>
  `;
  return view;
};
export default Pilots;
