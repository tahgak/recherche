let first=document.querySelector('h5')
let p=document.querySelector('.card-text')
let p1=document.querySelector('.card-text1')
let p2=document.querySelector('.card-text2')
let p3=document.querySelector('.card-text3')
let p4=document.querySelector('.card-text4')
let p5=document.querySelector('.card-text5')
let p6=document.querySelector('.card-text6')
let p7=document.querySelector('.card-text7')
let p8=document.querySelector('.card-text8')
let p9=document.querySelector('.card-text9')
let p10=document.querySelector('.card-text10')
let p11=document.querySelector('.card-text11')
let p12=document.querySelector('.card-text12')

fetch("http://ip-api.com/json/").then((response)=>{
    return response.json()
}).then((data)=>{
 first.innerText="status: "+data.status;
 p.innerText="country: "+data.country;
 p1.innerText="countryCode: "+data.countryCode;
 p2.innerText="region: "+data.region;
 p3.innerText="regionName: "+data.regionName;
 p4.innerText="city: "+data.city;
 p5.innerText="zip: "+data.zip;
 p6.innerText="lat: "+data.lat;
 p7.innerText="lon: "+data.lon;
 p8.innerText="timezone: "+data.timezone;
 p9.innerText="isp: "+data.isp;
 p10.innerText="org: "+data.org;
 p11.innerText="as: "+data.as;
 p12.innerText="query: "+data.query;
})
