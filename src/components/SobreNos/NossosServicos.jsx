import {
  IconPhone,
  IconPalette,
  IconAcessorios,
  IconTools,
} from "@/assets/Icons";

export function NossosServicos() {
  return (
    <div>
      <div className="max-w-6xl mx-auto space-y-4 text-center py-12 px-2">
        <h2 className="text-2xl sm:text-4xl font-bold ">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="text-xl sm:text-2xl border-y-2 py-1 w-fit mx-auto">
          Lorem, ipsum.
        </p>
        <div className="flex flex-wrap justify-center gap-12 pt-12">
          <div className="w-80 flex flex-col items-center space-y-2">
            <div className="bg-gray-100 p-6 rounded-full">
              <IconPhone />
            </div>
            <p className="font-medium text-lg">Lorem, ipsum.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              officiis expedita quas, quam tempore fugit veritatis iure quia
              error sapiente.
            </p>
          </div>
          <div className="w-80 flex flex-col items-center space-y-2">
            <div className="bg-gray-100 p-6 rounded-full">
              <IconAcessorios />
            </div>
            <p className="font-medium text-lg">Lorem, ipsum.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              officiis expedita quas, quam tempore fugit veritatis iure quia
              error sapiente.
            </p>
          </div>
          <div className="w-80 flex flex-col items-center space-y-2">
            <div className="bg-gray-100 p-6 rounded-full">
              <IconTools />
            </div>
            <p className="font-medium text-lg">Lorem, ipsum.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              officiis expedita quas, quam tempore fugit veritatis iure quia
              error sapiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
