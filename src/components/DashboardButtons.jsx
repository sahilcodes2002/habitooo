import { useNavigate } from "react-router-dom";
import chitsicon2 from "../images/chitsicon2.png";
import team from "../images/team.png";
import chitsicon from "../images/chitsicon.png";
import codesave1 from "../images/codesave1.png";
import codesave from "../images/codesave.png";
export function Button1() {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{
      navigate("/userprojects")
    }}  className="w-fit flex justify-center shadow-lg  rounded-lg cursor-pointer bg-white hover:border-2 hover:shadow-mytext">
      <div className="flex justify-evenly">
        <div className="flex justify-between">
          <svg
            className="p-0 m-0"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="70"
            viewBox="10 0 80 100"
          >
            <path d="M 29 17.988281 C 21.82 17.988281 16 23.808281 16 30.988281 L 16 69.988281 C 16 77.168281 21.82 82.988281 29 82.988281 L 68 82.988281 C 75.179 82.988281 81 77.168281 81 69.988281 L 81 30.988281 C 81 23.808281 75.18 17.988281 68 17.988281 L 29 17.988281 z M 29 19.988281 L 68 19.988281 C 74.075 19.988281 79 24.913281 79 30.988281 L 79 69.988281 C 79 76.063281 74.075 80.988281 68 80.988281 L 29 80.988281 C 22.925 80.988281 18 76.063281 18 69.988281 L 18 30.988281 C 18 24.913281 22.924 19.988281 29 19.988281 z M 31.822266 22.988281 C 25.837266 22.988281 20.986328 27.839219 20.986328 33.824219 L 20.986328 67.150391 C 20.986328 73.135391 25.837266 77.988281 31.822266 77.988281 L 65.148438 77.988281 C 71.133437 77.988281 75.986328 73.136391 75.986328 67.150391 L 75.986328 48.488281 C 75.986328 48.212281 75.762328 47.988281 75.486328 47.988281 C 75.210328 47.988281 74.986328 48.212281 74.986328 48.488281 L 74.986328 67.150391 C 74.986328 72.583391 70.581437 76.988281 65.148438 76.988281 L 31.824219 76.988281 C 26.391219 76.988281 21.986328 72.583391 21.986328 67.150391 L 21.986328 33.824219 C 21.986328 28.391219 26.389266 23.988281 31.822266 23.988281 L 65.486328 23.988281 C 65.762328 23.988281 65.986328 23.764281 65.986328 23.488281 C 65.986328 23.212281 65.762328 22.988281 65.486328 22.988281 L 31.822266 22.988281 z M 33 28.007812 C 29.700754 28.007812 27.007813 30.700754 27.007812 34 C 27.007812 37.299246 29.700754 39.992188 33 39.992188 C 36.299246 39.992188 38.992187 37.299246 38.992188 34 C 38.992188 30.700754 36.299246 28.007812 33 28.007812 z M 33 29.007812 C 35.756754 29.007812 37.992187 31.243246 37.992188 34 C 37.992188 36.756754 35.756754 38.992188 33 38.992188 C 30.243246 38.992188 28.007812 36.756754 28.007812 34 C 28.007812 31.243246 30.243246 29.007812 33 29.007812 z M 33 31 C 31.343 31 30 32.343 30 34 C 30 35.657 31.343 37 33 37 C 34.657 37 36 35.657 36 34 C 36 32.343 34.657 31 33 31 z M 33 32 C 34.103 32 35 32.897 35 34 C 35 35.103 34.103 36 33 36 C 31.897 36 31 35.103 31 34 C 31 32.897 31.897 32 33 32 z M 43.5 34 A 0.50005 0.50005 0 1 0 43.5 35 L 69.5 35 A 0.50005 0.50005 0 1 0 69.5 34 L 43.5 34 z M 75.486328 36.566406 C 75.210328 36.566406 74.986328 36.790406 74.986328 37.066406 L 74.986328 39.066406 C 74.986328 39.342406 75.210328 39.566406 75.486328 39.566406 C 75.762328 39.566406 75.986328 39.343406 75.986328 39.066406 L 75.986328 37.066406 C 75.986328 36.790406 75.762328 36.566406 75.486328 36.566406 z M 75.486328 40.566406 C 75.210328 40.566406 74.986328 40.790406 74.986328 41.066406 L 74.986328 45.066406 C 74.986328 45.342406 75.210328 45.566406 75.486328 45.566406 C 75.762328 45.566406 75.986328 45.343406 75.986328 45.066406 L 75.986328 41.066406 C 75.986328 40.790406 75.762328 40.566406 75.486328 40.566406 z M 33 44.001953 C 29.696782 44.001953 27.001953 46.696782 27.001953 50 C 27.001953 53.303218 29.696782 55.998047 33 55.998047 C 36.303218 55.998047 38.998047 53.303218 38.998047 50 C 38.998047 46.696782 36.303218 44.001953 33 44.001953 z M 33 45.001953 C 35.760782 45.001953 37.998047 47.239218 37.998047 50 C 37.998047 52.760782 35.760782 54.998047 33 54.998047 C 30.239218 54.998047 28.001953 52.760782 28.001953 50 C 28.001953 47.239218 30.239218 45.001953 33 45.001953 z M 33 47 C 31.343 47 30 48.343 30 50 C 30 51.657 31.343 53 33 53 C 34.657 53 36 51.657 36 50 C 36 48.343 34.657 47 33 47 z M 33 48 C 34.103 48 35 48.897 35 50 C 35 51.103 34.103 52 33 52 C 31.897 52 31 51.103 31 50 C 31 48.897 31.897 48 33 48 z M 43.5 50 A 0.50005 0.50005 0 1 0 43.5 51 L 69.5 51 A 0.50005 0.50005 0 1 0 69.5 50 L 43.5 50 z M 33 60.007812 C 29.700754 60.007812 27.007812 62.700754 27.007812 66 C 27.007812 69.299246 29.700754 71.992188 33 71.992188 C 36.299246 71.992188 38.992188 69.299246 38.992188 66 C 38.992188 62.700754 36.299246 60.007813 33 60.007812 z M 33 61.007812 C 35.756754 61.007812 37.992187 63.243246 37.992188 66 C 37.992188 68.756754 35.756754 70.992188 33 70.992188 C 30.243246 70.992188 28.007812 68.756754 28.007812 66 C 28.007812 63.243246 30.243246 61.007813 33 61.007812 z M 33 63 C 31.346 63 30 64.346 30 66 C 30 67.654 31.346 69 33 69 C 34.654 69 36 67.654 36 66 C 36 64.346 34.654 63 33 63 z M 33 64 C 34.103 64 35 64.897 35 66 C 35 67.103 34.103 68 33 68 C 31.897 68 31 67.103 31 66 C 31 64.897 31.897 64 33 64 z M 43.5 66 A 0.50005 0.50005 0 1 0 43.5 67 L 69.5 67 A 0.50005 0.50005 0 1 0 69.5 66 L 43.5 66 z"></path>
          </svg>
        </div>
        <div className="h-full flex flex-col justify-center">
          <div className="bg-slate-200 w-1 h-5/6 rounded-lg mr-3"> </div>
        </div>
        <div className="h-full flex flex-col font-semibold justify-center text-lg">
          Task Manager
        </div>
        <div className="h-full flex flex-col justify-center">
          <div className="bg-slate-200 w-1 h-5/6 rounded-lg mr-5 ml-3"> </div>
        </div>
        <div className="h-full lex flex-col justify-center pt-1">
          <div>
            <img
              className="h-14 w-12 mr-6"
              src={team}
              alt="team up"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Button2() {
  const navigate  = useNavigate();
  return (
    <div onClick={()=>{
      navigate("/dashboardnotes")
    }} className=" mb-2 md:mb-0 w-fit flex justify-center p-[5px] shadow-lg rounded-lg cursor-pointer bg-white hover:border-2 hover:shadow-mytext">
      <div className="flex justify-evenly">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center ml-5">
            <img
              className="h-14 w-14 mr-6 "
              src={chitsicon2}
              alt="team up"
            />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center">
          <div className="bg-slate-200 w-1 h-5/6 rounded-lg mr-3"> </div>
        </div>
        <div className="h-full flex flex-col font-semibold justify-center text-lg">
          Daily Chits
        </div>
        <div className="h-full flex flex-col justify-center">
          <div className="bg-slate-200 w-1 h-5/6 rounded-lg mr-5 ml-3"> </div>
        </div>
        <div className="h-full lex flex-col justify-center pt-1">
          <div>
            <img
              className="h-14 w-14 mr-6"
              src={chitsicon}
              alt="team up"
            />
          </div>
        </div>
      </div>
    </div>
  );
}





export function Button3() {
  const navigate  = useNavigate();
  return (
    <div onClick={()=>{
      navigate("/allcode")
    }} className="w-fit flex justify-center p-[5px] shadow-lg rounded-lg cursor-pointer bg-white hover:border-2 hover:shadow-mytext">
      <div className="flex justify-evenly">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center ml-5">
            <img
              className="h-14 w-14 mr-6 "
              src={codesave1}
              alt="team up"
            />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center">
          <div className="bg-slate-200 w-1 h-5/6 rounded-lg mr-3"> </div>
        </div>
        <div className="h-full flex flex-col font-semibold justify-center text-lg">
          Your codes
        </div>
        <div className="h-full flex flex-col justify-center">
          <div className="bg-slate-200 w-1 h-5/6 rounded-lg mr-5 ml-3"> </div>
        </div>
        <div className="h-full lex flex-col justify-center pt-1">
          <div>
            <img
              className="h-11 w-11 mr-6"
              src={codesave}
              alt="team up"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
