"use strict";

let modal = document.getElementById("modal_main");
let success = document.getElementById("modal_success");
let close = Array.From(document.getElementsByClassName("modal__close"));
let show = Array.from(document.getElementsByClassName("show-success"));

modal.className = "modal modal_active";
