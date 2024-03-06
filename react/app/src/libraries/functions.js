import axios from "axios";
import closeIcon from "assets/img/close_111152.svg";

export const Popup = (title, message, color, location) => {
  if (typeof message === "string") {
    try {
      try {
        document.getElementById("popup").remove();
      } catch {}

      var div = document.createElement("div");
      div.id = "popup";

      let displayMessage = message;
      displayMessage = displayMessage
        .replace("[", "<a href='" + location + "'>")
        .replace("]", "</a>");
      div.innerHTML =
        `
  <div class="popup">
  <div class="popup-inner">
  <div style="background-color:` +
        color +
        `" class="popupAccent"></div>
    <div class="close-btn" onClick='document.getElementById("popup").parentNode.removeChild(document.getElementById("popup"));'>
      <img src="` +
        closeIcon +
        `">
    </div>
    <div class="popupTitle">` +
        title +
        `</div>
    <div class="popupMessage">` +
        displayMessage +
        `</div>
  </div>
</div>`;
      document.body.appendChild(div);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log(message);
  }
};
