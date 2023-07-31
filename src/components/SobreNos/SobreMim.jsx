import Image from "next/image";

export function SobreMim() {
  return (
    <div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 py-12 px-2">
        <Image
          width={500}
          height={500}
          src={"/banner2.jpg"}
          alt="Imagem da Loja"
        />
        <div className="sm:text-lg space-y-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold">Quem Somos</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            aspernatur debitis quibusdam, cum similique ea voluptas quis eaque
            dolor, repellat nobis harum itaque perferendis laborum consequuntur
            officiis adipisci tenetur rerum.
          </p>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quo asperiores aliquid fugiat error voluptates.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            accusantium, blanditiis quidem in nobis voluptates possimus nemo
            amet corrupti aperiam eius, incidunt qui. Atque, laboriosam cum!
            Consequatur, eaque. Magnam, placeat.
          </p>
        </div>
      </div>
    </div>
  );
}
