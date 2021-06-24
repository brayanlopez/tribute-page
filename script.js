function poner(time, data) {
  let lista = document.createElement("ul");
  console.log(lista);
  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = "<strong>" + data[i].año + "</strong> - " + data[i].suceso;
    console.log(data[i]);
    lista.appendChild(li);
  }
  console.log("final list: " + lista);
  console.log(lista);
  return lista;
}

let timelineData = {
  fechas: [{
    año: 1914,
    suceso: "Born in Cresco, Iowa"
  },
  {
    año: 1933,
    suceso: `Leaves his family's farm to attend the University of Minnesota, thanks to a Depression era program known as the "National Youth Administration"`
  },
  {
    año: 1914,
    suceso: "Born in Cresco, Iowa"
  },
  {
    año: 1933,
    suceso: `Leaves his family's farm to attend the University of Minnesota, thanks to a Depression era program known as the "National Youth Administration"`
  },
  {
    año: 1935,
    suceso: `Has to stop school and save up more money. Works in the Civilian Conservation Corps, helping starving Americans. "I saw how food changed them", he said. "All of this left scars on me."`
  },
  {
    año: 1937,
    suceso: "Finishes university and takes a job in the US Forestry Service"
  },
  {
    año: 1938,
    suceso: "Marries wife of 69 years Margret Gibson. Gets laid off due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school study under Stakman, who teaches him about breeding pest-resistent plants."
  },
  {
    año: 1941,
    suceso: "Tries to enroll in the military after the Pearl Harbor attack, but is rejected. Instead, the military asked his lab to work on waterproof glue, DDT to control malaria, disinfectants, and other applied science."
  },
  {
    año: 1942,
    suceso: "Receives a Ph.D. in Genetics and Plant Pathology"
  },
  { año: 1944, suceso: "Rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico to head a new plant pathology program. Over the next 16 years, his team breeds 6,000 different strains of disease resistent wheat - including different varieties for each major climate on Earth." },
  { año: 1945, suceso: "Discovers a way to grown wheat twice each season, doubling wheat yields" },
  { año: 1953, suceso: "crosses a short, sturdy dwarf breed of wheat with a high-yeidling American breed, creating a strain that responds well to fertilizer. It goes on to provide 95% of Mexico's wheat." },
  { año: 1962, suceso: "Visits Delhi and brings his high-yielding strains of wheat to the Indian subcontinent in time to help mitigate mass starvation due to a rapidly expanding population" },
  { año: 1970, suceso: "receives the Nobel Peace Prize" },
  { año: 1983, suceso: "helps seven African countries dramatically increase their maize and sorghum yields" },

  { año: 1984, suceso: "becomes a distinguished professor at Texas A&M University" },
  { año: 2005, suceso: `states "we will have to double the world food supply by 2050." Argues that genetically modified crops are the only way we can meet the demand, as we run out of arable land. Says that GM crops are not inherently dangerous because "we've been genetically modifying plants and animals for a long time. Long before we called it science, people were selecting the best breeds."` },
  { año: 2009, suceso: "dies at the age of 95" }
  ],
}

let timeline = document.getElementById("tribute-info");
let list = poner(timeline, timelineData.fechas);
console.log(list);
timeline.appendChild(list);