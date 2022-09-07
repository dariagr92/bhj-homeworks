"use strict";

let modal = document.getElementById("modal_main");
let success = document.getElementById("modal_success");
let close = Array.From(document.getElementsByClassName("modal__close"));
let show = Array.from(document.getElementsByClassName("show-success"));

modal.classList = "modal modal_active";
for (let i = 0; i < close.length; i++)
   close[i].onclick = () => {
      close[i].closest(".modal").className = "modal";
      if (close[i] === show[0])
         success.className = "modal modal_active";
   }