import { Github } from "./Github"
import { NPM } from "./NPM"


{/* professional profiles in developer platforms */}
export const DeveloperPlatforms = () => {

    return(
      <div className="relative top-[60px] w-full flex justify-center items-center gap-x-4"> 
        <Github />
        <NPM />
    </div>
    )
  }