import { Share, Menu } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
    return(
    <div className="flex flex-row bg-neutral-900">
        <div className="basis-3/4 p-1 self-center"> 
          <Image src='/UniConnect_weiß.png' alt="logo" width="128" height="64"/>
        </div>
        <div className="basis-1/4 p-1">
          <div className="flex flex-row justify-end space-x-3">
            <div className="border rounded-md bg-white">
              <Share className="m-1 p-0.5" size={32} color="black"/>
            </div>
            <div className="border rounded">
              <Menu className="m-1 p-0.5" size={32} />
            </div>
          </div>
        </div>
      </div>
    )
}