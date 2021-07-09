import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

const Notify = (title, message, type = "success") => {
  store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "bottom-left",
    animationIn: ["animate__animated animate__fadeIn"],
    animationOut: ["animate__animated animate__fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
};

export default Notify;
