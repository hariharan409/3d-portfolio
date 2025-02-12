import { useDispatch, useSelector } from "react-redux";
import { github } from "../../assets";
import { useEffect } from "react";
import { fetchMyGithubReposCount } from "../../store/slices/githubSlice";

export const Github = () => {
    const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
    const GITHUB_PROFILE_LINK = import.meta.env.VITE_GITHUB_PROFILE_LINK;
    const dispatch = useDispatch();
    const {repoCount,status} = useSelector((state) => state.github);
    let rightPostion = repoCount.toString().length * 8;

    useEffect(() => {
        dispatch(fetchMyGithubReposCount(GITHUB_USERNAME));
    },[dispatch]);

    return(
        <div className="relative cursor-pointer z-20" onClick={() => window.open(GITHUB_PROFILE_LINK,"_blank")}>
            <img src={github} alt='project_image' className='w-10 h-10 object-cover rounded-[50%]' />
            <div className={`absolute top-[-13px] rounded-[50%] px-[5px] text-[#915EFF]`} style={{right: `-${rightPostion}px`}}>
                {status === "succeeded" && repoCount}
            </div>
        </div>
    )
}