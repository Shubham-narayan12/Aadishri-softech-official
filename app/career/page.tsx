import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/career/Section1";

export default function Home(){
    return(
        <>
        <Layout >
            <PageHeader title="Career" current_page="career" />
            <Section1/>
        </Layout>
        </>
    )
}