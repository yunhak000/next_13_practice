import {notFound} from "next/navigation";

type TProps = {
    params:{
        slug: string;
    };
}
export default function pantsPage ({params}:TProps) {
    if (params.slug === "nothing") {
        notFound();
    }

    return <h1>{params.slug} Pants us !</h1>
}

export function generateStaticParams(){
    const products = ["pants", "skirt"];

    return products.map((product) => {return {slug:product}});
}
