import { ChevronRight } from "lucide-react"

interface LinkButtonAsset {
    uni: string,
    link: string
}

export default function LinkButton({ uni, link }: LinkButtonAsset) {
    return(
        <div className="border rounded my-2">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="p-2 flex justify-between">
                    <p className="font-bold"> {uni} </p>
                    <ChevronRight />
                </div>
            </a>
        </div>
    )
}