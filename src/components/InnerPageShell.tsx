import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function InnerPageShell({ children }: { children: React.ReactNode }) {
  return <><Navbar />{children}<SiteFooter /></>;
}
