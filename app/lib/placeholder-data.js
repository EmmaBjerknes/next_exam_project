const products = [
  {
    id: "3e8d5078aa5654da845954027c4cd032",
    campaign: null,
    name: "Yesterday Soffbord, L 130 cm",
    description:
      "Soffbord i svartbetsat lackerat askfaner med en hylla för smart och praktiskt förvaring.",
    productImage: "/images/products/11255.jpg0",
    price: 2795,
    category: "soffor",
  },
  {
    id: "d43b09638caf7d36986f557d7dabe958",
    campaign: null,
    name: "Living Tavellist, B 120 cm",
    description:
      "Tavellist för dina tavlor och posters. Välj mellan oljad massiv ek, lackerad ljus björk, svart eller vitlackerad mdf.\r\n",
    productImage: "/images/products/106501.jpg",
    price: 199,
    category: "tavlor",
  },
  {
    id: "52eb57fc09c541316140e63d90ba54a5",
    campaign: null,
    name: "Living Tavellist, B 80 cm",
    description:
      "Tavellist för dina tavlor och posters. Välj mellan oljad massiv ek, lackerad ljus björk, svart eller vitlackerad mdf.",
    productImage: "/images/products/16240.jpg0",
    price: 149,
    category: "tavlor",
  },
  {
    id: "06d9105835cb521852f706717c92dae5",
    campaign: null,
    name: "Living Vägghylla, H 60 cm",
    description:
      "Vägghylla i vitlackerad mdf med två hyllplan. Enkel att montera och varje hyllplan har en maxbelastning på fem kg vardera.",
    productImage: "/images/products/16289.jpg",
    price: 199,
    category: "hyllor",
  },
  {
    id: "9c5ccf9036d71523dfe7c36d7df91af2",
    campaign: null,
    name: "Living Vägghylla, H 100 cm",
    description:
      "Vägghylla i vitlackerad mdf med fyra hyllplan. Hyllan är enkel att montera och varje hyllplan har en maxbelastning på fem kg.",
    productImage: "/images/products/16290.jpg",
    price: 299,
    category: "hyllor",
  },
  {
    id: "da5a8ceb391a64b350bca078867b9787",
    campaign: null,
    name: "Dream Delux Ramsäng, enkelsäng med bäddmadrass Sense Delux",
    description:
      "Med sin följsamma och omfamnande känsla blir Dream en självklar favorit i många år framöver. Det som skapar den mysiga känslan är en X-pocketresår i samarbete med en 5-zons pocketresår i den övre resårkärnan.",
    productImage:
      "/images/products/c64b5527-307a-4e9b-a5be-d0805f6b99b4_0f7.jpg",
    price: 10495,
    category: "sängar",
  },
  {
    id: "ac08a6e31bca853c88bab7f0816e3ae5",
    campaign: null,
    name: "Dream Delux Ramsäng, enkelsäng med bäddmadrass Sense Delux",
    description:
      "Med sin följsamma och omfamnande känsla blir Dream en självklar favorit i många år framöver. Det som skapar den mysiga känslan är en X-pocketresår i samarbete med en 5-zons pocketresår i den övre resårkärnan. Sängens övre pocketresår ger en helt individuell avlastning vilket minskar risken för tryck som gör att du vaknar och X-pocketresåren ger madrassen en extra ytmjuk känsla som bidrar till den omfamnande känslan. För en extra stabilitet i sängen har vi lagt till en kantförstärkning i övre resårkärnan. Den undre resårkärnan har en pocketresår som gör att du får ett extra djup i sängen och mycket god följsamhet. Sängen är svensktillverkad och finns i tre olika komforter, medium, fast eller extra fast. I priset ingår bäddmadrass Sense Delux och metallben.",
    productImage:
      "/images/products/c64b5527-307a-4e9b-a5be-d0805f6b99b4_0f7.jpg",
    price: 10495,
    category: "sängar",
  },
  {
    id: "21961cf6708e2c7745c32cbaa538d5b1",
    campaign: null,
    name: "Dream Delux Ramsäng, enkelsäng med bäddmadrass Sense Delux",
    description:
      "Med sin följsamma och omfamnande känsla blir Dream en självklar favorit i många år framöver. Det som skapar den mysiga känslan är en X-pocketresår i samarbete med en 5-zons pocketresår i den övre resårkärnan. Sängens övre pocketresår ger en helt individuell avlastning vilket minskar risken för tryck som gör att du vaknar och X-pocketresåren ger madrassen en extra ytmjuk känsla som bidrar till den omfamnande känslan. För en extra stabilitet i sängen har vi lagt till en kantförstärkning i övre resårkärnan. Den undre resårkärnan har en pocketresår som gör att du får ett extra djup i sängen och mycket god följsamhet. Sängen är svensktillverkad och finns i tre olika komforter, medium, fast eller extra fast. I priset ingår bäddmadrass Sense Delux och metallben.",
    productImage:
      "/images/products/be42c2c5-bc3c-4c14-a959-e100bdb9eeab_188.jpg",
    price: 10495,
    category: "sängar",
  },
  {
    id: "1e0ad59b55e92921d16bb09969485d7b",
    campaign: null,
    name: "Dream Delux Ramsäng, enkelsäng med bäddmadrass Sense Delux",
    description:
      "Med sin följsamma och omfamnande känsla blir Dream en självklar favorit i många år framöver. Det som skapar den mysiga känslan är en X-pocketresår i samarbete med en 5-zons pocketresår i den övre resårkärnan. Sängens övre pocketresår ger en helt individuell avlastning vilket minskar risken för tryck som gör att du vaknar och X-pocketresåren ger madrassen en extra ytmjuk känsla som bidrar till den omfamnande känslan. För en extra stabilitet i sängen har vi lagt till en kantförstärkning i övre resårkärnan. Den undre resårkärnan har en pocketresår som gör att du får ett extra djup i sängen och mycket god följsamhet. Sängen är svensktillverkad och finns i tre olika komforter, medium, fast eller extra fast. I priset ingår bäddmadrass Sense Delux och metallben.",
    productImage:
      "/images/products/c64b5527-307a-4e9b-a5be-d0805f6b99b4_0f7.jpg",
    price: 10495,
    category: "sängar",
  },
  {
    id: "578bf1898e73f94039212b93258ca28c",
    campaign: 5,
    name: "Dream Delux Ramsäng, enkelsäng med bäddmadrass Sense Delux",
    description:
      "Med sin följsamma och omfamnande känsla blir Dream en självklar favorit i många år framöver. Det som skapar den mysiga känslan är en X-pocketresår i samarbete med en 5-zons pocketresår i den övre resårkärnan. Sängens övre pocketresår ger en helt individuell avlastning vilket minskar risken för tryck som gör att du vaknar och X-pocketresåren ger madrassen en extra ytmjuk känsla som bidrar till den omfamnande känslan. För en extra stabilitet i sängen har vi lagt till en kantförstärkning i övre resårkärnan. Den undre resårkärnan har en pocketresår som gör att du får ett extra djup i sängen och mycket god följsamhet. Sängen är svensktillverkad och finns i tre olika komforter, medium, fast eller extra fast. I priset ingår bäddmadrass Sense Delux och metallben.",
    productImage:
      "/images/products/be42c2c5-bc3c-4c14-a959-e100bdb9eeab_188.jpg",
    price: 10495,
    category: "sängar",
  },
  {
    id: "037d85db793501261f4178290adbc2c9",
    campaign: null,
    name: "Cato LED Bordslampa",
    description:
      "Bordlampa med LED-belysning och dimmer. Ljuskälla ingår. Cato LED ingår i en serie. Endast för inomhusbruk, kan ej användas i våtrum.",
    productImage: "/images/products/12337.jpg0",
    price: 1871.25,
    category: "lampor",
  },
  {
    id: "bbaa6432afd47706154788b7365917dd",
    campaign: null,
    name: "Cato LED Vägglampa",
    description:
      "Vägglampa med LED-belysning och dimmer. Finns i flera olika utföranden.  Ljuskälla ingår. Cato LED ingår i en serie. Endast för inomhusbruk, kan ej användas i våtrum.",
    productImage: "/images/products/12173.jpg",
    price: 1346.25,
    category: "lampor",
  },
  {
    id: "b726120b18327e7316762fd249b0734b",
    campaign: 7,
    name: "Cato LED Bordslampa",
    description:
      "Bordlampa med LED-belysning och dimmer. Ljuskälla ingår. Cato LED ingår i en serie. Endast för inomhusbruk, kan ej användas i våtrum.",
    productImage: "/images/products/12339.jpg",
    price: 2471.25,
    category: "lampor",
  },
  {
    id: "8f3830f5caf013726b6b500e99c19f72",
    campaign: 1,
    name: "Cato LED Golvlampa",
    description:
      "Tidlös golvlampa i metall med riktbar ljuskälla, anpassad för LED-lampa för lång brinntid.  Bra lampa för läsning. Ljuskälla LED 3x1 W ingår. Cato LED ingår i en serie. Endast för inomhusbruk, kan ej användas i våtrum.",
    productImage: "/images/products/11973.jpg",
    price: 2471.25,
    category: "lampor",
  },
  {
    id: "0f2b1c5dae6bc36a374ae5b8e2a8435f",
    campaign: null,
    name: "Cato LED Bordslampa",
    description:
      "Bordlampa med LED-belysning och dimmer. Ljuskälla ingår. Cato LED ingår i en serie. Endast för inomhusbruk, kan ej användas i våtrum.",
    productImage: "/images/products/12340.jpg",
    price: 1871.25,
    category: "lampor",
  },
  {
    id: "94b99b9dfd3992dfc73d0d73c3d9bc85",
    campaign: 1,
    name: "Timeout Fåtölj",
    description:
      "Timeout är en unik fåtölj som är skräddarsydd just för dig. Fåtöljen har ett höj och sänkbart nackstöd samt en ledad rygg som följer ryggens form när du lutar dig tillbaka. Detta ger en maximal avlastning och ergonomisk vila i alla lägen vilket ökar blodcirkulationen. Du sätter själv din prägel på fåtöljens uttryck genom att bestämma klädsel och underrede. Välj mellan 300 olika läder, tyger och färger. Med 10 års garanti på stomme, sits och rygg blir fåtöljen än mer unik. Du kan även komplettera din fåtölj med en matchande fotpall.",
    productImage: "/images/products/20820.jpg",
    price: 14246.25,
    category: "fåtöljer",
  },
  {
    id: "9690d4dbd2240797fd377571c0a50520",
    campaign: 6,
    name: "Timeout Fotpall",
    description:
      "Fotpallens vinkel passar fåtöljen Timeouts alla positioner, så att du får ett naturligt stöd oavsett längd. Du sätter själv din prägel på fåtöljen och fotpallens uttryck genom att bestämma klädsel och underrede. Välj mellan 300 olika läder, tyger och färger. Med 10 års garanti blir din Timeout än mer unik.",
    productImage: "/images/products/22501.jpg",
    price: 3896.25,
    category: "fåtöljer",
  },
  {
    id: "8679c515563e980e3ac95090d22d5e35",
    campaign: null,
    name: "Timeout Fåtölj",
    description:
      "Timeout är en unik fåtölj som är skräddarsydd just för dig. Fåtöljen har ett höj och sänkbart nackstöd samt en ledad rygg som följer ryggens form när du lutar dig tillbaka. Detta ger en maximal avlastning och ergonomisk vila i alla lägen vilket ökar blodcirkulationen. Du sätter själv din prägel på fåtöljens uttryck genom att bestämma klädsel och underrede. Välj mellan 300 olika läder, tyger och färger. Med 10 års garanti på stomme, sits och rygg blir fåtöljen än mer unik. Du kan även komplettera din fåtölj med en matchande fotpall.",
    productImage: "/images/products/20798.jpg",
    price: 14246.25,
    category: "fåtöljer",
  },
  {
    id: "49a6582a99ee43138842e1ac9157a02d",
    campaign: null,
    name: "Timeout Fotpall",
    description:
      "Fotpallens vinkel passar fåtöljen Timeouts alla positioner, så att du får ett naturligt stöd oavsett längd. Du sätter själv din prägel på fåtöljen och fotpallens uttryck genom att bestämma klädsel och underrede. Välj mellan 300 olika läder, tyger och färger. Med 10 års garanti blir din Timeout än mer unik.",
    productImage: "/images/products/22336.jpg",
    price: 3896.25,
    category: "fåtöljer",
  },
  {
    id: "1e3805ccac8861acbec699a37d88fbbf",
    campaign: null,
    name: "Life Fotpall",
    description:
      "Svensktillverkad fotpall som går att få i flera olika utföranden. Kompletteras till Life fåtölj.",
    productImage: "/images/products/92990.jpg00",
    price: 3483.75,
    category: "fåtöljer",
  },
  {
    id: "5b45d340b6fc264babbfcb95695db6ce",
    campaign: 4,
    name: "Madison Ryamatta",
    description:
      "Mjuk och lyxig matta i slitstark polyester som inte luddar. Trådarna i mattan varierar i nyans och lyster som ger mattan liv och ger rummet en trivsam och behaglig känsla. Fackmässig plantvätt.",
    productImage: null,
    price: 2395,
    category: "mattor",
  },
  {
    id: "9ebd8607632fdf24afa378e8383039e3",
    campaign: 1,
    name: "Madison Ryamatta",
    description:
      "Mjuk och lyxig matta i slitstark polyester som inte luddar. Trådarna i mattan varierar i nyans och lyster som ger mattan liv och ger rummet en trivsam och behaglig känsla. Fackmässig plantvätt.",
    productImage: "/images/products/192.jpg",
    price: 2395,
    category: "mattor",
  },
  {
    id: "e854da18c860b6a0154f79483fe2a649",
    campaign: null,
    name: "Timeout Fotpall",
    description:
      "Fotpallens vinkel passar fåtöljen Timeouts alla positioner, så att du får ett naturligt stöd oavsett längd. Du sätter själv din prägel på fåtöljen och fotpallens uttryck genom att bestämma klädsel och underrede. Välj mellan 300 olika läder, tyger och färger.",
    productImage: "/images/products/40603.jpg",
    price: 2696.25,
    category: "fåtöljer",
  },
  {
    campaign: null,
    name: "Timeout Fåtölj",
    description:
      "Timeout är en unik fåtölj som är skräddarsydd just för dig. Fåtöljen har ett höj och sänkbart nackstöd samt en ledad rygg som följer ryggens form när du lutar dig tillbaka. Detta ger en maximal avlastning och ergonomisk vila i alla lägen vilket ökar blodcirkulationen. Du sätter själv din prägel på fåtöljens uttryck genom att bestämma klädsel och underrede. Välj mellan 300 olika läder, tyger och färger. Med 10 års garanti på stomme, sits och rygg blir fåtöljen än mer unik. Du kan även komplettera din fåtölj med en matchande fotpall.",
    productImage: "/images/products/40602.jpg",
    price: 9746.25,
    category: "fåtöljer",
  },
  {
    id: "867ef06c513aad80ac41a4359d26c483",
    campaign: null,
    name: "Timeout Recliner",
    description:
      "Timeout är en unik recliner som är skräddarsydd just för dig. Reclinerfåtöljen har ett höj och sänkbart nackstöd samt en ledad rygg som följer ryggens form när du lutar dig tillbaka. Detta ger en maximal avlastning och ergonomisk vila i alla lägen vilket ökar blodcirkulationen. Du sätter själv din prägel på fåtöljens uttryck genom att bestämma klädsel och underrede. Välj mellan 300 olika läder, tyger och färger. Med 10 års garanti på stomme, sits och rygg blir din recliner än mer unik. Timeout finns även som fåtölj och fotpall.",
    productImage: "/images/products/20836.jpg",
    price: 14621.25,
    category: "fåtöljer",
  },
  {
    id: "599315ef1df72b990eb342daff35ea38",
    campaign: 1,
    name: "Cord Matgrupp med 4 stolar Leon",
    description:
      "Cord matbord är i lackerat ekfaner med dekorativa ribbor. Leon är en klädd stol med lätt vadderad dyna och ben i lackerad metall.",
    productImage: "/images/products/118413.jpg",
    price: 13495,
    category: "kampanj",
  },
  {
    id: "6cc4470b2f62c27c530cdf5e264c3e6b",
    campaign: null,
    name: "Wilma Matgrupp med 6 stolar",
    description:
      "Wilma matbord är ett riktigt genuint svenskt hantverk där materialen noga väljs ut av erfarna snickare, anpassas och sätts ihop för hand. Matbordet är tillverkat i björk och mdf som sedan handmålas i vit lasyr med pensel för att få den djupa och levande känslan av genuint hantverk. Bordsskivan finns i flera utföranden och är kan förlängas med 2 st tilläggsskivor, à 50 cm.",
    productImage: "/images/products/122785.jpg0",
    price: 29995,
    category: "bord",
  },
  {
    id: "c8b51920a3cd3d307f4670597e6ae86a",
    campaign: null,
    name: "Energy Sittbänk",
    description:
      "Sittbänk med stoppad pikerad topp, som blir en fin detalj till sängen och erbjuder praktisk förvaring i sovrummet. Perfekt för att förvara ett extra täcke och kudde eller annat som du behöver stoppa undan. Bänken kommer i tyg Noa eller sammetstyg Macy. I priset ingår 112 cm ben.",
    productImage:
      "/images/products/6ce072_258571_a025b7_76f7b4_faef9d_74fd29_cf7132_db3f64_204a46_06b.jpg",
    price: 6495,
    category: "bänkar",
  },
  {
    id: "6f21a9aef4e3a4f76b70dd481f697d7b",
    campaign: null,
    name: "Wilma Matgrupp med 6 stolar",
    description:
      "Wilma matbord är ett riktigt genuint svenskt hantverk där materialen noga väljs ut av erfarna snickare, anpassas och sätts ihop för hand. Matbordet är tillverkat i björk och mdf som sedan handmålas i vit lasyr med pensel för att få den djupa och levande känslan av genuint hantverk. Bordsskivan finns i flera utföranden och är kan förlängas med 2 st tilläggsskivor, à 50 cm.",
    productImage: "/images/products/50009.jpg",
    price: 35795,
    category: "bord",
  },
  {
    id: "ea7e30d00d217412b96bd98ad82bdeb0",
    campaign: null,
    name: "Energy Kontinentalsäng, dubbelsäng med bäddmadrass Energy",
    description:
      "Sov gott och vakna upp utvilad i Energy. Den svensktillverkade sängserien består av noga utvalda komponenter som bidrar till den höga komforten. Fjädrarna i Energy är konvexa och optimalt förspända som innebär att ett maximalt stöd uppnås. Pocketkärnan är uppdelad i 3 zoner som är utformade för att ge individuell fjädring för mycket god tryckavlastning och följsamhet. Sängens undre kärna är uppbyggd med en fast pocketkärna, 13 cm hög. En 8 cm hög träram finns längst ner på sängen för en stadig bas. På toppen ligger bäddmadrassen som är stoppad med soft skum. Välj mellan komforten medium, fast eller extra fast och finns i sammets- eller möbeltygsklädsel. Madrassen i mitten består av två kassetter som läggs i ett tygfodral.",
    productImage:
      "/images/products/6ce072_e1526e_a025b7_50c9db_faef9d_d3e1e1_cf7132_db3f64_4a1e02_2a9.jpg",
    price: 28995,
    category: "sängar",
  },
  {
    id: "53bf0928868f432548d799e8d50b5f32",
    campaign: 1,
    name: "Lucas Matgrupp med 4 stolar Einar",
    description:
      "Lucas är ett matbord i tåligt laminat med underrede i lackerat trä. Laminat står sig bättre emot repor och vätskor jämfört med en lackad yta. Einar är en traditionell pinnstol i massivt trä med en lackerad yta.",
    productImage: "/images/products/105849.jpg",
    price: 6795,
    category: "kampanj",
  },
  {
    id: "4863c8d0ec81f127e66fdd81be801fa5",
    campaign: null,
    name: "Sharp Matbord, Ø 110 cm",
    description:
      "Sharp är ett bord i laminat som är extra tålig och mer beständig mot repor och vätskor. Benen är i lackerad metall.",
    productImage: "/images/products/103023.jpg",
    price: 3095,
    category: "bord",
  },
  {
    id: "8924020d1aab6ebb250694c37c7b23cd",
    campaign: null,
    name: "Wilma Matgrupp med 6 stolar",
    description:
      "Wilma matbord är ett riktigt genuint svenskt hantverk där materialen noga väljs ut av erfarna snickare, anpassas och sätts ihop för hand. Matbordet är tillverkat i björk och mdf som sedan handmålas i vit lasyr med pensel för att få den djupa och levande känslan av genuint hantverk. Bordsskivan finns i flera utföranden och är kan förlängas med 2 st tilläggsskivor, à 50 cm.",
    productImage: "/images/products0/50307.jpg",
    price: 35795,
    category: "kampanj",
  },
  {
    id: "f8d21ad9c5ce49f14250ffb7431c6e7e",
    campaign: 1,
    name: "Grapes Taklampa",
    description:
      "En karaktäristisk takpendel som med sina skira glaskupor ger ett mjukt men ändå vågat uttryck. Men Grapes är inte bara attityd, när ljuset silas genom de tonade glaset bildas ett mjukt och stämningsfullt ljus i rummet. Köp gärna till någon av våra passande ljuskällor.",
    productImage: "/images/products/42763.jpg",
    price: 2246.25,
    category: "lampor",
  },
  {
    id: "f19809d3ee434fb4e0d91a3c4afc6a91",
    campaign: null,
    name: "Grimsby Ullmatta",
    description:
      "Stilren handvävd ullmatta med läderkant. Ullen gör mattan naturligt smutsavvisande och slitstark. Då mattan är handvävd samt att läderkanten är påsydd för hand, är varje matta unik. Skarvar kan även förekomma på läderkanten. Grimsby är en lättmatchad och snygg matta som också är vändbar vilket ger den en lång livslängd. Köp gärna till vårt mattunderlägg. Kemtvätt.",
    productImage: "/images/products/69941.jpg",
    price: 1046.25,
    category: "mattor",
  },
  {
    id: "9b5b8c5195d925f3a18b278721f7754e",
    campaign: null,
    name: "Isak Lammskinn",
    description:
      "Mjuk och härlig lammskinnsfäll som blir en dekorativ detalj i soffan eller hängandes över en stolsrygg. Använd en lätt fuktad tvättsvamp eller klädvårdsrulle över ytan för att samla ihop eventuellt damm och smuts. ",
    productImage: "/images/products/56449.jpg",
    price: 349,
    category: "filtar",
  },
  {
    id: "01f9fda4c2db79d5f4348708775af1aa",
    campaign: null,
    name: "Ulrika Stolsdyna, Ø 34 cm",
    description:
      "Ullrika är en len och värmande fårskinnsdyna. Använd en lätt fuktad tvättsvamp eller klädvårdsrulle över ytan för att samla ihop eventuellt damm och smuts.",
    productImage: "/images/products/94429.jpg",
    price: 99,
    category: "stolar-tillbehör",
  },
  {
    id: "47ecf682e15e5cd7d5c6fcc65bb91ca8",
    campaign: null,
    name: "Ritz Badlakan, 90x150 cm",
    description:
      "Ritz är en serie badtextil med exklusiv hotellkänsla, tillverkad med ett så kallat Air rich-framtagande. Air rich innebär att handduken är vävd i 100% bomull tillsammans med vattenlösliga fibrer. I slutprocessen sköljs de överflödiga fibrerna bort vilket ger en luftig och mycket mjuk handduk, tvätt efter tvätt. Dessutom är handdukarna Oeko-Tex certifierade och är därmed extra snälla mot din hud och miljön. Ritz tvättas enkelt i 60°C maskintvätt.",
    productImage: "/images/products/85822.jpg",
    price: 499,
    category: "handdukar",
  },
  {
    id: "43f12fd3f3eb9cfdad515bd3bf994353",
    campaign: null,
    name: "Ritz Badrock, L/XL",
    description:
      "Mjuk badrock i bomullsvelour. Ritz har stort slag vid ärmslut, vida ärmar och två fickor fram. Badrocken stängs med knytband i midjan.\r\nLängd: 130 cm,\r\nArmlängd: 54 cm,\r\nBredd över axlar: 61 cm,\r\nBredd över bröstet: 63,5 cm,\r\nLängd knytband: 203 cm",
    productImage: "/images/products/138182.jpg",
    price: 999,
    category: "övrigt",
  },
  {
    id: "fe57acaed764fd0ac800e88fed49db84",
    campaign: null,
    name: "Trysil Tofflor, fårskinn kastanj/vit, 1 par",
    description:
      "Fårskinnstofflor som går att använda året om då de är gjorda i ett naturligt material. Ullen har bland annat temperaturreglerande egenskaper som gör att de håller dina fötter svala under varma dagar och skänker värme när det är kallt. Är du en person som har besvär med kalla fötter så är detta ett bra alternativ, som dessutom är fina att titta på. Tofflorna finns i storlek 42-43 och 44-45.",
    productImage: "/images/product00s/144495.jpg",
    price: 399,
    category: "övrigt",
  },
  {
    id: "56e938fc445eff8d55d3dd5176bde034",
    campaign: 1,
    name: "Sannäs Fibertäcke, 230x220 cm, svalt",
    description:
      "Sannäs är ett härligt täcke med fyllning av microfiber och hålfiber, yttertyg i 100% bomullscambric. Hålfibern innehåller luft som i sin tur är en bra isolering och transporterar effektivt bort fukt från kroppen som bidrar till bättre sovklimat och komfort. För din och miljöns skull är Sannäs OEKO-TEX®-certifierad produkt Tvättas i 60°C och torktumlas på låg värme.",
    productImage: "/images/products/47062.jpg",
    price: 899,
    category: "sängar-tillbehör",
  },
  {
    id: "3a41f4bafd43de81c2d660e9a051d9f5",
    campaign: null,
    name: "Meja Pläd, 130x170 cm",
    description:
      "Meja är en pläd i mjuk och skön pälsimitation. Pläden är tillverkad i 100% polyester, OEKO-TEX®-certifierad produkt och kan tvättas i 30°C skontvätt.",
    productImage: "/images/products/129580.jpg",
    price: 599,
    category: "filtar",
  },
  {
    id: "3843bd23070427ae4742b92a1a775993",
    campaign: null,
    name: "EngmoDun Cecilia Duntäcke, 150x210 cm, varmt",
    description:
      "Din kropp alstrar sin egen värme. Så om du svettas eller fryser beror både på vem just du är och på temperaturen i rummet, Cecilia från EngmoDun finns i flera varianter beroende på hur svalt eller varmt du vill ha ditt täcke. Naturmaterial andas och håller kvar lagom mycket värme, men släpper igenom överskottet.\r\n\r\nCecilia kuddar och täcken är fyllt med naturligt, nästan viktlöst finaste mysk anddun för att ge den optimala sovkomforten.",
    productImage: "/images/products/109470.jpg",
    price: 2795,
    category: "sängar-tillbehör",
  },
  {
    id: "9a0a26b656856e201adfe8c6af32663e",
    campaign: null,
    name: "Carolina Gynning Rödvinsglas, 75 cl",
    description:
      "Färgstarka motiv med en personlig karaktär är det som kännetecknar konstnären Carolina Gynnings verk. Varje motiv förmedlar ett eget budskap med inspiration från livets pågående skeenden. Vinglaset finns med flera motiv som är fina att duka med tillsammans.",
    productImage: "/images/products/42860.jpg",
    price: 269,
    category: "inredning",
  },
  {
    campaign: null,
    name: "Daga Glas, 4-pack, 25,5 cl",
    description:
      "Daga är ett dricksglas inspirerad av vardagen där funktionalitet och enkelhet möts. Vattenglaset i randigt klarglas blir snabbt en favorit med sin behändiga storlek och stilrena design. Glasen är dessutom stapelbara och tar därför inte mycket plats när de inte används.",
    productImage: "/images/products/70063.jpg",
    price: 159,
    category: "inredning",
  },
  {
    id: "0eeaaef8b2c57b6b431c4a8fcc74ada8",
    campaign: null,
    name: "Vilgot Matbord, L 200 cm",
    description:
      "Vilgot är en möbelserie i retroinspirerad skandinavisk stil. Detaljerna med lätt utställda ben och raka former är det som sätter prägeln för serien. Matbordet är förberett för att kompletteras med två tilläggsskivor à 45 cm. Tilläggsskiva säljs separat.",
    productImage: "/images/products/118907.jpg",
    price: 7995,
    category: "bord",
  },
  {
    id: "a8e90f57a7f2a1b2684a44f0822ca7c1",
    campaign: null,
    name: "Höie Dreamnight Fiberkudde, 50x60 cm, mellan",
    description:
      "Exklusiv sovkudde med spänstig bollfiber som gör att kudden håller sin form under natten och ger ett effektivt stöd under sömnen. Kudden är omsluten av yttertyg i 100% bomullscambric.",
    productImage: "/images/products/135197.jpg",
    price: 174,
    category: "sängar-tillbehör",
  },
  {
    id: "5aa2cf9e5705ac19654eebc690ba5993",
    campaign: null,
    name: "Tempur Cloud Funktionskudde, 50x60 cm, mjuk",
    description:
      "Denna klassiska kudde är tillverkad i ett speciellt utvecklat Tempur extra soft-material för att erbjuda en fin balans mellan mjukhet och stöd. Den är perfekt för dig som vill ha det stöd som Tempur erbjuder, med en mjukare kramgo känsla. Formad som en traditionell kudde, passar den de flesta sovställningar. Fodralet kan maskintvättas i 40°C.",
    productImage: "/images/products/6290.jpg",
    price: 2195,
    category: "sängar-tillbehör",
  },
  {
    id: "0fbcd398b0ce0bd748fa5a25737187ae",
    campaign: null,
    name: "Särö välvd Sänggavel, B 160-210 cm",
    description:
      "Särö är en klädd sänggavel i välvd modell som blir ett fint komplement till din Särö säng. Den är klädd i ett slitstarkt tyg med möbelkänsla som ger en ombonad känsla i sovrummet. Sänggaveln är mjuk och skön att luta sig mot när du vill sitta i sängen och läsa eller se på TV. Till sänggaveln ingår ben, höjd 12 cm. Totalhöjd på gavel med ben är 149 cm.",
    productImage: "/images/products/130205.jpg",
    price: 8995,
    category: "sängar-tillbehör",
  },
  {
    id: "7753aebf244728d95c51b86f851ef2d0",
    campaign: 1,
    name: "Särö pikerad L Sänggavel, B 90-120 cm",
    description:
      "Särö är en klädd sänggavel i pikerad modell som blir ett fint komplement till din Särö säng. Den är klädd i ett slitstarkt tyg med möbelkänsla som ger en ombonad känsla i sovrummet. Sänggaveln är mjuk och skön att luta sig mot när du vill sitta i sängen och läsa eller se på TV. Till sänggaveln ingår ben, höjd 12 cm. Totalhöjd på gavel med ben är 137cm.",
    productImage: "/images/products/130100.jpg",
    price: 7995,
    category: "sängar-tillbehör",
  },
  {
    id: "cdb735d68b38b27c17a9323cab163c68",
    campaign: 2,
    name: "Luca Hatthylla, B 70 cm",
    description:
      "Luca är en hatthylla i lackerad metall med utmärkande detaljer och tre praktiska krokar. Kombinera gärna med andra delar i serien för att få till en enhetlig klädförvaring.",
    productImage: "/images/products/69359.jpg",
    price: 899,
    category: "hyllor",
  },
  {
    id: "bd504d66fdfdba17830d82bf1d7ce75a",
    campaign: null,
    name: "Magaluf Utebord, Ø 150 cm",
    description:
      "Magaluf är ett stilsäkert runt matbord i konstrotting av god kvalitet. Bordet har en stomme i aluminium och konstrotting och en skiva i konstträ. Bordet är både underhållsfritt och tåligt. Alla våra flätade utemöbler är handgjorda och gör varje möbel unik i utseende och färg. Ta hand om dina möbler så håller de längre, se dokument för skötselråd för produkten.",
    productImage: "/images/products/68194.jpg",
    price: 6995,
    category: "bord",
  },
];

const campaign = [
  {
    id: 1,
    name: "Rea!",
    discountPercent: 10,
  },
  {
    id: 2,
    name: "Rea!",
    discountPercent: 15,
  },
  {
    id: 3,
    name: "Rea!",
    discountPercent: 20,
  },
  {
    id: 4,
    name: "Rea!",
    discountPercent: 25,
  },
  {
    id: 5,
    name: "Rea!",
    discountPercent: 30,
  },
  {
    id: 6,
    name: "Rea!",
    discountPercent: 35,
  },
  {
    id: 7,
    name: "Outlet",
    discountPercent: 50,
  },
];

module.exports = {
  products,
  campaign,
};
