"use strict";

let modal = document.querySelector("#modal_main");
let success = document.querySelector("#modal_success");
let close = document.querySelectorAll("div.modal__close");
let show = document.querySelector(".show-success");

modal.className = "modal modal_active";

    show.onclick = function () {
        modal.className = "modal";
        success.className = "modal modal_active";
    }

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        let activeClose = close[i];
          if (activeClose.closest(".modal_active")) {
            activeClose.closest(".modal_active").className = "modal";
          }
        }
      }
