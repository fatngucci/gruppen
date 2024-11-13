import LinkButton from "@/components/linkButton";


export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-green-200 pb-2 px-8">
        <div className=" p-1">
            <div className="">
              <p className="text-lg font-bold text-center my-5"> 
                Stundenten Gruppen
                <br />
                Vernetze dich mit
                <br/> 
                <span className="bg-[#04b851] text-[#ffffff] p-0.5"> allen Studenten in Berlin </span>  
              </p>
              <p className="text-sm text-slate-400 text-center my-5">
                Diese Website bietet euch eine Übersicht aller WhatsApp-Gruppen für Erstsemester im Wintersemester 2024/25. 
                Hier könnt ihr schon vor dem Semesterstart Kommilitonen kennenlernen, WGs finden und alle Fragen rund ums Studium klären.
              </p>
            </div>
        </div>
      </div>
          <div className="pt-8 space-y-6 px-8">
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5">TU Berlin</span></p>
              <LinkButton 
                uni="TU Berlin"
                link="https://chat.whatsapp.com/L8qOu9UUqar7CwDqUfoovM"
              />
              <LinkButton
                uni="TU Berlin 🧑🏽‍🏫"
                link="https://chat.whatsapp.com/BXtZwZOi5zpIRMzfdZUwwt"
                />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5">HU Berlin</span></p>
              <LinkButton 
                uni="Humboldt Universität 🎓"
                link="https://chat.whatsapp.com/D8ftwWReuw4BkURYXBnyM4"
              />
              <LinkButton 
                uni="Humboldt Universität 🎓 2"
                link="https://chat.whatsapp.com/BctwAcoezgG7gGY9sh7cSF"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5">FU Berlin</span></p>
              <LinkButton 
                uni="FU BERLIN🎓"
                link="https://chat.whatsapp.com/DhCLbTBXHc7JbJrRgj2a2o"
                />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5">HTW Berlin</span></p>
              <LinkButton 
                uni="HTW Berlin Erstis"
                link="https://chat.whatsapp.com/L6O4mJ2UNZOAXleSFFGxjg"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5">Uni Potsdam</span></p>
              <LinkButton 
                uni="Uni Potsdam 🎓"
                link="https://chat.whatsapp.com/HUFAxpncF7xADVCXLnj90O"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5"> Ersti Gruppen Berlin </span></p>
              <LinkButton 
                uni="ERSTI GRUPPEN BERLIN"
                link="https://chat.whatsapp.com/J8iVHk5exVF7dFOhKVJ1jV"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5">Studenten Jobs</span></p>
              <LinkButton 
                uni="STUDENT JOBS - BERLIN"
                link="https://chat.whatsapp.com/GG8pHL8dONQCVK994kLIaz"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5">Wohungsbörse Berlin</span></p>
              <LinkButton 
                uni="WOHNUNGSBÖRSE BERLIN 🏡"
                link="https://chat.whatsapp.com/JyjhAfsAHdxAWGt9wtmzeB"
              />
            </div>
          </div>
    </div>
  );
}
