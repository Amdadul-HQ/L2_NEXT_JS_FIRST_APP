const DynamicProductPage =async ({params}) => {
    const productId = await params.productId
    return (
        <div>
            <h1>Dynamic Product Page {productId}</h1>
        </div>
    );
};

export default DynamicProductPage;