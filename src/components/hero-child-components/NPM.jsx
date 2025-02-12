import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { npm } from "../../assets";
import {fetchMyNPMPackagesCount} from "../../store/slices/npmSlice";


export const NPM = () => {
    const NPM_USERNAME = import.meta.env.VITE_NPM_USERNAME;
    const NPM_PROFILE_LINK = import.meta.env.VITE_NPM_PROFILE_LINK;
    const dispatch = useDispatch();
    const {packageCount,status} = useSelector((state) => state.npm);
    let rightPostion = packageCount.toString().length * 8;

    useEffect(() => {
        dispatch(fetchMyNPMPackagesCount(NPM_USERNAME));
    },[dispatch]);
    
    return(
        <div className="relative cursor-pointer z-20" onClick={() => window.open(NPM_PROFILE_LINK,"_blank")}>
            <img src={npm} alt='project_image' className='w-9 h-9 object-cover rounded-[50%]' />
            <div className={`absolute top-[-13px] rounded-[50%] px-[5px] text-[#915EFF]`} style={{right: `-${rightPostion}px`}}>
                {status === "succeeded" && packageCount}
            </div>
        </div>
    )
}