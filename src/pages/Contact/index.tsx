import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  // TODO: firebaseでメールフォームを作成
  // const onSubmit = () => {};

  return (
    <div className="Contact">
      <h1>Contact</h1>
      <p>ご連絡はTwiterのDMからお願いします。</p>
      <p>
        Twitter: <a href="https://twitter.com/futsu_tech">@futsu_tech</a>
      </p>
    </div>
  );
};

export default Contact;
