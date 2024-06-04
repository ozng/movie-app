import { footer } from "@/static/footer";
import FooterList from "./components/FooterList/FooterList";

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
