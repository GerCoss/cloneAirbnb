const MenuAntesDeLogin = ({ setShowInicioSesion, visible, setShowMenu }) => {
  if (!visible) return null;
  return (
    <div className="flex flex-col  border border-gray-100 rounded-lg shadow-black bg-white drop-shadow-md text-sm py-2">
      <div
        className="pl-4 py-3 hover:bg-gray-200 cursor-pointer"
        onClick={() => {
          setShowInicioSesion(true);
          setShowMenu(false);
        }}
      >
        Regístrate
      </div>
      <div
        className="pl-4 py-3 hover:bg-gray-200 cursor-pointer"
        onClick={() => {
          setShowInicioSesion(true);
          setShowMenu(false);
        }}
      >
        Iniciar sesión
      </div>
      <div className="my-2 border-t border-gray-300 h-0">&nbsp;</div>
      <div className="pl-4  py-3 hover:bg-gray-200 cursor-pointer">
        Pon tu casa en Airbnb
      </div>
      <div className="pl-4 pr-12 py-3 hover:bg-gray-200 cursor-pointer">
        Organiza una experiencia
      </div>
      <div className="pl-4 py-3 hover:bg-gray-200 cursor-pointer">Ayuda</div>
    </div>
  );
};

export default MenuAntesDeLogin;
