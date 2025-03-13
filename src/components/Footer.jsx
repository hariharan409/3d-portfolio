import moment from "moment";
import {version} from "../../package.json";


const Footer = () => {
    const year = moment().format("YYYY");

    return(
            <div className="text-center">
                <span className="text-xs text-gray-300">
                    @ {year} V-{version} <span className="hover:underline text-[#915EFF]">Blackcode {'</>💻'}</span>. All Rights Reserved.
                </span>
            </div>
    )
}

export default Footer;