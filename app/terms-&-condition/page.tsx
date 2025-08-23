import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/terms & conditions/section1";


export default function Home(){
    return(
        <>
        <Layout >
            <PageHeader title="Our Terms & Conditions" current_page="Terms & Conditions" />
            <Section1 />
        </Layout>
        </>
    );
}