const TELEGRAM = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => TELEGRAM.close();

  const onToggleButton = () => {
    if (TELEGRAM.MainButton.isVisible) return TELEGRAM.MainButton.show();
    TELEGRAM.MainButton.hide();
  };

  return {
    TELEGRAM,
    user: TELEGRAM.initDataUnsafe?.user,
    onClose,
    onToggleButton,
  };
};
