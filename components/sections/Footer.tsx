export default function Footer() {
  return (
    <footer className="bg-foreground px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-background mb-2">
            Iron Productions
          </p>
          <p className="text-sm text-white/40">Charlotte, NC</p>
        </div>

        <div className="flex flex-col md:items-end gap-1.5">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Iron Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
