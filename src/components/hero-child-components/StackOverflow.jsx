import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stackOverflow } from "../../assets"
import { fetchReputationCount } from "../../store/slices/stackOverflowSlice";


export const StackOverflow = () => {
    const STACK_OVERFLOW_USER_ID = import.meta.env.VITE_STACK_OVERFLOW_USER_ID;
    const STACK_OVERFLOW_PROFILE_LINK = import.meta.env.VITE_STACK_OVERFLOW_PROFILE_LINK;
    const dispatch = useDispatch();
    const {reputationCount,status} = useSelector((state) => state.stackOverflow);
    let rightPostion = reputationCount.toString().length * 10;

    useEffect(() => {
        dispatch(fetchReputationCount(STACK_OVERFLOW_USER_ID));
    },[dispatch]);

    return(
        <div className="relative cursor-pointer z-20 animate-bounce" onClick={() => window.open(STACK_OVERFLOW_PROFILE_LINK,"_blank")}>
            <img src={stackOverflow} alt='project_image' className='w-9 h-9 object-cover rounded-[50%] shadow-lg shadow-[#915EFF] border-4 border-black' />
            <div className={`absolute top-[-20px] rounded-[50%] px-[5px] text-[#915EFF]`} style={{right: `-${rightPostion}px`}}>
                {status === "succeeded" && reputationCount}
            </div>
        </div>
    )
}