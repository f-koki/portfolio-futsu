import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  // TODO: firebaseでメールフォームを作成
  const onSubmit = () => {};

  return (
    <div className="Contact">
      <h1>Contact</h1>
      <form action="post">
        <div>スイッチのフレコ</div>
        <input type="text" />
        <div>ひとこと</div>
        <textarea name="message" cols={30} rows={10}></textarea>
        <div>
          <input type="submit" value="内容を送信する" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
