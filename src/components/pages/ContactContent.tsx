import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Resetar mensagem de sucesso após 5 segundos
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Vila Flor, Condomínio Frente da Caixa Cruz, Luanda, Angola",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+244 945 142 429",
      link: "tel:+244945142429",
    },
    {
      icon: Mail,
      title: "Email",
      content: "geral@sanepvida.co.ao",
      link: "mailto:geral@sanepvida.co.ao",
    },
  ];

  return (
    <main className="pt-24 pb-16 singular-produto">
      {/* Hero Section */}
      <section className="border-b border-border bg-card/40">
        <div className="container py-12 md:py-16">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-[0.2em]">
            Contate-nos
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Entre em <span className="text-primary">contacto</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl texto-justificado">
            Estamos aqui para ajudar. Envie-nos sua mensagem, dúvida ou
            sugestão. Nossa equipe entrará em contacto o mais breve possível.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background">
        <div className="container py-12 md:py-16">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
                  Informações de Contacto
                </h2>
                <p className="text-muted-foreground texto-justificado">
                  Estamos disponíveis para atendê-lo. Entre em contato através
                  dos canais abaixo ou preencha o formulário ao lado.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  );

                  return <div key={index}>{content}</div>;
                })}
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold text-foreground mb-3">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Segunda a Sexta: 8h00 - 17h00</p>
                  <p>Sábado: 9h00 - 13h00</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
                  Envie sua Mensagem
                </h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-sm text-foreground">
                      Mensagem enviada com sucesso! Entraremos em contato em
                      breve.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+244 900 000 000"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Assunto *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Assunto da mensagem"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Escreva sua mensagem aqui..."
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactContent;


