import LinkButton from "@/components/linkButton";


export default function Home() {
  return (
    <div className="w-full pb-12">
      <div className="bg-green-200 pb-2 px-8">
        <div className=" p-1">
            <div className="">
              <p className="text-lg font-bold text-center my-5"> 
                Stundenten Gruppen
                <br />
                Vernetze dich mit
                <br/> 
                <span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1"> allen Studenten in Berlin </span>  
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
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1">TU Berlin</span></p>
              <LinkButton 
                name="TU Berlin"
                uni="TU"
                category="TU1"
                link="https://chat.whatsapp.com/L8qOu9UUqar7CwDqUfoovM"
              />
              <LinkButton
                name="TU Berlin 🧑🏽‍🏫"
                uni="TU"
                category="TU2"
                link="https://chat.whatsapp.com/BXtZwZOi5zpIRMzfdZUwwt"
                />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1">HU Berlin</span></p>
              <LinkButton 
                name="Humboldt Universität 🎓"
                uni="HU"
                category="HU1"
                link="https://chat.whatsapp.com/D8ftwWReuw4BkURYXBnyM4"
              />
              <LinkButton 
                name="Humboldt Universität 🎓 2"
                uni="HU"
                category="HU2"
                link="https://chat.whatsapp.com/BctwAcoezgG7gGY9sh7cSF"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1">FU Berlin</span></p>
              <LinkButton 
                name="FU Berlin🎓"
                uni="FU"
                category="FU1"
                link="https://chat.whatsapp.com/DhCLbTBXHc7JbJrRgj2a2o"
                />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1">UDK</span></p>
              <LinkButton 
                name="Universität der Künste 🎓"
                uni="UDK"
                category="UDK1"
                link="https://chat.whatsapp.com/KNaakAj55T5Gg7qTP1HqUw"
                />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1">Uni Potsdam</span></p>
              <LinkButton 
                name="Uni Potsdam 🎓"
                uni="UniPotsdam"
                category="UniPotsdam1"
                link="https://chat.whatsapp.com/GzBdZWXf0OcHZgOgYVVq9A"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1">HTW Berlin</span></p>
              <LinkButton 
                name="HTW Berlin Erstis"
                uni="HTW"
                category="HTW1"
                link="https://chat.whatsapp.com/L6O4mJ2UNZOAXleSFFGxjg"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1">HWR Berlin</span></p>
              <LinkButton 
                name="HWR Erstis 🎓"
                uni="HWR"
                category="HWR1"
                link="https://chat.whatsapp.com/G25AE9k0eK6JVFuq5W5jLn"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1"> Ersti Gruppen Berlin </span></p>
              <LinkButton 
                name="Ersti Gruppen Berlin"
                uni="Ersti"
                category="Ersti1"
                link="https://chat.whatsapp.com/J8iVHk5exVF7dFOhKVJ1jV"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1"> Alle Studenten Partys in BLN </span></p>
                <LinkButton 
                  name="Alle Studenten Partys in BLN"
                  uni="Partys"
                  category="Partys1"
                  link="https://chat.whatsapp.com/IGvFo0KFXJW0AkRCC5eyGw"
                />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1">Studenten Jobs</span></p>
              <LinkButton 
                name="Student Jobs - Berlin"
                uni="Jobs"
                category="Jobs1"
                link="https://chat.whatsapp.com/GG8pHL8dONQCVK994kLIaz"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1">Wohungsbörse Berlin</span></p>
              <LinkButton 
                name="Wohungsbörse Berlin 🏡"
                uni="Wohnung"
                category="Wohnung1"
                link="https://chat.whatsapp.com/JyjhAfsAHdxAWGt9wtmzeB"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold"><span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1">Studentenrabatte</span></p>
              <LinkButton 
                name="Studentenrabatte & Spar-Tipps 🎓"
                uni="Rabatte"
                category="Rabatte1"
                link="https://chat.whatsapp.com/DMEQajtqwBdK5vAgMLEKT3"
              />
            </div>
          </div>
    </div>
  );
}
