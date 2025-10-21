import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import image from "../../assets/logo.png";
import sideImage from "../../assets/image.png";
import bgImage from "../../assets/image1.png";

type FieldProps = {
  icon: React.ReactNode;
  label: string;
  type?: string;
};

const Field = ({ icon, label, type = "text" }: FieldProps) => (
  <div className="flex w-full lg:w-[300px] border border-[#C54848]">
    <div className="flex items-center justify-center w-12 bg-[#222121] border-r border-[#C54848]">
      {icon}
    </div>
    <div className="flex-1 flex flex-col">
      <div className="h-5 flex items-center px-1 bg-[#222121] border-b border-[#C54848]">
        <span className="text-[10px] text-gray-200 font-serif">{label}</span>
      </div>
      <input
        type={type}
        className="h-5 w-full bg-[#222121] px-1 text-[12px] text-white placeholder-gray-400 focus:outline-none"
      />
    </div>
  </div>
);

export function Email() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/code");
  };

  return (
    <div
      className="z-1000 relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-[#1D1010]/70" />

      {/* card com animação de entrada */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex bg-[#383333] overflow-hidden shadow-xl w-[350px] lg:w-[980px] h-[600px]"
      >
        {/* esquerda: formulário */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 lg:px-20 text-white">
          <motion.img
            src={image}
            alt="logo"
            className="w-20 h-20 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          />
          <h2 className="text-4xl font-bold mb-8 text-center">Coloque
          seu Email</h2>

          <div className="mb-8 mt-4 w-full flex items-center justify-center flex-col space-y-6">
            <Field icon={<FaUser className="text-white" />} label="Email" type="email" />
          </div>

          {/* botão login com animação */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="mt-2 w-[109px] h-[37px] bg-[#C54848] hover:bg-red-700 hover:cursor-pointer text-white font-serif text-[15px] rounded-t-[30px] rounded-b-[20px] transition disabled:opacity-50"
            onClick={handleLogin}
          >
            Entrar
          </motion.button>
        </div>

        {/* direita: imagem */}
        <div className="hidden lg:block w-1/2">
          <img src={sideImage} alt="login" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>
  );
}
