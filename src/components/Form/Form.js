import { useCallback, useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks";

export const Form = () => {
  const { TELEGRAM } = useTelegram();

  const [formState, setFormState] = useState({
    country: "",
    street: "",
    subject: "physical",
  });

  const onSubmit = () => TELEGRAM.sendData(JSON.stringify(formState));

  useEffect(() => {
    TELEGRAM.MainButton.setParams({
      text: "Отправить данные",
    });
    TELEGRAM.MainButton.onClick(onSubmit);
  }, []);

  const onChangeFormState = (e) => (key) => {
    setFormState((prev) => ({ ...prev, [key]: e.target.value }));

    if (!formState.country.length || !formState.street.length)
      TELEGRAM.MainButton.hide();
    else TELEGRAM.MainButton.show();
  };

  return (
    <div className="form">
      <h3>Введите ваши данные</h3>
      <input
        className="input"
        type="text"
        placeholder="Страна"
        value={formState.country}
        onChange={(e) => onChangeFormState(e)("country")}
      />
      <input
        className="input"
        type="text"
        placeholder="Улица"
        value={formState.street}
        onChange={(e) => onChangeFormState(e)("street")}
      />
      <select
        className="select"
        value={formState.subject}
        onChange={(e) => onChangeFormState(e)("subject")}
      >
        <option value="physical">Физ. лицо</option>
        <option value="legal">Юр. лицо</option>
      </select>
    </div>
  );
};
