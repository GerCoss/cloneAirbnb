import { useEffect } from "react";

const ModalInicioSesion = ({ visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [visible]);

  if (!visible) return null;
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-neutral-500 bg-opacity-75 flex items-center justify-center "
    >
      <div className="flex flex-col  border border-gray-100 rounded-lg bg-white max-w-xl">
        <div class="relative px-4 pt-4 pb-3">
          <div className="font-bold text-center">
            Inicia sesión o regístrate
          </div>
          <div class="absolute top-4">
            <div
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className=" border-t border-gray-300 h-0">&nbsp;</div>
        <div className="p-5">
          <div className="text-2xl ">¡Te damos la bienvenida a Airbnb!</div>
          <div>
            <select name="select">
              <option value="value1">Value 1</option>
              <option value="value2" selected>
                Value 2
              </option>
              <option value="value3">Value 3</option>
            </select>
          </div>
          <div>
            <input type="tel" name="" id="" />
          </div>
          <div className="">
            <p className="text-sm">
              Te vamos a confirmar el número por teléfono o mensaje de texto.
              Sujeto a tarifas estándar para mensajes y datos. Política de
              privacidad
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <button type="submit grow">Continuar</button>
            <div className="flex justify-between items-center">
              <div className="border-t border-gray-300 h-0 grow">&nbsp;</div>
              <div className="text-sm grow-0 px-4">o</div>
              <div className="border-t border-gray-300 h-0 grow ">&nbsp;</div>
            </div>
            <div class="relative  hover:bg-gray-50 cursor-pointer">
              <div className="border border-black rounded-lg text-center py-3">
                Continuar con Facebook
              </div>
              <div class="absolute top-3 pl-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="24px"
                  height="24px"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  />
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  />
                </svg>
              </div>
            </div>
            <div class="relative  hover:bg-gray-50 cursor-pointer">
              <div className="border border-black rounded-lg text-center py-3">
                Continuar con Google
              </div>
              <div class="absolute top-3 pl-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="24px"
                  height="24px"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#e53935"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4caf50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1565c0"
                    d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
              </div>
            </div>
            <div class="relative  hover:bg-gray-50 cursor-pointer">
              <div className="border border-black rounded-lg text-center py-3">
                Continuar con Apple
              </div>
              <div class="absolute top-3 pl-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                >
                  {" "}
                  <path d="M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z" />
                </svg>
              </div>
            </div>
            <div class="relative  hover:bg-gray-50 cursor-pointer">
              <div className="border border-black rounded-lg text-center py-3">
                Continuar con un correo electrónico
              </div>
              <div class="absolute top-3 pl-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInicioSesion;
