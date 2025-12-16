import { Clock } from "lucide-react";

const BlogContent = () => {
  return (
    <main className="pt-24 pb-16 singular-produto">
      {/* Hero Section */}
      <section className="border-b border-border bg-card/40">
        <div className="container py-12 md:py-16">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-[0.2em]">
            Blog
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Nosso <span className="text-primary">Blog</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl texto-justificado">
            Em breve, compartilharemos artigos, dicas e novidades sobre saúde,
            bem-estar e nossos produtos.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-background">
        <div className="container py-16 md:py-24">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-6">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Brevemente
            </h2>
            <p className="text-lg text-muted-foreground texto-justificado">
              Estamos a preparar conteúdo especial para si. Em breve, poderá
              encontrar artigos informativos, dicas de saúde, novidades sobre
              os nossos produtos e muito mais.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogContent;


