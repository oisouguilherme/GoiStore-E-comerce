import { IconFacebook, IconInstagram, IconTikTok, IconTwitter, IconWhatsApp } from "@/assets/Icons";

export function Footer() {
  return (
    <div className=" px-8 sm:px-24 border-t pt-6">
      <div className="max-w-6xl mx-auto flex gap-8 flex-wrap justify-between items-center bg-white text-xs">
        <div>
          <p>
            <strong>ATENDIMENTO AO CLIENTE</strong>
          </p>
          <p>
            <strong>E-mail: </strong>suporte@terste.com
          </p>
          <p>
            <strong>WhatsApp: </strong>+55 (38) 9 99854-2456{" "}
          </p>
        </div>
        <div>
          <h2>Redes sociais:</h2>
          <div className="flex gap-4 pt-2">
            <a href="#">
              <IconInstagram />
            </a>
            <a href="#">
              <IconFacebook />
            </a>
            <a href="#">
              <IconTwitter />
            </a>
            <a href="#">
              <IconTikTok />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-xs pt-2 sm:pt-0">Todos os direitos reservados © 2023</p>
    </div>
  );
}
