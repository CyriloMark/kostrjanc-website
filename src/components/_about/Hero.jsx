import { getCurrentLang } from "../../constants";
import styles from "../../style";

import kostrjanc_Cyril_Portait from "../../assets/_about/kostrjanc - Cyril Portait.png";
import kostrjanc_Korla_Portait from "../../assets/_about/kostrjanc - Korla Portait.png";
import info_Kostrjanc_Logo_Skew from "../../assets/_start/_info_Kostrjanc_Logo_Skew.png";

const Hero = () => {
    return (
        <section id="hero" className={`flex flex-col ${styles.paddingY} ${styles.boxWidth}`}>

            <h1 className={`flex-1 font-barlow font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] text-center`}>
                {
                    getCurrentLang() === "sb" ?
                        "Štó my smy?" :
                        "Wer wir sind?"
                }
            </h1>

            <div className={`flex flex-col justify-center items-center ss:px-0 px-2`}>
                <div className={`flex w-full md:flex-row flex-col ${styles.marginY}`}>
                    <div className={`flex-1 flex ${styles.flexCenter}`}>
                        <img src={kostrjanc_Cyril_Portait} alt="Portrait Cyril Mark" className={`w-[480px] z-[5]`} />
                        <div className="absolute z-[0] w-[10%] h-[20%] white__gradient" />
                    </div>
                    <div className={`z-[5] flex flex-1 flex-col ${styles.padding}`}>
                        <h2 className={styles.heading2}>Cyril Mark</h2>
                        <p className={`${styles.paragraph} mt-5`}>
                            {
                                getCurrentLang() === "sb" ?
                                    "Ja sym Cyril Mark, 17 lět stary z Łusča. Programěruju hižo někak 5 lět dołho. Chodźu do jědnateho lětnika na Serbskim Gymnaziju Budyšinje. Lubuju poskać hudźbu a matematika a chemija su předmjetaj, kiž tučasnje najradšo wopytam. Hdyž njeprograměruju potom zaběram so rade z Photoshop. Za kostrjanc sym hłownje na smartfonowej warianće dźěłał. Chcych so w UI a frontend dale wukubłać, dokelž design jedneje app abo website přeco jako wažnje wobhladuju a to je směr, kiž móžu sej derje w přichodźe předstajić. Tučasnje so rady wječor z přećelami zetkam. Přez to zo rade hudźbu poskam, tež rady na koncertach a wjesnych swjedźenjach djjam připoskam." :
                                    "Ich bin Cyril Mark, 17 Jahre alt und aus Lauske. Ich programmiere schon seit ungefähr 5 Jahren. Ich gehe in die zwölfte Klasse am Sorbischen Gymnasium in Bautzen. Ich liebe Musik und Mathe und Chemie sind Fächer, die mir zurzeit am meißten gefallen. Wenn ich nicht programmiere, dann bearbeite ich oft Bilder mit Photoshop. Für kostrjanc hab ich hauptsächlich an der Smartphone App gearbeitet. Ich wollte mich in UI- und frontend-design weiterentwickeln, da ich finde, dass das Design einer Website oder App mit die wichtigste Rolle spielen. Und das ist eine Fähigkeit, die ich gerne später weiter lernene möchte. Zurzeit treff ich mich oft mit Freunden. Da ich gerne Musik höre, gehe ich gerne auf Konzerte und Partys. "
                            }
                        </p>
                    </div>
                </div>

                <div className={`flex w-full md:flex-row-reverse flex-col ${styles.marginY}`}>
                    <div className={`flex-1 flex  ${styles.flexCenter}`}>
                        <img src={kostrjanc_Korla_Portait} alt="Portrait Korla Mark" className={`w-[480px] z-[5]`} />
                        <div className="absolute z-[0] w-[10%] h-[15%] red__gradient" />
                    </div>
                    <div className={`z-[5] flex flex-1 flex-col ${styles.padding}`}>
                        <h2 className={styles.heading2}>Korla Baier</h2>
                        <p className={`${styles.paragraph} mt-5`}>
                            {
                                getCurrentLang() === "sb" ?
                                    "Ja sym Korla Baier, 14 lět stary a z Pančic. Chodźu do dźewjateho lětnika na Serbskim Gymnaziju w Budyšinje. Mój najlubši předmjet je matematika. Tučasnje je mój najlubši hobby programěrowanje, hraju pak tež rady klawěr a pišćele. Pola kostrjanc sym za Backend zamołwity. To rěka, zo so wo Firebase system, dashboard web słužby staram. Projekt je za mnje wažny, dokelž móžu přez jón nowe nazhonjenja dóstać, chcu so mjenujcy z programěrowarjom stać. Ale tež zhromadne dźěło mi wjeselo wobradźi. Přeju wšitkim wužiwarjam wot kostrjanc wjele wjesela při wužiwanju. " :
                                    "Ich bin Korla Baier, 14 Jahre alt und aus Panschwitz. Ich gehe in die neunte Klasse am Sorbischen Gymnazium in Bautzen. Ein Lieblingsfach ist Mathematik. Zurzeit ist mein größtes Hobby das Programmieren, ich spiele aber auch gerne Klavier und die Orgel. Bei kostrjanc bin ich für das Backend zuständig. Das heißt, dass ich mich um das Firebase System, Dashboard Web Dienst, kümmere. Das Projekt ist wichtig für mich, da ich durch das neue Erfahrungen sammeln kann. Ich möchte später nähmlich ein Programmierer werden. Aber auch das Zusammenarbeiten bereitet mir viel Spaß."
                            }
                        </p>
                    </div>
                </div>

                {/* <div className="absolute z-[0] w-[25%] h-[50%] rounded-full blue__gradient" />
                <div className={`absolute max-w-[720px]`}>
                    <img src={info_Kostrjanc_Logo_Skew} alt="kostrjanc logo" className="z-[2] w-full opacity-25" />
                </div> */}
            </div>
        </section>
    );
}

export default Hero;
