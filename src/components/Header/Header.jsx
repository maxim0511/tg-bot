import { useTelegram } from "../../hooks";
import { Button } from "../Button/Button";
import "./Header.css";

export const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <header className="header">
      <Button onClick={onClose}>Закрыть</Button>
      <span className="username">{user?.username}</span>
    </header>
  );
};
