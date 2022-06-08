import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";
import "animate.css/animate.min.css";


export const CallNotification = (title: string, message: string, type: any) => {
 
// tipos de notificações
  // 1 = success = verde
  // 2 = danger = vermelho
  // 3 = info = azul
  // 4 = default = ? 
  // 5 = warning =- amarelo

 Store.addNotification({
    title: title,
    message: message,
    type: type,
    container: "top-center",
    insert: "top",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],

    dismiss: {
      duration: 2000,
      showIcon: true,
    },
  });


 
  
};