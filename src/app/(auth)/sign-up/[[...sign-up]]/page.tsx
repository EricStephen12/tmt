import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative selection:bg-accent selection:text-white pt-24 pb-12">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-3/4 h-full bg-accent-light/20 rounded-br-[100px] transform -translate-x-10 -translate-y-10"></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-6">
        <div className="mb-8 text-center">
            <span className="text-3xl font-serif font-bold tracking-tight text-primary leading-none">
              TMT <span className="text-[12px] font-sans font-bold tracking-[0.5em] text-accent uppercase block mt-2">Group</span>
            </span>
        </div>

        <SignUp 
          appearance={{
            elements: {
              card: "shadow-2xl border border-primary/5 rounded-none rounded-bl-[50px] rounded-tr-[50px]",
              headerTitle: "font-serif text-2xl text-primary",
              headerSubtitle: "font-sans text-slate-500 font-light",
              formButtonPrimary: "bg-primary hover:bg-accent text-white uppercase tracking-widest text-[10px] py-4 rounded-none transition-colors duration-500",
              formFieldInput: "rounded-none border-primary/20 bg-background/50 focus:border-accent focus:ring-accent",
              footerActionLink: "text-accent hover:text-primary",
            }
          }}
        />
      </div>
    </div>
  );
}
