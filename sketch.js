//variables
var getAmountPiggy;
var userType;
var contribute = [];
itemsBought = [];
var childId = [];  
var getchildId;
var parentLogin,childLogin,age,agedec,submit,name,pin,piggyBank,chat,piggyBankStatus,parentaddMoney,addAmount,add1,returnToPiggybank;
var addContributer,contributedPeople,payMoney,payAmount,pay1,backToPiggy,backtoHome,commentsAdd,forPay,itemsBought,getItemsBought;
var history1,depositHistory,withdrawalHistory,register,childName,childPin,childSubmit,lolpin,lolPin,akhilpin,loginKid,parentaddMoney;
var parentadd1,parentaddAmount,parentpayMoney,parentpay1,parentpayAmount,addname,ptext,childname1,parentSubmit,parentLoginKid1,addAChild;
var addAChildPin,addAChildName,addAChildSubmit,parentLoginKid2,currentChild,parentLoginRemove,parentLoginAdd,parentPiggyBank,parentbackToHome;
var signOut,parentbackToPiggy,signoutcheck,parentBackToSelect,currentTransaction,country,parenthistory1;
var formchild = null;
var pin;
var userType = null;
var lastname;
var loginFirst;
var showAmountkids
var showTitle = true;
var loginPin;
var sname;
var abc = null;
var inChildApp = false;
var database;
//create all buttons
function setup() {
  createCanvas(640, 1136);
  parentLoginKid2 = createButton("")
          parentLoginKid2.style("width","540px");
          parentLoginKid2.style("height","200px");
          parentLoginKid2.style('background', '#00adb5');  
          parentLoginKid2.hide();
          parentLoginKid2.style("color","white")
          parentLoginKid2.position(50,300);
          parentLoginKid2.style("font-size","40px");
        
  database = firebase.database();
  parentSubmit = createButton("Submit");
  addAChild = createButton("Add a child")
      addAChild.style("width","540px");
      addAChild.style("height","200px");
      addAChild.style('background', '#00adb5');  
      addAChild.show();
      addAChild.style("color","white")
      addAChild.position(50,300);
      addAChild.style("font-size","40px");
      addAChild.hide();
      addAChildSubmit = createButton("Submit")
      addAChildSubmit.style("width","540px");
      addAChildSubmit.style("height","100px");
      addAChildSubmit.style('background', '#00adb5');  
      addAChildSubmit.show();
      addAChildSubmit.style("color","white")
      addAChildSubmit.position(50,1000);
      addAChildSubmit.style("font-size","40px");
      addAChildSubmit.hide();
  
  parentaddMoney = createButton("Add Money");
  parentaddMoney.position(50,250);
  parentaddMoney.style("font-size","40px");

  parentaddMoney.style("width","540px");
  parentaddMoney.style("height","200px");
  parentaddMoney.style('background', '#00adb5');  
  parentaddMoney.hide();
  parentaddMoney.style("color","white")
  
  parentadd1 = createButton("Add Money");
  parentadd1.position(50,850);
  parentadd1.style("font-size","40px");
  parentadd1.style("width","540px");
  parentadd1.style("height","100px");
  parentadd1.style('background', '#00adb5');
  parentadd1.hide();
  parentadd1.style("color","white")
  
  
  parentaddAmount = createSlider(1,1000);
  parentaddAmount.position(50,150);
  parentaddAmount.style("font-size","40px");
  parentaddAmount.style("width","540px");
  parentaddAmount.style("height","100px");
  parentaddAmount.style('background', '#00adb5');
  parentaddAmount.hide();
  parentaddAmount.style("color","white")
  
  
  parentpayMoney = createButton("Remove Money");
  parentpayMoney.position(50,500);
  parentpayMoney.style("font-size","40px");
  parentpayMoney.style("width","540px");
  parentpayMoney.style("height","200px");
  parentpayMoney.style('background', '#00adb5');
  parentpayMoney.hide();
  parentpayMoney.style("color","white")
  
  parentpay1 = createButton("Remove Money");
  parentpay1.position(50,850);
  parentpay1.style("font-size","40px");
  parentpay1.style("width","540px");
  parentpay1.style("height","100px");
  parentpay1.style('background', '#00adb5');
  parentpay1.hide();
  parentpay1.style("color","white")
  
  
  parentpayAmount = createSlider(1,1000);
  parentpayAmount.position(50,150);
  parentpayAmount.style("font-size","40px");
  parentpayAmount.style("width","540px");
  parentpayAmount.style("height","100px");
  parentpayAmount.style('background', '#00adb5');
  parentpayAmount.hide();
  parentpayAmount.style("color","white")
  
  var jceed = database.ref("LOL/Pin");
  parentLogin = createButton("Kids Login");
  parentLogin.position(50,500);
  parentLogin.style("font-size","50px");
  parentLogin.style("color","white")
  parentLogin.style("width","540px");
  parentLogin.style("height","100px");
  parentLogin.style('background', '#00adb5');

  loginKid = createButton("Parent Login");
  loginKid.position(50,650);
  loginKid.style("font-size","50px");
  loginKid.style("color","white")
  loginKid.style("width","540px");
  loginKid.style("height","100px");
  loginKid.style('background', '#00adb5');
  
  childLogin = createButton("Parent Sign Up");
  
  childLogin.position(50,800);
  childLogin.style("color","white")
  
  childLogin.style("font-size","50px");
  childLogin.style("width","540px");
  childLogin.style("height","100px");
  childLogin.style('background', '#00adb5');

  loginName = createInput("");
  
  loginName.position(50,70);
  loginName.style("width","540px");
  loginName.style("height","100px");
  loginName.style("font-size","40px");
  loginName.style('background', '#00adb5');
  loginName.style("color","white")
  loginName.hide();
  loginPin = createInput("","number")
  loginPin.position(50,300);
  loginPin.style("width","540px");
  loginPin.style("height","100px");
  loginPin.style("font-size","40px");
  loginPin.style('background', '#00adb5');
  loginPin.style("color","white");
  loginPin.hide();
  loginSubmit = createButton("Login");
  loginSubmit.position(50,1000);
  loginSubmit.style("width","540px");
  loginSubmit.style("height","100px");
  loginSubmit.style("font-size","40px");
  loginSubmit.style('background', '#00adb5');
  loginSubmit.style("color","white")
  loginSubmit.hide();
  signOut = createButton("Sign out");
  signOut.position(50,1000);
  signOut.style("width","540px");
  signOut.style("height","100px");
  signOut.style("font-size","40px");
  signOut.style('background', '#00adb5');
  signOut.style("color","white")
  signOut.hide();
  
  depositHistory = createButton("Deposits");
  depositHistory.position(50,50);
  depositHistory.style("font-size","40px");
  depositHistory.style("width","540px");
  depositHistory.style("height","393px");
  depositHistory.style("color","white")
  depositHistory.style('background', '#00adb5');
  depositHistory.hide();
  
  withdrawalHistory = createButton("Withdrawals");
  withdrawalHistory.position(50,493);
  withdrawalHistory.style("font-size","40px");
  withdrawalHistory.style("width","540px");
  withdrawalHistory.style("height","393px");
  withdrawalHistory.style("color","white")
  
  withdrawalHistory.style('background', '#00adb5');
  withdrawalHistory.hide();
  lolpin = database.ref("LOL/Pin");
  lolpin.on("value",(data)=>{
    lolpin = data.val();
  });
  akhilpin = database.ref("Akhil/Pin");
  akhilpin.on("value",(data)=>{
    akhilpin = data.val();
  });


  
  pixelDensity(2);
  lastname = createInput("");
  sname = createInput("");
  pin = createInput("","number");
  submit = createButton("Submit");
  sname.position(50,80);
  sname.style("width","540px");
  sname.style("height","100px");
  sname.style("font-size","40px");
  sname.style('background', '#00adb5');
  sname.style("color","white")
  
  lastname.position(50,230);
  lastname.style("width","540px");
  lastname.style("height","50px");
  lastname.style("font-size","40px");
  lastname.style('background', '#00adb5');
  lastname.style("color","white")
  
  country = createSelect();
  country.position(50,530);
  country.style("width","550px");
  country.style("height","100px");
  country.style("font-size","40px");
  country.style('background', '#00adb5');
  country.style("color","white");
  country.option("USA");
  country.option("Puerto Rico");
country.hide();
  
  age = createInput("","date");
  age.position(50,390);
  age.style("width","540px");
  age.style("height","50px");
  age.style("font-size","40px");
  age.style('background', '#00adb5');
  age.style("color","white")
  
  parentPiggyBank = createButton("Piggy Bank");
  parentPiggyBank.position(50,100);
  parentPiggyBank.style("font-size","40px");
  parentPiggyBank.style("width","540px");
  parentPiggyBank.style("height","200px");  
  parentPiggyBank.style('background', '#00adb5');
  parentPiggyBank.style("color","white")
  
  parentPiggyBank.hide();
  
  
  pin.position(50,300);
  pin.style("width","540px");
  pin.style("height","100px");
  pin.style("font-size","40px");
  pin.style('background', '#00adb5');
  pin.style("color","white")
  
  
  submit.position(50,1000);
  submit.style("width","540px");
  submit.style("height","100px");
  submit.style("font-size","40px");
  submit.style('background', '#00adb5');
  submit.style("color","white")
  
  parentSubmit.position(50,1000);
  parentSubmit.style("width","540px");
  parentSubmit.style("height","100px");
  parentSubmit.style("font-size","40px");
  parentSubmit.style('background', '#00adb5');
  parentSubmit.style("color","white")
  
  sname.hide();
  lastname.hide();
  age.hide();
  pin.hide();
  submit.hide();
  parentSubmit.hide();

  //getChildId = getItem("childCredentials")
  piggyBank = createButton("Piggy Bank");
  piggyBank.position(50,100);
  piggyBank.style("font-size","40px");
  piggyBank.style("width","540px");
  piggyBank.style("height","150px");
  piggyBank.style('background', '#00adb5');
  piggyBank.style("color","white")
  
  piggyBank.hide();
  
  chat = createButton("Chat");
  chat.position(50,300);
  chat.style("font-size","40px");
  chat.style("width","540px");
  chat.style("height","150px");
  chat.style('background', '#00adb5');
  chat.style("color","white")
  
  chat.hide();

  addMoney = createButton("Add Money");
  addMoney.position(50,250);
  addMoney.style("font-size","40px");
  addMoney.style("width","540px");
  addMoney.style("height","200px");
  addMoney.style('background', '#00adb5');  
  addMoney.hide();
  addMoney.style("color","white")
  
  add1 = createButton("Add Money");
  add1.position(50,850);
  add1.style("font-size","40px");
  add1.style("width","540px");
  add1.style("height","100px");
  add1.style('background', '#00adb5');
  add1.hide();
  add1.style("color","white")
  
  
  addAmount = createSlider(1,1000);
  addAmount.position(50,150);
  addAmount.style("font-size","40px");
  addAmount.style("width","540px");
  addAmount.style("height","100px");
  addAmount.style('background', '#00adb5');
  addAmount.hide();
  addAmount.style("color","white")
  
  
  payMoney = createButton("Pay Money");
  payMoney.position(50,500);
  payMoney.style("font-size","40px");
  payMoney.style("width","540px");
  payMoney.style("height","200px");
  payMoney.style('background', '#00adb5');
  payMoney.hide();
  payMoney.style("color","white")
  
  pay1 = createButton("Pay Money");
  pay1.position(50,850);
  pay1.style("font-size","40px");
  pay1.style("width","540px");
  pay1.style("height","100px");
  pay1.style('background', '#00adb5');
  pay1.hide();
  pay1.style("color","white")
  
  
  payAmount = createSlider(1,1000);
  payAmount.position(50,150);
  payAmount.style("font-size","20px");
  payAmount.style("width","540px");
  payAmount.style("height","100px");
  payAmount.style('background', '#00adb5');
  payAmount.hide();
  payAmount.style("color","white")
  
  addcontributer = createInput("");
  addcontributer.position(50,310);
  addcontributer.style("font-size","40px");
  addcontributer.style("width","530px");
  addcontributer.style("height","100px");
  addcontributer.style('background', '#00adb5');
  addcontributer.hide();
  addcontributer.style("color","white")
  
  history1 = createButton("Last 5 transactions");
  history1.position(50,750);
  history1.style("font-size","40px");
  history1.style("width","540px");
  history1.style("height","200px");
  history1.style('background', '#00adb5');
  history1.hide();
  history1.style("color","white")
  
  parenthistory1 = createButton("Last 5 transactions");
  parenthistory1.position(50,750);
  parenthistory1.style("font-size","40px");
  parenthistory1.style("width","540px");
  parenthistory1.style("height","200px");
  parenthistory1.style('background', '#00adb5');
  parenthistory1.hide();
  parenthistory1.style("color","white")
    
  forPay = createInput("");
  forPay.position(50,310);
  forPay.style("font-size","40px");
  forPay.style("width","540px");
  forPay.style("height","100px");
  forPay.style('background', '#00adb5');
  forPay.hide();
  forPay.style("color","white");
  
  commentsAdd = createSelect();
  commentsAdd.position(50,500);
  commentsAdd.style("font-size","40px");
  commentsAdd.style("width","540px");
  commentsAdd.style("height","100px");
  commentsAdd.style('background', '#00adb5');
  commentsAdd.hide();
  commentsAdd.style("color","white");
  commentsAdd.option("Cash");
  commentsAdd.option("E-Gift Card");
  commentsAdd.option("Gift Card");
  commentsAdd.option("Chores");
  commentsAdd.option("Other");

  
  
  
    backToPiggy = createButton("Back");
  backToPiggy.position(50,1000);
  backToPiggy.style("font-size","40px");
  backToPiggy.style("width","540px");
  backToPiggy.style("height","100px");
  backToPiggy.style('background', '#00adb5');
  backToPiggy.hide();
  backToPiggy.style("color","white")
  
  backToHome = createButton("Back");
  backToHome.position(50,1000);
  backToHome.style("font-size","40px");
  backToHome.style("width","540px");
  backToHome.style("height","100px");
  backToHome.style('background', '#00adb5');
  backToHome.hide();
  backToHome.style("color","white")
  
  parentbackToPiggy = createButton("Back");
  parentbackToPiggy.position(50,1000);
  parentbackToPiggy.style("font-size","40px");
  parentbackToPiggy.style("width","540px");
  parentbackToPiggy.style("height","100px");
  parentbackToPiggy.style('background', '#00adb5');
  parentbackToPiggy.hide();
  parentbackToPiggy.style("color","white")
  
  parentbackToHome = createButton("Back");
  parentbackToHome.position(50,1000);
  parentbackToHome.style("font-size","40px");
  parentbackToHome.style("width","540px");
  parentbackToHome.style("height","100px");
  parentbackToHome.style('background', '#00adb5');
  parentbackToHome.hide();
  parentbackToHome.style("color","white");
  
  childName = createInput("");
  childName.position(50,300);
  childName.style("font-size","40px");
  childName.style("width","540px");
  childName.style("height","100px");
  childName.style('background', '#00adb5');
  childName.style("color","white")
  childName.hide();
  childPin = createInput("","number");
  childPin.position(50,500);
  childPin.style("font-size","40px");
  childPin.style("width","540px");
  childPin.style("height","100px");
  childPin.style('background', '#00adb5');
  childPin.style("color","white")
  childPin.hide();
  childSubmit = createButton("Submit");
  childSubmit.position(50,1000);
  childSubmit.style("font-size","40px");
  childSubmit.style("width","540px");
  childSubmit.style("height","100px");
  childSubmit.style('background', '#00adb5');
  childSubmit.hide();
  childSubmit.style("color","white")
  
  parentBackToSelect = createButton("Home");
  parentBackToSelect.position(50,1000);
  parentBackToSelect.style("font-size","40px");
  parentBackToSelect.style("width","540px");
  parentBackToSelect.style("height","100px");
  parentBackToSelect.style('background', '#00adb5');
  parentBackToSelect.hide();
  parentBackToSelect.style("color","white")
  
  
  contributedPeople = getItem("contributor");
  getItemsBought = getItem("items");
  if(contributedPeople === null){
    
  }else{
    
  contribute.push(contributedPeople);
}
  if(getItemsBought === null){
    
  }else{
  itemsBought.push(getItemsBought);
  }
  childname1 = database.ref(sname.value()+"/child1name");
  childname1.on("value",(data)=>{
    childname1 = data.val();
  });
  
  
  
}
function draw() {
  background("#222831");
  fill("white")
  textSize(40)
  //Logic for showing title
if(showTitle === true){
  push();
  textSize(80);
  text("E-Piggy Bank",50,300)
  pop();
}
//checking if balance is null then set it to 0
if(getAmountPiggy === undefined){
  getAmountPiggy = 0;
}
//sign out
signOut.mousePressed(()=>{
  location.reload();
})
//parent signup
  childLogin.mousePressed(() => {
       childLogin.hide();
       parentLogin.hide();
    userType = "child";
    childForm();
    formchild = true;
  abc = null;
  abc = null;
  loginKid.hide();
country.show();
  abc = null;
  abc = null;

  showTitle = false;

  
    
    
  });
  //parent login
  loginKid.mousePressed(()=>{
    sname.show();
    pin.show();
    parentSubmit.show();
    formchild = "parents"
    childLogin.hide();
    parentLogin.hide();
    loginKid.hide();
    showTitle = false

  })
  //check if a second child exists
  var checkIfChild2 = database.ref(sname.value()+"/child2name")
      checkIfChild2.on("value",(data)=>{
        checkIfChild2 = data.val();
      });
  //login submit for parents
  parentSubmit.mousePressed(()=>{
    if(pin.value() === checkp){   
      signOut.show();
      sname.hide();
      lastname.hide();
      var checkIfChild2 = database.ref(sname.value()+"/child2name")
      checkIfChild2.on("value",(data)=>{
        checkIfChild2 = data.val();
      })
      parentLoginKid2 = createButton(checkIfChild2)
      parentLoginKid2.style("width","540px");
      parentLoginKid2.style("height","200px");
      parentLoginKid2.style('background', '#00adb5');  
      parentLoginKid2.hide();
      parentLoginKid2.style("color","white")
      parentLoginKid2.position(50,300);
      parentLoginKid2.style("font-size","40px");
  
      if(checkIfChild2 === null){
        addAChild.show();
      }else{
        parentLoginKid2.show();
      }
      pin.hide();
      parentSubmit.hide();
      formchild = "selectChild";
      var kid1 = database.ref(sname.value()+"/child1name");
      kid1.on("value",(data)=>{
        kid1 = data.val();
      });
 
      parentLoginKid1 = createButton(kid1)
      parentLoginKid1.style("width","540px");
      parentLoginKid1.style("height","200px");
      parentLoginKid1.style('background', '#00adb5');  
      parentLoginKid1.show();
      parentLoginKid1.style("color","white")
      parentLoginKid1.position(50,50);
      parentLoginKid1.style("font-size","40px");
        
      
  }else{
    alert("Please check your username/password");
  }
    
  })
  //logic for displaying add a child when clicked
  addAChild.mousePressed(()=>{
      parentLoginKid1.hide();
      addAChild.hide();
    signOut.hide();

      addAChildName = createInput("")
      addAChildName.style("width","540px");
      addAChildName.style("height","100px");
      addAChildName.style('background', '#00adb5');  
      addAChildName.show();
      addAChildName.style("color","white")
      addAChildName.position(50,100);
      addAChildName.style("font-size","40px");
      addAChildPin = createInput("","number")
      addAChildPin.style("width","540px");
      addAChildPin.style("height","100px");
      addAChildPin.style('background', '#00adb5');  
      addAChildPin.show();
      addAChildPin.style("color","white")
      addAChildPin.position(50,300);
      addAChildPin.style("font-size","40px");
    formchild ="addChild"

  })
  //logic to show text while adding a child during signup
  if(formchild === "addChild"){
    textSize(40);
    text("Child's Name",50,80)
    text("Child's Pin",50,280)
    addAChildSubmit.show();
    
    
 
  }
  //logic for showing and hiding things during selecting a child
  if(formchild === "selectChild"){
    var checkIfChild2 = database.ref(sname.value()+"/child2name")
      checkIfChild2.on("value",(data)=>{
        checkIfChild2 = data.val();
      });
      signOut.show();
      signoutcheck = true;
    parentLoginKid1.mousePressed(()=>{
    parentBackToSelect.show();

      var kid1 = database.ref(sname.value()+"/child1name");
      kid1.on("value",(data)=>{
        kid1 = data.val();
      });
      parentPiggyBank.show();

      currentChild = kid1;
      parentLoginKid1.hide();
      addAChild.hide();
    parentBackToSelect.show();
    parentBackToSelect.show();
    parentLoginKid2.hide();
    
    })
    
     

  }
  //setting the current child as child 2 during login or adding a new child and setting it to him/her
  parentLoginKid2.mousePressed(()=>{
    parentLoginKid1.hide();
    parentLoginKid2.hide();
    parentPiggyBank.show();
    parentBackToSelect.show();
    parentBackToSelect.show();

    currentChild = checkIfChild2;
    
  });
  if(signoutcheck = false){
    childSubmit.mousePressed(()=>{
    signOut.show();

    })
    backToHome.mousePressed(()=>{
      

    })

  }else
  addAChildSubmit.mousePressed(()=>{
    database.ref(sname.value()).update({
          child2name:addAChildName.value(),
          child2pin:addAChildPin.value()
        })
        
        var abdd = "child"+addAChildName.value()
      database.ref(abdd).update({   
          Pin:addAChildPin.value(),
         Parent:sname.value(),
          money:0
      })
      parentLoginKid2 = createButton(checkIfChild2)
      parentLoginKid2.style("width","540px");
      parentLoginKid2.style("height","200px");
      parentLoginKid2.style('background', '#00adb5');  
      parentLoginKid2.hide();
      parentLoginKid2.style("color","white")
      parentLoginKid2.position(50,300);
      parentLoginKid2.style("font-size","40px");
  
      addAChildName.hide();
      addAChildPin.hide();
      
      addAChildSubmit.hide();
      parentLoginKid1.show()
      parentLoginKid2.show()
      parentLoginKid2.hide();
      parentLoginKid1.hide();
      parentLoginKid2.hide();
      parentPiggyBank.show();
      formchild = null;
      currentChild = checkIfChild2;
    parentBackToSelect.show();
      
  })
  parentLoginKid2.mousePressed(()=>{
    parentLoginKid2.hide();
    parentLoginKid1.hide();
    parentLoginKid2.hide();
    parentPiggyBank.show();
    parentBackToSelect.show();
    
    currentChild = checkIfChild2;
    formchild = null;
  });
//text for parent login
  if(formchild === "parents"){
    textSize(40)

    text('Parent User Name',50,60);
    pin.position(50,300)
    text('Parent Pin',50,280)
  }
  //text for sign up
  if(formchild === true){
    textSize(40)
    
  
  
    
    text('Parent User Name',50,60);
    pin.position(50,300)
lastname.hide();
    text('Parent Pin',50,280)
    text('Country',50,500)
    
    
    
    
  }
  //when submit is clicked it checks if the username exists and if anything was left empty
  var checku = database.ref(sname.value()+"/Pin");
    checku.on("value",(data)=>{
      checku = data.val();
    });

    submit.mousePressed(()=>{
    
    
    if(checku === null){
      if((sname.value() != null)||(lastname.value() != null)){
        sname.hide();
        lastname.hide();
        age.hide();
        country.hide();
        submit.hide();
        formchild = false;
        pin.hide();
        childId.push(sname.value(),lastname.value(),pin.value());
        register = true;
        uploadData();
        }else{
          alert("Please complete the form.")
        }
    }else{
      alert("User name already exists !!! , Please enter a new user name ");
    }
  })
  // logic for sowing and hiding things in child app
  if(inChildApp === true){
      textSize(40)
    if((childId[0]||childId[1])=== undefined){

    }else{
    text("Hello "+ childId[0]+""+childId[1]+" !!!",50,50);
    }
    piggyBank.show();
     
    addMoney.hide();
  history1.hide();
    addAmount.hide();
    commentsAdd.hide();
    add1.hide();  
    payMoney.hide();
    payAmount.hide();
    pay1.hide();  
    backToHome.hide();  
    addMoney.hide();
      payMoney.hide();
    pin.hide();
      
    }
    //adding first child during sign up
    if(register === true){
      textSize(40)
      text("Your child's User Name",50,280);
        childName.show();
        text("Your child's Pin",50,480)
        childPin.show();
        text("Welcome "+sname.value(),50,50,493,150);
        text("Please enter your child's details.",50,100,540,100)
      childSubmit.show();
    }
    var checkIfChild2 = database.ref(sname.value()+"/child2name")
      checkIfChild2.on("value",(data)=>{
        checkIfChild2 = data.val();
      });
    
    parentBackToSelect.mousePressed(()=>{
      parentBackToSelect.hide();
      parentPiggyBank.hide();
      if(checkIfChild2 === null){
        addAChild.show();
      }else{
        parentLoginKid2.show();
      }
      parentLoginKid1.show();
      signOut.show();

      
    })
    //child login
  parentLogin.mousePressed(() => {
            childLogin.hide();
            parentLogin.hide();
            loginName.show();``
            loginPin.show();
            loginSubmit.show();
            loginKid.hide();
            ptext = true;
  abc = null;
  showTitle = false

    userType = "parent"
    for(var x = 0;x<itemsBought.length;x = x+1){
      
  }
  });
  //check if username and pin is correct
  var check = database.ref("child"+loginName.value()+"/Pin");
      check.on("value",(data)=>{
        check = data.val();
      });
      var checkp = database.ref(sname.value()+"/Pin");
      checkp.on("value",(data)=>{
        checkp = data.val();
      });
  loginSubmit.mousePressed(()=>{
    signOut.show();
    parentbackToHome.hide()
    parentbackToPiggy.hide()
    parentBackToSelect.hide()
    parentaddMoney.hide()
    parentpayMoney.hide()
    parenthistory1.hide()
      if(loginPin.value() === check){   
        inChildApp = true;  
        loginPin.hide()
    loginName.hide()
    loginSubmit.hide()
    currentChild = loginName.value()
    
    }else{
      alert("Please check your username/password");
    }
    ptext = false
})
//opening child piggy bank
  piggyBank.mousePressed(() => {
    openPiggyBank();
    inChildApp = false;
    showAmountkids = true
    history1.show();
  })
  //show total value in piggy bank
  if(showAmountkids === true){
    textSize(50)

    text("Total Amount: "+"$"+getAmountPiggy,50,200)
    parentbackToHome.show();
  
  }
 // opening parent piggy bank
  parentPiggyBank.mousePressed(()=>{
    parentaddMoney.show();
    parentpayMoney.show();
    parentPiggyBank.hide();
    parentbackToHome.show();
    parenthistory1.show();
    showAmountkids = true
	parentBackToSelect.hide();
	signOut.hide();

  })
  // text for child login
  if(ptext === true){
    fill("white")
    textSize(40)

    text("Child's User Name",50,50);
    text("Child's Pin",50,280);

  }
  // if its a child login it will hide parent buttons
  if(userType === "parent"){
    parentbackToHome.hide()
    parentbackToPiggy.hide()
    parentBackToSelect.hide()
    
  }

  // logic for opening child add money
  addMoney.mousePressed(()=>{
    piggyBankStatus = "adding";
    backToPiggy.show();
    backToHome.hide();
    commentsAdd.show();
  history1.hide();
  
  startGetPiggy = true
  showAmountkids = false;
  
    
    
  })
  // logic for opening parent add money
  parentaddMoney.mousePressed(()=>{
    if(sname.value() === (null||undefined)){
      }else{
        var findParent = database.ref("child"+loginName.value()+"/Parent")
        findParent.on("value",(data)=>{
          findParent = data.val()
      
        })
        }
  parenthistory1.hide();
commentsAdd.show();
addcontributer.show();
    parentbackToHome.hide();

    piggyBankStatus = "padding"
    parentbackToPiggy.show();

    showAmountkids = false;

  })
  if(getAmountPiggy === (null||undefined)){
    getAmountPiggy = 0
  }
  
  parentpayMoney.mousePressed(()=>{
    piggyBankStatus = "premove";
    forPay.show()
    showAmountkids = false;
    parentbackToPiggy.show();
    parentbackToHome.hide();

  if(getAmountPiggy === (null||undefined)){
    getAmountPiggy = 0
  }
  parenthistory1.hide();
  
  })
  //text for parent removing money
  if(piggyBankStatus === "premove"){
    textSize(40)
  parentaddMoney.hide();
  parentpayMoney.hide();
  parentpayAmount.show();
  parentpay1.show();
  parentaddMoney.hide();
  parentpayMoney.hide();
  text("Total Balance : $"+getAmountPiggy,50,100)
  text("$"+parentpayAmount.value(),50,180)
  text("For:",50,290)
  
  }
  // text for parent adding money
  if(piggyBankStatus === "padding"){
    textSize(40)
  parentaddMoney.hide();
  parentpayMoney.hide();
  parentaddAmount.show();
  parentadd1.show();
  parentaddMoney.hide();
  parentpayMoney.hide();
  text("Total Balance : $"+getAmountPiggy,50,100)
  text("$"+parentaddAmount.value(),50,180)
  text("From:",50,290);
      text("Comments:",50,480)
      
  }
  // logic for opening child history
  history1.mousePressed(()=>{
    piggyBankStatus = "history";
    addMoney.hide();
    payMoney.hide();
    
    parentaddMoney.hide();
    parentpayMoney.hide();
	showAmountkids = false;
	backToPiggy.show()
  history1.hide();
  
    
    
  })
  // logic for opening parent history

  parenthistory1.mousePressed(()=>{
    piggyBankStatus = "phistory";
    addMoney.hide();
    payMoney.hide();
    
    parentaddMoney.hide();
    parentpayMoney.hide();
	showAmountkids = false;
	parentbackToPiggy.show()
  parenthistory1.hide();
  
    
    
  })
  //logic for opening child pay money
  payMoney.mousePressed(()=>{
    piggyBankStatus = "paying";
    backToPiggy.show();
    backToHome.hide();
    addMoney.hide();
  showAmountkids = false;

  history1.hide();
  
    
  })
  // get amount in piggy bank
  textSize(40);
  getPiggyAmount()
  // text for adding child money
    if(piggyBankStatus === "adding"){
      addAmount.show();
      add1.show();
      addMoney.hide();
      payMoney.hide();
      addcontributer.show();
      textSize(40);
      text("Total Balance : $"+getAmountPiggy,50,100)
      text("$"+addAmount.value(),50,180)
      text("From:",50,290);
      text("Comments:",50,480)
      
      

    }
  // text for paying child money
    
  if(piggyBankStatus === "paying"){
      payAmount.show();
      pay1.show();
      payMoney.hide();
    text("For:",50,290)
  forPay.show();
    
      addMoney.hide();
      text("Total Balance : $"+getAmountPiggy,50,100)
      text("$"+payAmount.value(),50,180)

    }
    // logic for submitting child login form
    childSubmit.mousePressed(()=>{
      addChild();
      signOut.show();

      register = false;
      
      childName.hide();
        childPin.hide();
      childSubmit.hide();
      childName.hide();
        childPin.hide();
      childSubmit.hide();
      currentChild = childName.value();
      childSubmit.hide();
    
    })
    // logic for retrieving data for history
    var t2 = database.ref("child"+currentChild+"transactions/1")
       t2.on("value",(data)=>{
         t2 = data.val();
       });  
       var t3 = database.ref("child"+currentChild+"transactions/2")
       t3.on("value",(data)=>{
        t3 = data.val();
      });  
      var t4 = database.ref("child"+currentChild+"transactions/3")
      t4.on("value",(data)=>{
        t4 = data.val();
      });  
      var t5 = database.ref("child"+currentChild+"transactions/4")
      t5.on("value",(data)=>{
        t5 = data.val();
      });
      var t6 = database.ref("child"+currentChild+"transactions/5")
      t6.on("value",(data)=>{
        t6 = data.val();
      });
      // logic for child adding money
 add1.mousePressed(() => {
   getAmountPiggy = getAmountPiggy + addAmount.value();
  addMoney.show();
     payMoney.show();
    addAmount.hide();
     add1.hide();  
    showAmountkids = true
    history1.show();
     addcontributer.hide();
     commentsAdd.hide();
   addcontributer.hide();
   alert("Money Added !!! You now have $"+getAmountPiggy)
   piggyBankStatus = null;
   commentsAdd.hide();
   console.log(currentTransaction)
          
      if(formchild === "selectChild"){
	  }


      database.ref("child"+currentChild).update({
        money:getAmountPiggy
      })
   currentTransaction = "From: "+addcontributer.value()+",Type: Deposit - "+commentsAdd.value()+",Amount: $"+addAmount.value();

      database.ref("child"+currentChild+"transactions").update({
        1:currentTransaction,
      2:t2,
        3:t3,
        4:t4,
        5:t5

      })
      addcontributer.hide();
      database.ref("child"+currentChild).update({
        money:getAmountPiggy
      })
   commentsAdd.hide();
   commentsAdd.hide();
   commentsAdd.hide();
      
   
   

    })
      // logic for parent adding money

    parentadd1.mousePressed(() => {
      getAmountPiggy = getAmountPiggy + parentaddAmount.value();
     parentaddAmount.hide();
     parentadd1.hide();
     parentaddMoney.show();
     parentpayMoney.show();
    showAmountkids = true
    parentbackToPiggy.hide();
    parentbackToHome.show();
    parenthistory1.show();

     database.ref("child"+currentChild).update({
      money:getAmountPiggy
    })
      alert("Money Added !!! Your child has $"+getAmountPiggy)
      piggyBankStatus = null;
      
      
      contributedPeople = contribute;
      
      currentTransaction = "From: "+addcontributer.value()+",Type: Deposit - "+commentsAdd.value()+",Amount: $"+parentaddAmount.value();

      database.ref("child"+currentChild+"transactions").update({
        1:currentTransaction,
      2:t2,
        3:t3,
        4:t4,
        5:t5

      })
   
       })
       var money = database.ref("child"+childName.value()+"/money");
       money.on("value",(data)=>{
        money = data.val();
      });
      // logic for child paying money

 pay1.mousePressed(() => {
   history1.show();

   if((payAmount.value()<getAmountPiggy)||(payAmount.value() === getAmountPiggy)){
   getAmountPiggy = getAmountPiggy - payAmount.value();
 database.ref("child"+currentChild).update({
  money:getAmountPiggy
})

   piggyBankStatus = null;
     alert("Money Paid !!! You now have $"+getAmountPiggy);
     payMoney.hide();
    payAmount.hide();
    showAmountkids = true

    pay1.hide();  
  forPay.hide();
     addMoney.show();
     payMoney.show();

     currentTransaction = "For: "+forPay.value()+",Type: Withdrawal"+",Amount: $"+payAmount.value();
     console.log(currentTransaction)
       database.ref("child"+currentChild+"transactions").update({
         1:currentTransaction,
       2:t2,
         3:t3,
         4:t4,
         5:t5
     
       })
     
   }else{
   piggyBankStatus = null;
     payMoney.hide();
     addMoney.show();
     payMoney.show();
history1.show();
    payAmount.hide();
    pay1.hide();  
    
alert("Too much money ! You can only pay $"+getAmountPiggy)
  forPay.hide();
  

   }
    })
    if(piggyBankStatus === null){
      forPay.hide();
      commentsAdd.hide();
      addcontributer.hide();
     
    }
      // logic for parent removing money

    parentpay1.mousePressed(() => {
    showAmountkids = true
forPay.hide();

      if((parentpayAmount.value()<getAmountPiggy)||(parentpayAmount.value() === getAmountPiggy)){
      getAmountPiggy = getAmountPiggy - parentpayAmount.value();
      piggyBankStatus = null;
      database.ref("child"+currentChild).update({
        money:getAmountPiggy
      })
        alert("Money Removed !!! Your child has $"+getAmountPiggy);
        parentpayMoney.show();
        parentaddMoney.show();
        parentbackToPiggy.hide();
        parentbackToHome.show();
       parentpayAmount.hide();
       parentpay1.hide();  
     forPay.hide();
     commentsAdd.hide();
     addcontributer.hide();
        itemsBought.push(forPay.value(),payAmount.value(),"withdrawal");
        currentTransaction = "For: "+forPay.value()+",Type: Withdrawal"+",Amount: $"+parentpayAmount.value();
     console.log(currentTransaction)
       database.ref("child"+currentChild+"transactions").update({
         1:currentTransaction,
       2:t2,
         3:t3,
         4:t4,
         5:t5
     
       })
    
        parenthistory1.show();
      }else{
      piggyBankStatus = null;
        parentpayMoney.hide();
       parentpayAmount.hide();
       parentpay1.hide();  
       parentaddMoney.show();
       parentpayMoney.show();
       parenthistory1.show();

       
   alert("Too much money ! You can only remove $"+getAmountPiggy)
     forPay.hide();
        
      }
       })
       // logic for displaying child history
       if(piggyBankStatus === "history"){
         textSize(50)
         text("Last 5 transactions",100,100);
         textSize(25);
         parentaddMoney.hide();
		 parentpayMoney.hide();
		 addMoney.hide();
		backToHome.hide();

         payMoney.hide();
backToPiggy.show();

if(t2 === null){
        text("1.None",20,250)
}else{
  text("1."+t2,20,250,540,1000)
  
}
if(t3 === null){
  text("2.None",20,400)
}else{
  text("2."+t3,20,400,540,1000)
  
}
if(t4 === null){
  text("3.None",20,550)
}else{
  text("3."+t4,20,550,540,1000)
  
}
if(t5 === null){
  text("4.None",20,700)
}else{
  text("4."+t5,20,700,540,1000)
  
}

if(t6 === null){
  text("5.None",20,850)
}else{
  text("5."+t6,20,850,540,1000)
  
}

    }
       // logic for displaying parent history
    
	  if(piggyBankStatus === "phistory"){
		textSize(50)
		text("Last 5 transactions",100,100);
		textSize(25);
		parentaddMoney.hide();
		parentpayMoney.hide();
		parentbackToHome.hide();
parentbackToPiggy.show();

if(t2 === null){
	   text("1.None",20,250)
}else{
 text("1."+t2,20,250,540,1000)
 
}
if(t3 === null){
 text("2.None",20,400)
}else{
 text("2."+t3,20,400,540,1000)
 
}
if(t4 === null){
 text("3.None",20,550)
}else{
 text("3."+t4,20,550,540,1000)
 
}
if(t5 === null){
 text("4.None",20,700)
}else{
 text("4."+t5,20,700,540,1000)
 
}
if(t6 === null){
 text("5.None",20,850)
}else{
 text("5."+t6,20,850,540,1000)
 
}

   }
   //back button from add/pay/history in child app
  backToPiggy.mousePressed(()=>{
   piggyBankStatus = null;
    openPiggyBank();
    showAmountkids = true
    addcontributer.hide();
commentsAdd.hide();
forPay.hide();
parentaddMoney.hide();
parentpayMoney.hide();

    history1.show();

  })
   //back button from add/remove/history in parent app

  parentbackToPiggy.mousePressed(()=>{
    piggyBankStatus = null;
     showAmountkids = true;
     parentaddAmount.hide();
  parentadd1.hide();
  parentpayAmount.hide();
  parentpay1.hide();
  parentaddMoney.show();
  parentpayMoney.show();
parentbackToHome.show(); 
parentbackToPiggy.hide(); 
  
parenthistory1.show();


   })
   //back button from piggy bank in child app

  backToHome.mousePressed(()=>{
  inChildApp = true 
  history1.hide();
  addMoney.hide();
  payMoney.hide();
  parentaddMoney.hide();
  parentpayMoney.hide();
  signOut.show();
       
  })
   //back button from piggy bank in parent app

  parentbackToHome.mousePressed(()=>{
	addMoney.hide();
	payMoney.hide();
	parentaddMoney.hide();
	parentpayMoney.hide();
  
    parentaddMoney.hide();
  parentpayMoney.hide();
parentbackToHome.hide(); 
parentPiggyBank.show();
parenthistory1.hide();
piggyBankStatus = null;
showAmountkids = false;
if(currentChild === childName.value()){
signOut.show();
}else{
parentBackToSelect.show();
} 
    })
}
//function for parent signup form
function childForm(){
  sname.show();
  lastname.show();
  pin.show();
  submit.show();

}
// function for opening child piggy bank
 function openPiggyBank(){
  piggyBank.hide();
  chat.hide();
  addMoney.show();
  payMoney.show();
  payAmount.hide();
  pay1.hide(); 
  addAmount.hide();
  add1.hide(); 
  backToPiggy.hide();
  backToHome.show();
  addcontributer.hide();
  commentsAdd.hide();
  forPay.hide();
  history1.show();
  
  withdrawalHistory.hide();
  depositHistory.hide();
    
}
//function for creating account in database
function uploadData(){
  signoutcheck = false;
  database.ref('Users').update({
    FirstName:sname.value(),
  });
  database.ref(sname.value()).update({


  })
  var x
  if(sname.value() !== null){
      x = sname.value();
  }else{
      x = loginName.value();
  }
  database.ref(x).update({
    Pin:pin.value()
  })
}
//function for retrieving piggy bank amount
function getPiggyAmount(){
if(sname.value()){
  var childname1 = database.ref(sname.value()+"/child1name");
    childname1.on("value",(data)=>{
      childname1 = data.val();
    });
    
  getAmountPiggy = database.ref("child"+currentChild+"/money")
  getAmountPiggy.on("value",(data)=>{
    getAmountPiggy = data.val()
  })}else{
    getAmountPiggy = database.ref("child"+currentChild+"/money");
  getAmountPiggy.on("value",(data)=>{
    getAmountPiggy = data.val();
  
  })
  if(getAmountPiggy === null){
    getAmountPiggy = 0
  }
}}
// function for adding child
function addChild(){
  register = false;
  childName.hide();
        childPin.hide();
      childSubmit.hide();
      parentPiggyBank.show();
  database.ref(sname.value()).update({
      child1name:childName.value(),
      child1pin:childPin.value()
    })
    var abdd = "child"+childName.value()
  database.ref(abdd).update({   
      Pin:childPin.value(),
      Parent:sname.value(),
      money:0
  })
  childPin.hide();
      childSubmit.hide();
      childSubmit.hide();
    

}