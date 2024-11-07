import { Share, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto p-2">
      <div className="flex flex-row">
        <div className="basis-3/4 p-1 text-lg font-bold self-center"> Studenten Gruppen </div>
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
      <div className="mt-5 p-1">
        <div>
          <p className="text-lg font-bold text-center my-5"> 
            Stundenten Gruppen
            <br />
            Vernetze dich mit
            <br/> 
            <span className="bg-purple-500 p-0.5"> allen Studenten in Berlin </span>  
          </p>
          <p className="text-sm text-slate-400 text-center my-5">
            Diese Website bietet verschiedene Studenten Gruppen innerhalb Berlin an.
            Hier erfährt ihr alles zu den neuesten und angesagtesten Studenten Partys.
          </p>
        </div>
      </div>
    </div>
  );
}
