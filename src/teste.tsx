

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col bg-[#383333] w-105 h-137 p-8 items-center justify-center shadow-lg text-center relative z-10">
    {children}
  </div>
);


// Página: Trocar Senha
export function ChangePassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 text-white">
      <Card>
        <h2 className="text-xl font-bold mb-6">Trocar senha</h2>
        <input
          type="password"
          placeholder="Nova senha"
          className="w-full p-2 rounded bg-neutral-800 mb-4 border border-neutral-700 focus:outline-red-600"
        />
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 w-full rounded-xl">
          Salvar
        </button>
      </Card>
    </div>
  );
}