import { ChevronRight } from "lucide-react"

interface LinkButtonAsset {
    uni: string,
    link: string
}

export default function LinkButton({ uni, link }: LinkButtonAsset) {
    return(
        <div className="my-2">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="p-2 flex justify-between bg-neutral-900 rounded-md">
                    <p className="font-bold text-[#ffffff]"> {uni} </p>
                    <ChevronRight color="#ffffff" />
                </div>
            </a>
        </div>
    )
}