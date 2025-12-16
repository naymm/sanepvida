import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 md:pt-40">
        <section className="border-b border-border bg-card/40">
          <div className="container py-12 md:py-16">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-[0.2em]">
              Sobre nós
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Cuidamos da sua saúde com{" "}
              <span className="text-primary">confiança e inovação</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl texto-justificado">
              A Sanep Vida é uma empresa angolana dedicada ao desenvolvimento,
              produção e distribuição de produtos farmacêuticos, hospitalares e
              de bem-estar, com foco na qualidade, segurança e acessibilidade.
            </p>
          </div>
        </section>

        <section className="bg-background">
          <div className="container py-12 md:py-16 grid gap-10 md:grid-cols-[2fr,3fr]">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-display font-semibold">
                Quem somos
              </h2>
              <p className="text-muted-foreground texto-justificado">
                Nascemos com o propósito de aproximar soluções de saúde das
                famílias angolanas, oferecendo um portfólio completo que vai
                desde medicamentos e dispositivos médicos até suplementos
                alimentares e produtos de higiene.
              </p>
              <p className="text-muted-foreground texto-justificado">
                Trabalhamos em parceria com profissionais de saúde, hospitais,
                clínicas e farmácias para garantir um atendimento ético,
                responsável e alinhado com as melhores práticas internacionais
                do setor farmacêutico.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-[0.2em]">
                  Missão
                </p>
                <h3 className="font-semibold text-lg mb-2">
                  Promover bem-estar com qualidade
                </h3>
                <p className="text-sm text-muted-foreground texto-justificado">
                Actuar de forma integrada, disponibilizando produtos e serviços diferenciados e confiáveis que contribuam para a melhoria na qualidade da saúde das pessoas e promoção do bem-estar. 
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-[0.2em]">
                  Visão
                </p>
                <h3 className="font-semibold text-lg mb-2">
                  Referência em saúde em Angola
                </h3>
                <p className="text-sm text-muted-foreground texto-justificado">
                Compromisso com o conhecimento visando a melhoria contínua nos processos internos, na qualidade dos produtos e no crescimento sustentável, sendo uma referência no sector farmacêutico. 
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-[0.2em]">
                  Valores
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Ética e transparência</li>
                  <li>Qualidade e segurança</li>
                  <li>Respeito à vida</li>
                  <li>Inovação e melhoria contínua</li>
                </ul>
              </div>

              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-[0.2em]">
                  Compromisso
                </p>
                <h3 className="font-semibold text-lg mb-2">
                  Proximidade com o cliente
                </h3>
                <p className="text-sm text-muted-foreground texto-justificado">
                  Estamos presentes em diferentes pontos do país, com uma
                  logística eficiente e um atendimento próximo, humano e
                  orientado às necessidades reais das pessoas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 border-y border-border">
          <div className="container py-12 md:py-16 grid gap-10 md:grid-cols-3">
            <div>
              <h2 className="text-2xl font-display font-semibold mb-2">
                Por que confiar na Sanep Vida?
              </h2>
              <p className="text-muted-foreground texto-justificado">
                Unimos rigor técnico, paixão por cuidar e um profundo
                conhecimento das necessidades do mercado angolano.
              </p>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground texto-justificado">
              <p>
                Trabalhamos com processos controlados, seguindo normas de boas
                práticas de fabricação e de distribuição, garantindo
                rastreabilidade e segurança em toda a cadeia.
              </p>
              <p>
                Nossos produtos são pensados para atender tanto o ambiente
                hospitalar quanto o cuidado em casa, com foco em praticidade,
                eficácia e confiança.
              </p>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground texto-justificado">
              <p>
                Investimos em inovação, tecnologia e formação contínua das
                nossas equipas, porque acreditamos que saúde se faz com
                conhecimento e responsabilidade.
              </p>
              <p>
                Mais do que produtos, entregamos cuidado, proximidade e
                compromisso com a qualidade de vida das pessoas.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;




