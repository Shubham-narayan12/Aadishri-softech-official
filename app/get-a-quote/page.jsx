import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "../../components/sections/get-a-quote/section1";
import Section8 from "@/components/sections/home/Section8";

export default function Home() { 
    return(
        <>
        <Layout >
            <PageHeader title="Get a Qoute" current_page="Get a Qoute" />
            <Section1 />
            <Section8 />

        </Layout>
        </>
    );
}