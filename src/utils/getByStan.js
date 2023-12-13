import getData from "./getData";
import getImgTeam from "./getImgTeam";

const getByStan = async (position) => {
  const i = Number(position)
  try {
    const data = await getData();
    console.log("Data obtained:", data.results);

    const foundTeam = data.results.find(team => team.position === i);
    console.log("Found team:", foundTeam);
    getImgTeam(foundTeam)
    return foundTeam || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export default getByStan;
