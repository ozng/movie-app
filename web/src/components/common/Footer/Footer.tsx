import FooterList from "./components/FooterList";
import { footer } from "@/static/footer";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="container py-12 flex justify-evenly">
        <FooterList title="Site map" list={footer.siteMap} />
        <FooterList title="Links" list={footer.links} />
        <FooterList title="Policies" list={footer.policies} />
      </div>
    </div>
  );
};

export default Footer;
