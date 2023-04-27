type TProps = {
    params:{
        slug: string;
    };
}
export default function pantsPage ({params}:TProps) {
    return <h1>{params.slug} Pants us !</h1>
}