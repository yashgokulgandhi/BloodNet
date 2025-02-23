import type React from "react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/nav-bar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Hospital, Droplet } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Wave Pattern Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.13 12 50 12c-10.271 0-15.362 1.222-24.629 4.928C15.24 19.342 14.195 20 12.959 20H0v-1.093c3.938-.027 7.754-.635 11.984-2.528C22.147 12.445 27.143 12 50 12c22.857 0 27.853.445 38.016 4.379 4.23 1.893 8.046 2.501 11.984 2.528V20h-9.632z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat-x",
          animation: "wave 20s linear infinite",
        }}
      />

      <NavBar />

      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">LifeStream Connect</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Bridging the gap between blood donors and hospitals. Making blood donation accessible and efficient through
            our innovative platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ActionCard
            title="For Blood Donors"
            description="Register as a donor and help save lives. Quick and easy donation process."
            buttonText="Start Donating"
            icon={<Droplet className="h-8 w-8 text-red-500" />}
            href="/donor/login"
          />
          <ActionCard
            title="For Hospitals"
            description="Access a network of verified donors and manage blood inventory efficiently."
            buttonText="Hospital Portal"
            icon={<Hospital className="h-8 w-8 text-blue-500" />}
            href="/hospital/login"
          />
        </div>

        {/* Login Dropdown */}
        <div className="fixed top-4 right-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-white text-blue-900 hover:bg-blue-50">Login</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <div className="p-2 space-y-2">
                <Button
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                  onClick={() => (window.location.href = "/donor/login")}
                >
                  Donor Login
                </Button>
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => (window.location.href = "/hospital/login")}
                >
                  Hospital Login
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      <style jsx global>{`
        @keyframes wave {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 0;
          }
        }
      `}</style>
    </main>
  )
}

function ActionCard({
  title,
  description,
  buttonText,
  icon,
  href,
}: {
  title: string
  description: string
  buttonText: string
  icon: React.ReactNode
  href: string
}) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition-all">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      <p className="text-blue-100 mb-6">{description}</p>
      <Button className="w-full bg-white text-blue-900 hover:bg-blue-50" onClick={() => (window.location.href = href)}>
        {buttonText}
      </Button>
    </div>
  )
}

