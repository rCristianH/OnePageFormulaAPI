import getData from "../utils/getData";

const Home = async () => {
  const pilots = await getData();
  const view = `
    <div class="Pilots">
      ${pilots.results.map((pi) => `
        <article class="Pilots-item">
          <a href="#/${pi.position}/">
            <h2>${pi.team_name}</h2>
          </a>
        </article>
      `).join("")}
    </div>`;
  return view;
};
export default Home;
