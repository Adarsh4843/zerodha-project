import PricingHero from "./PricingHero"
import Brokerage from "./Brokerage"
import OpenAccount from "../OpneAccount";

function PricingPage() {
    return (
        <>
        <PricingHero />
        <OpenAccount/>
        <Brokerage />
        </>
     );
}

export default PricingPage;