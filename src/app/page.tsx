import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <nav className="absolute right-1 top-2">
        <ModeToggle/>
      </nav>

      <aside className="h-screen hidden lg:block">
        <Image src="/login.png" alt="login" width={554} height={832}/>
      </aside>

      <div>
        <div className="size-[75] bg-rose-600 rounded-full"></div>
        <h1 className="text-4xl font-extrabold">Sphere</h1>
        
        <Tabs defaultValue="Entrar" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Entrar">Entrar</TabsTrigger>
            <TabsTrigger value="Registrar">Registrar</TabsTrigger>
            </TabsList>  

            <TabsContent value="Entrar">  
              <h1>Form de Login</h1>
            </TabsContent>    

            <TabsContent value="Registrar">  
              <h1>Form de Registro</h1>
            </TabsContent>  
        </Tabs>
        <Button>Login</Button>
      </div>
    </main>
  );
}
