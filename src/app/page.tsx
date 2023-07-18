import AppNav from "@/components/navbarComponents/AppNav"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* NavBar Section  */}
      <section>
        <AppNav />
      </section>
    </main>
  )
}
