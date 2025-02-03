const DynamicProductPage =async ({params,searchParams}) => {
    const productId = await params.productId;
    const searchParam = await searchParams
    console.log(searchParam);
    return (
        <div>
            <h1>Dynamic Product Page {productId}</h1>
        </div>
    );
};

export default DynamicProductPage;