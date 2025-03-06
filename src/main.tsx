import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Card.tsx";
import "./index.css";
import Qrcode from "./Qrcode.tsx";
import NotificationPage from "./NotificationsPage.tsx";
import CreditCardForm from "./CreditCardForm.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App></App>
    <Qrcode></Qrcode>
    <NotificationPage></NotificationPage>
    <CreditCardForm></CreditCardForm>
  </React.StrictMode>,
);
