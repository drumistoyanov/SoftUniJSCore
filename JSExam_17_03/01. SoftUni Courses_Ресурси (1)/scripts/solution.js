function solve() {
   let button = document.getElementsByTagName('button');
   let price = 0;
   button[0].addEventListener('click', function () {
      if (courses[0].checked) {
         let list = document.createElement("li");
         list.textContent = courses[0] = "JS-Fundamentals";
         myCourses.appendChild(list);
         price = price+170;
      }
      if (courses[1].checked) {
         let list = document.createElement("li");
         list.textContent = courses[1] = "JS-Advanced";
         myCourses.appendChild(list);
         price =price+ 180;
      }
      if (courses[2].checked) {
         let list = document.createElement("li");
         list.textContent = courses[2] = "JS-Applications";
         myCourses.appendChild(list);
         price =price+ 190;
      }
      if (courses[3].checked) {
         let list = document.createElement("li");
         list.textContent = courses[2] = "JS-Web";
         myCourses.appendChild(list);
         price =price+ 490;
      }
      if (courses[0].checked && courses[1].checked) {
         let price1=180*0.1;
         price =price-price1;
      }
      if (courses[0].checked && courses[1].checked && courses[2].checked) {
         let price2=(170+180+190)*0.06;
         console.log(price);
        price=price-price2;
      }
      if (courses[0].checked && courses[1].checked && courses[2].checked && courses[3].checked) {
         let list = document.createElement("li");
         list.textContent  = "HTML and CSS";
         myCourses.appendChild(list);
      }
      if (radioButtons[1].checked) {
         price =price* 0.94;
      }
      cost.textContent= `Cost: ${Math.floor(price)}.00 BGN`;
   });

   let courses = document.querySelectorAll("ul>li>input");

   let radioButtons = $(":radio");
   let myCourses = document.querySelectorAll(".courseBody>ul")[1];

   let cost = document.querySelectorAll(".courseFoot>p")[0];
}
solve()