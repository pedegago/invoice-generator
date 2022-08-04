import Seo from "../components/seo/Seo";
import Container from "../components/container/Container";
import Heading from "../components/heading/Heading";
import Options from "../components/options/Options";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import Upload from "../components/upload/Upload";
import Items from "../components/items/Items";
import Link from "../components/link/Link";
import Summary from "../components/summary/Summary";
import style from "../styles/pages/index.module.scss";

function Index() {
    return (
        <main>
            <Seo
                appName="LocalAdventures"
                domain="https://invoice-generator-phi.vercel.app"
                title="Free Invoice Template Generator"
                description="Create an invoice template for your business using HubSpot's free invoice template generator tool. Send the right billing document to your customers!"
                image="https://www.hubspot.com/hubfs/assets/hubspot.com/buzz/HubSpotOpenGraph.png"
            />
            <Container tag="section" className={style.title}>
                <Heading level="1">Invoice Template Generator</Heading>
                <p>
                    Fill in your business details in the invoice template below
                    to create a professional invoice for your customers.
                </p>
            </Container>
            <section className={style.editor}>
                <form className={style.container}>
                    <Options className={style.options} />
                    <div className={style.information}>
                        <div className={style.address}>
                            <Heading level="2">Invoice</Heading>
                            <Input required size="lg">
                                Your Company*
                            </Input>
                            <Input required size="sm">
                                Your First and Last Name*
                            </Input>
                            <Input required size="sm" type="url">
                                Company Website*
                            </Input>
                            <Input size="sm">Company Address</Input>
                            <Input size="sm">City, State ZIP</Input>
                            <Input size="sm">Country</Input>
                            <Input required size="sm">
                                Phone No.*
                            </Input>
                            <Input required size="sm">
                                Email Address*
                            </Input>
                            <div />
                            <Input size="lg">Client's Company</Input>
                            <Input size="sm">Client's Name</Input>
                            <Input size="sm">Client's Address</Input>
                            <Input size="sm">City, State ZIP</Input>
                            <Input size="sm">Country</Input>
                        </div>
                        <Upload className={style.upload} />
                        <table className={style.dates}>
                            <tbody>
                                <tr>
                                    <td>
                                        <Input defaultValue="Invoice No:" />
                                    </td>
                                    <td>
                                        <Input>####</Input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input defaultValue="Invoice Date:" />
                                    </td>
                                    <td>
                                        <Input
                                            type="date"
                                            size="sm"
                                            defaultValue={new Date()
                                                .toISOString()
                                                .slice(0, 10)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input defaultValue="Due Date:" />
                                    </td>
                                    <td>
                                        <Input
                                            type="date"
                                            size="sm"
                                            defaultValue={new Date()
                                                .toISOString()
                                                .slice(0, 10)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Items className={style.items} />
                    <Summary />
                    <p className={style.footer}>
                        This invoice was created using the HubSpot{" "}
                        <Link
                            href="https://www.hubspot.com/invoice-template-generator?submitted=true"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Invoice Template Generator
                        </Link>
                    </p>
                </form>
                <div className={style.container}>
                    <Button className={style.download}>Download Now</Button>
                </div>
            </section>
        </main>
    );
}

export default Index;
