
function App() {
  return (
    <div className="bg-[#EFE7D6] text-[#2A241C]">

      {/* Menu */}
      <header className="bg-[#1B4332] p-5 text-[#EFE7D6]">
        <nav className="flex flex-wrap justify-between gap-3">
          <h1 className="text-2xl font-bold">Fio & Prensa</h1>

          <div className="flex gap-4">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#galeria">Galeria</a>
            <a href="#depoimento">Depoimento</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="bg-[#1B4332] p-10 text-[#EFE7D6]">
        <h2 className="mb-4 text-4xl font-bold">
          Histórias feitas à mão
        </h2>

        <p className="mb-5">
          Cadernos artesanais feitos com carinho e dedicação.
        </p>

        <a href="#galeria" className="bg-[#9A3324] p-3">
          Conheça nossos cadernos
        </a>
      </section>

      {/* Sobre: 4 etapas */}
      <section id="sobre" className="p-10 text-center">
        <h2 className="mb-4 text-3xl font-bold">Nosso processo</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="font-bold">01. Escolha</h3>
            <p>Escolhemos papéis de qualidade.</p>
          </div>

          <div>
            <h3 className="font-bold">02. Corte</h3>
            <p>Cortamos e dobramos as folhas.</p>
          </div>

          <div>
            <h3 className="font-bold">03. Costura</h3>
            <p>Costuramos as páginas à mão.</p>
          </div>

          <div>
            <h3 className="font-bold">04. Prensagem</h3>
            <p>Finalizamos cada caderno.</p>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="bg-[#E5D8C1] p-10">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Nossa galeria
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          <img
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=500&q=80"
            alt="Caderno artesanal"
            className="h-60 w-full rounded object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80"
            alt="Caderno para anotações"
            className="h-60 w-full rounded object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=500&q=80"
            alt="Materiais de papelaria"
            className="h-60 w-full rounded object-cover"
          />
        </div>
      </section>

      {/* Depoimento */}
      <section id="depoimento" className="bg-[#1B4332] p-10 text-center text-[#EFE7D6]">
        <h2 className="mb-4 text-3xl font-bold">Depoimento</h2>

        <p className="mb-3 italic">
          "Adorei meu caderno! O acabamento é lindo
          e cada detalhe demonstra muito cuidado."
        </p>

        <p className="text-[#A9895F]">— Mariana, cliente</p>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A241C] p-6 text-center text-[#EFE7D6]">
        <p>Fio & Prensa — Encadernação artesanal</p>
        <p className="mt-2 text-sm">© 2026 | Projeto fictício</p>
      </footer>

    </div>
  )
}

export default App
