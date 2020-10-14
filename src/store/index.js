import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    components: {
       menu: {
          currentMenu : {id: "home" , name: "HOME"},
          menus: [ 
            {id: "home" , name: "HOME"},
            {id: "fordelar" , name:"FÖRDELAR"},
            {id: "referenser" ,name:"REFERENSER"},
            {id: "priser" ,name:"PRISER"},
            {id: "kontaktaoss" , name:"KONTAKTA-OSS"},
          ]
        },
    },
    views :{
      home : {
        elements : [
        {id :"0" , content :"DIGITALISERA DIN VERKSAMHET"},
        {id :"1", content :"Skapa Framtiden 拥抱未来 Geleceği bekleme احضن المستقبل"},
        {id :"2", content : "TRACE | CHANGE | LEAD"}
        ], 
        images : [{logo : require ('@/assets/logo1.png')}]
      },
      fordelar : {
        elements : [ 
          {id: "0 ", content: "Vi laverar komplett ESL (Elektroniskt Supermarket Labels) som är ett system som används på butiker för att visa produktpriser och andra information till kunder. Systemet uppdateras automatiskt när priset ändras eller rabatt appliceras. Våra kunder är alla typer av butiker som vill uppgradera/digitalisera deras affärer, spara tid och kostnader och skapa en ren  och modern inredning. Våra kunder får alltid support och uppdateringar samt utbildning under hela resan."},
          {id :"1" , imgsrc :require ('@/assets/fordelar.png')},
          {id :"2", children :[{title:"EFFEKTIVT" , content:"Vi kan hantera upp till 14000 etiketter samtidigt. Det motsvarar 700 timmar (3 min/etikett). Genom en digitalt system kan vi göra detta under några sekunder!"},
                                        {title: "STABILT", content:"Systemet har 5 år batteritid! Det behövs ingen el eller annan typ av energi. En gång setup och du behöver inte göra något i 5 år."},
                                        {title: "SLEKETIVT", content:"Till skillnad från andra trådlösa system, ESL system använder speciella frekvenser som är fri från externa störning."},
                                        {title :"TRÅDLÖS", content:"Det är enkelt och smidigt att installera systemet. Det behövs ingen sladd eller annat! Plug & Play helt enkelt!"}]},
          ],
        images : []
      },
      referenser : {
        elements : [], 
        images : 
          { imgSection1 : [
              {id: '0' ,imgsrc : require ('@/assets/referenser/referenserSectionImg1.jpg')},
              {id: '1' ,imgsrc: require ('@/assets/referenser/referenserSectionImg2.jpg')},
            ],
            imgSection2 : [
              {id: '0' ,imgsrc : require ('@/assets/referenser/referenserSectionImg3.jpg')},
              {id: '1' ,imgsrc: require ('@/assets/referenser/referenserSectionImg4.jpg')},
              {id: '2' ,imgsrc : require ('@/assets/referenser/referenserSectionImg5.jpg')},
            ],
            imgBrands :   [
              {id: '0' ,imgsrc : require ('@/assets/referenser/brands/brand1.png')},
              {id: '1' ,imgsrc: require ('@/assets/referenser/brands/brand2.png')},
              {id: '2' ,imgsrc : require ('@/assets/referenser/brands/brand3.png')},
              {id: '3' ,imgsrc: require ('@/assets/referenser/brands/brand4.png')},
              {id: '4' ,imgsrc : require ('@/assets/referenser/brands/brand5.png')},
            ],
          }
      },
      priser : {
        elements : [
          {id :"0", children: [ 
                                {id : "0", title : "Välj en plan som passar dig!" },
                                {id : "1", title : "Affärsplaner" },
                              ]
          },
          {id :"1", children: [ 
                                {id : "0",
                                 content: 
                                      {title : "STARTER" ,
                                      description : "Detta är ett paket om du är osäker och inte vet vad ESL. Här börjar vi lite små för att komma igång och se att systemet verkligen funkar!" ,
                                      price : {qty:"fr. 12.000:-(50-1000 st.) " ,info : "" },
                                      buttons : {option1 : "Mer info",option2 : "Köp"} },
                                             
                                },
                                {id : "1",
                                  content: 
                                      {title : "BUSINESS" ,
                                      description : "Detta är ett paket för dig som har förstått vad ESL kan göra och vill komma igång och digitalisera din verksamhet!  " ,
                                      price : {qty:"fr. 90.000:- (1k-10kst.) " ,info : {text0:"-Fri installation" , text1:"-IT system ingår" }},

                                      buttons : {option1 : "Mer info",option2 : "Köp"} },
                                            
                                },
                                {id : "2",
                                  content: 
                                      {title : "ENTERPRISE" ,
                                      description : "Om du har flera butiker och vill digitalisera allt, kommer vi köra några möte för att kunna planera en fantastiskt transformationsresa.",
                                      price : {qty:"", info: {text0:"-Fri konsult", text1:"-Fri support",text2:"-Fri installation ",text3:"-IT system ingår"} },
                                      buttons : {option1 : "Mer info",option2 : "Kontakta oss!"} },
                                            
                                },
                              ]
          },
        ], 
        images : []}, 
      kontaktaoss : {
        elements : [], 
        images : [{img : require ('@/assets/kontaktaoss.png')}]},
    }
  },
  mutations: {
    changeCurrentMenu (state, payload) {
      state.components.menu.currentMenu = payload.newCurrentMenu
    }
  },
  actions: {},
  modules: {}
});
