import Head from "next/head";

function Seo({ appName, domain, title, description, url, image }) {
    const fullTitle = `${title} | ${appName}`;
    const fullUrl = `${domain}${url ? `/${url}` : ""}`;
    const linealDescription = (description ?? "")
        .replace(/\n+/g, " ")
        .replace(/\"/g, "'")
        .replace(//g, "");
    const icon = `${domain}/images/icon-512.png`;
    const twitter = "@pedegago";

    const webSiteSchema = () => {
        return {
            __html: `{
                "@context": "http://schema.org",
                "@type": "WebSite",
                "name": "${appName}",
                "description": "${linealDescription}",
                "url": "${domain}",
                "image": "${icon}",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "${domain}/?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                },
                "author": {
                    "@type": "Corporation",
                    "name": "localadventures",
                    "brand": "localadventures",
                    "url": "https://www.localadventures.mx",
                    "email": "info@localadventures.com",
                    "logo": "${domain}/images/icon-512.png"
                }
            }`,
        };
    };

    const faqSchema = () => {
        return {
            __html: `{
                "@context": "https://schema.org/",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is an Invoice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "<p>An invoice, or sales invoices, is a billing document issued by a seller to a customer.</p><p>The document typically:</p><ul><li>Details the contact and billing information</li><li>Quantifies an itemized list of goods or services sold</li><li>Provides a clear total for the purchase</li><li>Defines any discounts or specific payment terms</li><li>Contains a unique invoice number and date</li></ul>"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is an Invoice Number?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "An invoice number is a unique number that you assign to each new invoice you create. These numbers are then used to organize and track each invoice you send."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How to Make an Invoice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "<ul><li>Include the word Invoice.</li><li>Assign a unique invoice number and date.</li><li>Provide your business name and contact information.</li><li>List out the details of the product(s) or service(s) you provided -- include quantity, rates, hours, etc.</li><li>Provide the name and contact information of the customer.</li><li>Highlight the subtotal.</li><li>Specify any payment details or a due date if necessary.</li></ul><p>While your invoice details will change slightly depending on whether you are providing a service or a product (e.g., billable hours and rate vs. quantity and cost), the above guidelines serve as best practices for creating a professional invoice.</p>"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How to Send an Invoice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "<p>When it comes to actually sending your invoice off to the customer, you have a couple of options:</p><ol><li>Send the invoice electronically via email or website.</li><li>Send the invoice via postal mail.</li><ol>"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What's the Difference Between a Bill and an Invoice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The term invoice is often adopted in business environments to define a payment request for goods or services purchased by a specific customer. Once the customer receives the invoice, they will typically refer to it as a bill that they now owe to the seller."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the Most Popular Types of Invoices?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "<ol><li>Standard Invoice</li><li>Shipping Invoice</li><li>Service Invoice</li><li>Pro-forma Invoice</li><li>Commercial Invoice</li><li>Recurring Invoice</li></ol>"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Where Can I Find Sample Invoices for Inspiration?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "<p>If you need help organizing all of the must-have information that comes on an invoice, download the <a href='https://offers.hubspot.com/free-invoice-templates?hubs_signup-url=www.hubspot.com/invoice-template-generator&hubs_signup-cta=free%20invoice%20templates&_ga=2.46676514.463072999.1637768330-1183024867.1628092740'>free invoice templates</a> above.</p>"
                        }
                    }
                ]
            }`.replace(/<[^>]*>?/gm, ""),
        };
    };

    return (
        <Head>
            {/* Standard SEO */}
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no"
            />
            <meta
                name="robots"
                content="index, follow max-image-preview:large"
            />
            <meta name="description" content={linealDescription} />
            <link rel="canonical" href={fullUrl} />
            <title>{fullTitle}</title>
            {/* Facebook OpenGraph */}
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_us" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={linealDescription} />
            <meta property="og:image" content={image ?? icon} />
            <meta property="og:site_name" content={appName} />
            {/* Twitter Cards */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:site" content={twitter} />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={linealDescription} />
            <meta name="twitter:image" content={image ?? icon} />
            {/* Structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={webSiteSchema()}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={faqSchema()}
            />
        </Head>
    );
}

export default Seo;
