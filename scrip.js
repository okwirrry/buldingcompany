document.getElementById('myform').addEventListener('submit', function Validation(e) {
  e.preventDefault();


 
let Firstname=document.getElementById('firstname');
let Secondname=document.getElementById('secondname');
let tel=document.getElementById('tel');
let Email=document.getElementById('email');
let textarea=document.getElementById('textarea');
let firstnameerror=document.getElementById('firstnameerror');
let secondnameerror=document.getElementById('secondnameerror');
let emailerror=document.getElementById('emailerror');
let telerror=document.getElementById('telerror');
let textareaerror=document.getElementById('textareaerror');
let fnamepattern=/^[A-Z][a-zA-Z'-]{1,}$/;
let secondpattern=/^[A-Z][a-zA-Z'-]{1,}$/;
let telpattern=/^(\+254|0)7[0-9]{8}$/;
let textareapattern=/^[a-zA-Z0-9\s.,!?'"()-]{10,}$/;
let emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;





let isvalid=true;

if (Firstname.value.trim() === "") {
  firstnameerror.textContent = "First name is required!";
  isvalid= false;
}
else if(!fnamepattern.test(Firstname.value.trim())){
  firstnameerror.textContent="Inavlid Name!"
  isvalid=false;
}else{
  firstnameerror.textContent="";
}
if (Secondname.value.trim() === "") {
  secondnameerror.textContent = "Second name is required!";
  isvalid= false;
}else if(!secondpattern.test(Secondname.value.trim())){
  secondnameerror.textContent="Inavalid Name!";
  isvalid=false;
}

else{
  secondnameerror.textContent="";
}
if(Email.value.trim() === ""){
  Emailerror.textContent="Email is required!";
 isvalid= false;
}
else if(!emailpattern.test(Email.value.trim())){
  emailerror.textConten="Enter Email Address!"
}
else{
  emailerror.textContent="";
}
if (tel.value.trim()===""){
  telerror.innerText="Telephone Number is required"
  isvalid=false
} else if(!telpattern.test(tel.value.trim())){
  telerror="Enter Valid Phone Number Starting with +254 / 0!";
  isvalid=false;
}
else{
  telerror.textContent=""
}
if(textarea.value.trim()===""){
  textareaerror.innerText="Write a description"
  isvalid=false;
}else if(!textareapattern.test(textarea.value.trim())){
  textareaerror.textContent="Minumum 10 Characters";
  isvalid=false;
}
else{
  textareaerror.textContent="";
}
if(isvalid){
  this.submit;
}
  });

document.getElementById('modal_form').addEventListener('submit',function valid(e){
e.preventDefault();
let email2=document.getElementById('email2');
let  Phone=document.getElementById('Phone');
let  services=document.getElementById('services');
let emailerror=document.getElementById('emailerror');
let phoneerror=document.getElementById('phoneerror');
let serviceserror=document.getElementById('serviceserror');
let phonepattern=/^(\+254|0)7[0-9]{8}$/;

let isvalid=true;
 if(email2.value.trim()===''){
  emailerror.textContent="Email is required!";
  isvalid=false;
}else{
  emailerror.textContent=''
}
if(Phone.value.trim()===""){
  phoneerror.textContent="Phone number is required!"
  isvalid=false;
}else if(!phonepattern.test(Phone.value.trim())){
  phoneerror.textContent="Enter Valid Phone Number Starting with +254 / 0!";
  isvalid=false;
}else{
  phoneerror.textContent="";
}
if(services.selectedIndex===0){
serviceserror.textContent="Select the Service!"
isvalid=false;
}else{
  serviceserror.textContent='';
}
if(isvalid){
  this.submit();
}
});




