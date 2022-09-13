import { useEffect } from 'react';

import styles from '../style';

import { getCurrentLang } from '../constants';

import { verify, business, ad } from '../assets';

import Footer from "../components/Footer";

const Business = () => {

    useEffect(() => {
        document.title = getCurrentLang() === "sb" ? "kostrjanc Business program" : "kostrjanc Business Programm";
    }, []);

    return (
        <div onLoad={() => window.scrollTo(0, 0)} className={`bg-primary ${styles.flexCenterVert} flex-col w-full`}>

            <div className={`z-[5] flex flex-col ${styles.padding} ${styles.boxWidth}`}>
                <h1 className={`flex-1 font-barlow font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] text-center`}>
                    {
                        getCurrentLang() === "sb" ?
                            "kostrjanc Business program" :
                            "kostrjanc Business Programm"
                    }
                </h1>
            </div>

            <div className={`${styles.paddingY} ${styles.boxWidth} px-5 flex flex-col z-[5]`}>


                {/* description */}
                <div className={`${styles.paddingY} flex sm:flex-row flex-col`}>

                    <div className="flex flex-col flex-1">
                        <h2 className={`mb-5 ${styles.heading2} max-w-[980px]`}>kostrjanc Business</h2>

                        <p className={`${styles.paragraph} max-w-[720px]`}>
                            {
                                getCurrentLang() === "sb" ?
                                    <p>
                                        Z kostrjanc Business programom móžeće Wy na kostrjanc wabjenje šaltować.
                                        Z kostrjanc wabenjom móžeće Wy wjace ludźom waše posty a ewenty pokazać a tak wjace ludźi z wašimi powěsćemi docpěć.<br />
                                        Tohorunja wobsteju tu móžnosć, zo móžeće so werifikować dać. To nima ničo z wabjenjami činić.
                                        Hdyž so Wy jenož za werifikaciju zajimujeće, stłóće tu: <a href="#verify" className="text-gradient">Werifikacija</a>
                                    </p> :
                                    "Mit dem kostrjanc Business Programm können Sie auf kostrjanc Werbung schalten. Mit kostrjanc Werbungen können Sie mehr Benutzern Ihre Posts und Events zeigen und somit mehr Menschen mit ihren Nachrichten erreichen."
                            }
                        </p>
                    </div>

                    <div className={`sm:flex hidden flex-1 ${styles.flexCenter} relative`}>
                        <div className={`w-[100%] h-[100%] max-w-[240px] max-h-[240px] bg-blue-gradient rounded-full ${styles.flexCenter} z-[5] aspect-square`}>
                            <img src={business} className={`w-[50%] h-[50%] ${styles.iconAnimation}`} alt="kostrjanc Business programm icon" />
                        </div>
                        <div className="absolute z-[0] w-[40%] h-[35%] top-0 red__gradient" />
                        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full blue__gradient" />
                        <div className="absolute z-[0] w-[25%] h-[25%] right-20 bottom-20 white__gradient" />
                    </div>

                </div>

                {/* wie funtioniert werbung */}
                <div className={`${styles.paddingY} flex sm:flex-row-reverse flex-col text-end`}>

                    <div className="flex flex-col flex-1">
                        <h2 className={`mb-5 ${styles.heading2} max-w-[980px]`}>
                            {
                                getCurrentLang() === "sb" ?
                                    "Kak funguje kostrjanc wabjenje?" :
                                    "Wie funktionert kostrjanc Werbung?"
                            }
                        </h2>

                        <p className={`${styles.paragraph} max-w-[720px]`}>
                            {
                                getCurrentLang() == "sb" ?
                                    <p>
                                        Wabjenje na kostrjanc je cyle jednorje jedyn post abo jedyn ewent.
                                        Hdyž sej wužiwar posty na kostrjanc wobhlada, wón druhdy jedne wabjenje widźi.
                                        Tute wabjenje móže potom waš post abo ewent być. Maće tež móžnosć waše wabjenje wusměrić,
                                        tak zo so wabjenje jenož wužiwarjam pokaza kiž so za waše wabjenja zajimuja.
                                    </p> :
                                    "serdfaiuhojmwedrjouimipwekod,rü"
                            }
                        </p>
                    </div>

                    <div className={`sm:flex hidden flex-1 ${styles.flexCenter} relative`}>
                        <div className={`w-[100%] h-[100%] max-w-[240px] max-h-[240px] bg-blue-gradient rounded-full ${styles.flexCenter} z-[5] aspect-square`}>
                            <img src={ad} className={`w-[50%] h-[50%] ${styles.iconAnimation}`} alt="kostrjanc Business programm icon" />
                        </div>
                        <div className="absolute z-[0] w-[40%] h-[35%] top-10 right-20 red__gradient" />
                        <div className="absolute z-[0] w-[25%] h-[25%] left-20 bottom-20 white__gradient" />
                    </div>

                </div>

                {/* how to join */}
                <section id="verify" className={`${styles.paddingY} flex flex-col`}>
                    <h2 className={`mb-5 ${styles.heading2} max-w-[980px]`}>
                        {
                            getCurrentLang() === "sb" ?
                                "Kak móžu so z čłonom wot kostrjanc Business programa stać?" :
                                "Wie kann ich dem kostrjanc Business Programm beitreten?"
                        }
                    </h2>

                    {/* big screens */}
                    <div className={`sm:flex flex-col hidden w-full my-5`}>

                        {/* head */}
                        <div className={`flex flex-row w-full ${styles.flexCenter}`}>
                            <div className={`px-5 flex-1 flex`}>
                                <h2 className={`font-barlow font-semibold text-center xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white text-center w-full`}>
                                    {
                                        getCurrentLang() === "sb" ?
                                            "kostrjanc Business program" :
                                            "kostrjanc Business Programm"
                                    }
                                </h2>
                            </div>
                            <div className={`px-5 flex-1 flex`}>
                                <h2 className={`font-barlow font-semibold text-center xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white text-center w-full`}>
                                    {
                                        getCurrentLang() === "sb" ?
                                            "Werifikacija" :
                                            "Verifikation"
                                    }
                                </h2>
                            </div>
                        </div>

                        {/* icons */}
                        <div className={`flex flex-row w-full ${styles.flexCenter} my-10`}>
                            <div className={`${styles.flexCenter} flex-1 flex self-center`}>
                                <div className={`w-[128px] h-[128px] rounded-full ${styles.flexCenter} bg-blue-gradient aspect-square`}>
                                    <img src={business} alt="kostrjanc Business programm Icon" className={`w-[50%] h-[50%] object-contain ${styles.iconAnimation}`} />
                                </div>
                            </div>
                            <div className={`${styles.flexCenter} flex-1 flex self-center`}>
                                <div className={`w-[128px] h-[128px] rounded-full ${styles.flexCenter} bg-blue-gradient aspect-square`}>
                                    <img src={verify} alt="Verify Icon" className={`w-[50%] h-[50%] object-contain ${styles.iconAnimation}`} />
                                </div>
                            </div>
                        </div>

                        {/* p's */}
                        <div className={`flex flex-row w-full ${styles.flexStart}`}>
                            <p className={`${styles.paragraph} px-5 w-full flex-1 flex `}>
                                {
                                    getCurrentLang() == "sb" ?
                                        <p>
                                            Jeli chceće so z čłonom wot kostrjanc buisness programom stać, hdźe to cyle jednorje.
                                            Pisaće nam cyle jednorje jednu email na <a href="mailto:info@kostrjanc.de" className="text-gradient">info@kostrjanc.de</a>, a potom my
                                            wam wšitko rozkładźemy.
                                        </p> :
                                        "serdfaiuhojmwedrjouimipwekod,rü"
                                }
                            </p>
                            <p className={`${styles.paragraph} px-5 w-full flex-1 flex`}>
                                {
                                    getCurrentLang() == "sb" ?
                                        <div>
                                            Werifikacija je wosebita forma našeho Business programa. Jako werifikowana wosoba dóstanješ móžnosć, na kostrjanc wosebite
                                            nadawki spjelnić. Tohorunja maš móžnosć kostrjanc sobu postajić a maš wosebite prawa, za agěrowanje w našej app.
                                            Werifikowani wužiwarjo namakaja w app wosebity symbol na jich profilu.<br />
                                            Zo móžeš twój konto werifikować, dyrbiš slědowace kriterie spjelnić:
                                            <ul className="list-disc w-full px-5 my-2">
                                                <li>staroba wot 18 lět</li>
                                                <li>maš wosebity poćah ke kostrjanc abo spejliš wosebity status w towaršnosći</li>
                                                <li>wužiješ kostrjanc regularnje a wobkedźbuješ regule za wužiwanje</li>
                                                <li>dźeržiš so na moralne normy a akceptuješ prawa a regule w a zwonka kostrjanc</li>
                                                <li>akceptuješ w a zwonka kostrjanc kóždeho sobučłowjeka</li>
                                            </ul>
                                            Jeli trěbne dypki spjeliš, pisaj nam jednu email na <a href="mailto:info@kostrjanc.de" className="text-gradient">info@kostrjanc.de</a>,
                                            a napisaj do titula "werifikacija". Prošu podaj twoje mjeno a dźeń naroda.
                                        </div> :
                                        "serdfaiuhojmwedrjouimipwekod,rü"
                                }
                            </p>
                        </div>
                    </div>

                    {/* small screens */}
                    <div className="sm:hidden flex flex-col w-full my-5">

                        <div className={`my-5 w-full flex flex-col`}>
                            <h2 className={`font-barlow font-semibold text-center xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white text-center w-full`}>
                                {
                                    getCurrentLang() === "sb" ?
                                        "kostrjanc Business program" :
                                        "kostrjanc Business Programm"
                                }
                            </h2>

                            <div className={`${styles.flexCenter} my-5 flex-1 flex self-center`}>
                                <div className={`w-[128px] h-[128px] rounded-full ${styles.flexCenter} bg-blue-gradient aspect-square`}>
                                    <img src={business} alt="kostrjanc Business programm Icon" className={`w-[50%] h-[50%] object-contain ${styles.iconAnimation}`} />
                                </div>
                            </div>

                            <p className={`${styles.paragraph} w-full self-center flex-1 flex max-w-[720px]`}>
                                {
                                    getCurrentLang() == "sb" ?
                                        <p>
                                            Jeli chceće so z čłonom wot kostrjanc buisness programom stać, hdźe to cyle jednorje.
                                            Pisaće nam cyle jednorje jednu email na <a href="mailto:info@kostrjanc.de" className="text-gradient">info@kostrjanc.de</a>, a potom my
                                            wam wšitko rozkładźemy.
                                        </p> :
                                        "serdfaiuhojmwedrjouimipwekod,rü"
                                }
                            </p>
                        </div>

                        <div className={`my-5 w-full flex flex-col`}>
                            <h2 className={`font-barlow font-semibold text-center xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white text-center w-full`}>
                                {
                                    getCurrentLang() === "sb" ?
                                        "Werifikacija" :
                                        "Verifikation"
                                }
                            </h2>

                            <div className={`${styles.flexCenter} my-5 flex-1 flex self-center`}>
                                <div className={`w-[128px] h-[128px] rounded-full ${styles.flexCenter} bg-blue-gradient aspect-square`}>
                                    <img src={verify} alt="Verify Icon" className={`w-[50%] h-[50%] object-contain ${styles.iconAnimation}`} />
                                </div>
                            </div>

                            <p className={`${styles.paragraph} w-full self-center flex-1 flex max-w-[720px]`}>
                                {
                                    getCurrentLang() == "sb" ?
                                        <div>
                                            Werifikacija je wosebita forma našeho Business programa. Jako werifikowana wosoba dóstanješ móžnosć, na kostrjanc wosebite
                                            nadawki spjelnić. Tohorunja maš móžnosć kostrjanc sobu postajić a maš wosebite prawa, za agěrowanje w našej app.
                                            Werifikowani wužiwarjo namakaja w app wosebity symbol na jich profilu.<br />
                                            Zo móžeš twój konto werifikować, dyrbiš slědowace kriterie spjelnić:
                                            <ul className="list-disc w-full px-5 my-2">
                                                <li>staroba wot 18 lět</li>
                                                <li>maš wosebity poćah ke kostrjanc abo spejliš wosebity status w towaršnosći</li>
                                                <li>wužiješ kostrjanc regularnje a wobkedźbuješ regule za wužiwanje</li>
                                                <li>dźeržiš so na moralne normy a akceptuješ prawa a regule w a zwonka kostrjanc</li>
                                                <li>akceptuješ w a zwonka kostrjanc kóždeho sobučłowjeka</li>
                                            </ul>
                                            Jeli trěbne dypki spjeliš, pisaj nam jednu email na <a href="mailto:info@kostrjanc.de" className="text-gradient">info@kostrjanc.de</a>,
                                            a napisaj do titula "werifikacija". Prošu podaj twoje mjeno a dźeń naroda.
                                        </div> :
                                        "serdfaiuhojmwedrjouimipwekod,rü"
                                }
                            </p>
                        </div>


                    </div>
                </section>

                {/* wie funtioniert dashboard */}
                <div className={`${styles.paddingY} flex flex-col self-end items-end text-end`}>
                    <h2 className={`mb-5 ${styles.heading2} max-w-[980px]`}>
                        {
                            getCurrentLang() === "sb" ?
                                "Kak funguje kostrjanc Business dashboard?" :
                                "Wie funktionert kostrjanc Werbung?"
                        }
                    </h2>

                    <p className={`${styles.paragraph} max-w-[720px]`}>
                        {
                            getCurrentLang() == "sb" ?
                                <p>
                                    Na kostrjanc buisness dashbordźe móžeće wabjenja wozjewić, sej waše aktualne wabjenja a kóšty wobhladać.
                                    Hdyž je so waš akawnt na jedyn Business Account změnił je,
                                    móžeće so na <a href="https://dashboard.kostrjanc.de/" className="text-gradient">dashboard.kostrjanc.de</a> z wašim akawntom přizjewić.
                                    Za to wužiwaće samsne hesło a email kaž pola kostrjanc app. Horjeka nalěwo móžeće wšelake strony wuzwolić.<br />
                                    Na dashboardźe móžeće wšitke wabjenja widźeć, kotryž šće wozjewjeli. Móžeće widźeć kak husto je so wabjenje wobhladało. Widźiće tež kak drohe waše wabjenje tutón měsac budźe.
                                </p> :
                                "serdfaiuhojmwedrjouimipwekod,rü"
                        }
                    </p>
                </div>

                {/* new ad */}
                <div className={`${styles.paddingY} flex flex-col`}>
                    <h2 className={`mb-5 ${styles.heading2} max-w-[980px]`}>
                        {
                            getCurrentLang() === "sb" ?
                                "Nowe wabjenje" :
                                "Wie funktionert kostrjanc Werbung?"
                        }
                    </h2>

                    <p className={`${styles.paragraph} max-w-[720px]`}>
                        {
                            getCurrentLang() == "sb" ?
                                <p>
                                    Na stronje "Nowe Wabjenje" móžeće nowe wabjenja wozjewić. Hdyž chceće wabjenje wozjewić,
                                    dyrbiće jako prěnje wuzwolić hač ma so post abo ewent pokazać. Potom wuzwolće kotry post abo ewent so pokazać ma.
                                    Jako přichodnje móžeće opcije za wusměrjene wabenje zaswě.<br />
                                    Na kóncu měsaca so wam přeco jedna zličbowanka pósła. Zapłaćiće 5ct přeco hdyž so waše wabjenje wobhlada.
                                    Na kóncu měsaca płaćiće jenož tak wjele, kaž so waše wabjenje wobhlada.
                                </p> :
                                "serdfaiuhojmwedrjouimipwekod,rü"
                        }
                    </p>
                </div>

            </div>

            <div className="absolute w-[25%] h-[40%] z-[0] left-0 blue__gradient" />
            <div className="absolute w-[15%] h-[5%] z-[0] rounded-full right-[10%] -bottom-[100%] pink__gradient" />
            <div className="absolute w-[25%] h-[5%] z-[0] rounded-full left-[10%] -bottom-[150%] white__gradient" />
            <div className="absolute w-[25%] h-[40%] z-[0] rounded-full right-5 -bottom-[250%] blue__gradient" />

            <div className={`${styles.paddingX} ${styles.flexCenterVert} ${styles.boxWidth} z-[5] flex-col`}>
                <Footer />
            </div>
        </div>

    );
}

export default Business;
