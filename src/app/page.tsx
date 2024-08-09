import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <nav className="absolute right-1 top-1">
        <ModeToggle />
      </nav>

      <aside className="h-screen hidden lg:block">
        <Image src="/login.png" className="max-h-full" alt="login" width={554} height={832} />
      </aside>

      <div className="items-center flex flex-col">
        <div className="size-[75px] bg-rose-600 rounded-full"></div>
        <h1 className="text-4xl font-extrabold uppercase">Sphere</h1>

        <Tabs defaultValue="entrar" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="entrar">Entrar</TabsTrigger>
            <TabsTrigger value="registrar">Registrar</TabsTrigger>
          </TabsList>

          <TabsContent value="entrar">
            <form action="" className="flex flex-col items-center gap-6">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input type="password" id="password" placeholder="Senha" />
              </div>
              <Button>Entrar</Button>
            </form>
          </TabsContent>

          <TabsContent value="registrar">
          <form action="" className="flex flex-col items-center gap-6">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="nome">Nome</Label>
                <Input type="nome" id="nome" placeholder="nome" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="bio">Bio</Label>
                <Input type="text" id="bio" placeholder="bio" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Se nha</Label>
                <Input type="password" id="password" placeholder="password" />
              </div>
              <Button>Criar conta</Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
