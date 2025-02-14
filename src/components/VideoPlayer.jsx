

export const VideoPlayer = ({file}) => {

    return(
        <div className="aspect-video xs:w-full lg:w-[60%]">
            <video controls className="w-full h-full">
                <source src={file} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}